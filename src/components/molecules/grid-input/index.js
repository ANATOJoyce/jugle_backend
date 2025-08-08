"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var GridInput = function (_a) {
    var value = _a.value, props = __rest(_a, ["value"]);
    return (<input className="outline-none outline-0 leading-base bg-transparent py-4 px-2 w-full h-full border rounded-rounded border-transparent inter-small-regular placeholder:text-grey-40 focus-within:shadow-input focus-within:border focus-within:border-violet-60" value={value} {...props}/>);
};
exports.default = GridInput;
