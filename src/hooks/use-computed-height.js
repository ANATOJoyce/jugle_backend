"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useComputedHeight = void 0;
var react_1 = require("react");
var use_window_dimensions_1 = require("./use-window-dimensions");
var useComputedHeight = function (bottomPad) {
    var ref = (0, react_1.useRef)(null);
    var heightRef = (0, react_1.useRef)(0);
    var height = (0, use_window_dimensions_1.useWindowDimensions)().height;
    (0, react_1.useLayoutEffect)(function () {
        if (ref.current) {
            var top_1 = ref.current.getBoundingClientRect().top;
            // take the inner height of the window, subtract 32 from it (for the bottom padding), then subtract that from the top position of our grid row (wherever that is)
            heightRef.current = height - bottomPad - top_1;
        }
    }, [bottomPad, height]);
    return { ref: ref, height: heightRef.current };
};
exports.useComputedHeight = useComputedHeight;
