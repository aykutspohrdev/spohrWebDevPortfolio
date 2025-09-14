'use client';

/**
 * Accessibility Provider Component
 * Provides accessibility context and utilities throughout the application
 * Ensures WCAG 2.1 AA compliance and German BFSG/EAA requirements
 */

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import {
  getAccessibilityManager,
  AccessibilityManager,
  useAnnouncer,
  prefersReducedMotion,
  createReducedMotionMediaQuery,
  ACCESSIBILITY_LABELS_DE,
  type AriaLive,
} from '../lib/accessibility';

interface AccessibilityState {
  reducedMotion: boolean;
  highContrast: boolean;
  focusVisible: boolean;
  screenReaderOnly: boolean;
  fontSize: 'normal' | 'large' | 'larger';
}

interface AccessibilityContextValue extends AccessibilityState {
  manager: AccessibilityManager;
  announce: (message: string, priority?: AriaLive) => void;
  focusSection: (sectionId: string) => void;
  setReducedMotion: (enabled: boolean) => void;
  setHighContrast: (enabled: boolean) => void;
  setFontSize: (size: AccessibilityState['fontSize']) => void;
  labels: typeof ACCESSIBILITY_LABELS_DE;
}

const AccessibilityContext = createContext<AccessibilityContextValue | undefined>(undefined);

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

/**
 * Accessibility Provider Component
 */
export function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [state, setState] = useState<AccessibilityState>({
    reducedMotion: false,
    highContrast: false,
    focusVisible: true,
    screenReaderOnly: false,
    fontSize: 'normal',
  });

  const [manager] = useState(() => getAccessibilityManager());
  const { announce } = useAnnouncer();

  // Initialize accessibility preferences
  useEffect(() => {
    // Check for reduced motion preference
    const reducedMotion = prefersReducedMotion();

    // Check for high contrast preference
    const highContrast = typeof window !== 'undefined'
      ? window.matchMedia('(prefers-contrast: high)').matches
      : false;

    // Check for stored font size preference
    const storedFontSize = typeof window !== 'undefined'
      ? localStorage.getItem('accessibility-font-size') as AccessibilityState['fontSize']
      : null;

    setState(prev => ({
      ...prev,
      reducedMotion,
      highContrast,
      fontSize: storedFontSize && ['normal', 'large', 'larger'].includes(storedFontSize)
        ? storedFontSize
        : 'normal',
    }));

    // Apply initial font size if stored
    if (storedFontSize && ['normal', 'large', 'larger'].includes(storedFontSize)) {
      applyFontSize(storedFontSize as AccessibilityState['fontSize']);
    }
  }, []);

  // Set up media query listeners
  useEffect(() => {
    let cleanupReducedMotion: (() => void) | undefined;
    let cleanupHighContrast: (() => void) | undefined;

    if (typeof window !== 'undefined') {
      // Listen for reduced motion changes
      cleanupReducedMotion = createReducedMotionMediaQuery((matches) => {
        setState(prev => ({ ...prev, reducedMotion: matches }));

        if (matches) {
          announce('Reduzierte Bewegung aktiviert', 'polite');
        }
      });

      // Listen for high contrast changes
      const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
      const handleHighContrastChange = (e: MediaQueryListEvent) => {
        setState(prev => ({ ...prev, highContrast: e.matches }));

        if (e.matches) {
          announce('Hoher Kontrast aktiviert', 'polite');
        }
      };

      highContrastQuery.addEventListener('change', handleHighContrastChange);
      cleanupHighContrast = () => {
        highContrastQuery.removeEventListener('change', handleHighContrastChange);
      };
    }

    return () => {
      cleanupReducedMotion?.();
      cleanupHighContrast?.();
    };
  }, [announce]);

  // Apply accessibility classes to document
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;

    // Reduced motion
    if (state.reducedMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    // High contrast
    if (state.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Font size
    root.classList.remove('font-size-normal', 'font-size-large', 'font-size-larger');
    root.classList.add(`font-size-${state.fontSize}`);

    // Focus visible
    if (state.focusVisible) {
      root.classList.add('focus-visible-enabled');
    } else {
      root.classList.remove('focus-visible-enabled');
    }
  }, [state]);

  // Font size application utility
  const applyFontSize = useCallback((size: AccessibilityState['fontSize']) => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    const sizeMap = {
      normal: '16px',
      large: '18px',
      larger: '20px',
    };

    root.style.setProperty('--base-font-size', sizeMap[size]);
  }, []);

  // Accessibility control functions
  const setReducedMotion = useCallback((enabled: boolean) => {
    setState(prev => ({ ...prev, reducedMotion: enabled }));
    announce(
      enabled ? 'Animationen deaktiviert' : 'Animationen aktiviert',
      'polite'
    );
  }, [announce]);

  const setHighContrast = useCallback((enabled: boolean) => {
    setState(prev => ({ ...prev, highContrast: enabled }));
    announce(
      enabled ? 'Hoher Kontrast aktiviert' : 'Hoher Kontrast deaktiviert',
      'polite'
    );
  }, [announce]);

  const setFontSize = useCallback((size: AccessibilityState['fontSize']) => {
    setState(prev => ({ ...prev, fontSize: size }));
    applyFontSize(size);

    // Store preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('accessibility-font-size', size);
    }

    const sizeLabels = {
      normal: 'normale Schriftgröße',
      large: 'große Schriftgröße',
      larger: 'sehr große Schriftgröße',
    };

    announce(`${sizeLabels[size]} aktiviert`, 'polite');
  }, [applyFontSize, announce]);

  const focusSection = useCallback((sectionId: string) => {
    manager.focusSection(sectionId);
  }, [manager]);

  const contextValue: AccessibilityContextValue = {
    ...state,
    manager,
    announce,
    focusSection,
    setReducedMotion,
    setHighContrast,
    setFontSize,
    labels: ACCESSIBILITY_LABELS_DE,
  };

  return (
    <AccessibilityContext.Provider value={contextValue}>
      {children}
    </AccessibilityContext.Provider>
  );
}

