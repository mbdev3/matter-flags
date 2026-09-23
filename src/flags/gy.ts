import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#5eaa22\" fill-rule=\"evenodd\" d=\"M0 0h32v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#feca00\" stroke=\"#f7fcff\" stroke-width=\"2\" d=\"M1 22.59V1.4L31 12z\"/><path fill=\"#e11c1b\" stroke=\"#272727\" stroke-width=\"2\" d=\"M-1 23.96V.04L14.37 12z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Guyana';

const C = /* @__PURE__ */ createFlagComponent('gy', 'Guyana', __inner);

export default C;
