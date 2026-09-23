import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#ffdc17\" fill-rule=\"evenodd\" d=\"M8 0h16v24H8z\" clip-rule=\"evenodd\"/><path fill=\"#5fbf2b\" fill-rule=\"evenodd\" d=\"M24 0h8v24h-8z\" clip-rule=\"evenodd\"/><path fill=\"#2e42a5\" fill-rule=\"evenodd\" d=\"M0 0h8v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#5fbf2b\" fill-rule=\"evenodd\" d=\"m19.73 5.6-3.04 4.46 3.04 4.3 3.04-4.3zm-7.45.08L9 10.06l3.04 4.23 3.04-4.23zm.56 9.3 3.28-4.38 2.8 4.39-2.8 4.51z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Saint Vincent and the Grenadines';

const C = /* @__PURE__ */ createFlagComponent('vc', 'Saint Vincent and the Grenadines', __inner);

export default C;
