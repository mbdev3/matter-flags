import { createFlagComponent } from '../createFlag.js';

const __inner = "<mask id=\"a\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#a)\"><path fill=\"#f7fcff\" d=\"M0 0h32v24H0z\"/><path fill=\"#272727\" d=\"M0 0v8h32V0z\"/><path fill=\"#5eaa22\" d=\"M0 16v8h32v-8z\"/><path fill=\"#e31d1c\" d=\"m0 2 16 10L0 22z\"/></g>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Palestine, State of';

const C = /* @__PURE__ */ createFlagComponent('ps', 'Palestine, State of', __inner);

export default C;
