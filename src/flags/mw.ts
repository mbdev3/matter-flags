import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#e11c1b\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#272727\" d=\"M0 0v10h32V0z\"/><path fill=\"#5eaa22\" d=\"M0 16v8h32v-8z\"/><path fill=\"#e11c1b\" d=\"M4.63 8.13h.1l-.15-.03zm2.93 0 .16-.3L5.43 6.3l2.7.88q.23-.31.49-.61l-1.99-1.9L9.16 6q.28-.27.58-.51l-1.6-2.22 2.27 1.74q.31-.22.65-.4L9.9 2.14l1.92 2.1q.34-.16.7-.28l-.65-2.67 1.48 2.4.73-.16-.11-2.76.99 2.63q.36-.04.73-.06L16.14.6l.45 2.74q.38.01.74.06L18.3.77l-.1 2.76q.36.07.72.17l1.48-2.4-.65 2.66.7.28 1.92-2.1-1.16 2.49q.33.18.65.4l2.27-1.75-1.61 2.23q.3.24.58.5l2.54-1.32-2 1.9.48.6 2.72-.88-2.3 1.53.15.29h-1.96a8.2 8.2 0 0 0-6.66-3.14 8.2 8.2 0 0 0-6.66 3.14zm3 0a7.8 7.8 0 0 1 5.56-2.18c2.27 0 4.28.85 5.56 2.18zm16.99 0h.1l.06-.03zm.73 3.81\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Malawi';

const C = /* @__PURE__ */ createFlagComponent('mw', 'Malawi', __inner);

export default C;
