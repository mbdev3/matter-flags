import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#2e42a5\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><g clip-path=\"url(#b)\"><path fill=\"#2e42a5\" d=\"M0 0h18v14H0z\"/><path fill=\"#f7fcff\" d=\"m-2 13 3.96 1.74L18.09 1.89 20.18-.7l-4.24-.58-6.58 5.53L4.06 8z\"/><path fill=\"#f50100\" d=\"m-1.46 14.22 2.02 1L19.43-.92H16.6z\"/><path fill=\"#f7fcff\" d=\"m20 13-3.96 1.74L-.09 1.89-2.18-.7l4.24-.58 6.58 5.53L13.94 8z\"/><path fill=\"#f50100\" d=\"m19.87 13.87-2.02 1.01-8.04-6.92-2.38-.77-9.81-7.87H.45L10.26 7l2.6.93z\"/><path fill=\"#f50100\" fill-rule=\"evenodd\" d=\"M9.98 0h-2v6H0v2h7.98v6h2V8H18V6H9.98z\" clip-rule=\"evenodd\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M6.48 0h5v4.5H18v5h-6.52l.02 4.5h-5l-.02-4.5H0v-5h6.48zm1.5 6H0v2h7.98v6h2V8H18V6H9.98V0h-2z\" clip-rule=\"evenodd\"/></g><g fill=\"#f7fcff\" clip-path=\"url(#c)\"><path d=\"m9 20.5-1.3 1.2.13-1.76-1.75-.27 1.46-1-.89-1.54 1.7.52L9 16l.65 1.65 1.7-.52-.89 1.54 1.46 1-1.75.27.13 1.76zM22 13l-.87.8.09-1.18-1.17-.17.98-.67-.6-1.03 1.14.35L22 10l.43 1.1 1.13-.35-.59 1.03.98.67-1.17.17.09 1.18zm2-8-.87.8.09-1.18-1.17-.17.98-.67-.6-1.03 1.14.35L24 2l.43 1.1 1.13-.35-.59 1.03.98.67-1.17.17.09 1.18zm5 4-.87.8.09-1.18-1.17-.17.98-.67-.6-1.03 1.14.35L29 6l.43 1.1 1.13-.35-.59 1.03.98.67-1.17.17.09 1.18zm-4 13-.87.8.09-1.18-1.17-.18.98-.66-.6-1.03 1.14.35L25 19l.43 1.1 1.13-.35-.59 1.03.98.66-1.17.18.09 1.18zm3.5-7.75-.88.46.17-.98-.72-.7.99-.14.44-.89.44.9.99.14-.72.7.17.97z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath><clipPath id=\"b\"><path fill=\"#fff\" d=\"M0 0h18v14H0z\"/></clipPath><clipPath id=\"c\"><path fill=\"#fff\" d=\"M6 2h25v21H6z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Australia';

const C = /* @__PURE__ */ createFlagComponent('au', 'Australia', __inner);

export default C;
