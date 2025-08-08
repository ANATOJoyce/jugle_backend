"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var use_computed_height_1 = require("../../hooks/use-computed-height");
var TwoSplitPane = function (_a) {
    var threeCols = _a.threeCols, className = _a.className, children = _a.children;
    var childrenCount = react_1.Children.count(children);
    var _b = (0, use_computed_height_1.useComputedHeight)(32), ref = _b.ref, height = _b.height;
    var heightClass = height
        ? {
            gridTemplateRows: "".concat(height, "px"),
        }
        : null;
    if (childrenCount > 2) {
        throw new Error("TwoSplitPane can only have two or less children");
    }
    return (<div className={(0, clsx_1.default)("grid gap-large grid-cols-1", className, {
            "medium:grid-cols-2": !threeCols,
            "medium:grid-cols-3": threeCols,
        })} style={heightClass} ref={ref}>
      {react_1.Children.map(children, function (child, i) {
            return (<div className={(0, clsx_1.default)("w-full h-full", {
                    "col-span-2": threeCols && i === 1,
                })} key={i}>
            {child}
          </div>);
        })}
    </div>);
};
exports.default = TwoSplitPane;
