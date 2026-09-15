import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#f7fcff\" d=\"M16 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16\"/><path fill=\"#e31d1c\" d=\"M17.4 17.65s-4.21-1.15-4.21-5.68S17.4 6.2 17.4 6.2a5.58 5.58 0 0 0-6.84 5.77c0 5.42 5.24 6.4 6.84 5.68M17.17 11l-2.1.76 2.26.79.07 2.1 1.37-1.63 2.26.16-1.63-1.33.98-1.91-1.91.64-1.33-1.66z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('tn', 'Tunisia', __inner);

export default C;
