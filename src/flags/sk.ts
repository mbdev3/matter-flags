import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#3d58db\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0v8h32V0z\" clip-rule=\"evenodd\"/><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M0 16v8h32v-8z\" clip-rule=\"evenodd\"/><path fill=\"#e31d1c\" stroke=\"#fff\" d=\"m15.6 6.03.5-.05-.05-.45H5.88L5.85 6l.5.03-.5-.03v.06l-.02.18-.14 2.68a32 32 0 0 0 0 4.19c.22 1.64 1.22 5.33 5.09 7l.2.08.2-.09a8.9 8.9 0 0 0 5.19-7c.14-1.02.07-2.83-.03-4.33a82 82 0 0 0-.23-2.73v-.06z\"/><mask id=\"c\" width=\"12\" height=\"16\" x=\"5\" y=\"5\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" stroke=\"#fff\" d=\"m15.6 6.03.5-.05-.05-.45H5.88L5.85 6l.5.03-.5-.03v.06l-.02.18-.14 2.68a32 32 0 0 0 0 4.19c.22 1.64 1.22 5.33 5.09 7l.2.08.2-.09a8.9 8.9 0 0 0 5.19-7c.14-1.02.07-2.83-.03-4.33a82 82 0 0 0-.23-2.73v-.06z\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#c)\"><path fill=\"#f7fcff\" d=\"M10.26 6.59s.2.31.3.8c.09.48.1 1.32.1 1.32l-1.95-.24v1.48l2-.25-.03 1.4s-.6.07-1.1 0c-.49-.05-1.45-.31-1.45-.31v1.7s.98-.32 1.46-.39c.47-.07 1.09 0 1.09 0v2.09h.8V12.1s.9-.08 1.43 0 1.03.39 1.03.39v-1.7s-.5.25-.99.31c-.48.07-1.46 0-1.46 0l.03-1.4s.67-.07 1.04-.02.84.27.84.27V8.47s-.46.25-.81.3-1.11-.06-1.11-.06.01-.87.09-1.3c.07-.42.3-.82.3-.82z\"/><path fill=\"#2e42a5\" d=\"M6.9 16.25s.44-.95 1.15-1.13c.72-.18 1.47.56 1.47.56s.45-1.5 1.57-1.5 1.5 1.5 1.5 1.5.48-.56 1.17-.56 1.32 1.13 1.32 1.13-2.05 3.7-4.1 3.7-4.08-3.7-4.08-3.7\"/></g></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Slovakia';

const C = /* @__PURE__ */ createFlagComponent('sk', 'Slovakia', __inner);

export default C;
