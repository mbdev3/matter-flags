import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#e31d1c\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0h6.8L12 2 6.8 4 12 6 6.8 8l5.2 2-5.2 2 5.2 2-5.2 2 5.2 2-5.2 2 5.2 2-5.2 2H0z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Bahrain';

const C = /* @__PURE__ */ createFlagComponent('bh', 'Bahrain', __inner);

export default C;
