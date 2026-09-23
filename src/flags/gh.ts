import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#5eaa22\" fill-rule=\"evenodd\" d=\"M0 16h32v8H0z\" clip-rule=\"evenodd\"/><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"M0 8h32v8H0z\" clip-rule=\"evenodd\"/><path fill=\"#e11c1b\" fill-rule=\"evenodd\" d=\"M0 0h32v8H0z\" clip-rule=\"evenodd\"/><path fill=\"#1d1d1d\" fill-rule=\"evenodd\" d=\"m16.08 14.49-3.49 2.42 1.11-4.14-2.94-2.65 3.85-.14 1.47-4.1 1.46 4.1h3.83l-2.92 2.79 1.28 3.9z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Ghana';

const C = /* @__PURE__ */ createFlagComponent('gh', 'Ghana', __inner);

export default C;
