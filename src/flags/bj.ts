import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#dd2c2b\" fill-rule=\"evenodd\" d=\"M0 0h32v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"M0 0v14h32V0z\" clip-rule=\"evenodd\"/><path fill=\"#5eaa22\" d=\"M0 0h14v24H0z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Benin';

const C = /* @__PURE__ */ createFlagComponent('bj', 'Benin', __inner);

export default C;
