import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#3d58db\" fill-rule=\"evenodd\" d=\"M16 18.22c3.2 0 5.8-2.76 5.8-6.16S19.2 5.9 16 5.9s-5.8 2.76-5.8 6.16 2.6 6.16 5.8 6.16\" clip-rule=\"evenodd\"/><mask id=\"c\" width=\"12\" height=\"14\" x=\"10\" y=\"5\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M16 18.22c3.2 0 5.8-2.76 5.8-6.16S19.2 5.9 16 5.9s-5.8 2.76-5.8 6.16 2.6 6.16 5.8 6.16\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#c)\"><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M22 12.53s-.32-2.9-2.73-3.06-3.06 2.13-3.2 2.74c-.14.6-.5 2.22-3.03 2.22-2.54 0-2.77-4.11-2.77-4.11V5.47H22z\" clip-rule=\"evenodd\"/></g><path fill=\"#272727\" fill-rule=\"evenodd\" d=\"m7.3 2.05.91.83-4.24 4.95L3.06 7zM8.8 3.4l.92.83L5.64 9.1l-.92-.83zm2.43 2.18-.92-.82-4.1 4.91.92.83zM25.36 1.7l-.91.83 1.59 1.86.91-.82zm2.83 3.43-.92.83 1.59 1.86.91-.83zm-6.76.08.91-.82 1.59 1.86-.91.83zm3.73 2.6-.91.83 1.59 1.86.91-.82zM23 3.84l.91-.82 4.42 5.38-.92.82zm3.05 10.4-.92-.82-1.6 1.87.92.82zm-2.69 3.3-.92-.83-1.6 1.87.92.82zm4.69-1.5.92.82-1.6 1.87-.92-.83zm-1.64 4.19-.92-.83-1.6 1.87.92.83zm-2.44-2.25.92.83-1.67 2-.92-.83zm3.66-2.5-.92-.83-1.67 2 .92.83zM6.4 14.89l.92-.83 4.09 4.69-.92.82zm.96 4.1.91-.83 1.73 1.9-.92.82zm-3.05-2.3-.92.83 4.11 4.74.92-.83zm.65-.54.92-.82 1.5 1.75-.92.83z\" clip-rule=\"evenodd\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Korea (the Republic of)';

const C = /* @__PURE__ */ createFlagComponent('kr', 'Korea (the Republic of)', __inner);

export default C;
