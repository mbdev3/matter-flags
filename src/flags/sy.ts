import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0h32v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#409100\" fill-rule=\"evenodd\" d=\"M9 13.25 7.75 14l.29-1.47L7 11.43l1.4-.06L9 10l.6 1.37H11l-1.04 1.16.32 1.47zm14 0-1.25.75.29-1.47-1.04-1.1 1.4-.06L23 10l.6 1.37H25l-1.04 1.16.32 1.47z\" clip-rule=\"evenodd\"/><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M0 0v8h32V0z\" clip-rule=\"evenodd\"/><path fill=\"#272727\" fill-rule=\"evenodd\" d=\"M0 16v8h32v-8z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Syrian Arab Republic (the)';

const C = /* @__PURE__ */ createFlagComponent('sy', 'Syrian Arab Republic (the)', __inner);

export default C;
