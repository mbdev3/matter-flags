import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#c51918\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#2e42a5\" d=\"M0 0v14h16V0z\"/><path fill=\"#feffff\" d=\"m3.57 7.77-1.06.64.24-1.25-.89-.93 1.2-.05.5-1.17.51 1.17h1.2l-.89.98.27 1.25zm8 0-1.06.64.24-1.25-.89-.93 1.2-.05.5-1.17.51 1.17h1.2l-.89.98.27 1.25zm-4.1-3.63-1 .6.23-1.18-.84-.87L7 2.64l.48-1.1.47 1.1h1.12l-.82.92.25 1.18zm1.08 4.29-.63.37.14-.73-.51-.55.7-.03.3-.69.3.69h.7l-.52.58.15.73zm-1.15 4.4-1.49.9.34-1.76-1.24-1.32 1.68-.07.72-1.65.71 1.65h1.69l-1.25 1.39.38 1.76z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Samoa';

const C = /* @__PURE__ */ createFlagComponent('ws', 'Samoa', __inner);

export default C;
