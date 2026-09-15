import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#af0100\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#3ca5d9\" d=\"M0 0v8h32V0z\"/><path fill=\"#73be4a\" d=\"M0 16v8h32v-8z\"/><path fill=\"#f7fcff\" d=\"M17.14 15.02A3.15 3.15 0 0 1 14.62 12a2.9 2.9 0 0 1 2.35-2.97c1.49-.33 3.02.3 3.02.3-.4-.9-1.83-1.54-3-1.54-2.16 0-4.48 1.67-4.5 4.2-.03 2.62 2.47 4.11 4.67 4.1 1.76 0 2.6-1.13 2.77-1.62 0 0-1.44.86-2.79.55m.88-1.6 1.17-.82 1.18.82-.42-1.37 1.15-.87-1.44-.02-.47-1.36-.47 1.36-1.43.02 1.14.87z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('az', 'Azerbaijan', __inner);

export default C;
