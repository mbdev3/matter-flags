import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M0 0h32v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"m15.02 4.55-1.01.6.23-1.18-.85-.9 1.14-.04.49-1.11.48 1.1h1.13l-.83.95.25 1.19zm-8 5.05-2.88 1.56.65-3.03-2.4-2.26 3.25-.13 1.38-2.82 1.37 2.82h3.24l-2.39 2.4.72 3.02zm10-1.05-1.01.6.23-1.18-.85-.9 1.14-.04.49-1.11.48 1.1h1.13l-.83.95.25 1.19zm-1 4-1.01.6.23-1.18-.85-.9 1.14-.04.49-1.11.48 1.1h1.13l-.83.95.25 1.19zm-3 3-1.01.6.23-1.18-.85-.9 1.14-.04.49-1.11.48 1.1h1.13l-.83.95.25 1.19z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'China';

const C = /* @__PURE__ */ createFlagComponent('cn', 'China', __inner);

export default C;
