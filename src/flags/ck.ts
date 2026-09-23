import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#2e42a5\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><g clip-path=\"url(#b)\"><path fill=\"#2e42a5\" d=\"M0 0h18v14H0z\"/><path fill=\"#f7fcff\" d=\"m-2 13 3.96 1.74L18.09 1.89 20.18-.7l-4.24-.58-6.58 5.53L4.06 8z\"/><path fill=\"#f50100\" d=\"m-1.46 14.22 2.02 1L19.43-.92H16.6z\"/><path fill=\"#f7fcff\" d=\"m20 13-3.96 1.74L-.09 1.89-2.18-.7l4.24-.58 6.58 5.53L13.94 8z\"/><path fill=\"#f50100\" d=\"m19.87 13.87-2.02 1.01-8.04-6.92-2.38-.77-9.81-7.87H.45L10.26 7l2.6.93z\"/><path fill=\"#f50100\" fill-rule=\"evenodd\" d=\"M9.98 0h-2v6H0v2h7.98v6h2V8H18V6H9.98z\" clip-rule=\"evenodd\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M6.48 0h5v4.5H18v5h-6.52l.02 4.5h-5l-.02-4.5H0v-5h6.48zm1.5 6H0v2h7.98v6h2V8H18V6H9.98V0h-2z\" clip-rule=\"evenodd\"/></g><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"m23.67 13.86.72-.51.7.5-.21-.9.56-.57h-.72l-.33-.74-.28.74h-.84l.64.57zm2.81 1.25.73-.5.7.5-.22-.9.56-.58h-.71l-.34-.74-.28.74h-.84l.64.58zM28.04 17l-.72.5.24-.9-.64-.58h.84l.28-.73.33.73h.72l-.56.58.22.9zm-1.72 2.78.73-.51.7.5-.22-.9.57-.57h-.72l-.33-.74-.29.74h-.84l.65.57zm-1.82.74-.73.5.25-.9-.65-.57h.85l.28-.74.33.74h.72l-.57.57.22.9zm-3.1-.7.73-.51.7.5-.22-.9.56-.57h-.71l-.34-.74-.28.74H21l.65.57zm-.54-2.8-.73.5.25-.9-.65-.58h.85l.28-.74.33.74h.72l-.57.58.22.9zm.19-1.85.72-.5.7.5-.21-.9.56-.58h-.72l-.33-.74-.28.74h-.84l.64.57z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath><clipPath id=\"b\"><path fill=\"#fff\" d=\"M0 0h18v14H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Cook Island';

const C = /* @__PURE__ */ createFlagComponent('ck', 'Cook Island', __inner);

export default C;
