import { createFlagComponent } from '../createFlag.js';

const __inner = "<g clip-path=\"url(#a)\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/><path fill=\"#f7fcff\" fill-rule=\"evenodd\" d=\"M8 0h16v24H8z\" clip-rule=\"evenodd\"/><path fill=\"#e31d1c\" fill-rule=\"evenodd\" d=\"M15.98 7 16 19h-.6l.37-2.97q-4.05.72-3.7.36t.52-1.04L9 12.95q.57 0 1.03-.28.45-.27-.46-1.9l1.81.27.69-.75 1.37 1.43h.61l-.61-3.28 1.1.62zm0 0 1.48 2.06 1.1-.62-.61 3.28h.61l1.37-1.43.69.75 1.81-.27q-.92 1.63-.46 1.9.46.28 1.03.29l-3.6 2.4q.2.66.53 1.03.35.36-3.7-.36L16.6 19H16zM24 0h8v24h-8zM0 0h8v24H0z\" clip-rule=\"evenodd\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h32v24H0z\"/></clipPath></defs>";

const C = createFlagComponent('ca', 'Canada', __inner);

export default C;
