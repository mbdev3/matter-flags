import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g mask=\"url(#b)\"><path fill=\"#f50100\" stroke=\"#2e42a5\" stroke-width=\"2\" d=\"M10-1H9V9H-1v6H9v10h6V15h18V9H15V-1z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('fo', 'Faroe Island', __inner);

export default C;
