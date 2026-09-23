import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f50101\" fill-rule=\"evenodd\" d=\"M32 0H0v6h32zm0 18H0v6h32z\" clip-rule=\"evenodd\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 6h32v12H0z\" clip-rule=\"evenodd\"/><path fill=\"#52ab0b\" fill-rule=\"evenodd\" d=\"M21.51 12.51c.08.87-3.12-.36-3.12 0 0 .34 3.43.95 3.42 1.73 0 .77-4.06-.23-3.15.12s2.86 1.19 2.64 1.71c-.47 1.11-3.63-.77-3.89-.4-.42.6 2.33 2 2.3 2.13-.04.26-1.87-.4-2.3.13-.34-.1-.5-.56-.6-.62l-.68-8.72s.6 8.21-.17 8.45c-.78.23-2.94.95-3 .6-.02-.14 2.6-1.37 2.17-1.97-.3-.44-3.47 1.13-3.67.22-.9-.65 2.91-1.21 2.91-1.87s-3.48.78-3.07-.14 3.2-1.25 3.26-1.38c.1-.23-3.1.36-3.1 0 0-.69 1.91-.82 3.1-1.44.07-.7-2.88.7-3.1.13s3.77-2.03 3.67-2.15c-.15-.18-3.37.63-2.84.2 1.03-.82 3.04-1.95 3.5-2.25 0 0 .06-.12.12-.08l.13-.08s0 .71-.01.16c-.01-.56 4.7 1.87 4.76 2.48.06.72-2.92-.54-2.85.17.6.37 2.33 1.1 3.04 1.42.32.14-2.38-.3-2.32-.09.15.57 2.78.64 2.85 1.54\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Lebanon';

const C = /* @__PURE__ */ createFlagComponent('lb', 'Lebanon', __inner);

export default C;
