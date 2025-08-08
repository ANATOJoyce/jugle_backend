"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/*
 * Effect hook which reflects `queryObject` k/v in the url.
 */
function useSetSearchParams(queryObject) {
    (0, react_1.useEffect)(function () {
        var url = new URL(window.location.href);
        for (var _i = 0, _a = url.searchParams.keys(); _i < _a.length; _i++) {
            var k = _a[_i];
            if (!(k in queryObject)) {
                url.searchParams.delete(k);
            }
        }
        for (var k in queryObject) {
            url.searchParams.set(k, queryObject[k].toString());
        }
        window.history.replaceState(null, "", url.toString());
    }, [queryObject]);
}
exports.default = useSetSearchParams;
