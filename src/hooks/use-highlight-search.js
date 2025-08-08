"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHighlightSearch = void 0;
var react_1 = require("react");
var useHighlightSearch = function (name, query) {
    function getHighlightedSearch(text) {
        var parts = text.split(new RegExp("(".concat(query, ")"), "gi"));
        var str = [];
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            if (part.toLowerCase() === query.toLowerCase()) {
                str.push("<mark class=\"bg-orange-10\">".concat(part, "</mark>"));
            }
            else {
                str.push(part);
            }
        }
        return str.join("");
    }
    (0, react_1.useEffect)(function () {
        var children = document.getElementsByName(name);
        if (children) {
            var childArray = Array.from(children);
            for (var _i = 0, childArray_1 = childArray; _i < childArray_1.length; _i++) {
                var child = childArray_1[_i];
                child.innerHTML = child.innerHTML.replace(child.innerHTML, getHighlightedSearch(child.innerText));
            }
        }
    }, [query, name]);
};
exports.useHighlightSearch = useHighlightSearch;
