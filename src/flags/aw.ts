import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#5ba3da\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"red\" stroke=\"#f7fcff\" stroke-width=\".35\" d=\"M5.77 7.96 1.4 7.03l4.44-.87 1.28-4.6 1.01 4.56 3.96.92-3.91.92-1.13 3.74z\"/><path fill=\"#fad615\" d=\"M32 14H0v2h32zm0 4H0v2h32z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('aw', 'Aruba', __inner);

export default C;
