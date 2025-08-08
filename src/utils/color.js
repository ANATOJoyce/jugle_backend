"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColor = void 0;
var getColor = function (index) {
    var colors = [
        "bg-fuschia-40",
        "bg-pink-40",
        "bg-orange-40",
        "bg-teal-40",
        "bg-cyan-40",
        "bg-blue-40",
        "bg-indigo-40",
    ];
    return colors[index % colors.length];
};
exports.getColor = getColor;
