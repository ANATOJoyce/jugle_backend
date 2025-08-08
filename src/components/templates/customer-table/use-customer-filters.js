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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCustomerFilters = void 0;
var qs_1 = require("qs");
var react_1 = require("react");
var allowedFilters = ["q", "offset", "limit"];
var reducer = function (state, action) {
    var _a;
    switch (action.type) {
        case "setFilters": {
            return __assign(__assign({}, state), { query: (_a = action === null || action === void 0 ? void 0 : action.payload) === null || _a === void 0 ? void 0 : _a.query });
        }
        case "setQuery": {
            return __assign(__assign({}, state), { query: action.payload });
        }
        case "setOffset": {
            return __assign(__assign({}, state), { offset: action.payload });
        }
        case "reset": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};
var useCustomerFilters = function (existing, defaultFilters) {
    if (defaultFilters === void 0) { defaultFilters = null; }
    if (existing && existing[0] === "?") {
        existing = existing.substring(1);
    }
    var initial = (0, react_1.useMemo)(function () { return parseQueryString(existing, defaultFilters); }, [
        existing,
        defaultFilters,
    ]);
    var _a = (0, react_1.useReducer)(reducer, initial), state = _a[0], dispatch = _a[1];
    var setDefaultFilters = function (filters) {
        dispatch({ type: "setDefaults", payload: filters });
    };
    var paginate = function (direction) {
        if (direction > 0) {
            var nextOffset = state.offset + state.limit;
            dispatch({ type: "setOffset", payload: nextOffset });
        }
        else {
            var nextOffset = Math.max(state.offset - state.limit, 0);
            dispatch({ type: "setOffset", payload: nextOffset });
        }
    };
    var reset = function () {
        dispatch({
            type: "setFilters",
            payload: __assign(__assign({}, state), { offset: 0, query: null }),
        });
    };
    var setFilters = function (filters) {
        dispatch({ type: "setFilters", payload: filters });
    };
    var setQuery = function (queryString) {
        dispatch({ type: "setQuery", payload: queryString });
    };
    var getQueryObject = function () {
        var toQuery = __assign({}, state.additionalFilters);
        for (var _i = 0, _a = Object.entries(state); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (key === "query") {
                if (value && typeof value === "string") {
                    toQuery["q"] = value;
                }
            }
            else if (key === "offset" || key === "limit") {
                toQuery[key] = value;
            }
        }
        return toQuery;
    };
    var getQueryString = function () {
        var obj = getQueryObject();
        return qs_1.default.stringify(obj, { skipNulls: true });
    };
    var getRepresentationObject = function (fromObject) {
        var objToUse = fromObject !== null && fromObject !== void 0 ? fromObject : state;
        var toQuery = {};
        for (var _i = 0, _a = Object.entries(objToUse); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (key === "query") {
                if (value && typeof value === "string") {
                    toQuery["q"] = value;
                }
            }
            else if (key === "offset" || key === "limit") {
                toQuery[key] = value;
            }
        }
        return toQuery;
    };
    var getRepresentationString = function () {
        var obj = getRepresentationObject();
        return qs_1.default.stringify(obj, { skipNulls: true });
    };
    var queryObject = (0, react_1.useMemo)(function () { return getQueryObject(); }, [state]);
    var representationObject = (0, react_1.useMemo)(function () { return getRepresentationObject(); }, [state]);
    var representationString = (0, react_1.useMemo)(function () { return getRepresentationString(); }, [state]);
    return __assign(__assign({}, state), { filters: __assign({}, state), representationObject: representationObject, representationString: representationString, queryObject: queryObject, paginate: paginate, getQueryObject: getQueryObject, getQueryString: getQueryString, setQuery: setQuery, setFilters: setFilters, setDefaultFilters: setDefaultFilters, reset: reset });
};
exports.useCustomerFilters = useCustomerFilters;
var parseQueryString = function (queryString, additionals) {
    if (additionals === void 0) { additionals = null; }
    var defaultVal = {
        offset: 0,
        limit: 15,
        additionalFilters: additionals,
    };
    if (queryString) {
        var filters = qs_1.default.parse(queryString);
        for (var _i = 0, _a = Object.entries(filters); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (allowedFilters.includes(key)) {
                switch (key) {
                    case "offset": {
                        if (typeof value === "string") {
                            defaultVal.offset = parseInt(value);
                        }
                        break;
                    }
                    case "limit": {
                        if (typeof value === "string") {
                            defaultVal.limit = parseInt(value);
                        }
                        break;
                    }
                    case "q": {
                        if (typeof value === "string") {
                            defaultVal.query = value;
                        }
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        }
    }
    return defaultVal;
};
