import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#40a8ff\" fill-rule=\"evenodd\" d=\"M0 16h32v8H0z\" clip-rule=\"evenodd\"/><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"M0 8h32v8H0z\" clip-rule=\"evenodd\"/><path fill=\"#73be4a\" fill-rule=\"evenodd\" d=\"M0 0h32v8H0z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Gabon';

const C = /* @__PURE__ */ createFlagComponent('ga', 'Gabon', __inner);

export default C;
