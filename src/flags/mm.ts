import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M0 16h32v8H0z\" clip-rule=\"evenodd\"/><path fill=\"#5eaa22\" fill-rule=\"evenodd\" d=\"M0 8h32v8H0z\" clip-rule=\"evenodd\"/><path fill=\"#ffd018\" fill-rule=\"evenodd\" d=\"M0 0h32v8H0z\" clip-rule=\"evenodd\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"m16.06 15.98-5.15 3.27 1.73-5.73-3.68-3.75 5.07-.1L16.27 4l2.04 5.74 5.06.08-3.8 3.82 1.77 5.45z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Myanmar';

const C = /* @__PURE__ */ createFlagComponent('mm', 'Myanmar', __inner);

export default C;
