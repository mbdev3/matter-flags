import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#00268d\" fill-rule=\"evenodd\" d=\"M0 0h32v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#00268d\" stroke=\"#e31d1c\" stroke-width=\"2\" d=\"M1 1h30v22H1z\"/><path fill=\"#e31d1c\" d=\"M15 0h2v24h-2z\"/><path fill=\"#e31d1c\" d=\"M0 13v-2h32v2z\"/><path fill=\"#059334\" d=\"M11.6 16H25l-1.42-1.28s-2.83-2.52-3-2.64c-.2-.11-.5-.16-.84.2-.34.37-.53-.2-.82-.2s-.4 0-.82.48l-1.9 2.16H14s-.36-.27-.57-.18-1.4-1.1-1.82-1.18c-.42-.1-.7.32-.7.65s-.2-.3-.6-.12c-.4.19-.28.65-.28.65S11.34 16 11.61 16\"/><path fill=\"#feda00\" fill-rule=\"evenodd\" d=\"m15.5 11.3-.92.7.34-1.15-.92-.71h1.14L15.5 9l.39 1.14H17l-.91.7.35 1.16z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Sint Eustatius';

const C = /* @__PURE__ */ createFlagComponent('bq-se', 'Sint Eustatius', __inner);

export default C;
