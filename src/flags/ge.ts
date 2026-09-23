import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill=\"#e31d1c\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path d=\"M14 0h4v10h14v4H18v10h-4V14H0v-4h14z\"/><path d=\"m10 17.22 2.2-.22v2s-2.2-.14-2.2-.1l.2 2.1h-2l.16-2H6.2v-2l2.16.22L8.2 15h2zm0-12L12.2 5v2S10 6.86 10 6.9l.2 2.1h-2l.16-2H6.2V5l2.16.22L8.2 3h2zm14 0L26.2 5v2S24 6.86 24 6.9l.2 2.1h-2l.16-2H20.2V5l2.16.22L22.2 3h2zm0 12 2.2-.22v2s-2.2-.14-2.2-.1l.2 2.1h-2l.16-2H20.2v-2l2.16.22L22.2 15h2z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Georgia';

const C = /* @__PURE__ */ createFlagComponent('ge', 'Georgia', __inner);

export default C;
