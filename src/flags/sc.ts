import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#2e42a5\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#ffd018\" fill-rule=\"evenodd\" d=\"M0 24 16.15-2H32.3z\" clip-rule=\"evenodd\"/><path fill=\"#e31d1c\" d=\"m0 24 34.46-13V-5.1z\"/><path fill=\"#f7fcff\" d=\"m0 24 34.46-5v-8.1z\"/><path fill=\"#5eaa22\" fill-rule=\"evenodd\" d=\"M0 24h34.46v-7.1z\" clip-rule=\"evenodd\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Seychelles';

const C = /* @__PURE__ */ createFlagComponent('sc', 'Seychelles', __inner);

export default C;
