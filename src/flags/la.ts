import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M0 16h32v8H0z\" clip-rule=\"evenodd\"/><path fill=\"#2e42a5\" fill-rule=\"evenodd\" d=\"M0 8h32v8H0z\" clip-rule=\"evenodd\"/><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M0 0h32v8H0z\" clip-rule=\"evenodd\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M16 15.74a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Lao People\'s Democratic Republic (the)';

const C = /* @__PURE__ */ createFlagComponent('la', 'Lao People\'s Democratic Republic (the)', __inner);

export default C;
