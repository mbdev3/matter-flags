import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#fa1111\" fill-rule=\"evenodd\" d=\"M32 0v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#07a907\" fill-rule=\"evenodd\" d=\"M0 24V0h32z\" clip-rule=\"evenodd\"/><path fill=\"#fbcd17\" fill-rule=\"evenodd\" d=\"M29.5-5.8-1 23.58l6.05 3 29.6-26.8z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Congo';

const C = /* @__PURE__ */ createFlagComponent('cg', 'Congo', __inner);

export default C;
