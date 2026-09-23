import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#3d58db\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#3d58db\" stroke=\"#f7fcff\" stroke-width=\"4\" d=\"M0 8h-2v8h36V8z\"/></g><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M0 0v24l18-12z\" clip-rule=\"evenodd\"/><mask id=\"c\" width=\"18\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24l18-12z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#c)\"><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"m6.69 14.22-3.67 1.93 1.78-3.89-2.27-2.08 2.8-.1L6.7 6.56l1.03 3.52h2.8l-1.87 2.18 1.5 3.9z\" clip-rule=\"evenodd\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Cuba';

const C = /* @__PURE__ */ createFlagComponent('cu', 'Cuba', __inner);

export default C;
