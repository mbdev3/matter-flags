import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#73be4a\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#69f\" fill-rule=\"evenodd\" d=\"M0-2v14h32V-2z\" clip-rule=\"evenodd\"/></g><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24l18-12z\" clip-rule=\"evenodd\"/><mask id=\"c\" width=\"18\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24l18-12z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#c)\"><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M7 14.07 5.13 15.2l.43-2.2L4 11.35l2.1-.1L7 9.2l.9 2.06H10L8.45 13l.46 2.2z\" clip-rule=\"evenodd\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('dj', 'Djibouti', __inner);

export default C;
