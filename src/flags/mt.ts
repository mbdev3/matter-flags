import { createFlagComponent } from '../createFlag.js';

const __inner = "<path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><mask id=\"a\" fill=\"#fff\"><path fill-rule=\"evenodd\" d=\"M10 4H6v3a1 1 0 0 0-.77 1H2v4h3.33a1 1 0 0 0 .67.54V16h4v-3.45a1 1 0 0 0 .73-.55H14V8h-3.17v-.03a1 1 0 0 0-.83-.99z\" clip-rule=\"evenodd\"/></mask><path fill=\"#a0a0a0\" fill-rule=\"evenodd\" d=\"M10 4H6v3a1 1 0 0 0-.77 1H2v4h3.33a1 1 0 0 0 .67.54V16h4v-3.45a1 1 0 0 0 .73-.55H14V8h-3.17v-.03a1 1 0 0 0-.83-.99z\" clip-rule=\"evenodd\"/><path fill=\"#feca00\" d=\"M6 4V3H5v1zm4 0h1V3h-1zM6 7l.23.97.77-.19V7zm-.77 1v1h1.04l-.04-1.03zM2 8V7H1v1zm0 4H1v1h1zm3.33 0 .9-.44-.27-.56h-.63zm.67.54h1v-.8l-.77-.17zM6 16H5v1h1zm4 0v1h1v-1zm0-3.45-.17-.98-.83.14v.84zm.73-.55v-1h-.62l-.28.56zM14 12v1h1v-1zm0-4h1V7h-1zm-3.17 0-1-.03L9.8 9h1.03zM10 6.98H9v.84l.83.15zM6 5h4V3H6zm1 2V4H5v3zm-.77.97-.46-1.95a2 2 0 0 0-1.54 1.95zm0 0h-2v.06zM2 9h3.23V7H2zm1 3V8H1v4zm2.33-1H2v2h3.33zm.9.57-1.8.87a2 2 0 0 0 1.34 1.07zM7 16v-3.46H5V16zm3-1H6v2h4zm-1-2.45V16h2v-3.45zm1.17.99a2 2 0 0 0 1.46-1.1l-1.8-.87zM14 11h-3.27v2H14zm-1-3v4h2V8zm-2.17 1H14V7h-3.17zm-1-1.03 2 .06v-.06zm0 0h2a2 2 0 0 0-1.66-1.98zM9 4v2.98h2V4z\" mask=\"url(#a)\"/><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M16 0h16v24H16z\" clip-rule=\"evenodd\"/>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Malta';

const C = /* @__PURE__ */ createFlagComponent('mt', 'Malta', __inner);

export default C;
