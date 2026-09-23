import { createFlagComponent } from '../createFlag.js';

const __inner = "<g transform=\"translate(16 12) scale(0.056)\"><path fill=\"#00205b\" d=\"M-288-192h576v384h-576z\"/><path fill=\"#bf0a30\" d=\"M-288-192h576V0h-576z\"/><path id=\"a\" fill=\"#fed700\" d=\"M288-147v80L0 0zm-149-45h83L0 0zm-112 0h48L0 0z\"/><use xlink:href=\"#a\" transform=\"scale(-1 1)\"/><path fill=\"#ce5c17\" d=\"M0-96 62 96-101-23h202L-62 96z\"/></g>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Arizona';

const C = /* @__PURE__ */ createFlagComponent('us-az', 'Arizona', __inner);

export default C;
