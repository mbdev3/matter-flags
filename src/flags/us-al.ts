import { createFlagComponent } from '../createFlag.js';

const __inner = "<rect width=\"32\" height=\"24\" fill=\"#fefefe\"/><g transform=\"translate(0 1.333) scale(0.053)\"><path fill=\"#fff\" d=\"M0 0h600v400H0z\"/><path stroke=\"#b10021\" stroke-width=\"68\" d=\"m0 0 600 400M0 400 600 0\"/></g>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Alabama';

const C = /* @__PURE__ */ createFlagComponent('us-al', 'Alabama', __inner);

export default C;
