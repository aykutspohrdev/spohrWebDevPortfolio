/**
 * Design Token Type Definitions
 * Based on data model specifications for design system elements
 * Implements Bold Minimalism design token structure for easy customization
 */

/**
 * Design Token Entity
 * Represents design system elements for easy customization
 */
export interface DesignToken {
  /** Token category */
  category: TokenCategory;

  /** Token semantic name */
  name: string;

  /** CSS value */
  value: string;

  /** Usage guidelines */
  description?: string;

  /** Alternative value for dark theme */
  darkModeValue?: string;

  /** Token type for validation */
  type: TokenType;

  /** CSS custom property name */
  cssVariableName: string;

  /** Token group for organization */
  group?: string;

  /** Whether token is deprecated */
  deprecated?: boolean;

  /** Replacement token if deprecated */
  replacement?: string;

  /** Token aliases */
  aliases?: string[];

  /** Platform-specific values */
  platformValues?: PlatformValues;
}

/**
 * Token Categories
 */
export type TokenCategory =
  | 'color'
  | 'typography'
  | 'spacing'
  | 'shadow'
  | 'border'
  | 'transition'
  | 'z-index'
  | 'breakpoint';

/**
 * Token Types for Validation
 */
export type TokenType =
  | 'color'
  | 'dimension'
  | 'fontFamily'
  | 'fontWeight'
  | 'fontSize'
  | 'lineHeight'
  | 'letterSpacing'
  | 'borderRadius'
  | 'borderWidth'
  | 'boxShadow'
  | 'duration'
  | 'timingFunction'
  | 'number'
  | 'string';

/**
 * Platform-Specific Values
 */
export interface PlatformValues {
  web?: string;
  ios?: string;
  android?: string;
  figma?: string;
}

/**
 * Color Token Specific Types
 */
export interface ColorToken extends DesignToken {
  category: 'color';
  type: 'color';
  value: string; // Hex, RGB, HSL, etc.
  darkModeValue?: string;
  contrastRatio?: number;
  wcagCompliance?: WCAGCompliance;
  colorSpace?: ColorSpace;
}

/**
 * Typography Token Specific Types
 */
export interface TypographyToken extends DesignToken {
  category: 'typography';
  type: 'fontFamily' | 'fontWeight' | 'fontSize' | 'lineHeight' | 'letterSpacing';
  value: string;
  fallbacks?: string[]; // Font fallbacks
  loadingStrategy?: 'preload' | 'swap' | 'fallback';
}

/**
 * Spacing Token Specific Types
 */
export interface SpacingToken extends DesignToken {
  category: 'spacing';
  type: 'dimension';
  value: string; // rem, px, etc.
  pixelEquivalent?: number;
  gridMultiple?: number; // 8px grid system
}

/**
 * Shadow Token Specific Types
 */
export interface ShadowToken extends DesignToken {
  category: 'shadow';
  type: 'boxShadow';
  value: string;
  elevation?: number; // Material Design elevation
  blurRadius?: number;
  spreadRadius?: number;
}

/**
 * WCAG Compliance Levels
 */
export type WCAGCompliance = 'AA' | 'AAA' | 'fail';

/**
 * Color Spaces
 */
export type ColorSpace = 'sRGB' | 'P3' | 'HSL' | 'LAB' | 'LCH';

/**
 * Token Collection
 */
export interface TokenCollection {
  /** Collection name */
  name: string;
  /** Collection description */
  description?: string;
  /** Collection version */
  version: string;
  /** Collection tokens */
  tokens: DesignToken[];
  /** Collection metadata */
  metadata?: TokenMetadata;
}

/**
 * Token Metadata
 */
export interface TokenMetadata {
  /** Creation date */
  createdAt: string;
  /** Last modified date */
  updatedAt: string;
  /** Author information */
  author?: string;
  /** Collection tags */
  tags?: string[];
  /** Source file or system */
  source?: string;
}

