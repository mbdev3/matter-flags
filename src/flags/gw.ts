import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#fbcd17\" fill-rule=\"evenodd\" d=\"M16 0h16v12H16z\" clip-rule=\"evenodd\"/><path fill=\"#0b9e7a\" fill-rule=\"evenodd\" d=\"M16 12h16v12H16z\" clip-rule=\"evenodd\"/><path fill=\"#e11c1b\" fill-rule=\"evenodd\" d=\"M0 0h16v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#1d1d1d\" fill-rule=\"evenodd\" d=\"m8.93 14.6-3.48 2.42 1.1-4.14L4 10.24l3.46-.15L8.93 6l1.47 4.1h3.46l-2.56 2.78 1.28 3.9z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Guinea-Bissau';

const C = /* @__PURE__ */ createFlagComponent('gw', 'Guinea-Bissau', __inner);

export default C;
