/**
 * Accessibility Enhancement Utilities
 * Comprehensive accessibility support for WCAG 2.1 AA compliance
 * German BFSG/EAA compliance and best practices
 */

'use client';

import { useEffect, useRef, useCallback } from 'react';

// ARIA Live Region Types
export type AriaLive = 'off' | 'polite' | 'assertive';

// Focus Management Types
export interface FocusableElement {
  element: HTMLElement;
  tabIndex: number;
}

/**
 * Accessibility Manager Class
 * Centralized accessibility state management
 */
class AccessibilityManager {
  private announceRegion: HTMLElement | null = null;
  private urgentAnnounceRegion: HTMLElement | null = null;
  private focusHistory: HTMLElement[] = [];
  private focusTrapStack: HTMLElement[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeRegions();
    }
  }

  /**
   * Initialize ARIA live regions for announcements
   */
  private initializeRegions(): void {
    // Polite announcements
    this.announceRegion = document.getElementById('announcements');
    if (!this.announceRegion) {
      this.announceRegion = document.createElement('div');
      this.announceRegion.id = 'announcements';
      this.announceRegion.setAttribute('aria-live', 'polite');
      this.announceRegion.setAttribute('aria-atomic', 'true');
      this.announceRegion.className = 'sr-only';
      document.body.appendChild(this.announceRegion);
    }

    // Urgent announcements
    this.urgentAnnounceRegion = document.getElementById('urgent-announcements');
    if (!this.urgentAnnounceRegion) {
      this.urgentAnnounceRegion = document.createElement('div');
      this.urgentAnnounceRegion.id = 'urgent-announcements';
      this.urgentAnnounceRegion.setAttribute('aria-live', 'assertive');
      this.urgentAnnounceRegion.setAttribute('aria-atomic', 'true');
      this.urgentAnnounceRegion.className = 'sr-only';
      document.body.appendChild(this.urgentAnnounceRegion);
    }
  }

  /**
   * Announce message to screen readers
   */
  announce(message: string, priority: AriaLive = 'polite'): void {
    const region = priority === 'assertive' ? this.urgentAnnounceRegion : this.announceRegion;

    if (!region) {
      console.warn('Announcement region not found');
      return;
    }

    // Clear previous message first
    region.textContent = '';

    // Delay to ensure screen readers pick up the change
    requestAnimationFrame(() => {
      region.textContent = message;

      // Clear after announcement
      setTimeout(() => {
        if (region.textContent === message) {
          region.textContent = '';
        }
      }, 10000);
    });
  }

  /**
   * Store current focus for restoration later
   */
  storeFocus(): void {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement && activeElement !== document.body) {
      this.focusHistory.push(activeElement);
    }
  }

  /**
   * Restore previously stored focus
   */
  restoreFocus(): boolean {
    const previousFocus = this.focusHistory.pop();
    if (previousFocus && document.contains(previousFocus)) {
      previousFocus.focus();
      return true;
    }
    return false;
  }

  /**
   * Set up focus trap for modal/dialog
   */
  trapFocus(container: HTMLElement): () => void {
    this.focusTrapStack.push(container);
    const focusableElements = this.getFocusableElements(container);

    if (focusableElements.length === 0) {
      console.warn('No focusable elements found in focus trap container');
      return () => {};
    }

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    // Focus first element
    firstFocusable.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Return cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      this.focusTrapStack.pop();
    };
  }

  /**
   * Get all focusable elements within a container
   */
  getFocusableElements(container: HTMLElement): HTMLElement[] {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ');

    const elements = container.querySelectorAll(focusableSelectors) as NodeListOf<HTMLElement>;

    return Array.from(elements).filter(element => {
      // Check if element is visible
      const style = getComputedStyle(element);
      return style.display !== 'none' &&
             style.visibility !== 'hidden' &&
             element.offsetParent !== null;
    });
  }

  /**
   * Manage focus for section navigation
   */
  focusSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (!section) {
      console.warn(`Section with id "${sectionId}" not found`);
      return;
    }

    // Find the heading within the section
    const heading = section.querySelector('h1, h2, h3, h4, h5, h6') as HTMLElement;
    const targetElement = heading || section;

    // Make element focusable if it isn't already
    const originalTabIndex = targetElement.getAttribute('tabindex');
    if (!originalTabIndex) {
      targetElement.setAttribute('tabindex', '-1');
    }

    // Focus the element
    targetElement.focus({ preventScroll: true });

    // Restore original tabindex
    if (!originalTabIndex) {
      setTimeout(() => {
        targetElement.removeAttribute('tabindex');
      }, 100);
    }

    // Announce navigation to screen readers
    const sectionTitle = heading ? heading.textContent : sectionId;
    this.announce(`Navigiert zu ${sectionTitle}`);
  }
}

// Global accessibility manager instance
let accessibilityManager: AccessibilityManager | null = null;

