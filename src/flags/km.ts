import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#5196ed\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#af0100\" d=\"M0 12v6h32v-6z\"/><path fill=\"#f7fcff\" d=\"M0 6v6h32V6z\"/><path fill=\"#feca00\" d=\"M0 0v6h32V0z\"/><path fill=\"#5eaa22\" d=\"m0 0 19 12L0 24z\"/><path fill=\"#f7fcff\" d=\"M7.3 16.5s-3.58-1.22-3.45-5.05 3.77-4.58 3.77-4.58c-1.27-.92-5.85.16-6 4.58-.14 4.42 4.32 5.4 5.68 5.05m.11-6.7.11-.65-.47-.46.66-.1L8 8l.3.6.65.1-.47.45.1.66L8 9.5zm.11 1.35-.1.66.58-.31.59.3-.11-.65.47-.46-.66-.1L8 10l-.3.6-.65.1zm-.1 2.66.1-.66-.47-.46.66-.1L8 12l.3.6.65.1-.47.45.1.66L8 13.5zm0 2 .1-.66-.47-.46.66-.1L8 14l.3.6.65.1-.47.45.1.66L8 15.5z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Comoros';

const C = /* @__PURE__ */ createFlagComponent('km', 'Comoros', __inner);

export default C;
