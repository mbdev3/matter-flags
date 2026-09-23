import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#ff8c1a\" d=\"M0 0v8h32V0z\"/><path fill=\"#5eaa22\" d=\"M0 16v8h32v-8z\"/><path fill=\"#3d58db\" d=\"M12 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0m7 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0\"/><path fill=\"#3d58db\" d=\"m16 12.86-.58 3.12.34-3.15-1.43 2.83 1.2-2.93-2.16 2.31 1.98-2.47-2.73 1.61 2.6-1.82-3.07.78 3-1-3.17-.13 3.17-.12-3-1 3.07.77-2.6-1.82 2.73 1.61-1.98-2.47 2.17 2.32-1.21-2.94 1.43 2.84-.34-3.16.57 3.12.58-3.12-.34 3.16 1.43-2.84-1.2 2.94 2.16-2.32-1.98 2.47 2.73-1.6-2.6 1.8 3.07-.77-3 1.01 3.17.12-3.17.12 3 1.01-3.07-.78 2.6 1.82-2.73-1.61 1.98 2.47-2.17-2.31 1.21 2.93-1.43-2.83.34 3.15z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'India';

const C = /* @__PURE__ */ createFlagComponent('in', 'India', __inner);

export default C;
