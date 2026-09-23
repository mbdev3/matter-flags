import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#c51918\" stroke=\"#4857a1\" d=\"m11.62 12.32 9.31 11.18H.5V.84L20.04 11.5h-9.11z\"/><mask id=\"b\" width=\"22\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" stroke=\"#fff\" d=\"m11.62 12.32 9.31 11.18H.5V.84L20.04 11.5h-9.11z\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#f7fcff\" d=\"M5.83 20.01 4.6 21.6l-.05-2-1.93.56 1.14-1.66-1.9-.67 1.9-.67-1.14-1.66 1.93.57.05-2.01 1.23 1.59 1.22-1.6.06 2.02 1.93-.57-1.14 1.66 1.9.67-1.9.67 1.14 1.66-1.93-.57-.06 2.01zM5.8 8.14l-.64.83-.03-1.05-1 .3.59-.87L3.73 7l.99-.35-.6-.87 1.01.3.03-1.05.64.83.64-.83.03 1.05 1-.3-.59.87 1 .35-1 .35.6.87-1.01-.3-.03 1.05z\"/><path fill=\"#f9fafa\" d=\"M5.67 7.9c2.22 0 3.4-1.26 3.4-1.26.24 1.44-1.57 2.4-3.38 2.4-1.82 0-2.91-1.3-3.59-2.4 0 0 1.34 1.25 3.57 1.25\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Nepal';

const C = /* @__PURE__ */ createFlagComponent('np', 'Nepal', __inner);

export default C;
