import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#3d58db\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#c51918\" stroke=\"#f7fcff\" stroke-width=\"2\" d=\"M0 5h-1v14h34V5z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M10 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10\" clip-rule=\"evenodd\"/><path fill=\"#c51918\" fill-rule=\"evenodd\" d=\"m10 13.87-2.72 1.89.96-3.17-2.64-2 3.3-.06L10 7.4l1.08 3.13 3.31.06-2.64 2 .96 3.17z\" clip-rule=\"evenodd\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('kp', 'Korea (the Democratic People\'s Republic of)', __inner);

export default C;
