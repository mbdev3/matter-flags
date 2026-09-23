import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0h32v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#f00000\" fill-rule=\"evenodd\" d=\"M0 11.66V0h16zm32 0V0H16z\" clip-rule=\"evenodd\"/><path fill=\"#00268d\" fill-rule=\"evenodd\" d=\"M0 11.66V24h16zm32 0v12.68L16 24z\" clip-rule=\"evenodd\"/><path fill=\"#feda00\" fill-rule=\"evenodd\" d=\"m15.71 14.26-3.51 2.5 1.29-4.14L10 10.1h4.34L15.71 6l1.46 4.09h4.22l-3.46 2.53 1.32 4.14z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Saba';

const C = /* @__PURE__ */ createFlagComponent('bq-sa', 'Saba', __inner);

export default C;
