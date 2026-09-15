import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/><mask id=\"b\" width=\"32\" height=\"24\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M0 0v24h32V0z\" clip-rule=\"evenodd\"/></mask><g fill-rule=\"evenodd\" clip-rule=\"evenodd\" mask=\"url(#b)\"><path fill=\"#e31d1c\" d=\"M0 0v12h32V0z\"/><path fill=\"#f1f9ff\" d=\"M8.87 10.59S6.04 9.45 6.04 6.37 8.87 2.2 8.87 2.2c-1.37-.35-5.02-.04-5.02 4.17s3.59 5.01 5.02 4.22m.72-.5.81-.5.83.5-.2-.96.67-.76h-.91l-.39-.89-.38.9-.92.03.68.72zm3.76-.55-.81.49.18-.96-.67-.71.91-.04.39-.9.39.9h.9l-.67.75.2.96zm-2.06-3.77.8-.49.84.49-.2-.96.67-.75h-.92l-.38-.89-.39.9-.91.03.67.71zM9.37 7.22l-.81.5.18-.96-.67-.72.91-.04.39-.89.39.9h.9l-.66.75.2.95zm4.55.45.8-.5.84.5-.2-.96.67-.75h-.92l-.38-.9-.39.9-.91.04.67.71z\"/></g></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('sg', 'Singapore', __inner);

export default C;
