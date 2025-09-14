/**
 * Fragment Navigation Utilities
 * Implements URL fragment navigation with accessibility and smooth scrolling
 * Based on research findings for Next.js fragment navigation patterns
 */

'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export interface SectionConfig {
  id: string;
  title: string;
  offsetTop?: number;
}

export interface NavigationState {
  activeSection: string;
  isNavigating: boolean;
  sections: SectionConfig[];
}

interface ScrollToOptions {
  behavior?: ScrollBehavior;
  offset?: number;
  updateHistory?: boolean;
  focus?: boolean;
}

const DEFAULT_OFFSET = 80; // Account for fixed header
const SCROLL_THRESHOLD = 100; // Pixel threshold for section detection

/**
 * Smooth scroll to element with accessibility focus management
 */
export function scrollToSection(
  sectionId: string,
  options: ScrollToOptions = {}
): Promise<void> {
  return new Promise((resolve) => {
    const {
      behavior = 'smooth',
      offset = DEFAULT_OFFSET,
      updateHistory = true,
      focus = true,
    } = options;

    const element = document.getElementById(sectionId);

    if (!element) {
      console.warn(`Section with id "${sectionId}" not found`);
      resolve();
      return;
    }

    const elementPosition = element.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;

    // Handle instant scrolling
    if (behavior === 'auto' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, elementPosition);

      if (focus) {
        focusSection(element, sectionId);
      }

      if (updateHistory) {
        updateUrl(sectionId);
      }

      resolve();
      return;
    }

    // Smooth scrolling implementation
    const duration = Math.min(Math.abs(distance) / 2, 1000); // Max 1 second
    let startTime: number | null = null;

    function animateScroll(currentTime: number) {
      if (startTime === null) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function (ease-out cubic)
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentPosition = startPosition + (distance * ease);

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        if (focus) {
          focusSection(element, sectionId);
        }

        if (updateHistory) {
          updateUrl(sectionId);
        }

        resolve();
      }
    }

    requestAnimationFrame(animateScroll);
  });
}

/**
 * Focus management for accessibility using AccessibilityManager
 */
function focusSection(element: HTMLElement, sectionId: string): void {
  // Import accessibility manager dynamically to avoid SSR issues
  if (typeof window !== 'undefined') {
    import('./accessibility').then(({ getAccessibilityManager }) => {
      const manager = getAccessibilityManager();
      manager.focusSection(sectionId);
    });
  }
}

// Navigation announcements are now handled by AccessibilityManager

/**
 * Update URL with fragment
 */
function updateUrl(sectionId: string): void {
  const newUrl = `${window.location.pathname}#${sectionId}`;
  window.history.replaceState(null, '', newUrl);
}

/**
 * Get current fragment from URL
 */
export function getCurrentFragment(): string {
  if (typeof window === 'undefined') {
    return '';
  }

  return window.location.hash.replace('#', '');
}

/**
 * Handle initial fragment navigation on page load
 */
export function handleInitialFragment(sections: SectionConfig[]): void {
  const fragment = getCurrentFragment();

  if (fragment && sections.some(s => s.id === fragment)) {
    // Delay to ensure page is fully loaded
    setTimeout(() => {
      scrollToSection(fragment, { behavior: 'auto' });
    }, 100);
  }
}

/**
 * Create section observer for active section detection
 */
export function createSectionObserver(
  sectionIds: string[],
  callback: (activeSection: string) => void,
  options?: IntersectionObserverInit
): (() => void) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0.1,
  };

  const observerOptions = { ...defaultOptions, ...options };

  const observer = new IntersectionObserver((entries) => {
    // Find the most visible section
    let maxVisibility = 0;
    let activeSection = '';

    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > maxVisibility) {
        maxVisibility = entry.intersectionRatio;
        activeSection = entry.target.id;
      }
    });

    // Fallback: if no section is intersecting, find the closest one
    if (!activeSection && entries.length > 0) {
      const scrollPosition = window.pageYOffset + SCROLL_THRESHOLD;
      let closestSection = '';
      let closestDistance = Infinity;

      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          const distance = Math.abs(scrollPosition - elementTop);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = sectionId;
          }
        }
      });

      activeSection = closestSection;
    }

    if (activeSection) {
      callback(activeSection);
    }
  }, observerOptions);

  // Observe all sections
  sectionIds.forEach((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }
  });

  // Return cleanup function
  return () => observer.disconnect();
}

/**
 * Custom hook for fragment navigation
 */
export function useFragmentNavigation(sections: SectionConfig[]) {
  const [state, setState] = useState<NavigationState>({
    activeSection: '',
    isNavigating: false,
    sections,
  });

  const router = useRouter();
  const pathname = usePathname();
  const cleanupRef = useRef<(() => void) | null>(null);

  // Initialize fragment handling
  useEffect(() => {
    handleInitialFragment(sections);
  }, [sections]);

  // Set up intersection observer
  useEffect(() => {
    const sectionIds = sections.map(s => s.id);

    cleanupRef.current = createSectionObserver(
      sectionIds,
      (activeSection) => {
        setState(prev => ({ ...prev, activeSection }));

        // Update URL if not already updated
        const currentFragment = getCurrentFragment();
        if (currentFragment !== activeSection) {
          updateUrl(activeSection);
        }
      }
    );

    return () => {
      cleanupRef.current?.();
    };
  }, [sections]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const fragment = getCurrentFragment();
      if (fragment && sections.some(s => s.id === fragment)) {
        scrollToSection(fragment, {
          behavior: 'smooth',
          updateHistory: false
        });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [sections]);

  // Navigation function
  const navigateToSection = useCallback(async (sectionId: string) => {
    if (!sections.some(s => s.id === sectionId)) {
      console.warn(`Section "${sectionId}" not found in sections config`);
      return;
    }

    setState(prev => ({ ...prev, isNavigating: true }));

    try {
      await scrollToSection(sectionId, {
        behavior: 'smooth',
        offset: DEFAULT_OFFSET,
        updateHistory: true,
        focus: true,
      });
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setState(prev => ({ ...prev, isNavigating: false }));
    }
  }, [sections]);

  return {
    ...state,
    navigateToSection,
  };
}

/**
 * Create navigation items from section config
 */
export function createNavigationItems(sections: SectionConfig[]): Array<{
  id: string;
  title: string;
  href: string;
  ariaLabel?: string;
}> {
  return sections.map(section => ({
    id: section.id,
    title: section.title,
    href: `#${section.id}`,
    ariaLabel: `Zu ${section.title} navigieren`,
  }));
}

/**
 * Check if smooth scrolling is supported and enabled
 */
export function isSmoothScrollSupported(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false;
  }

  // Check for CSS smooth scrolling support
  return 'scrollBehavior' in document.documentElement.style;
}

/**
 * Get section element with error handling
 */
export function getSectionElement(sectionId: string): HTMLElement | null {
  if (typeof document === 'undefined') {
    return null;
  }

  return document.getElementById(sectionId);
}

/**
 * Calculate section visibility percentage
 */
export function getSectionVisibility(sectionId: string): number {
  const element = getSectionElement(sectionId);
  if (!element) return 0;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate how much of the section is visible
  const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  const totalHeight = rect.height;

  return totalHeight > 0 ? Math.max(0, visibleHeight / totalHeight) : 0;
}

/**
 * Debounce utility for scroll events
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}