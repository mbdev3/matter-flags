import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#2e42a5\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><g clip-path=\"url(#b)\"><path fill=\"#2e42a5\" d=\"M0 0h18v14H0z\"/><path fill=\"#f7fcff\" d=\"m-2 13 3.96 1.74L18.09 1.89 20.18-.7l-4.24-.58-6.58 5.53L4.06 8z\"/><path fill=\"#f50100\" d=\"m-1.46 14.22 2.02 1L19.43-.92H16.6z\"/><path fill=\"#f7fcff\" d=\"m20 13-3.96 1.74L-.09 1.89-2.18-.7l4.24-.58 6.58 5.53L13.94 8z\"/><path fill=\"#f50100\" d=\"m19.87 13.87-2.02 1.01-8.04-6.92-2.38-.77-9.81-7.87H.45L10.26 7l2.6.93z\"/><path fill=\"#f50100\" fill-rule=\"evenodd\" d=\"M9.98 0h-2v6H0v2h7.98v6h2V8H18V6H9.98z\" clip-rule=\"evenodd\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M6.48 0h5v4.5H18v5h-6.52l.02 4.5h-5l-.02-4.5H0v-5h6.48zm1.5 6H0v2h7.98v6h2V8H18V6H9.98V0h-2z\" clip-rule=\"evenodd\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath><clipPath id=\"b\"><path fill=\"#fff\" d=\"M0 0h18v14H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Saint Helena, Ascension Island, Traistan da Cunha';

const C = /* @__PURE__ */ createFlagComponent('sh', 'Saint Helena, Ascension Island, Traistan da Cunha', __inner);

export default C;
