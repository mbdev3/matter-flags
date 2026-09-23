import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#3d58db\" fill-rule=\"evenodd\" d=\"M0 0h32v6H0z\" clip-rule=\"evenodd\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 6h32v6H0z\" clip-rule=\"evenodd\"/><path fill=\"#73be4a\" fill-rule=\"evenodd\" d=\"M0 12h32v6H0z\" clip-rule=\"evenodd\"/><path fill=\"#ffd018\" fill-rule=\"evenodd\" d=\"M0 18h32v6H0z\" clip-rule=\"evenodd\"/><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"M4.53 5.42 2.1 7.1l.78-2.88L1.1 2.38l2.41-.1L4.53-.57l1.02 2.85h2.4L6.18 4.22l.89 2.7z\" clip-rule=\"evenodd\"/><path fill=\"#e11c1b\" fill-rule=\"evenodd\" d=\"M12 0h8v24h-8z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Central African Republic';

const C = /* @__PURE__ */ createFlagComponent('cf', 'Central African Republic', __inner);

export default C;
