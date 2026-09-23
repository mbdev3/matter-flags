import { createFlagComponent } from '../createFlag.js';

const __inner = "<rect width=\"32\" height=\"24\" fill=\"#fefefe\"/><g transform=\"translate(0 1.333) scale(1.067)\"><title>Flag of Georgia</title><path fill=\"#fff\" d=\"M0 0h30v20H0z\"/><path d=\"M13 0h4v20h-4zM0 8h30v4H0z\"/><g id=\"c\"><g id=\"b\"><path id=\"a\" d=\"M5.8 1.95a5 5 0 0 0 1.4 0 10 10 0 0 0 0 4.1 5 5 0 0 0-1.4 0 10 10 0 0 0 0-4.1\"/><use xlink:href=\"#a\" transform=\"rotate(90 6.5 4)\"/></g><use xlink:href=\"#b\" x=\"17\"/></g><use xlink:href=\"#c\" y=\"12\"/></g>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Georgia';

const C = /* @__PURE__ */ createFlagComponent('us-ga', 'Georgia', __inner);

export default C;
