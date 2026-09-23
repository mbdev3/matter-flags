import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#1c7b4d\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#e31d1c\" d=\"M0 0v6h32V0zm0 18v6h32v-6z\"/><path fill=\"#feca00\" d=\"M16.24 14.38c5.19.03 6.65-4.31 6.65-4.31-.3 3.71-2.35 6.23-6.65 6.23s-5.87-3.26-6.64-6.52a7 7 0 0 0 6.64 4.6\"/><path fill=\"#feca00\" d=\"m17.64 9.81.33 1.97-1.76-.93-1.76.93.33-1.97-1.42-1.53h1.97l.88-1.93.88 1.93h1.97z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Mauritania';

const C = /* @__PURE__ */ createFlagComponent('mr', 'Mauritania', __inner);

export default C;
