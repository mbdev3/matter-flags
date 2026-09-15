import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0h32v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#ffd221\" fill-rule=\"evenodd\" d=\"m16.06 15.98-5.15 3.27 1.73-5.73-3.68-3.74 5.07-.11L16.27 4l2.04 5.73 5.06.09-3.8 3.81 1.77 5.46z\" clip-rule=\"evenodd\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('vn', 'Vietnam', __inner);

export default C;
