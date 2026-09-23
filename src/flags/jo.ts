import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#272727\" d=\"M0 0v8h32V0z\"/><path fill=\"#093\" d=\"M0 16v8h32v-8z\"/></g><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M0 0v24l20-12z\" clip-rule=\"evenodd\"/><mask id=\"c\" width=\"20\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24l20-12z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#c)\"><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M9 13.87 7.13 15l.43-2.2L6 11.15l2.1-.1L9 9l.9 2.06H12l-1.55 1.74.46 2.2z\" clip-rule=\"evenodd\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Jordan';

const C = /* @__PURE__ */ createFlagComponent('jo', 'Jordan', __inner);

export default C;
