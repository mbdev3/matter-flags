import { createFlagComponent } from '../createFlag.js';

const __inner = "<rect width=\"32\" height=\"24\" fill=\"#ce0202\"/><g transform=\"translate(0 2.4) scale(0.133)\"><path fill=\"#c00\" d=\"M0 0h240v144H0z\"/><path fill=\"#fff\" d=\"M222 0h18v144h-18z\"/><path fill=\"#002d65\" d=\"M225 0h15v144h-15z\"/><path fill=\"#002d65\" d=\"M225 0h15v144h-15z\"/><g transform=\"translate(111 72)\"><circle r=\"39\" fill=\"#fff\"/><circle r=\"36\" fill=\"#002d65\"/><g id=\"c\" fill=\"#fff\" transform=\"rotate(18 -58.4 -9.3)\"><g id=\"b\"><path id=\"a\" d=\"M0-17V0h8.5\" transform=\"rotate(18 0 -17)\"/><use xlink:href=\"#a\" transform=\"scale(-1 1)\"/></g><use xlink:href=\"#b\" transform=\"rotate(72)\"/><use xlink:href=\"#b\" transform=\"rotate(144)\"/><use xlink:href=\"#b\" transform=\"rotate(216)\"/><use xlink:href=\"#b\" transform=\"rotate(288)\"/></g><use xlink:href=\"#c\" transform=\"rotate(120)\"/><use xlink:href=\"#c\" transform=\"rotate(240)\"/></g></g>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Tennessee';

const C = /* @__PURE__ */ createFlagComponent('us-tn', 'Tennessee', __inner);

export default C;