/**
 * Hook to access accessibility context
 */
export function useAccessibility(): AccessibilityContextValue {
  const context = useContext(AccessibilityContext);

  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }

  return context;
}

/**
 * Accessibility Control Panel Component
 * Provides user controls for accessibility settings
 */
export function AccessibilityControlPanel() {
  const {
    reducedMotion,
    highContrast,
    fontSize,
    setReducedMotion,
    setHighContrast,
    setFontSize,
    labels,
  } = useAccessibility();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accessibility-controls">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="accessibility-toggle"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        aria-label="Barrierefreiheit-Einstellungen"
        title="Barrierefreiheit-Einstellungen öffnen"
      >
        <span aria-hidden="true">♿</span>
        <span className="sr-only">Barrierefreiheit</span>
      </button>

      {isOpen && (
        <div
          id="accessibility-panel"
          className="accessibility-panel"
          role="dialog"
          aria-labelledby="accessibility-panel-title"
        >
          <div className="panel-header">
            <h3 id="accessibility-panel-title">
              Barrierefreiheit-Einstellungen
            </h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={labels.closeMenu}
              className="close-button"
            >
              ✕
            </button>
          </div>

          <div className="panel-content">
            {/* Motion Settings */}
            <div className="control-group">
              <h4>Bewegung und Animation</h4>
              <label className="control-item">
                <input
                  type="checkbox"
                  checked={reducedMotion}
                  onChange={(e) => setReducedMotion(e.target.checked)}
                />
                <span>Animationen reduzieren</span>
              </label>
            </div>

            {/* Contrast Settings */}
            <div className="control-group">
              <h4>Kontrast</h4>
              <label className="control-item">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={(e) => setHighContrast(e.target.checked)}
                />
                <span>Hoher Kontrast</span>
              </label>
            </div>

            {/* Font Size Settings */}
            <div className="control-group">
              <h4>Schriftgröße</h4>
              <div className="radio-group">
                {(['normal', 'large', 'larger'] as const).map((size) => (
                  <label key={size} className="control-item">
                    <input
                      type="radio"
                      name="font-size"
                      value={size}
                      checked={fontSize === size}
                      onChange={() => setFontSize(size)}
                    />
                    <span>
                      {size === 'normal' && 'Normal'}
                      {size === 'large' && 'Groß'}
                      {size === 'larger' && 'Sehr groß'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="control-group">
              <h4>Schnellzugriff</h4>
              <div className="quick-actions">
                <button
                  type="button"
                  onClick={() => {
                    setReducedMotion(true);
                    setHighContrast(true);
                    setFontSize('large');
                  }}
                  className="quick-action-button"
                >
                  Alle Hilfen aktivieren
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setReducedMotion(false);
                    setHighContrast(false);
                    setFontSize('normal');
                  }}
                  className="quick-action-button"
                >
                  Standard zurücksetzen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Skip Navigation Links Component
 */
export function SkipNavigation() {
  return (
    <div className="skip-navigation">
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <a href="#navigation" className="skip-link">
        Zur Navigation springen
      </a>
      <a href="#footer" className="skip-link">
        Zum Footer springen
      </a>
    </div>
  );
}

/**
 * Focus Debug Component (for development)
 */
export function FocusDebug() {
  const [focusedElement, setFocusedElement] = useState<string>('');

  useEffect(() => {
    const handleFocus = () => {
      const activeElement = document.activeElement;
      if (activeElement) {
        const tagName = activeElement.tagName.toLowerCase();
        const id = activeElement.id ? `#${activeElement.id}` : '';
        const className = activeElement.className ? `.${activeElement.className.split(' ')[0]}` : '';
        setFocusedElement(`${tagName}${id}${className}`);
      }
    };

    document.addEventListener('focusin', handleFocus);
    return () => document.removeEventListener('focusin', handleFocus);
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-2 text-xs rounded z-50">
      Focus: {focusedElement || 'none'}
    </div>
  );
}

export default AccessibilityProvider;