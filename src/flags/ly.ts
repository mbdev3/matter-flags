import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#55ba07\" fill-rule=\"evenodd\" d=\"M0 18h32v6H0z\" clip-rule=\"evenodd\"/><path fill=\"#1d1d1d\" fill-rule=\"evenodd\" d=\"M0 6h32v12H0z\" clip-rule=\"evenodd\"/><path fill=\"#e11c1b\" fill-rule=\"evenodd\" d=\"M0 0h32v6H0z\" clip-rule=\"evenodd\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M15.8 15.07c-1.8-.37-2.26-1.31-2.24-2.76 0-1.53.8-3.08 2.22-3.25a3.5 3.5 0 0 1 3.18 1.1c-.51-2-2.2-2.22-3.48-2.22-1.95-.02-3.94 1.46-3.94 4.24 0 2.42 1.76 4.24 4 4.28 2.79 0 3.23-1.93 3.3-2.58q-.22.17-.46.4c-.56.51-1.18 1.08-2.58.79m4.46-3.78-1.32.42 1.48.58-.2 1.55 1-1.07 1.46.3-.99-1.15.88-1.18-1.22.26-.86-.97z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Libya';

const C = /* @__PURE__ */ createFlagComponent('ly', 'Libya', __inner);

export default C;
