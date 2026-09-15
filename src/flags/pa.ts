import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#e31d1c\" d=\"M16 0v12h16V0zm7.02 19.15-2.3 1.42.9-2.39-1.96-1.8h2.37l1-2.6.75 2.6h2.38l-1.72 1.8.84 2.4z\"/><path fill=\"#2e42a5\" d=\"M9.02 8.36 6.72 9.8l.9-2.4-1.96-1.8h2.37l1-2.59.75 2.59h2.38l-1.72 1.8.84 2.4zM0 12v12h16V12z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('pa', 'Panama', __inner);

export default C;
