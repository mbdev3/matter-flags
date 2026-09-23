import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"M10 0h11v24H10z\" clip-rule=\"evenodd\"/><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M21 0h11v24H21z\" clip-rule=\"evenodd\"/><path fill=\"#1d1d1d\" fill-rule=\"evenodd\" d=\"M0 0h11v24H0z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Belgium';

const C = /* @__PURE__ */ createFlagComponent('be', 'Belgium', __inner);

export default C;
