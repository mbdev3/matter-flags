import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f50101\" fill-rule=\"evenodd\" d=\"M0 16h32v8H0zM0 0h32v6H0z\" clip-rule=\"evenodd\"/><path fill=\"#3d58db\" stroke=\"#fff\" stroke-width=\"3\" d=\"M0 6.5h-1.5v11h35v-11z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Thailand';

const C = /* @__PURE__ */ createFlagComponent('th', 'Thailand', __inner);

export default C;
