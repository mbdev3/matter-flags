import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#e31d1c\" stroke=\"#f7fcff\" stroke-width=\"2\" d=\"M0-1h-1v26h34V-1z\"/><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"m0 0 24 12L0 24z\" clip-rule=\"evenodd\"/><path fill=\"#272727\" fill-rule=\"evenodd\" d=\"m0 0 16 12L0 24z\" clip-rule=\"evenodd\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"m6.65 14.4-2.02 2.1-.21-2.98-2.58-1.58 2.69-.85.44-2.95 1.86 2.34 2.7-.73-1.4 2.78L9.5 15.2z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Timor-Leste';

const C = /* @__PURE__ */ createFlagComponent('tl', 'Timor-Leste', __inner);

export default C;
