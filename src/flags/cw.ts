import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#2e42a5\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#f7fcff\" d=\"M4.25 6.15 2.27 7.2l.96-1.87L2 3.96l1.52-.05L4.25 2l.56 1.9 1.78.06-1.28 1.37.82 1.87zm7.1 4.93L8.9 12.1l.96-2.57L7.73 7.8h2.55L11.35 5l.82 2.79h2.56L12.9 9.53l.9 2.57z\"/><path fill=\"#f9e813\" d=\"M0 14v4h32v-4z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('cw', 'Curaçao', __inner);

export default C;
