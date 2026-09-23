import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#67bd38\" fill-rule=\"evenodd\" d=\"M22 0h10v24H22z\" clip-rule=\"evenodd\"/><path fill=\"#e47e00\" fill-rule=\"evenodd\" d=\"M0 0h10v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M10 0h12v24H10z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Côte d\'Ivoire';

const C = /* @__PURE__ */ createFlagComponent('ci', 'Côte d\'Ivoire', __inner);

export default C;
