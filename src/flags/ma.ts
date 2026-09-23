import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#c51918\" fill-rule=\"evenodd\" d=\"M0 0h32v22a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z\" clip-rule=\"evenodd\"/><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M0 0h32v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#579d20\" fill-rule=\"evenodd\" d=\"M22.48 19.63 16.17 2.7h-.28L9.8 19.63l6.34-3.8zm-7.01-11.4.67-2.65.7 2.72 2.02 5.65 1.19 2.74-2.56-1.8-1.36-.82-1.35.81-2.5 1.81 1.16-2.8z\" clip-rule=\"evenodd\"/><path fill=\"#579d20\" fill-rule=\"evenodd\" d=\"m12.66 13.47 3.5 2.33 3.26-2.33 6.2-5.23H6.39zm.08-2-2.38-1.45h11.22l-2.04 1.3-3.4 2.57z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Morocco';

const C = /* @__PURE__ */ createFlagComponent('ma', 'Morocco', __inner);

export default C;
