import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M16.03 16.11a4.9 4.9 0 0 1-3.8-4.94 5.1 5.1 0 0 1 3.86-5.1 6.6 6.6 0 0 1 4.42.63c-.65-1.54-2.9-2.62-4.76-2.61-3.45 0-7.13 2.8-7.16 7.08-.03 4.43 3.94 6.96 7.43 6.95 2.8 0 4.13-1.92 4.4-2.73 0 0-2.25 1.25-4.4.72m4.87-5.78-2.13.78 2.4.85-.03 2.54 1.58-1.9 2.62.18L23.27 11l1.36-1.9-2.22.74-1.59-1.76z\" clip-rule=\"evenodd\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('tr', 'Turkey', __inner);

export default C;
