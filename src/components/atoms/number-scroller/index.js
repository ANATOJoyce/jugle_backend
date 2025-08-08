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
var clsx_1 = require("clsx");
var react_1 = require("react");
var NumberScroller = function (_a) {
    var numbers = _a.numbers, selected = _a.selected, onSelect = _a.onSelect, className = _a.className, props = __rest(_a, ["numbers", "selected", "onSelect", "className"]);
    return (<div {...props} className={(0, clsx_1.default)("flex flex-col time-list h-[305px] overflow-y-auto", className)}>
      {numbers.map(function (n, i) {
            return (<div key={i} className={(0, clsx_1.default)("w-[40px] h-[40px] last:mb-4 rounded inter-base-regular hover:bg-grey-20", {
                    "bg-violet-60 hover:bg-violet-50 text-grey-0 inter-base-semibold": n === selected,
                })}>
            <button onClick={function () { return onSelect(n); }} className="w-full h-full py-2">
              {n.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
            </button>
          </div>);
        })}
    </div>);
};
exports.default = NumberScroller;
