/**
 * Layout Wrapper Component
 * Main layout structure with navigation, accessibility features, and responsive design
 * Implements German accessibility compliance (BFSG/EAA + WCAG 2.1 AA)
 */

import React from 'react';
import Navigation, { SkipNavigation, type NavigationItem } from './Navigation';
import { ThemeProvider } from './ThemeProvider';

interface LayoutProps {
  children: React.ReactNode;
  navigationItems?: NavigationItem[];
  currentSection?: string;
  className?: string;
  showNavigation?: boolean;
  showSkipNav?: boolean;
}

/**
 * Main Layout Wrapper
 * Provides consistent structure across all pages with accessibility features
 */
export function Layout({
  children,
  navigationItems = [],
  currentSection = '',
  className = '',
  showNavigation = true,
  showSkipNav = true,
}: LayoutProps): JSX.Element {
  return (
    <ThemeProvider>
      <div
        className={`min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-200 ${className}`}
        lang="de"
      >
        {/* Skip Navigation for Accessibility */}
        {showSkipNav && <SkipNavigation />}

        {/* Main Navigation */}
        {showNavigation && (
          <Navigation
            items={navigationItems}
            currentSection={currentSection}
          />
        )}

        {/* Main Content Area */}
        <main
          id="main-content"
          className={showNavigation ? 'pt-16 lg:pt-20' : ''}
          role="main"
          tabIndex={-1}
        >
          {children}
        </main>

        {/* Screen Reader Announcements Container */}
        <div
          id="announcements"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        />
      </div>
    </ThemeProvider>
  );
}

/**
 * Page Layout with Standard Sections
 * Pre-configured layout for portfolio sections
 */
interface PageLayoutProps {
  children: React.ReactNode;
  currentSection?: string;
  className?: string;
}

export function PageLayout({
  children,
  currentSection = '',
  className = '',
}: PageLayoutProps): JSX.Element {
  const navigationItems: NavigationItem[] = [
    { id: 'hero', title: 'Start', href: '#hero' },
    { id: 'services', title: 'Services', href: '#services' },
    { id: 'key-results', title: 'Referenzen', href: '#key-results' },
    { id: 'portfolio', title: 'Portfolio', href: '#portfolio' },
    { id: 'pricing', title: 'Preise', href: '#pricing' },
    { id: 'process', title: 'Prozess', href: '#process' },
    { id: 'testimonials', title: 'Bewertungen', href: '#testimonials' },
    { id: 'about', title: 'Über mich', href: '#about' },
    { id: 'faq', title: 'FAQ', href: '#faq' },
    { id: 'contact', title: 'Kontakt', href: '#contact' },
  ];

  return (
    <Layout
      navigationItems={navigationItems}
      currentSection={currentSection}
      className={className}
    >
      {children}
    </Layout>
  );
}

/**
 * Section Wrapper Component
 * Consistent styling and accessibility for portfolio sections
 */
interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  background?: 'default' | 'surface' | 'primary' | 'secondary';
  padding?: 'default' | 'large' | 'xlarge' | 'none';
  as?: keyof JSX.IntrinsicElements;
}

export function SectionWrapper({
  id,
  children,
  className = '',
  containerClassName = '',
  fullWidth = false,
  background = 'default',
  padding = 'default',
  as: Component = 'section',
}: SectionWrapperProps): JSX.Element {
  const backgroundClasses = {
    default: 'bg-white dark:bg-neutral-900',
    surface: 'bg-neutral-50 dark:bg-neutral-800',
    primary: 'bg-primary-50 dark:bg-primary-900/20',
    secondary: 'bg-secondary-50 dark:bg-secondary-900/20',
  };

  const paddingClasses = {
    none: '',
    default: 'py-16 lg:py-20',
    large: 'py-20 lg:py-24',
    xlarge: 'py-24 lg:py-32',
  };

  return (
    <Component
      id={id}
      className={`
        ${backgroundClasses[background]}
        ${paddingClasses[padding]}
        scroll-mt-20 lg:scroll-mt-24
        ${className}
      `.trim()}
      role={Component === 'section' ? undefined : 'region'}
      aria-labelledby={`${id}-heading`}
      tabIndex={-1}
    >
      {fullWidth ? (
        children
      ) : (
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
          {children}
        </div>
      )}
    </Component>
  );
}

/**
 * Section Heading Component
 * Consistent heading styling with accessibility
 */
interface SectionHeadingProps {
  id?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'small' | 'default' | 'large' | 'xlarge';
}

export function SectionHeading({
  id,
  level = 2,
  children,
  subtitle,
  className = '',
  align = 'center',
  size = 'default',
}: SectionHeadingProps): JSX.Element {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const sizeClasses = {
    small: 'text-2xl lg:text-3xl',
    default: 'text-3xl lg:text-4xl xl:text-5xl',
    large: 'text-4xl lg:text-5xl xl:text-6xl',
    xlarge: 'text-5xl lg:text-6xl xl:text-7xl',
  };

  return (
    <div className={`${alignClasses[align]} ${className}`}>
      <Component
        id={id}
        className={`
          ${sizeClasses[size]}
          font-bold font-display
          text-neutral-900 dark:text-white
          leading-tight
          mb-4
        `.trim()}
      >
        {children}
      </Component>
      {subtitle && (
        <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/**
 * Container Component
 * Responsive container with consistent max-width and padding
 */
interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Container({
  children,
  size = 'xl',
  className = '',
  as: Component = 'div',
}: ContainerProps): JSX.Element {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-none',
  };

  return (
    <Component className={`${sizeClasses[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  );
}

/**
 * Grid Component
 * Responsive grid with consistent spacing
 */
interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  responsive?: boolean;
}

export function Grid({
  children,
  cols = 1,
  gap = 'md',
  className = '',
  responsive = true,
}: GridProps): JSX.Element {
  const colClasses = responsive ? {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    12: 'grid-cols-4 md:grid-cols-6 lg:grid-cols-12',
  } : {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    12: 'grid-cols-12',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  return (
    <div className={`grid ${colClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}

/**
 * Card Component
 * Consistent card styling with elevation
 */
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
  elevation = 'sm',
  border = true,
  as: Component = 'div',
}: CardProps): JSX.Element {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  };

  const elevationClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-base',
    lg: 'shadow-lg',
  };

  const hoverClasses = hover
    ? 'transform transition-all duration-200 hover:scale-[1.02] hover:shadow-md'
    : '';

  const borderClasses = border
    ? 'border border-neutral-200 dark:border-neutral-700'
    : '';

  return (
    <Component
      className={`
        ${paddingClasses[padding]}
        ${elevationClasses[elevation]}
        ${hoverClasses}
        ${borderClasses}
        bg-white dark:bg-neutral-800
        rounded-lg
        ${className}
      `.trim()}
    >
      {children}
    </Component>
  );
}

/**
 * Screen Reader Only Component
 * Content visible only to screen readers
 */
interface ScreenReaderOnlyProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export function ScreenReaderOnly({
  children,
  as: Component = 'span',
}: ScreenReaderOnlyProps): JSX.Element {
  return (
    <Component className="sr-only">
      {children}
    </Component>
  );
}

export default Layout;