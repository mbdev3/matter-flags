import { createFlagComponent } from '../createFlag.js';

const __inner = "<g transform=\"translate(0 1.333) scale(0.036)\"><path fill=\"#bf0a30\" d=\"M0 0h900v600H0z\"/><path fill=\"#fff\" d=\"M0 0h900v300H0z\"/><path fill=\"#00205b\" d=\"M0 0h300v600H0z\"/><g fill=\"#fff\" transform=\"translate(150 300)\"><g id=\"b\"><path id=\"a\" d=\"M0-112V0h50\" transform=\"rotate(18 0 -112)\"/><use xlink:href=\"#a\" transform=\"scale(-1 1)\"/></g><use xlink:href=\"#b\" transform=\"rotate(72)\"/><use xlink:href=\"#b\" transform=\"rotate(144)\"/><use xlink:href=\"#b\" transform=\"rotate(216)\"/><use xlink:href=\"#b\" transform=\"rotate(288)\"/></g></g>";

const C = createFlagComponent('us-tx', 'Texas', __inner);

export default C;
