import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#3195f9\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#e31d1c\" stroke=\"#feca00\" stroke-width=\"2.5\" d=\"m-1.82 25.44.7 1.04 1.03-.7 36.26-24.2 1.04-.7-.7-1.03-2.21-3.33-.7-1.04-1.04.7-36.26 24.2-1.04.7.7 1.03z\"/><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"m4.93 8.6-3.48 2.42 1.1-4.14L0 4.24l3.46-.15L4.93 0 6.4 4.1h3.46L7.3 6.87l1.28 3.9z\" clip-rule=\"evenodd\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Democratic Republic of Congo';

const C = /* @__PURE__ */ createFlagComponent('cd', 'Democratic Republic of Congo', __inner);

export default C;
