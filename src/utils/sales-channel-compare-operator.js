"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultChannelsSorter = void 0;
var defaultChannelsSorter = function (defaultSalesChanenlId) { return function (sc1, sc2) {
    if (sc1.id === defaultSalesChanenlId) {
        return -1;
    }
    if (sc2.id === defaultSalesChanenlId) {
        return 1;
    }
    return sc1.name.localeCompare(sc2.name);
}; };
exports.defaultChannelsSorter = defaultChannelsSorter;
