import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#ef0000\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#2e42a5\" d=\"M0 0v14h18V0z\"/><path fill=\"#feffff\" d=\"m8.73 10.81-1.48 1.85-.36-2.34-2.2.86.85-2.21-2.34-.36 1.85-1.48L3.2 5.65l2.34-.36-.86-2.2 2.2.85.37-2.34 1.48 1.85 1.48-1.85.36 2.34 2.2-.86-.85 2.2 2.34.37-1.85 1.48 1.85 1.48-2.34.36.86 2.2-2.21-.85-.36 2.34zm0-.82a2.86 2.86 0 1 0 0-5.72 2.86 2.86 0 0 0 0 5.72m2.29-2.86a2.29 2.29 0 1 1-4.58 0 2.29 2.29 0 0 1 4.58 0\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Taiwan';

const C = /* @__PURE__ */ createFlagComponent('tw', 'Taiwan', __inner);

export default C;
