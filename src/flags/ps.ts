import { createFlagComponent } from '../createFlag.js';

const __inner = "<mask id=\"a\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#a)\"><path fill=\"#f7fcff\" d=\"M0 0h32v24H0z\"/><path fill=\"#272727\" d=\"M0 0v8h32V0z\"/><path fill=\"#5eaa22\" d=\"M0 16v8h32v-8z\"/><path fill=\"#e31d1c\" d=\"m0 2 16 10L0 22z\"/></g>";

const C = createFlagComponent('ps', 'Palestine, State of', __inner);

export default C;
