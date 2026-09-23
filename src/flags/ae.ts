import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0h32v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#5eaa22\" fill-rule=\"evenodd\" d=\"M0 0v8h32V0z\" clip-rule=\"evenodd\"/><path fill=\"#272727\" fill-rule=\"evenodd\" d=\"M0 16v8h32v-8z\" clip-rule=\"evenodd\"/><path fill=\"#e31d1c\" d=\"M0 0h10v24H0z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'United Arab Emirates';

const C = /* @__PURE__ */ createFlagComponent('ae', 'United Arab Emirates', __inner);

export default C;
