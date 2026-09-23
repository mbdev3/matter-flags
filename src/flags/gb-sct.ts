import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#265aad\" d=\"M0 0h32v24H0z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M16 14.5 1.2 25.6l-2.4-3.2L12.67 12-1.2 1.6l2.4-3.2L16 9.5 30.8-1.6l2.4 3.2L19.33 12 33.2 22.4l-2.4 3.2z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Scotland';

const C = /* @__PURE__ */ createFlagComponent('gb-sct', 'Scotland', __inner);

export default C;
