import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#e31d1c\" d=\"M12 0h8v8h12v8H20v8h-8v-8H0V8h12z\"/><path fill=\"#feca00\" d=\"m13 3.05 1 1.75V10H6.87v-.06l-1.76-1v5.97L6.77 14H14v5.05l-1 1.76h5.97L18 19.05V14h7.2l1.67.9V8.96l-1.76 1V10H18V4.8l.97-1.75z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('gg', 'Guernsey', __inner);

export default C;
