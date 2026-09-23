import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"M0 0v8h32V0z\" clip-rule=\"evenodd\"/><path fill=\"#093\" fill-rule=\"evenodd\" d=\"M0 16v8h32v-8z\" clip-rule=\"evenodd\"/><path fill=\"#272727\" stroke=\"#fff\" stroke-width=\"2\" d=\"M0 7h-1v10h34V7z\"/></g><path fill=\"#f50100\" fill-rule=\"evenodd\" d=\"M0 0v24l18-12z\" clip-rule=\"evenodd\"/><mask id=\"c\" width=\"18\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24l18-12z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#c)\"><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"M8.07 14.35 4.29 17.4l1.73-4.07-2.98-2.87h3.52L8 7l1.54 3.46h3.5l-3.13 2.87 1.57 4.07z\" clip-rule=\"evenodd\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"m6.16 11.98-.64 2.14s2.16-.02 2.42.2c.78-.49 2.4-.2 2.4-.2l-.86-2.29s-1.1-.49-1.54-.22c-1.1-.25-1.78.37-1.78.37\" clip-rule=\"evenodd\"/><path fill=\"#000\" d=\"M11.56 15.22a.5.5 0 0 1-.8.6l-4.18-5.55a.5.5 0 0 1 .8-.6z\"/><path stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m6.97 9.84-.4-.48\"/><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M5.6 9.36 4.4 11.3l.6 1.04 1.38-2.05.25-.63-.25-.3zM4.04 15.1l.58.83 4.5-5.32.18.21 1.04-.98L12 8.04 10.34 9.4l-.54-.15-.5.78h-.5l-3.67 4.1z\" clip-rule=\"evenodd\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Mozambique';

const C = /* @__PURE__ */ createFlagComponent('mz', 'Mozambique', __inner);

export default C;
