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
exports.StockLocationAddress = exports.StockLocation = void 0;
var stock_location_entity_1 = require("./stock-location.entity");
Object.defineProperty(exports, "StockLocation", { enumerable: true, get: function () { return stock_location_entity_1.StockLocation; } });
var stock_location_address_entity_1 = require("./stock-location-address.entity");
Object.defineProperty(exports, "StockLocationAddress", { enumerable: true, get: function () { return stock_location_address_entity_1.StockLocationAddress; } });
__exportStar(require("./stock-location.entity"), exports);
__exportStar(require("./stock-location-address.entity"), exports);
