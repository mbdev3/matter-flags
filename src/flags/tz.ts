import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#3195f9\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#73be4a\" fill-rule=\"evenodd\" d=\"M0 0v24L32 0z\" clip-rule=\"evenodd\"/><path fill=\"#272727\" stroke=\"#ffd018\" stroke-width=\"2.5\" d=\"m-1.82 25.44.7 1.04 1.03-.7 36.26-24.2 1.04-.7-.7-1.03-2.21-3.33-.7-1.04-1.04.7-36.26 24.2-1.04.7.7 1.03z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('tz', 'Tanzania, the United Republic of', __inner);

export default C;
