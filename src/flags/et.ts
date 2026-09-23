import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#5eaa22\" fill-rule=\"evenodd\" d=\"M0 0v8h32V0z\" clip-rule=\"evenodd\"/><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M0 16v8h32v-8z\" clip-rule=\"evenodd\"/><path fill=\"#2b77b8\" fill-rule=\"evenodd\" d=\"M16 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12\" clip-rule=\"evenodd\"/><path stroke=\"#feca00\" stroke-width=\"1.5\" d=\"m16 14-2.76.93.86-2.31-1.88-2.24h2.6L16 8l1.18 2.38h2.65l-1.93 2.24.69 2.3z\" clip-rule=\"evenodd\"/><path stroke=\"#2b77b8\" d=\"m15.7 12.03-2.1 4.37m1.77-4.92h-4m4.75 1.36 3.91 1.8m-3.06-2.77 2.83-3.1\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Ethiopia';

const C = /* @__PURE__ */ createFlagComponent('et', 'Ethiopia', __inner);

export default C;
