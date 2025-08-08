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
exports.useSelectionColumn = void 0;
var react_1 = require("react");
var checkbox_1 = require("../components/atoms/checkbox");
var table_1 = require("../components/molecules/table");
var IndeterminateCheckbox = react_1.default.forwardRef(function (_a, ref) {
    var indeterminate = _a.indeterminate, rest = __rest(_a, ["indeterminate"]);
    var defaultRef = react_1.default.useRef();
    var resolvedRef = ref || defaultRef;
    react_1.default.useEffect(function () {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);
    return (<div onClickCapture={function (e) { return e.stopPropagation(); }}>
        <checkbox_1.default className="justify-center" label="" ref={resolvedRef} {...rest}/>
      </div>);
});
var useSelectionColumn = function () {
    return {
        id: "selection",
        Header: function (_a) {
            var getToggleAllRowsSelectedProps = _a.getToggleAllRowsSelectedProps;
            return (<IndeterminateCheckbox {...getToggleAllRowsSelectedProps()}/>);
        },
        Cell: function (_a) {
            var row = _a.row;
            return (<table_1.default.Cell className="text-center">
        <IndeterminateCheckbox {...row.getToggleRowSelectedProps()}/>
      </table_1.default.Cell>);
        },
    };
};
exports.useSelectionColumn = useSelectionColumn;
