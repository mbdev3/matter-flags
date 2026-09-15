import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#ff8c1a\" fill-rule=\"evenodd\" d=\"M22 0h10v24H22z\" clip-rule=\"evenodd\"/><path fill=\"#5eaa22\" fill-rule=\"evenodd\" d=\"M0 0h12v24H0z\" clip-rule=\"evenodd\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M10 0h12v24H10z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('ie', 'Ireland', __inner);

export default C;
