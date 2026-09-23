import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#3ca5d9\" d=\"M0 0v14h32V0z\"/><path fill=\"#5a962a\" d=\"M0 18v6h32v-6z\"/><path fill=\"#ffdc17\" d=\"M24.08 11.87h-.18l-.6 1.97-.14-2.06-.18-.04-1.04 1.78.35-2.03-.17-.08-1.43 1.5.82-1.9-.15-.12-1.74 1.13 1.23-1.65-.11-.15-1.95.69 1.58-1.32-.08-.18-2.05.23 1.84-.92-.03-.2-2.06-.23L20 7.8l.01-.2-1.93-.7h2.06l.06-.2-1.72-1.12 2 .46.1-.17-1.4-1.49 1.84.91.14-.14-1.03-1.77 1.59 1.3.16-.1-.59-1.96 1.24 1.64.19-.07-.12-2.04.83 1.88.2-.02.36-2.02.37 2.02.19.02.82-1.88-.11 2.05.18.06 1.24-1.64-.58 1.97.16.1 1.59-1.31-1.03 1.78.13.14 1.86-.92-1.42 1.5.1.16 2.01-.46-1.73 1.13.06.18h2.07l-1.95.72.01.18 2.02.49-2.06.24-.03.18 1.85.93-2.07-.23-.07.17 1.59 1.33-1.96-.7-.11.15 1.24 1.66-1.75-1.13-.14.12.82 1.9-1.44-1.5-.16.08.35 2.03L25 11.74l-.18.04-.12 2.06zm-.13-1.46a2.5 2.5 0 0 0 2.53-2.5c0-1.37-1.13-2.5-2.53-2.5a2.5 2.5 0 0 0-2.54 2.5c0 1.39 1.14 2.5 2.54 2.5M25.4 8a1.43 1.43 0 1 1-2.85 0 1.43 1.43 0 0 1 2.85 0\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Rwanda';

const C = /* @__PURE__ */ createFlagComponent('rw', 'Rwanda', __inner);

export default C;
