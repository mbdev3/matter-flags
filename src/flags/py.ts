import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path stroke=\"#272727\" stroke-width=\".35\" d=\"M19.83 12a3.82 3.82 0 1 1-7.65 0 3.82 3.82 0 0 1 7.65 0Z\"/><path fill=\"#272727\" fill-rule=\"evenodd\" d=\"M13 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0m5.65 0a2.65 2.65 0 1 1-5.3 0 2.65 2.65 0 0 1 5.3 0\" clip-rule=\"evenodd\"/><path fill=\"#f05234\" fill-rule=\"evenodd\" d=\"M0 0v8h32V0z\" clip-rule=\"evenodd\"/><path fill=\"#3d58db\" fill-rule=\"evenodd\" d=\"M0 16v8h32v-8z\" clip-rule=\"evenodd\"/><path fill=\"#73be4a\" d=\"m14.62 10 .28.41c-.66.46-.96 1-.71 1.9q.34 1.35 1.75 1.39l-.02.5c-1.16-.04-1.95-.52-2.25-1.63s.1-1.99.95-2.57\"/><path fill=\"#fbcd17\" fill-rule=\"evenodd\" d=\"m16 12.32-.88.6.3-1.03-.85-.65 1.07-.04.36-1 .36 1 1.07.04-.85.65.3 1.02z\" clip-rule=\"evenodd\"/><path stroke=\"#73be4a\" stroke-width=\".5\" d=\"M17.17 10.18s1.12.78.72 2.29c-.4 1.5-1.99 1.56-1.99 1.56\"/><path fill=\"#f7fcff\" d=\"m14.56 9.04.47.72z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Paraguay';

const C = /* @__PURE__ */ createFlagComponent('py', 'Paraguay', __inner);

export default C;
