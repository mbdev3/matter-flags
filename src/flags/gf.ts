import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><rect width=\"32\" height=\"24\" fill=\"#5eaa22\" rx=\"2\"/><path fill=\"#feca00\" fill-rule=\"evenodd\" d=\"m0 0 32 24H0z\" clip-rule=\"evenodd\"/><path fill=\"#e21835\" fill-rule=\"evenodd\" d=\"m15.93 14.4-3.48 2.42 1.1-4.14L11 10.04l3.46-.15 1.47-4.09 1.47 4.1h3.46l-2.56 2.78 1.28 3.9z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('gf', 'French Guiana', __inner);

export default C;
