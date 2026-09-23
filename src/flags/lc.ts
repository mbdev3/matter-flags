import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#7ccff5\" fill-rule=\"evenodd\" d=\"M0 0h32v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"m16 4 8 16H8z\" clip-rule=\"evenodd\"/><path fill=\"#272727\" fill-rule=\"evenodd\" d=\"m16 8 7 12H9z\" clip-rule=\"evenodd\"/><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"m16 14 8 6H8z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Saint Lucia';

const C = /* @__PURE__ */ createFlagComponent('lc', 'Saint Lucia', __inner);

export default C;
