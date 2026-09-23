import { createFlagComponent } from '../createFlag.js';

const __inner = "<g transform=\"translate(0 2.4) scale(0.032)\"><path fill=\"#52c9e8\" d=\"M0 0h1000v600H0z\"/><path fill=\"#002d5d\" d=\"M0 0h560L390 300l170 300H0Z\"/><g fill=\"#fff\"><g id=\"b\"><path id=\"a\" d=\"M210 190v90l45 20 45-20z\" transform=\"rotate(23 210 190)\"/><use xlink:href=\"#a\" transform=\"rotate(180 210 300)\"/></g><use xlink:href=\"#b\" transform=\"rotate(45 210 300)\"/><use xlink:href=\"#b\" transform=\"rotate(135 210 300)\"/><use xlink:href=\"#b\" transform=\"rotate(270 210 300)\"/></g></g>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Minnesota';

const C = /* @__PURE__ */ createFlagComponent('us-mn', 'Minnesota', __inner);

export default C;
