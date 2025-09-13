/**
 * Theme Management System
 * Implements dark/light mode with localStorage persistence and system preference detection
 * Based on research findings for accessibility compliance (BFSG/EAA + WCAG 2.1 AA)
 */

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

export interface ThemeState {
  current: ResolvedTheme;
  preference: Theme;
  systemPreference: ResolvedTheme;
  isSystemSupported: boolean;
}

export interface ThemeContextValue extends ThemeState {
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const THEME_STORAGE_KEY = 'spohr-portfolio-theme';
const THEME_ATTRIBUTE = 'data-theme';

/**
 * Detects system color scheme preference
 */
export function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Checks if system theme detection is supported
 */
export function isSystemThemeSupported(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia !== undefined;
}

/**
 * Gets stored theme preference from localStorage
 */
export function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      return stored as Theme;
    }
  } catch (error) {
    console.warn('Failed to read theme preference from localStorage:', error);
  }

  return null;
}

/**
 * Stores theme preference in localStorage
 */
export function storeTheme(theme: Theme): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.warn('Failed to store theme preference in localStorage:', error);
  }
}

/**
 * Resolves theme preference to actual theme
 */
export function resolveTheme(preference: Theme): ResolvedTheme {
  if (preference === 'system') {
    return getSystemTheme();
  }
  return preference;
}

/**
 * Applies theme to document
 */
export function applyTheme(theme: ResolvedTheme): void {
  if (typeof document === 'undefined') {
    return;
  }

  // Remove existing theme attributes
  document.documentElement.removeAttribute(THEME_ATTRIBUTE);
  document.documentElement.classList.remove('light', 'dark');

  // Apply new theme
  document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
  document.documentElement.classList.add(theme);

  // Update meta theme-color for mobile browsers
  updateMetaThemeColor(theme);
}

/**
 * Updates meta theme-color for mobile browsers
 */
function updateMetaThemeColor(theme: ResolvedTheme): void {
  if (typeof document === 'undefined') {
    return;
  }

  let metaThemeColor = document.querySelector('meta[name="theme-color"]');

  if (!metaThemeColor) {
    metaThemeColor = document.createElement('meta');
    metaThemeColor.setAttribute('name', 'theme-color');
    document.head.appendChild(metaThemeColor);
  }

  // Set appropriate theme color based on design tokens
  const color = theme === 'dark' ? '#0a0a0a' : '#ffffff';
  metaThemeColor.setAttribute('content', color);
}

/**
 * Creates system theme change listener
 */
export function createSystemThemeListener(callback: (theme: ResolvedTheme) => void): (() => void) {
  if (!isSystemThemeSupported()) {
    return () => {};
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const listener = (e: MediaQueryListEvent) => {
    callback(e.matches ? 'dark' : 'light');
  };

  // Modern addEventListener approach
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }

  // Fallback for older browsers
  if (mediaQuery.addListener) {
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }

  return () => {};
}

/**
 * Gets initial theme state for hydration
 */
export function getInitialThemeState(): ThemeState {
  const systemSupported = isSystemThemeSupported();
  const systemPreference = getSystemTheme();
  const storedPreference = getStoredTheme();

  // Determine preference: stored -> system -> light
  const preference: Theme = storedPreference || (systemSupported ? 'system' : 'light');
  const current = resolveTheme(preference);

  return {
    current,
    preference,
    systemPreference,
    isSystemSupported: systemSupported,
  };
}

/**
 * Theme toggle utility
 */
export function getNextTheme(currentTheme: ResolvedTheme): Theme {
  return currentTheme === 'light' ? 'dark' : 'light';
}

/**
 * Initialize theme on app startup
 * Should be called as early as possible to prevent flash
 */
export function initializeTheme(): ThemeState {
  const state = getInitialThemeState();
  applyTheme(state.current);
  return state;
}

/**
 * Theme script for preventing flash of unstyled content
 * This should be injected inline in the document head
 */
export const themeInitScript = `
(function() {
  try {
    var theme = localStorage.getItem('${THEME_STORAGE_KEY}');
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var resolved = theme === 'system' ? (systemDark ? 'dark' : 'light') : theme || 'light';

    document.documentElement.setAttribute('${THEME_ATTRIBUTE}', resolved);
    document.documentElement.classList.add(resolved);

    var metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', resolved === 'dark' ? '#0a0a0a' : '#ffffff');
  } catch (e) {
    console.warn('Theme initialization failed:', e);
  }
})();
`;

/**
 * Utility for components to get theme-aware CSS classes
 */
export function getThemeClasses(theme: ResolvedTheme, baseClasses: string = ''): string {
  const themeClass = theme === 'dark' ? 'dark' : 'light';
  return `${baseClasses} ${themeClass}`.trim();
}

/**
 * Hook for detecting if user prefers reduced motion
 * Important for accessibility compliance
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Hook for detecting high contrast preference
 * Important for accessibility compliance
 */
export function prefersHighContrast(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia('(prefers-contrast: high)').matches;
}