/**
 * Token Theme Configuration
 */
export interface TokenTheme {
  /** Theme name */
  name: string;
  /** Theme display name */
  displayName: string;
  /** Base theme to extend */
  extends?: string;
  /** Token overrides for this theme */
  tokens: Partial<Record<string, string>>;
  /** Theme metadata */
  metadata?: {
    description?: string;
    author?: string;
    version?: string;
  };
}

/**
 * Token Export Formats
 */
export type TokenExportFormat =
  | 'css'
  | 'scss'
  | 'less'
  | 'stylus'
  | 'javascript'
  | 'typescript'
  | 'json'
  | 'yaml'
  | 'figma'
  | 'sketch'
  | 'android-xml'
  | 'ios-swift';

/**
 * Token Export Configuration
 */
export interface TokenExportConfig {
  format: TokenExportFormat;
  filename?: string;
  includeCategories?: TokenCategory[];
  excludeCategories?: TokenCategory[];
  includeDeprecated?: boolean;
  nameTransform?: 'kebab-case' | 'camelCase' | 'snake_case' | 'PascalCase';
  prefix?: string;
  suffix?: string;
  customTemplate?: string;
}

/**
 * Token Validation Result
 */
export interface TokenValidationResult {
  token: DesignToken;
  isValid: boolean;
  errors: TokenValidationError[];
  warnings: TokenValidationWarning[];
}

/**
 * Token Validation Error
 */
export interface TokenValidationError {
  type: 'invalid-value' | 'missing-property' | 'invalid-type' | 'circular-reference';
  message: string;
  property?: string;
  suggestion?: string;
}

/**
 * Token Validation Warning
 */
export interface TokenValidationWarning {
  type: 'deprecated' | 'accessibility' | 'performance' | 'naming';
  message: string;
  property?: string;
  suggestion?: string;
}

/**
 * Token Usage Analytics
 */
export interface TokenUsageAnalytics {
  token: DesignToken;
  usageCount: number;
  usageLocations: string[];
  lastUsed?: string;
  replacementCandidates?: string[];
}

/**
 * Token Filter Options
 */
export interface TokenFilter {
  categories?: TokenCategory[];
  types?: TokenType[];
  groups?: string[];
  deprecated?: boolean;
  hasDescription?: boolean;
  hasDarkMode?: boolean;
  searchTerm?: string;
}

/**
 * Token Sort Options
 */
export type TokenSort =
  | 'name-asc'
  | 'name-desc'
  | 'category'
  | 'type'
  | 'usage-desc'
  | 'creation-date';

/**
 * Token Display Options
 */
export interface TokenDisplayOptions {
  filter?: TokenFilter;
  sort?: TokenSort;
  groupBy?: 'category' | 'type' | 'group';
  showDeprecated?: boolean;
  showUsageCount?: boolean;
  showPlatformValues?: boolean;
}

/**
 * Design Token System Configuration
 */
export interface DesignTokenSystem {
  /** System name */
  name: string;
  /** System version */
  version: string;
  /** Token collections */
  collections: TokenCollection[];
  /** Available themes */
  themes: TokenTheme[];
  /** Default theme */
  defaultTheme: string;
  /** System configuration */
  config: TokenSystemConfig;
}

/**
 * Token System Configuration
 */
export interface TokenSystemConfig {
  /** Base font size for rem calculations */
  baseFontSize: number;
  /** Color format preference */
  colorFormat: 'hex' | 'rgb' | 'hsl';
  /** Spacing base unit */
  spacingBase: number;
  /** Breakpoint system */
  breakpoints: Record<string, string>;
  /** Animation preferences */
  animations: {
    duration: 'fast' | 'normal' | 'slow';
    easing: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
  };
}

/**
 * Token Generator Options
 */
