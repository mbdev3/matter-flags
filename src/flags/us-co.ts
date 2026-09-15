import { createFlagComponent } from '../createFlag.js';

const __inner = "<rect width=\"32\" height=\"24\" fill=\"#02225a\"/><g transform=\"translate(0 1.333) scale(0.018)\"><path fill=\"#00205b\" d=\"M0 0h1800v1200H0\"/><path fill=\"#fff\" d=\"M0 400h1800v400H0\"/><path fill=\"#bf0a30\" d=\"M1131 750a400 400 0 1 1 0-300L760 600\"/><circle cx=\"760\" cy=\"600\" r=\"200\" fill=\"gold\"/></g>";

const C = createFlagComponent('us-co', 'Colorado', __inner);

export default C;
