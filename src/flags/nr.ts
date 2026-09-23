import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#2e42a5\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#feca00\" d=\"M0 8v4h32V8z\"/><path fill=\"#f7fcff\" d=\"m8.83 19.58-1.55 2-.07-2.53-2.43.72 1.43-2.1-2.38-.84 2.38-.85-1.43-2.09 2.43.71.07-2.53 1.55 2.01 1.54-2 .08 2.52 2.42-.7-1.42 2.08 2.38.85-2.38.85 1.42 2.09-2.42-.72-.08 2.53z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Nauru';

const C = /* @__PURE__ */ createFlagComponent('nr', 'Nauru', __inner);

export default C;
