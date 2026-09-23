import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#38a17e\" d=\"M0 0h32v24H0z\"/><path fill=\"#f72e45\" fill-rule=\"evenodd\" d=\"M13 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Bangladesh';

const C = /* @__PURE__ */ createFlagComponent('bd', 'Bangladesh', __inner);

export default C;
