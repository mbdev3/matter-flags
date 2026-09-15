import * as React from 'react';
import { FlagFrame } from './internals.js';
import type { FlagVisualProps } from './types.js';

export interface DirectFlagProps extends FlagVisualProps {
  size?: number | string;
}

/** Factory used by generated per-flag modules. Memoized, server-safe. */
export function createFlagComponent(code: string, label: string, svgInner: string) {
  const C = React.memo(function FlagIcon(props: DirectFlagProps): React.JSX.Element {
    return <FlagFrame label={label} svgInner={svgInner} {...props} />;
  });
  C.displayName = `Flag_${code.toUpperCase()}`;
  return C;
}