export interface TokenGeneratorOptions {
  /** Base colors to generate scales from */
  baseColors?: Record<string, string>;
  /** Typography scale ratio */
  typeScale?: number;
  /** Spacing scale ratio */
  spaceScale?: number;
  /** Generate dark mode variants */
  generateDarkMode?: boolean;
  /** Accessibility compliance target */
  wcagLevel?: 'AA' | 'AAA';
}

/**
 * Type Guards
 */
export function isValidTokenCategory(category: string): category is TokenCategory {
  return [
    'color',
    'typography',
    'spacing',
    'shadow',
    'border',
    'transition',
    'z-index',
    'breakpoint'
  ].includes(category as TokenCategory);
}

export function isValidTokenType(type: string): type is TokenType {
  return [
    'color',
    'dimension',
    'fontFamily',
    'fontWeight',
    'fontSize',
    'lineHeight',
    'letterSpacing',
    'borderRadius',
    'borderWidth',
    'boxShadow',
    'duration',
    'timingFunction',
    'number',
    'string'
  ].includes(type as TokenType);
}

export function isColorToken(token: DesignToken): token is ColorToken {
  return token.category === 'color' && token.type === 'color';
}

export function isTypographyToken(token: DesignToken): token is TypographyToken {
  return token.category === 'typography';
}

export function isSpacingToken(token: DesignToken): token is SpacingToken {
  return token.category === 'spacing';
}

export function isShadowToken(token: DesignToken): token is ShadowToken {
  return token.category === 'shadow';
}

export function isDeprecatedToken(token: DesignToken): boolean {
  return token.deprecated === true;
}

/**
 * Utility Types
 */
export type TokenSummary = Pick<
  DesignToken,
  'name' | 'category' | 'type' | 'value' | 'cssVariableName'
>;

export type TokenReference = Pick<DesignToken, 'name' | 'cssVariableName' | 'value'>;

/**
 * Constants
 */
export const TOKEN_CATEGORIES: Record<TokenCategory, string> = {
  'color': 'Farben',
  'typography': 'Typografie',
  'spacing': 'Abstände',
  'shadow': 'Schatten',
  'border': 'Rahmen',
  'transition': 'Übergänge',
  'z-index': 'Z-Index',
  'breakpoint': 'Breakpoints',
} as const;

export const TOKEN_TYPES: Record<TokenType, string> = {
  'color': 'Farbe',
  'dimension': 'Dimension',
  'fontFamily': 'Schriftfamilie',
  'fontWeight': 'Schriftstärke',
  'fontSize': 'Schriftgröße',
  'lineHeight': 'Zeilenhöhe',
  'letterSpacing': 'Buchstabensabstand',
  'borderRadius': 'Eckenradius',
  'borderWidth': 'Rahmenbreite',
  'boxShadow': 'Box-Schatten',
  'duration': 'Dauer',
  'timingFunction': 'Timing-Funktion',
  'number': 'Zahl',
  'string': 'Zeichenkette',
} as const;

/**
 * Default Token Collections for Bold Minimalism
 */
export const BOLD_MINIMALISM_TOKENS: TokenCollection = {
  name: 'Bold Minimalism',
  description: 'Design tokens for Bold Minimalism portfolio website',
  version: '1.0.0',
  tokens: [], // Would be populated with actual tokens
  metadata: {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: 'Aykut Spohr',
    tags: ['bold-minimalism', 'portfolio', 'german-sme'],
    source: 'figma-design-system',
  },
};

/**
 * Export Format Configurations
 */
export const EXPORT_FORMATS: Record<TokenExportFormat, string> = {
  'css': 'CSS Custom Properties',
  'scss': 'SCSS Variables',
  'less': 'LESS Variables',
  'stylus': 'Stylus Variables',
  'javascript': 'JavaScript Object',
  'typescript': 'TypeScript Interface',
  'json': 'JSON',
  'yaml': 'YAML',
  'figma': 'Figma Plugin Format',
  'sketch': 'Sketch Plugin Format',
  'android-xml': 'Android XML Resources',
  'ios-swift': 'iOS Swift Constants',
} as const;