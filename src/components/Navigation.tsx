'use client';

/**
 * Responsive Navigation Component with Fragment Navigation
 * Implements accessibility-compliant navigation with fragment link support
 * Follows WCAG 2.1 AA standards for German compliance (BFSG/EAA)
 * Integrated with fragment navigation system for smooth scrolling
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useTheme, ThemeToggle } from './ThemeProvider';
import {
  useFragmentNavigation,
  createNavigationItems,
  SectionConfig
} from '../lib/navigation';

export interface NavigationItem {
  id: string;
  title: string;
  href: string;
  ariaLabel?: string;
}

interface NavigationProps {
  className?: string;
  logoText?: string;
  logoHref?: string;
}

/**
 * Portfolio sections configuration
 */
const PORTFOLIO_SECTIONS: SectionConfig[] = [
  { id: 'hero', title: 'Start' },
  { id: 'services', title: 'Services' },
  { id: 'key-results', title: 'Erfolge' },
  { id: 'portfolio', title: 'Portfolio' },
  { id: 'pricing', title: 'Preise' },
  { id: 'process', title: 'Vorgehen' },
  { id: 'testimonials', title: 'Referenzen' },
  { id: 'about', title: 'Über mich' },
  { id: 'faq', title: 'FAQ' },
  { id: 'contact', title: 'Kontakt' },
];

/**
 * Main Navigation Component with Fragment Navigation
 * Responsive navigation with mobile hamburger menu and accessibility features
 */
export function Navigation({
  className = '',
  logoText = 'Aykut Spohr',
  logoHref = '/'
}: NavigationProps): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  // Fragment navigation hook
  const { activeSection, navigateToSection } = useFragmentNavigation(PORTFOLIO_SECTIONS);

  // Create navigation items from sections
  const navigationItems = createNavigationItems(PORTFOLIO_SECTIONS);

  // Handle scroll effect for navigation styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu toggle
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
        hamburgerButtonRef.current?.focus();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !hamburgerButtonRef.current?.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Focus trap for mobile menu accessibility
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const focusableElements = mobileMenuRef.current?.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements || focusableElements.length === 0) return;

    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
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

    document.addEventListener('keydown', handleTabKey);
    firstFocusable.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
        }
        ${className}
      `.trim()}
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href={logoHref}
              className="
                text-xl lg:text-2xl font-bold
                text-neutral-900 dark:text-white
                hover:text-primary-600 dark:hover:text-primary-400
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2
                focus:ring-offset-white dark:focus:ring-offset-neutral-900
                rounded-sm
              "
              aria-label={`${logoText} - Zur Startseite`}
            >
              {logoText}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="flex space-x-8" role="menubar">
              {navigationItems.map((item) => (
                <li key={item.id} role="none">
                  <NavigationLink
                    item={item}
                    isActive={activeSection === item.id}
                    onNavigate={navigateToSection}
                    onClick={closeMobileMenu}
                    role="menuitem"
                  />
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}
            <ThemeToggle showLabel={false} className="ml-4" />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle showLabel={false} />
            <button
              ref={hamburgerButtonRef}
              type="button"
              onClick={toggleMobileMenu}
              className="
                inline-flex items-center justify-center
                min-w-[44px] min-h-[44px]
                rounded-md
                text-neutral-500 dark:text-neutral-400
                hover:text-neutral-900 dark:hover:text-white
                hover:bg-neutral-100 dark:hover:bg-neutral-800
                focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2
                focus:ring-offset-white dark:focus:ring-offset-neutral-900
                transition-colors duration-200
              "
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              <HamburgerIcon isOpen={isMobileMenuOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`
          lg:hidden
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
          }
          bg-white dark:bg-neutral-900
          border-t border-neutral-200 dark:border-neutral-700
          shadow-lg
        `.trim()}
        role="menu"
        aria-label="Mobile Navigation"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationItems.map((item) => (
            <NavigationLink
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              onNavigate={navigateToSection}
              onClick={closeMobileMenu}
              mobile
              role="menuitem"
            />
          ))}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
          style={{ zIndex: -1 }}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

/**
 * Navigation Link Component with Fragment Navigation
 * Handles both desktop and mobile navigation links with smooth scrolling
 */
interface NavigationLinkProps {
  item: NavigationItem;
  isActive: boolean;
  onNavigate: (sectionId: string) => Promise<void>;
  onClick: () => void;
  mobile?: boolean;
  role?: string;
}

function NavigationLink({
  item,
  isActive,
  onNavigate,
  onClick,
  mobile = false,
  role = 'menuitem'
}: NavigationLinkProps): JSX.Element {

  // Handle navigation click
  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      // Close mobile menu
      onClick();

      // Navigate to section with smooth scrolling
      await onNavigate(item.id);
    },
    [item.id, onNavigate, onClick]
  );
  const baseClasses = `
    font-medium transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2
    focus:ring-offset-white dark:focus:ring-offset-neutral-900
  `;

  const desktopClasses = `
    ${baseClasses}
    px-3 py-2 rounded-sm text-sm
    ${isActive
      ? 'text-primary-600 dark:text-primary-400'
      : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400'
    }
  `;

  const mobileClasses = `
    ${baseClasses}
    block px-3 py-2 rounded-md text-base
    ${isActive
      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-primary-600 dark:hover:text-primary-400'
    }
  `;

  return (
    <a
      href={item.href}
      className={mobile ? mobileClasses : desktopClasses}
      onClick={handleClick}
      role={role}
      aria-label={item.ariaLabel || `Zu ${item.title} springen`}
      aria-current={isActive ? 'location' : undefined}
    >
      {item.title}
    </a>
  );
}

/**
 * Hamburger Icon Component
 * Animated hamburger menu icon
 */
interface HamburgerIconProps {
  isOpen: boolean;
}

function HamburgerIcon({ isOpen }: HamburgerIconProps): JSX.Element {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center">
      <div
        className={`
          w-5 h-0.5 bg-current rounded-full
          transform transition-all duration-300
          ${isOpen ? 'rotate-45 translate-y-1.5' : ''}
        `}
      />
      <div
        className={`
          w-5 h-0.5 bg-current rounded-full mt-1
          transition-opacity duration-300
          ${isOpen ? 'opacity-0' : 'opacity-100'}
        `}
      />
      <div
        className={`
          w-5 h-0.5 bg-current rounded-full mt-1
          transform transition-all duration-300
          ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}
        `}
      />
    </div>
  );
}

/**
 * Skip Navigation Link
 * Accessibility feature for keyboard users
 */
export function SkipNavigation(): JSX.Element {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        fixed top-4 left-4 z-[1600]
        bg-white dark:bg-neutral-900
        text-neutral-900 dark:text-white
        px-4 py-2 rounded-md
        border-2 border-primary-600
        font-medium text-sm
        focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2
        transition-all duration-200
      "
    >
      Zum Hauptinhalt springen
    </a>
  );
}

export default Navigation;