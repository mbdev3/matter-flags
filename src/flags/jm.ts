import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#093\" fill-rule=\"evenodd\" d=\"M0 0h32v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#272727\" stroke=\"#feca00\" stroke-width=\"2.7\" d=\"m-.14-1.04-2.21-1.82v29.72l2.2-1.82 14.55-12L15.66 12l-1.26-1.04z\"/><path fill=\"#272727\" stroke=\"#feca00\" stroke-width=\"2.7\" d=\"m32.16-1.06 2.19-1.72v29.56l-2.19-1.72-15.21-12L15.6 12l1.35-1.06z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Jamaica';

const C = /* @__PURE__ */ createFlagComponent('jm', 'Jamaica', __inner);

export default C;
