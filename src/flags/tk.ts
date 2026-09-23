import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#2e42a5\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#f7fcff\" d=\"m3.3 10.06-.9.55.35-.92L2 9h.91l.39-1 .3 1h.91l-.66.7.32.91zm4-4-.9.55.35-.92L6 5h.91l.39-1 .3 1h.91l-.66.7.32.91zm4 4-.9.55.35-.92L10 9h.91l.39-1 .3 1h.91l-.66.7.32.91zm-4 4-.9.55.35-.92L6 13h.91l.39-1 .3 1h.91l-.66.7.32.91z\"/><path fill=\"#feca00\" d=\"M24.84 5.46c-4.08 2.02-17.5 11.09-17.5 11.09H29.7l-.63-.14c-1.64-.32-2.45-.48-4.22-4.01-1.98-3.96 0-6.94 0-6.94M6.62 17.96l-.31.77.3.83 22.76.44.63-1.16-.63-.83z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Tokelau';

const C = /* @__PURE__ */ createFlagComponent('tk', 'Tokelau', __inner);

export default C;
