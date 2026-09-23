import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#bf2714\" d=\"M0 0v8h32V0z\"/><path fill=\"#272727\" d=\"M0 16v8h32v-8z\"/><path fill=\"#009c4e\" d=\"M5.34 12.81C6.24 14.11 5 15 5 15s1.09 0 1.5-.87h8.92V12.2s-.18-.92-.98-.92c-.79 0-.97.92-.97.92h-3.14l3.04-2.68-.6-.52-3.36 2.98v.63h4.78v-.37s.03-.22.25-.22c.23 0 .17.22.17.22v.79H8.58v-1.09l-.65.3v.79s-.8-.22-1.3-.22c-.51 0-.54-.57-.54-.57zm12.1.08.5 1.21h-1.95V9.21l.82.27v3.4zm9.07 0L27 14.1h-1.95V9.21l.82.27v3.4zm-2.4-3.63-.52.35v3.27h-.51v-2.62l-.85.49v2.13h-.57V11.4l-.65.42v.4s-1.24.08-1.24 1.84h4.33zm-16.62 5.7c.16 0 .29-.1.29-.24s-.13-.25-.29-.25-.28.1-.28.25c0 .13.13.25.28.25m14.42-5.32c-.22.3-.88 0-.88 0l1.89-.22c-.2.38-1 .22-1 .22\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Iraq';

const C = /* @__PURE__ */ createFlagComponent('iq', 'Iraq', __inner);

export default C;
