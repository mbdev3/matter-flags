import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f50101\" fill-rule=\"evenodd\" d=\"M0 16h32v8H0zM0 0h32v6H0z\" clip-rule=\"evenodd\"/><path fill=\"#3d58db\" stroke=\"#fff\" stroke-width=\"3\" d=\"M0 6.5h-1.5v11h35v-11z\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('th', 'Thailand', __inner);

export default C;
