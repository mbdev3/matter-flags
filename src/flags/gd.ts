import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#c51918\" fill-rule=\"evenodd\" d=\"M0 0h32v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"M6 6h20v12H6z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"20\" height=\"12\" x=\"6\" y=\"6\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M6 6h20v12H6z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#23875f\" d=\"m6 6 10 6-10 6zm20 0-10 6 10 6z\"/><path fill=\"#c51918\" d=\"M16 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8\"/><path fill=\"#feca00\" d=\"m15.93 13.31-2.07 1.44.66-2.46L13 10.72l2.06-.09.87-2.43.87 2.43h2.06l-1.52 1.66.76 2.31z\"/></g><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"m8.78 4.44 1.13-.7 1.18.63-.41-1.13.83-.8h-1.13l-.47-1.2-.48 1.2-1.12.03.83.77zm6 0 1.13-.7 1.18.63-.41-1.13.83-.8h-1.13l-.47-1.2-.48 1.2-1.12.03.83.77zm7.13-.7-1.13.7.36-1.2-.83-.77 1.12-.04.48-1.19.47 1.2h1.13l-.83.8.41 1.13zM8.78 22.17l1.13-.7 1.18.63-.41-1.13.83-.81h-1.13l-.47-1.2-.48 1.2-1.12.04.83.77zm7.13-.7-1.13.7.36-1.2-.83-.77 1.12-.04.48-1.2.47 1.2h1.13l-.83.8.41 1.14zm4.87.7 1.13-.7 1.18.63-.41-1.13.83-.81h-1.13l-.47-1.2-.48 1.2-1.12.04.83.77z\" clip-rule=\"evenodd\"/><path fill=\"#c51918\" fill-rule=\"evenodd\" d=\"M8.63 12.77s.54.48.84.64c.1-.38-.13-1.25-.13-1.25-.06-.2-.76-.58-.76-.58s-.2.66.05 1.2\" clip-rule=\"evenodd\"/><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"M9.2 13.93s-1.39-.65-1.53-1.56.16-2.37.16-2.37 2.25.51 2.4 1.6c.15 1.1-.36 1.79-.36 1.79s-.52-1.34-1-1.48c0 0 0 1.32.33 2.02\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

/** Standalone 32x24 SVG document. For react-native-svg, data URIs, <img src>. */
export const svg: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">${__inner}</svg>`;

/** Country / region name. */
export const name = 'Grenada';

const C = /* @__PURE__ */ createFlagComponent('gd', 'Grenada', __inner);

export default C;
