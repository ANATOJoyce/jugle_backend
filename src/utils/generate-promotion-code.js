"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePromotionCode = void 0;
var randomatic_1 = require("randomatic");
var generatePromotionCode = function () {
    var code = [
        (0, randomatic_1.default)("A0", 4),
        (0, randomatic_1.default)("A0", 4),
        (0, randomatic_1.default)("A0", 4),
        (0, randomatic_1.default)("A0", 4),
    ].join("-");
    return code;
};
exports.generatePromotionCode = generatePromotionCode;
