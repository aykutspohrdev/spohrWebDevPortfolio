'use client';

/**
 * Theme Provider Component
 * Provides theme context and manages theme state across the application
 * Implements WCAG 2.1 AA accessibility requirements with reduced motion support
 */

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import {
  type Theme,
  type ResolvedTheme,
  type ThemeState,
  type ThemeContextValue,
  getInitialThemeState,
  applyTheme,
  storeTheme,
  resolveTheme,
  createSystemThemeListener,
  getNextTheme,
  prefersReducedMotion,
  prefersHighContrast,
} from '@/lib/theme';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  attribute?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

/**
 * Theme Provider Component
 * Manages application theme state and persistence
 */
export function ThemeProvider({
  children,
  defaultTheme = 'system',
  enableSystem = true,
  disableTransitionOnChange = false,
}: ThemeProviderProps): JSX.Element {
  const [state, setState] = useState<ThemeState>(() => ({
    current: 'light',
    preference: defaultTheme,
    systemPreference: 'light',
    isSystemSupported: false,
  }));

  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const initialState = getInitialThemeState();
    setState(initialState);
    setMounted(true);
  }, []);

  // Set up system theme listener
  useEffect(() => {
    if (!enableSystem || !state.isSystemSupported) {
      return;
    }

    const cleanup = createSystemThemeListener((systemTheme: ResolvedTheme) => {
      setState((prevState) => {
        const newState = {
          ...prevState,
          systemPreference: systemTheme,
          current: prevState.preference === 'system' ? systemTheme : prevState.current,
        };

        // Apply theme if user preference is system
        if (prevState.preference === 'system') {
          applyTheme(systemTheme);
        }

        return newState;
      });
    });

    return cleanup;
  }, [enableSystem, state.isSystemSupported]);

  // Theme setter function
  const setTheme = useCallback((theme: Theme) => {
    // Disable transitions during theme change if requested or user prefers reduced motion
    let transitionDisabled = disableTransitionOnChange || prefersReducedMotion();

    if (transitionDisabled) {
      const css = document.createElement('style');
      css.appendChild(
        document.createTextNode(
          '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
        )
      );
      document.head.appendChild(css);

      // Re-enable transitions after theme change
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.head.removeChild(css);
        });
      });
    }

    const resolvedTheme = resolveTheme(theme);

    setState((prevState) => ({
      ...prevState,
      preference: theme,
      current: resolvedTheme,
    }));

    storeTheme(theme);
    applyTheme(resolvedTheme);

    // Announce theme change to screen readers
    announceThemeChange(resolvedTheme);
  }, [disableTransitionOnChange]);

  // Theme toggle function
  const toggleTheme = useCallback(() => {
    const nextTheme = getNextTheme(state.current);
    setTheme(nextTheme);
  }, [state.current, setTheme]);

  // Announce theme change to screen readers for accessibility
  const announceThemeChange = useCallback((theme: ResolvedTheme) => {
    const announcement = theme === 'dark'
      ? 'Dunkles Theme aktiviert'
      : 'Helles Theme aktiviert';

    // Create temporary announcement element
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.setAttribute('class', 'sr-only');
    announcer.textContent = announcement;

    document.body.appendChild(announcer);

    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  }, []);

  const contextValue: ThemeContextValue = {
    ...state,
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {/* Don't render content until mounted to prevent hydration mismatch */}
      {!mounted ? (
        <div style={{ visibility: 'hidden' }}>
          {children}
        </div>
      ) : (
        children
      )}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context
 * @throws Error if used outside ThemeProvider
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

/**
 * Theme Toggle Button Component
 * Accessible button for switching between light/dark themes
 */
interface ThemeToggleProps {
  className?: string;
  children?: React.ReactNode;
  showLabel?: boolean;
}

export function ThemeToggle({
  className = '',
  children,
  showLabel = true
}: ThemeToggleProps): JSX.Element {
  const context = useContext(ThemeContext);

  // Fallback if context is not available (during SSR or before mount)
  if (!context) {
    return (
      <div className={`min-w-[44px] min-h-[44px] ${className}`} style={{ visibility: 'hidden' }}>
        <span>🌙</span>
      </div>
    );
  }

  const { current, toggleTheme } = context;

  const isDark = current === 'dark';
  const label = isDark ? 'Zu hellem Theme wechseln' : 'Zu dunklem Theme wechseln';
  const icon = isDark ? '☀️' : '🌙';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`
        inline-flex items-center justify-center
        min-w-[44px] min-h-[44px]
        rounded-lg
        border-2 border-transparent
        bg-neutral-100 hover:bg-neutral-200
        dark:bg-neutral-800 dark:hover:bg-neutral-700
        text-neutral-900 dark:text-neutral-100
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2
        focus:ring-offset-white dark:focus:ring-offset-neutral-900
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `.trim()}
      aria-label={label}
      title={label}
    >
      {children || (
        <>
          <span className="text-lg" aria-hidden="true">
            {icon}
          </span>
          {showLabel && (
            <span className="ml-2 text-sm font-medium">
              {isDark ? 'Hell' : 'Dunkel'}
            </span>
          )}
        </>
      )}
    </button>
  );
}

/**
 * System Theme Indicator
 * Shows current system preference (for debugging)
 */
export function SystemThemeIndicator(): JSX.Element | null {
  const { systemPreference, isSystemSupported, preference } = useTheme();

  if (!isSystemSupported || preference !== 'system') {
    return null;
  }

  return (
    <div className="text-xs text-neutral-500 dark:text-neutral-400">
      System: {systemPreference}
    </div>
  );
}

/**
 * Accessibility Helper Hook
 * Provides accessibility-related theme information
 */
export function useAccessibilityPreferences() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    setHighContrast(prefersHighContrast());

    // Listen for changes in accessibility preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) => setHighContrast(e.matches);

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  return {
    prefersReducedMotion: reducedMotion,
    prefersHighContrast: highContrast,
  };
}

export default ThemeProvider;