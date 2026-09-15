'use client';

import * as React from 'react';
import { FlagFrame, FALLBACK_SVG_INNER, toSize, shapeRadius, DEFAULT_BORDER_COLOR } from './internals.js';
import { FLAG_LOADERS } from './loaders.js';
import { normalizeCode, countryName } from './countries.js';
import type { FlagVisualProps } from './types.js';

export interface DuoFlagProps extends FlagVisualProps {
  a: string;
  b: string;
  /** split = left/right halves. diagonal = top-left / bottom-right triangles. stack = two overlapping badges. */
  layout?: 'split' | 'diagonal' | 'stack';
  /** Overlap % for stack layout. Default 35. */
  overlap?: number;
}

/**
 * DuoFlag — two flags in one badge.
 * split: single box, left half A, right half B, shared border.
 * diagonal: single box, top-left triangle A, bottom-right triangle B.
 * stack: two badges overlapping, for vs / language pickers.
 */
export function DuoFlag({
  a,
  b,
  layout = 'split',
  overlap = 35,
  shape = 'circle',
  size = 32,
  bordered = true,
  borderColor = DEFAULT_BORDER_COLOR,
  borderWidth = 1,
  dropShadow = false,
  gradient = 'none',
  className,
  style,
  title,
}: DuoFlagProps): React.JSX.Element {
  const ka = normalizeCode(a);
  const kb = normalizeCode(b);
  const label = title ?? `${countryName(ka)} / ${countryName(kb)}`;
  const px = toSize(size);

  if (layout === 'stack') {
    const shift = `calc(${px} * ${(100 - overlap) / 100})`;
    return (
      <span
        role="img"
        aria-label={label}
        title={label}
        className={className}
        style={{ display: 'inline-flex', alignItems: 'center', lineHeight: 0, ...style }}
      >
        <span style={{ zIndex: 1 }}>
          <SplitHalf code={ka} side="full" shape={shape} size={size} bordered={bordered} borderColor={borderColor} borderWidth={borderWidth} dropShadow={dropShadow} gradient={gradient} />
        </span>
        <span style={{ marginLeft: `calc(-1 * ${px} * ${overlap / 100})`, zIndex: 2 }}>
          <SplitHalf code={kb} side="full" shape={shape} size={size} bordered={bordered} borderColor={borderColor} borderWidth={borderWidth} dropShadow={dropShadow} gradient={gradient} />
        </span>
        <span style={{ width: 0, overflow: 'hidden' }}>{shift}</span>
      </span>
    );
  }

  // diagonal layout: one frame, two clipped triangles
  if (layout === 'diagonal') {
    return (
      <span
        role="img"
        aria-label={label}
        title={label}
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
          border: bordered ? `${typeof borderWidth === 'number' ? `${borderWidth}px` : borderWidth} solid ${borderColor}` : undefined,
          boxShadow: dropShadow ? '0 1px 3px rgba(0,0,0,0.35)' : undefined,
          backgroundColor: '#f1f5f9',
          lineHeight: 0,
          ...style,
        }}
      >
        <span style={{ position: 'absolute', inset: 0, clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}>
          <SplitHalf code={ka} side="full" shape="square" size="100%" bordered={false} gradient="none" />
        </span>
        <span style={{ position: 'absolute', inset: 0, clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}>
          <SplitHalf code={kb} side="full" shape="square" size="100%" bordered={false} gradient="none" />
        </span>
        {gradient !== 'none' ? (
          <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(0,0,0,0.12))', pointerEvents: 'none' }} />
        ) : null}
        {/* thin diagonal divider */}
        <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <line x1="100" y1="0" x2="0" y2="100" stroke="rgba(0,0,0,0.18)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
      </span>
    );
  }

  // split layout: one frame, two clipped halves
  return (
    <span
      role="img"
      aria-label={label}
      title={label}
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
        border: bordered ? `${typeof borderWidth === 'number' ? `${borderWidth}px` : borderWidth} solid ${borderColor}` : undefined,
        boxShadow: dropShadow ? '0 1px 3px rgba(0,0,0,0.35)' : undefined,
        backgroundColor: '#f1f5f9',
        lineHeight: 0,
        ...style,
      }}
    >
      <span style={{ position: 'absolute', inset: 0, display: 'flex' }}>
        <span style={{ width: '50%', height: '100%', overflow: 'hidden' }}>
          <SplitHalf code={ka} side="left" shape="square" size="100%" bordered={false} gradient="none" />
        </span>
        <span style={{ width: '50%', height: '100%', overflow: 'hidden' }}>
          <SplitHalf code={kb} side="right" shape="square" size="100%" bordered={false} gradient="none" />
        </span>
      </span>
      {gradient !== 'none' ? (
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(0,0,0,0.12))', pointerEvents: 'none' }} />
      ) : null}
      {/* thin center divider */}
      <span aria-hidden="true" style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 1, background: 'rgba(0,0,0,0.18)' }} />
    </span>
  );
}

/** Loads a single flag component async and renders it. side=left/right crops for split. */
function SplitHalf({
  code,
  side,
  ...visual
}: FlagVisualProps & { code: string; side: 'full' | 'left' | 'right' }): React.JSX.Element {
  const key = normalizeCode(code);
  const [Comp, setComp] = React.useState<React.ComponentType<FlagVisualProps> | null>(null);
  React.useEffect(() => {
    let alive = true;
    FLAG_LOADERS[key]?.().then((m) => {
      if (alive) setComp(() => m.default as React.ComponentType<FlagVisualProps>);
    });
    return () => {
      alive = false;
    };
  }, [key]);

  if (!Comp) return <FlagFrame label={countryName(key)} svgInner={FALLBACK_SVG_INNER} {...visual} />;

  if (side === 'full') return <Comp {...visual} />;

  // For split halves, render full flag but widen 2x and anchor to side so each half shows correct side.
  return (
    <span style={{ display: 'block', width: '200%', height: '100%', marginLeft: side === 'left' ? 0 : '-100%' }}>
      <Comp {...visual} />
    </span>
  );
}

export default DuoFlag;
