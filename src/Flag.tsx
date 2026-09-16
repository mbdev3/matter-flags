'use client';

import * as React from 'react';
import { FlagFrame, FALLBACK_SVG_INNER, PLACEHOLDER_SVG_INNER } from './internals.js';
import { FLAG_LOADERS } from './loaders.js';
import { normalizeCode, countryName } from './countries.js';
import type { FlagVisualProps } from './types.js';

export interface FlagProps extends FlagVisualProps {
  /** ISO alpha-2, case-insensitive. `uk` aliases to `gb`. */
  code: string;
  /** Rendered while the flag chunk loads. Defaults to shaped placeholder (no layout shift). */
  fallback?: React.ReactNode;
}

type Loaded = React.ComponentType<FlagVisualProps>;

/**
 * DX convenience: <Flag code="ma" />.
 * Code-split — only the requested flag chunk loads.
 * For SSR lists or smallest bundle, prefer direct imports:
 *   import MA from 'matter-flags/flags/ma';
 */
export function Flag({ code, fallback, ...visual }: FlagProps): React.JSX.Element {
  const key = normalizeCode(code);
  const [Comp, setComp] = React.useState<Loaded | null>(null);

  React.useEffect(() => {
    let alive = true;
    const loader = FLAG_LOADERS[key];
    if (!loader) {
      setComp(null);
      return;
    }
    loader().then((m) => {
      if (alive) setComp(() => m.default as Loaded);
    });
    return () => {
      alive = false;
    };
  }, [key]);

  const label = countryName(key);

  if (!FLAG_LOADERS[key]) {
    // Unknown code — white fallback flag, never crashes.
    return <FlagFrame label={visual.title ?? `Unknown flag (${code.trim().toUpperCase() || '?'})`} svgInner={FALLBACK_SVG_INNER} {...visual} />;
  }
  if (!Comp) {
    if (fallback !== undefined) return <>{fallback}</>;
    return <FlagFrame label={label} svgInner={PLACEHOLDER_SVG_INNER} {...visual} />;
  }
  return <Comp {...visual} title={visual.title ?? label} />;
}

export default Flag;
