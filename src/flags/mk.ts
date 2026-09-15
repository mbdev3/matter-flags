import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f50100\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill=\"#ffd018\" mask=\"url(#b)\"><path fill-rule=\"evenodd\" d=\"M0-.04v4.08L14 10 3.26-.04zM16 12l3-12h-6zm0 0-3 12h6zM0 19.95v4.09h3.26L14 14zM32 4.07V-.02h-3.26L18 10.02zm0 19.99v-4.08l-14-5.96 10.74 10.04zM32 9l-12 3 12 3zm-20 3L0 9v6z\" clip-rule=\"evenodd\"/><path stroke=\"#f50100\" stroke-width=\"2\" d=\"M16 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('mk', 'North Macedonia', __inner);

export default C;
