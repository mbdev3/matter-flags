import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M16 0h16v24H16z\" clip-rule=\"evenodd\"/><path fill=\"#36a400\" fill-rule=\"evenodd\" d=\"M0 0h16v24H0z\" clip-rule=\"evenodd\"/><path fill=\"red\" fill-rule=\"evenodd\" d=\"M17.8 6.8c1.51 0 2.9.56 3.97 1.48a7.34 7.34 0 0 0-13.12 4.57 7.35 7.35 0 0 0 13.12 4.56A6.05 6.05 0 1 1 17.79 6.8m2.81 2.74-1.7 1.93-2.45-.67 1.36 2.12-1.36 2.26 2.57-.93 1.4 2.2V13.9l2.3-.98-2.3-.82z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Algeria';

const C = /* @__PURE__ */ createFlagComponent('dz', 'Algeria', __inner);

export default C;
