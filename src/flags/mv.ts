import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#c51918\" fill-rule=\"evenodd\" d=\"M0 0h32v22a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z\" clip-rule=\"evenodd\"/><path fill=\"#c51918\" fill-rule=\"evenodd\" d=\"M0 0h32v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#579d20\" fill-rule=\"evenodd\" d=\"M6 6h20v12H6z\" clip-rule=\"evenodd\"/><path stroke=\"#b6eb9a\" stroke-opacity=\".24\" stroke-width=\"2\" d=\"M7 7h18v10H7z\"/><mask id=\"b\" width=\"20\" height=\"12\" x=\"6\" y=\"6\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M6 6h20v12H6z\" clip-rule=\"evenodd\"/><path stroke=\"#fff\" stroke-width=\"2\" d=\"M7 7h18v10H7z\"/></mask><g mask=\"url(#b)\"><path fill=\"#f9fafa\" fill-rule=\"evenodd\" d=\"M16.03 12.46c-.01 3.07 2.4 4.7 2.4 4.7-2.75.33-4.59-2.17-4.59-4.67s2.5-4.56 4.59-5.49c0 0-2.38 2.4-2.4 5.46\" clip-rule=\"evenodd\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Maldives';

const C = /* @__PURE__ */ createFlagComponent('mv', 'Maldives', __inner);

export default C;
