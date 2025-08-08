"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var React = require("react");
var offsetTopRelativeTo = function (element, ancestor) {
    var elementCoords = element.getBoundingClientRect();
    var ancestorCoords = ancestor.getBoundingClientRect();
    return Math.abs(elementCoords.top - ancestorCoords.top);
};
var useKeyboardNavigationList = function (_a) {
    var _b = _a.length, length = _b === void 0 ? 0 : _b;
    var ulRef = React.useRef(null);
    var liRefs = React.useRef([]);
    var _c = React.useState({ index: 0, source: "hover" }), selected = _c[0], setSelected = _c[1];
    var _d = React.useState(false), pressed = _d[0], setPressed = _d[1];
    var getInputProps = function () {
        return {
            "aria-activedescendant": "result-item-".concat(selected),
            "aria-controls": "results-list",
            onKeyDown: function (e) {
                if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setSelected(function (_a) {
                        var index = _a.index;
                        return ({
                            index: index + 1 > length - 1 ? 0 : index + 1,
                            source: "keyboard",
                        });
                    });
                }
                else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setSelected(function (_a) {
                        var index = _a.index;
                        return ({
                            index: Math.max(index - 1, 0),
                            source: "keyboard",
                        });
                    });
                }
            },
        };
    };
    var getLIProps = function (_a) {
        var index = _a.index, props = __rest(_a, ["index"]);
        return __assign({ tabIndex: index, role: "option", id: "result-item-".concat(index), "aria-selected": selected === index, ref: function (el) {
                liRefs.current[index] = el;
            }, onMouseEnter: function (e) {
                setSelected({ index: index, source: "hover" });
            } }, props);
    };
    var getULProps = function () {
        return {
            tabIndex: 0,
            role: "listbox",
            id: "results-list",
            ref: ulRef,
        };
    };
    var enterHandler = function (e) {
        if (e.key === "Enter") {
            setPressed(true);
        }
    };
    React.useEffect(function () {
        var _a;
        if (pressed) {
            var child = (_a = liRefs.current[selected.index]) === null || _a === void 0 ? void 0 : _a.children[0];
            child === null || child === void 0 ? void 0 : child.click();
        }
    }, [pressed, selected]);
    React.useLayoutEffect(function () {
        if (selected.source === "hover") {
            return;
        }
        var selectedLI = liRefs.current[selected.index];
        var ul = ulRef.current;
        // if there is an overflow
        if (ul && selectedLI && ul.scrollHeight > ul.clientHeight) {
            var scrollBottom = ul.clientHeight + ul.scrollTop;
            var elementBottom = offsetTopRelativeTo(selectedLI, ul) +
                (ul === null || ul === void 0 ? void 0 : ul.scrollTop) +
                selectedLI.offsetHeight;
            var elementTop = selectedLI.offsetTop;
            // scroll down if selected item is downward
            if (elementBottom > scrollBottom) {
                ul.scrollTop = elementBottom - ul.clientHeight;
            }
            // scroll up if selected item is upward
            else if (elementTop < scrollBottom) {
                ul.scrollTop = Math.abs(ul.offsetTop - selectedLI.offsetTop);
            }
        }
    }, [selected]);
    React.useEffect(function () {
        window.addEventListener("keydown", enterHandler);
        return function () {
            window.removeEventListener("keydown", enterHandler);
        };
    }, []);
    return {
        getInputProps: getInputProps,
        getLIProps: getLIProps,
        getULProps: getULProps,
        selected: selected.index,
    };
};
exports.default = useKeyboardNavigationList;