export function getAccessibilityManager(): AccessibilityManager {
  if (!accessibilityManager) {
    accessibilityManager = new AccessibilityManager();
  }
  return accessibilityManager;
}

/**
 * Hook for managing focus restoration
 */
export function useFocusRestore() {
  const manager = getAccessibilityManager();

  const storeFocus = useCallback(() => {
    manager.storeFocus();
  }, [manager]);

  const restoreFocus = useCallback(() => {
    return manager.restoreFocus();
  }, [manager]);

  return { storeFocus, restoreFocus };
}

/**
 * Hook for focus trap management
 */
export function useFocusTrap(active: boolean = false) {
  const containerRef = useRef<HTMLElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const manager = getAccessibilityManager();

  useEffect(() => {
    if (active && containerRef.current) {
      manager.storeFocus();
      cleanupRef.current = manager.trapFocus(containerRef.current);
    }

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      if (active) {
        manager.restoreFocus();
      }
    };
  }, [active, manager]);

  return containerRef;
}

/**
 * Hook for screen reader announcements
 */
export function useAnnouncer() {
  const manager = getAccessibilityManager();

  const announce = useCallback((message: string, priority: AriaLive = 'polite') => {
    manager.announce(message, priority);
  }, [manager]);

  return { announce };
}

/**
 * Keyboard Navigation Utilities
 */
export const KEYBOARD_CODES = {
  ENTER: 'Enter',
  SPACE: ' ',
  ESCAPE: 'Escape',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  TAB: 'Tab',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
} as const;

/**
 * Hook for keyboard navigation handling
 */
export function useKeyboardNavigation(
  onNavigate?: (direction: 'up' | 'down' | 'left' | 'right' | 'home' | 'end') => void,
  onActivate?: () => void,
  onEscape?: () => void
) {
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      switch (event.key) {
        case KEYBOARD_CODES.ENTER:
        case KEYBOARD_CODES.SPACE:
          if (onActivate) {
            event.preventDefault();
            onActivate();
          }
          break;

        case KEYBOARD_CODES.ESCAPE:
          if (onEscape) {
            event.preventDefault();
            onEscape();
          }
          break;

        case KEYBOARD_CODES.ARROW_UP:
          if (onNavigate) {
            event.preventDefault();
            onNavigate('up');
          }
          break;

        case KEYBOARD_CODES.ARROW_DOWN:
          if (onNavigate) {
            event.preventDefault();
            onNavigate('down');
          }
          break;

        case KEYBOARD_CODES.ARROW_LEFT:
          if (onNavigate) {
            event.preventDefault();
            onNavigate('left');
          }
          break;

        case KEYBOARD_CODES.ARROW_RIGHT:
          if (onNavigate) {
            event.preventDefault();
            onNavigate('right');
          }
          break;

        case KEYBOARD_CODES.HOME:
          if (onNavigate) {
            event.preventDefault();
            onNavigate('home');
          }
          break;

        case KEYBOARD_CODES.END:
          if (onNavigate) {
            event.preventDefault();
            onNavigate('end');
          }
          break;
      }
    },
    [onNavigate, onActivate, onEscape]
  );

  return { handleKeyDown };
}

/**
 * ARIA Attributes Helpers
 */
export function createAriaAttributes(options: {
  label?: string;
  labelledBy?: string;
  describedBy?: string;
  expanded?: boolean;
  selected?: boolean;
  checked?: boolean;
  pressed?: boolean;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  live?: AriaLive;
  atomic?: boolean;
  relevant?: string;
  busy?: boolean;
  controls?: string;
  owns?: string;
  flowTo?: string;
  hasPopup?: 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  level?: number;
  posInSet?: number;
  setSize?: number;
  current?: 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
}): Record<string, string | number | boolean | undefined> {
  const attrs: Record<string, string | number | boolean | undefined> = {};

  if (options.label) attrs['aria-label'] = options.label;
  if (options.labelledBy) attrs['aria-labelledby'] = options.labelledBy;
  if (options.describedBy) attrs['aria-describedby'] = options.describedBy;
  if (options.expanded !== undefined) attrs['aria-expanded'] = options.expanded;
  if (options.selected !== undefined) attrs['aria-selected'] = options.selected;
  if (options.checked !== undefined) attrs['aria-checked'] = options.checked;
  if (options.pressed !== undefined) attrs['aria-pressed'] = options.pressed;
  if (options.disabled !== undefined) attrs['aria-disabled'] = options.disabled;
  if (options.required !== undefined) attrs['aria-required'] = options.required;
  if (options.invalid !== undefined) attrs['aria-invalid'] = options.invalid;
  if (options.live) attrs['aria-live'] = options.live;
  if (options.atomic !== undefined) attrs['aria-atomic'] = options.atomic;
  if (options.relevant) attrs['aria-relevant'] = options.relevant;
  if (options.busy !== undefined) attrs['aria-busy'] = options.busy;
  if (options.controls) attrs['aria-controls'] = options.controls;
  if (options.owns) attrs['aria-owns'] = options.owns;
  if (options.flowTo) attrs['aria-flowto'] = options.flowTo;
  if (options.hasPopup) attrs['aria-haspopup'] = options.hasPopup;
  if (options.level) attrs['aria-level'] = options.level;
  if (options.posInSet) attrs['aria-posinset'] = options.posInSet;
  if (options.setSize) attrs['aria-setsize'] = options.setSize;
  if (options.current) attrs['aria-current'] = options.current;

  return attrs;
}

