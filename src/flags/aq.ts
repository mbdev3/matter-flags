import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#5196ed\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#f5f8fb\" fill-rule=\"evenodd\" d=\"M8.72 7.9s2.06 1.13 2.35 1.44.75 1.46 1.46.81c.72-.65 1.44-.14 1.44-1.18 0-1.03 1.07-3.44 2.62-2.84 1.56.6 2.83.23 3.2.47.35.24 1.21 1.44 1.88 1.44s1 .7 1.05 1.7c.05 1.02-.21 1.12.41 1.24s.86.58.55 1.18-.29.34-.24.96c.05.63-.62 4.32-2.68 4.69-2.05.36-4 .16-3.48-.53.53-.7 1.26-1.5.18-1.68-1.07-.16-1.75-.3-2.83-.02-1.07.29-2.2.75-2.87-.12s-.52-1.5-1.07-1.9c-.55-.41-1.22-.34-.67-1.14s1-.5.55-1.12c-.46-.63-2.17-.9-2.17-1.53 0-.62-1.1-2 .32-1.88\" clip-rule=\"evenodd\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Antarctica';

const C = /* @__PURE__ */ createFlagComponent('aq', 'Antarctica', __inner);

export default C;
