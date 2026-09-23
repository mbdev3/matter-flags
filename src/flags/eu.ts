import { createFlagComponent } from '../createFlag.js';

const __inner = "<rect width=\"32\" height=\"24\" fill=\"#003399\"/><g transform=\"translate(0 1.333) scale(0.036)\"><path fill=\"#039\" d=\"M0 0h900v600H0z\"/><g fill=\"#fc0\" transform=\"translate(450 300)\"><path id=\"a\" d=\"m0 162.5 22.04 67.84-57.7-41.93h71.32l-57.7 41.93z\"/><use xlink:href=\"#a\" y=\"-400\"/><g id=\"b\"><use xlink:href=\"#a\" transform=\"translate(-100 -26.8)\"/><use xlink:href=\"#a\" transform=\"translate(-173.2 -100)\"/><use xlink:href=\"#a\" transform=\"translate(-200 -200)\"/><use xlink:href=\"#a\" transform=\"translate(-173.2 -300)\"/><use xlink:href=\"#a\" transform=\"translate(-100 -373.2)\"/></g><use xlink:href=\"#b\" transform=\"scale(-1 1)\"/></g></g>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'European Union';

const C = /* @__PURE__ */ createFlagComponent('eu', 'European Union', __inner);

export default C;
