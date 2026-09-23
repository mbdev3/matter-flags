import { createFlagComponent } from '../createFlag.js';

const __inner = "<rect width=\"32\" height=\"24\" fill=\"#02225a\"/><g transform=\"translate(0 1.333) scale(0.018)\"><path fill=\"#00205b\" d=\"M0 0h1800v1200H0\"/><path fill=\"#fff\" d=\"M0 400h1800v400H0\"/><path fill=\"#bf0a30\" d=\"M1131 750a400 400 0 1 1 0-300L760 600\"/><circle cx=\"760\" cy=\"600\" r=\"200\" fill=\"gold\"/></g>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Colorado';

const C = /* @__PURE__ */ createFlagComponent('us-co', 'Colorado', __inner);

export default C;