/**
 * Skip Link Component Utils
 */
export function createSkipLink(targetId: string, text: string): HTMLAnchorElement {
  const skipLink = document.createElement('a');
  skipLink.href = `#${targetId}`;
  skipLink.textContent = text;
  skipLink.className = 'skip-link sr-only focus:not-sr-only fixed top-4 left-4 z-50 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-4 py-2 rounded-md border-2 border-primary-600 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 transition-all duration-200';

  return skipLink;
}

/**
 * Form Accessibility Helpers
 */
export interface FormFieldAccessibility {
  id: string;
  labelId: string;
  errorId?: string;
  descriptionId?: string;
  required?: boolean;
  invalid?: boolean;
}

export function createFormFieldIds(baseId: string): FormFieldAccessibility {
  return {
    id: baseId,
    labelId: `${baseId}-label`,
    errorId: `${baseId}-error`,
    descriptionId: `${baseId}-description`,
  };
}

export function getFormFieldProps(
  accessibility: FormFieldAccessibility,
  hasError: boolean = false,
  hasDescription: boolean = false
) {
  const describedBy = [];

  if (hasError && accessibility.errorId) {
    describedBy.push(accessibility.errorId);
  }

  if (hasDescription && accessibility.descriptionId) {
    describedBy.push(accessibility.descriptionId);
  }

  return {
    id: accessibility.id,
    'aria-labelledby': accessibility.labelId,
    'aria-describedby': describedBy.length > 0 ? describedBy.join(' ') : undefined,
    'aria-required': accessibility.required,
    'aria-invalid': hasError,
  };
}

/**
 * Color Contrast Utilities
 */
export function getContrastRatio(foreground: string, background: string): number {
  // This is a simplified implementation
  // In a real application, you'd want a more robust color parsing library

  const getLuminance = (hex: string): number => {
    // Convert hex to RGB
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    // Apply gamma correction
    const toLinear = (c: number) => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

    const rLinear = toLinear(r);
    const gLinear = toLinear(g);
    const bLinear = toLinear(b);

    // Calculate relative luminance
    return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
  };

  const fgLuminance = getLuminance(foreground);
  const bgLuminance = getLuminance(background);

  const lighter = Math.max(fgLuminance, bgLuminance);
  const darker = Math.min(fgLuminance, bgLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

export function meetsContrastRequirement(
  foreground: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA',
  isLargeText: boolean = false
): boolean {
  const ratio = getContrastRatio(foreground, background);

  if (level === 'AAA') {
    return isLargeText ? ratio >= 4.5 : ratio >= 7.0;
  }

  // AA level
  return isLargeText ? ratio >= 3.0 : ratio >= 4.5;
}

/**
 * Motion and Animation Utilities
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function createReducedMotionMediaQuery(callback: (matches: boolean) => void): () => void {
  if (typeof window === 'undefined') return () => {};

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const handler = (e: MediaQueryListEvent) => callback(e.matches);

  mediaQuery.addEventListener('change', handler);

  // Call immediately with current value
  callback(mediaQuery.matches);

  return () => mediaQuery.removeEventListener('change', handler);
}

/**
 * Section Focus Management for Fragment Navigation
 */
export function focusSectionHeading(sectionId: string): void {
  const manager = getAccessibilityManager();
  manager.focusSection(sectionId);
}

/**
 * Export accessibility manager for direct use
 */
export { AccessibilityManager };

/**
 * German Accessibility Text Constants
 */
export const ACCESSIBILITY_LABELS_DE = {
  skipToMain: 'Zum Hauptinhalt springen',
  skipToNavigation: 'Zur Navigation springen',
  skipToFooter: 'Zum Footer springen',
  openMenu: 'Menü öffnen',
  closeMenu: 'Menü schließen',
  toggleTheme: 'Theme wechseln',
  loading: 'Wird geladen...',
  error: 'Fehler aufgetreten',
  success: 'Erfolgreich',
  required: 'Pflichtfeld',
  optional: 'Optional',
  expandSection: 'Bereich erweitern',
  collapseSection: 'Bereich einklappen',
  nextPage: 'Nächste Seite',
  previousPage: 'Vorherige Seite',
  currentPage: 'Aktuelle Seite',
  sortBy: 'Sortieren nach',
  filterBy: 'Filtern nach',
  search: 'Suchen',
  clearSearch: 'Suche löschen',
  noResults: 'Keine Ergebnisse gefunden',
  resultsFound: (count: number) => `${count} Ergebnisse gefunden`,
} as const;