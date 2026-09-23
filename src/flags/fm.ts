import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#63b3e1\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill=\"#f7fcff\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path d=\"m16 7.3-1.76.93.33-1.97-1.42-1.39 1.97-.28L16 2.8l.88 1.79 1.97.28-1.42 1.4.33 1.96zm0 12-1.76.93.33-1.97-1.42-1.39 1.97-.28.88-1.79.88 1.79 1.97.28-1.42 1.4.33 1.96zm-6.2-5.8-1.76.93.33-1.97-1.42-1.39 1.97-.28L9.8 9l.88 1.79 1.97.28-1.42 1.4.33 1.96zm12.2 0-1.76.93.33-1.97-1.42-1.39 1.97-.28L22 9l.88 1.79 1.97.28-1.42 1.4.33 1.96z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Micronesia (Federated States of)';

const C = /* @__PURE__ */ createFlagComponent('fm', 'Micronesia (Federated States of)', __inner);

export default C;
