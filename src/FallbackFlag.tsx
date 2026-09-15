import * as React from 'react';
import { FlagFrame, FALLBACK_SVG_INNER, FALLBACK_LABEL } from './internals.js';
import type { FlagVisualProps } from './types.js';

/**
 * Plain white flag in any shape/size. Useful as a skeleton,
 * placeholder, or explicit "no flag" state.
 */
export const FallbackFlag = React.memo(function FallbackFlag(
  props: FlagVisualProps,
): React.JSX.Element {
  return <FlagFrame label={FALLBACK_LABEL} svgInner={FALLBACK_SVG_INNER} {...props} />;
});

export default FallbackFlag;
