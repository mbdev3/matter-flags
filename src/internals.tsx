import * as React from 'react';
import type { FlagVisualProps } from './types.js';

export const DEFAULT_BORDER_COLOR = 'rgba(0,0,0,0.15)';

/** Plain white flag. Rendered whenever the code is unknown/invalid. */
export const FALLBACK_SVG_INNER = '<rect width="32" height="24" fill="white"/>';
export const FALLBACK_LABEL = 'Unknown flag';

export function shapeRadius(shape: string | undefined): string {
  if (shape === 'circle') return '50%';
  if (shape === 'square') return '0';
  return '18%';
}

export function toSize(size: number | string | undefined): string {
  if (size === undefined) return '24px';
  return typeof size === 'number' ? `${size}px` : size;
}

/**
 * Rewrite every id="x" -> id="x__uid" and url(#x) / href="#x" refs.
 * Prevents collisions when the same flag renders twice (KR masks, clips).
 */
export function uniquifySvgIds(inner: string, uid: string): string {
  const safe = uid.replace(/[^a-zA-Z0-9_-]/g, '');
  // url(#id) references
  let out = inner.replace(/url\(#([^)\s'"]+)\)/g, `url(#$1__${safe})`);
  // href="#id" references (masks, clips). Negative lookbehind so xlink:href
  // is handled once by its own rule below (else double-suffixed refs break).
  out = out.replace(/(?<!xlink:)(href="#)([^"]+)(")/g, `$1$2__${safe}$3`);
  // xlink:href="#id" references (<use>)
  out = out.replace(/(xlink:href="#)([^"]+)(")/g, `$1$2__${safe}$3`);
  // id="..." definitions
  out = out.replace(/\sid="([^"]+)"/g, ` id="$1__${safe}"`);
  return out;
}

const GRADIENTS: Record<string, string> = {
  'top-down':
    'linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 45%)',
  linear:
    'linear-gradient(135deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.12) 100%)',
  circular:
    'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 55%, rgba(0,0,0,0.12) 100%)',
};

export interface FlagFrameProps extends FlagVisualProps {
  label: string;
  svgInner: string;
  /** Extra overlay for duo split dividers etc. */
  overlay?: React.ReactNode;
}

/** Presentational frame. SSR-safe (useId works on server). */
export function FlagFrame({
  label,
  svgInner,
  shape = 'rounded',
  size = 24,
  bordered = true,
  borderColor = DEFAULT_BORDER_COLOR,
  borderWidth = 1,
  dropShadow = false,
  gradient = 'none',
  className,
  style,
  title,
  overlay,
}: FlagFrameProps): React.JSX.Element {
  const uid = React.useId();
  const html = React.useMemo(() => uniquifySvgIds(svgInner, uid), [svgInner, uid]);
  const px = toSize(size);
  const bw = typeof borderWidth === 'number' ? `${borderWidth}px` : borderWidth;

  return (
    <span
      role="img"
      aria-label={title ?? label}
      title={title ?? label}
      className={className}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: px,
        height: px,
        flexShrink: 0,
        overflow: 'hidden',
        borderRadius: shapeRadius(shape),
        boxSizing: 'border-box',
        border: bordered ? `${bw} solid ${borderColor}` : undefined,
        boxShadow: dropShadow ? '0 1px 3px rgba(0,0,0,0.35)' : undefined,
        backgroundColor: '#f1f5f9',
        lineHeight: 0,
        ...style,
      }}
    >
      <svg
        viewBox="0 0 32 24"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
        style={{ display: 'block', width: '100%', height: '100%' }}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: svg is build-time generated
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {gradient !== 'none' && GRADIENTS[gradient] ? (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: GRADIENTS[gradient],
            pointerEvents: 'none',
          }}
        />
      ) : null}
      {overlay}
    </span>
  );
}
