import { createFlagComponent } from '../createFlag.js';

const __inner = "<g transform=\"translate(0 4) scale(0.667)\"><clipPath id=\"a\"><path d=\"M0 0h24v14H0z\"/></clipPath><clipPath id=\"b\"><path d=\"M0 0v6h22v6h-1zm21 0H10.5v13H0v-1z\"/></clipPath><path d=\"M0 0h48v24H0z\"/><path stroke=\"#fff\" stroke-width=\"2.4\" d=\"m0 0 28 16M21 0 0 12\" clip-path=\"url(#a)\"/><path stroke=\"#c8102e\" stroke-width=\"1.6\" d=\"m0 0 28 16M21 0 0 12\" clip-path=\"url(#b)\"/><path stroke=\"#fff\" stroke-width=\"4\" d=\"M10.5 0v14M0 6h24\"/><path fill=\"#fff\" d=\"M48 0v4H22l-1-1V0zm0 9v4H21V9zm0 9v6H0v-6z\"/><path fill=\"#c8102e\" d=\"M48 3v4.2H0V4.8h21V3zm0 9v3H0v-3zm0 9v3H0v-3zM9.3 0h2.4v13H9.3z\"/><path d=\"M48 6v2.5H21V6z\"/></g>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Hawaii';

const C = /* @__PURE__ */ createFlagComponent('us-hi', 'Hawaii', __inner);

export default C;
