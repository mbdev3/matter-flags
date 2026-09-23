import { createFlagComponent } from '../createFlag.js';

const __inner = "<rect width=\"32\" height=\"24\" fill=\"#fefefe\"/><g transform=\"translate(0 4) scale(0.016)\"><path fill=\"#fff\" d=\"M0 0h2000v1000H0z\"/><path fill=\"#e81b39\" d=\"M0 300h2000v200H0zm0 300h2000v200H0z\"/><g id=\"d\" fill=\"#e81b39\" transform=\"translate(450 160)scale(2.62866)\"><g id=\"b\"><path id=\"a\" d=\"M0-40V0h20z\" transform=\"rotate(18 0 -40)\"/><use xlink:href=\"#a\" transform=\"scale(-1 1)\"/></g><g id=\"c\"><use xlink:href=\"#b\" transform=\"rotate(72)\"/><use xlink:href=\"#b\" transform=\"rotate(216)\"/></g><use xlink:href=\"#c\" transform=\"rotate(72)\"/></g><use xlink:href=\"#d\" transform=\"translate(550)\"/><use xlink:href=\"#d\" transform=\"translate(1100)\"/></g>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'District of Columbia';

const C = /* @__PURE__ */ createFlagComponent('us-dc', 'District of Columbia', __inner);

export default C;
