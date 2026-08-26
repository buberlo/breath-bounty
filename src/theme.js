export const colors = {
  background: '#07131F',
  surface: '#0E2233',
  surfaceAlt: '#123049',
  border: '#1E425F',
  textPrimary: '#EAF7FF',
  textSecondary: '#9FC3D8',
  textMuted: '#6E93AA',
  oxygen: '#4DE3FF',
  oxygenDeep: '#18A8C9',
  income: '#FFD166',
  power: '#7CF5C8',
  warning: '#FFB454',
  danger: '#FF6B6B',
  success: '#6BE585',
  inhale: '#7AA7FF',
  exhale: '#4DE3FF',
  hold: '#C58BFF',
  idle: '#8AA6B8',
  overlay: 'rgba(4, 12, 20, 0.72)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const radii = {
  sm: 8,
  md: 12,
  lg: 18,
  pill: 999,
};

export const typography = {
  base: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.textPrimary,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.textSecondary,
    letterSpacing: 0.4,
  },
  label: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.textSecondary,
    fontWeight: '600',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textPrimary,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    color: colors.textPrimary,
    fontWeight: '700',
  },
  heading: {
    fontSize: 18,
    lineHeight: 24,
    color: colors.textPrimary,
    fontWeight: '700',
  },
  stat: {
    fontSize: 28,
    lineHeight: 34,
    color: colors.oxygen,
    fontWeight: '800',
  },
  largeStat: {
    fontSize: 40,
    lineHeight: 46,
    color: colors.oxygen,
    fontWeight: '800',
  },
};

export const shadows = {
  panel: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
  },
};

export const layout = {
  maxWidth: 480,
  horizontalPadding: spacing.md,
  verticalPadding: spacing.md,
  gap: spacing.sm,
  panelPadding: spacing.md,
};

export const motion = {
  fast: 120,
  normal: 220,
  slow: 360,
};

export const meter = {
  height: 88,
  barCount: 28,
  barGap: 3,
  minBarWidth: 3,
  maxBarWidth: 10,
};

export const theme = {
  colors,
  spacing,
  radii,
  typography,
  shadows,
  layout,
  motion,
  meter,
};

export default theme;