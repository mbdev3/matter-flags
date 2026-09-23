import { createFlagComponent } from '../createFlag.js';

const __inner = "<g transform=\"translate(0 2.4) scale(0.168)\"><path fill=\"#fff\" d=\"M0 0h190.5v114.3H0z\"/><path fill=\"#071d49\" d=\"M190.5 0v46.2l-19-11-9.6 5.5-28.6-16.5-9.5 5.5-28.6-16.5-28.5 16.5-9.5-5.5-28.6 16.5-9.5-5.5L0 46.2V0z\"/><path fill=\"#071d49\" d=\"M128.2 76.2V38.1l-33-19-33 19v38.1l33 19z\"/><g fill=\"#ffb81d\"><path d=\"m95.2 22.5-30 17.3v34.7l30 17.3 30-17.3V39.8zm28.6 51.1L95.2 90.1 66.7 73.6v-33l28.5-16.4 28.6 16.5z\"/><path d=\"M105.6 40H84.9q-.7-.2-.3-.8 4.6-4.5 10.6-4.7c6-.2 7.7 1.8 10.7 4.7q.3.6-.3.8m4.7 7.4H80.2c-.6 0-1-.7-.7-1.2l2-3.2q.7-1 2-1.1H107q1.4 0 2.2 1l2 3.3a.8.8 0 0 1-.8 1.2m2.6 7.4H77.5a1 1 0 0 1-.8-1l1-3.3q.5-1.2 1.7-1.3h31.7q1.3.1 1.8 1.3l1 3.3q0 .9-.9 1m1.6 7.3H76a1 1 0 0 1-.8-.9l.6-3q.5-1.5 1.8-1.6H113q1.4.2 1.8 1.5l.6 3.1q0 .9-.8 1M99 69.5a1 1 0 0 1-.9-.8 3 3 0 0 0-2.9-2.9 3 3 0 0 0-2.8 3q-.1.7-.8.7h-17a1 1 0 0 1-.8-.9l.5-3q.4-1.6 1.9-1.6h38.1q1.6.1 1.9 1.6l.5 3q0 .9-.8 1z\"/></g><g stroke-width=\".3\"><path fill=\"#aa0200\" d=\"M190.5 79.1v35.2H0V79.1h57.2l38 22 38.2-22z\"/><path fill=\"#fff\" d=\"m95.3 74.4 1.1 3.6h3.9l-3.1 2.3 1.1 3.6-3-2.2-3.1 2.2 1.1-3.6-3-2.3H94z\"/></g></g>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Utah';

const C = /* @__PURE__ */ createFlagComponent('us-ut', 'Utah', __inner);

export default C;
