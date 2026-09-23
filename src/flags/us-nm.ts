import { createFlagComponent } from '../createFlag.js';

const __inner = "<rect width=\"32\" height=\"24\" fill=\"#fed602\"/><g transform=\"translate(0 1.333) scale(0.018)\"><path fill=\"gold\" d=\"M0 0h1800v1200H0z\"/><path stroke=\"#bf0a30\" stroke-linecap=\"round\" stroke-width=\"27\" d=\"M957 353v494m-38-533v573m-38-573v573m-37-534v494M653 544h494m-533 37h573m-573 38h573m-534 38h494\"/><circle cx=\"900\" cy=\"600\" r=\"93\" fill=\"gold\" stroke=\"#bf0a30\" stroke-width=\"14\"/></g>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'New Mexico';

const C = /* @__PURE__ */ createFlagComponent('us-nm', 'New Mexico', __inner);

export default C;
