import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#c51918\" fill-rule=\"evenodd\" d=\"M0 12h32v12H0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"12\" x=\"0\" y=\"12\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 12h32v12H0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16\" clip-rule=\"evenodd\"/></g><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0h32v12H0z\" clip-rule=\"evenodd\"/><mask id=\"c\" width=\"32\" height=\"12\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0h32v12H0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#c)\"><path fill=\"#c51918\" fill-rule=\"evenodd\" d=\"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16\" clip-rule=\"evenodd\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('gl', 'Greenland', __inner);

export default C;
