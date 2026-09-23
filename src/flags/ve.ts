import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#2e42a5\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#feca00\" d=\"M0 0v8h32V0z\"/><path fill=\"#e31d1c\" d=\"M0 16v8h32v-8z\"/><path fill=\"#f7fcff\" d=\"m12.74 11.86.98-.56 1.1.56-.4-1.13.83-.84H14.2l-.48-1.07-.41 1.07h-1.23l.92.82h-1.04l-.48-1.07-.41 1.07H9.84l.94.83-.18.73h-.78l-.49-1.07-.41 1.07H7.69l.94.83-.17.7H8.1l-.48-1.07-.41 1.08H5.99l.94.83-.28 1.13.98-.56 1.1.56-.4-1.13.83-.83h-.05l.22-.13 1.1.56-.39-1.14.47-.47-.01.05.98-.56 1.1.56-.4-1.14.83-.82zm6.48-.04-.98-.56-1.1.56.4-1.14-.83-.83h1.05l.48-1.07.41 1.07h1.23l-.92.82H20l.48-1.07.42 1.07h1.23l-.95.83.18.73h.79l.48-1.08.42 1.08h1.22l-.94.83.18.7h.34l.48-1.07.42 1.07h1.23l-.94.83.28 1.14-.99-.56-1.1.56.4-1.14-.83-.83h.06l-.23-.13-1.1.56.4-1.13-.48-.48.02.05-.99-.55-1.1.55.4-1.13-.82-.83-.02.01z\"/><path fill=\"#f7fcff\" d=\"m15.83 10.53-.98.56.28-1.13-.94-.83h1.23l.41-1.08.49 1.08h1.04l-.82.83.4 1.13z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Venezuela (Bolivarian Republic of)';

const C = /* @__PURE__ */ createFlagComponent('ve', 'Venezuela (Bolivarian Republic of)', __inner);

export default C;
