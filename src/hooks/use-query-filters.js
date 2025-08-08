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
var qs_1 = require("qs");
var react_1 = require("react");
var set_1 = require("lodash/set");
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = -1] = "Down";
})(Direction || (Direction = {}));
var FilterActionType;
(function (FilterActionType) {
    FilterActionType["SET_QUERY"] = "setQuery";
    FilterActionType["SET_FILTERS"] = "setFilters";
    FilterActionType["SET_OFFSET"] = "setOffset";
    FilterActionType["SET_DEFAULTS"] = "setDefaults";
})(FilterActionType || (FilterActionType = {}));
var DEFAULT_ALLOWED_PARAMS = ["q", "offset", "limit"];
var ADMIN_DEFAULT_PARAMS = {
    limit: 15,
    offset: 0,
};
/* *********************************************** */
/* ******************* HELPERS ******************* */
/* *********************************************** */
/*
 * Transform and merge state values with provided `toQuery` object and
 * return an object containing params.
 */
function buildQueryObject(state, toQuery) {
    toQuery = toQuery || {};
    for (var _i = 0, _a = Object.entries(state); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (key === "q") {
            if (typeof value === "string") {
                if (value) {
                    toQuery["q"] = value;
                }
                else {
                    delete toQuery["q"];
                }
            }
        }
        else if (key === "offset" || key === "limit") {
            toQuery[key] = value;
        }
    }
    return toQuery;
}
/*
 * Get params from state (transformed) without additional params included.
 */
function getRepresentationObject(state) {
    return buildQueryObject(state);
}
/*
 * Get transformed params from state along with additional params.
 */
function getQueryObject(state) {
    return buildQueryObject(state, __assign({}, state.additionalFilters));
}
/*
 * Transform query string into object representation.
 */
function parseQueryString(queryString, defaults) {
    var representation = __assign(__assign({}, ADMIN_DEFAULT_PARAMS), defaults);
    if (!queryString) {
        return representation;
    }
    var filters = qs_1.default.parse(queryString);
    for (var _i = 0, _a = Object.entries(filters); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (typeof value !== "string") {
            continue;
        }
        if (DEFAULT_ALLOWED_PARAMS.includes(key)) {
            switch (key) {
                case "offset":
                case "limit":
                    representation[key] = parseInt(value);
                    break;
                case "q":
                    representation.q = value;
                    break;
            }
        }
    }
    return representation;
}
/** ********************************************************/
/** ****************** USE FILTERS HOOK ********************/
/** ********************************************************/
/**
 * State reducer for the filters hook.
 */
function reducer(state, action) {
    if (action.type === FilterActionType.SET_FILTERS) {
        var nextState = __assign({}, state);
        // TODO: merge and change refs along the `action.path`
        (0, set_1.default)(nextState, action.path, action.payload);
        return nextState;
    }
    if (action.type === FilterActionType.SET_QUERY) {
        // if the query term has changed reset offset to 0 also
        return __assign(__assign({}, state), { q: action.payload, offset: 0 });
    }
    if (action.type === FilterActionType.SET_OFFSET) {
        return __assign(__assign({}, state), { offset: action.payload });
    }
    return state;
}
/*
 * Hook returns parsed search params.
 */
var useQueryFilters = function (defaultFilters) {
    var searchString = location.search.substring(1);
    var _a = (0, react_1.useReducer)(reducer, parseQueryString(searchString, defaultFilters)), state = _a[0], dispatch = _a[1];
    /* ********* API METHODS ********* */
    var setDefaultFilters = function (filters) {
        dispatch({ type: FilterActionType.SET_DEFAULTS, payload: filters });
    };
    var paginate = function (direction) {
        if (direction === Direction.Up) {
            var nextOffset = state.offset + state.limit;
            dispatch({ type: FilterActionType.SET_OFFSET, payload: nextOffset });
        }
        else {
            var nextOffset = Math.max(state.offset - state.limit, 0);
            dispatch({ type: FilterActionType.SET_OFFSET, payload: nextOffset });
        }
    };
    var setFilters = function (path, value) {
        return dispatch({ type: FilterActionType.SET_FILTERS, path: path, payload: value });
    };
    var setQuery = function (queryString) {
        return dispatch({ type: FilterActionType.SET_QUERY, payload: queryString });
    };
    var getQueryString = function () {
        return qs_1.default.stringify(getQueryObject(state), { skipNulls: true });
    };
    var getRepresentationString = function () {
        var obj = getRepresentationObject(state);
        return qs_1.default.stringify(obj, { skipNulls: true });
    };
    /* ********* VALUES ********* */
    var queryObject = (0, react_1.useMemo)(function () { return getQueryObject(state); }, [state]);
    var representationObject = (0, react_1.useMemo)(function () { return getRepresentationObject(state); }, [
        state,
    ]);
    var representationString = (0, react_1.useMemo)(function () { return getRepresentationString(); }, [state]);
    return __assign(__assign({}, state), { filters: __assign({}, state), representationObject: representationObject, representationString: representationString, queryObject: queryObject, 
        // API
        paginate: paginate, getQueryObject: getQueryObject, getQueryString: getQueryString, setQuery: setQuery, setFilters: setFilters, setDefaultFilters: setDefaultFilters });
};
exports.default = useQueryFilters;
