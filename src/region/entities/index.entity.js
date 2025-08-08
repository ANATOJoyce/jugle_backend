"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = exports.Country = void 0;
var country_entity_1 = require("./country.entity");
Object.defineProperty(exports, "Country", { enumerable: true, get: function () { return country_entity_1.Country; } });
var region_entity_1 = require("./region.entity");
Object.defineProperty(exports, "Region", { enumerable: true, get: function () { return region_entity_1.Region; } });
__exportStar(require("./country.entity"), exports);
__exportStar(require("./region.entity"), exports);
