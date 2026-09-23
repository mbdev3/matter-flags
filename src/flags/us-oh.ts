import { createFlagComponent } from '../createFlag.js';

const __inner = "<rect width=\"32\" height=\"24\" fill=\"#02225a\"/><g transform=\"translate(0 2.154) scale(1.231)\"><defs><clipPath id=\"d\"><path d=\"M0 16V0l26 3-6 5 6 5z\"/></clipPath><g id=\"e\" fill=\"#fff\" transform=\"translate(3.94)scale(.625)\"><g id=\"c\"><g id=\"b\"><path id=\"a\" d=\"M1 0H0v.5z\" transform=\"rotate(18 1 0)\"/><use xlink:href=\"#a\" transform=\"scale(1 -1)\"/></g><use xlink:href=\"#b\" transform=\"rotate(72)\"/></g><use xlink:href=\"#b\" transform=\"rotate(-72)\"/><use xlink:href=\"#c\" transform=\"rotate(144)\"/></g></defs><g fill=\"#fff\" stroke=\"#bf0a30\" clip-path=\"url(#d)\"><path stroke-width=\"4\" d=\"M26 3 0 0v16l26-3\"/><path stroke-width=\"2\" d=\"M0 8h26\"/></g><path fill=\"#00205b\" d=\"M0 0v16l16-8z\"/><g transform=\"translate(4.94 8)\"><circle r=\"3\" fill=\"#fff\"/><circle r=\"2\" fill=\"#bf0a30\"/><use xlink:href=\"#e\" x=\"4\"/><g id=\"f\"><use xlink:href=\"#e\"/><use xlink:href=\"#e\" x=\"2\" transform=\"rotate(-9.65)\"/><use xlink:href=\"#e\" x=\"2\" transform=\"rotate(9.65)\"/></g><g id=\"h\"><use xlink:href=\"#e\" transform=\"rotate(63.43)\"/><use xlink:href=\"#e\" transform=\"rotate(92.58)\"/><use xlink:href=\"#f\" transform=\"rotate(121.72)\"/><use xlink:href=\"#e\" transform=\"rotate(150.86)\"/></g><use xlink:href=\"#e\" transform=\"rotate(180)\"/><use xlink:href=\"#h\" transform=\"scale(1 -1)\"/></g></g>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Ohio';

const C = /* @__PURE__ */ createFlagComponent('us-oh', 'Ohio', __inner);

export default C;
