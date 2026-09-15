export type FlagShape = 'circle' | 'rounded' | 'square';
export type FlagGradient = 'none' | 'top-down' | 'linear' | 'circular';

export interface FlagVisualProps {
  /** circle | rounded (~18%) | square. Default 'rounded'. */
  shape?: FlagShape;
  /** px number or css string. Default 24. */
  size?: number | string;
  /** Show 1px border. Default true. */
  bordered?: boolean;
  borderColor?: string;
  borderWidth?: number | string;
  /** Soft drop shadow. Default false. */
  dropShadow?: boolean;
  /** Gloss overlay. Default 'none'. */
  gradient?: FlagGradient;
  className?: string;
  style?: React.CSSProperties;
  /** Accessible label. Defaults to country name. */
  title?: string;
}
