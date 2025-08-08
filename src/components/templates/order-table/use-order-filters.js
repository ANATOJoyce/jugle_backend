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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOrderFilters = void 0;
var lodash_1 = require("lodash");
var qs_1 = require("qs");
var react_1 = require("react");
var time_1 = require("../../../utils/time");
var allowedFilters = [
    "status",
    "region",
    "fulfillment_status",
    "payment_status",
    "created_at",
    "q",
    "offset",
    "limit",
];
var DefaultTabs = {
    incomplete: {
        fulfillment_status: ["not_fulfilled", "fulfilled"],
        payment_status: ["awaiting"],
    },
    complete: {
        fulfillment_status: ["shipped"],
        payment_status: ["captured"],
    },
};
var formatDateFilter = function (filter) {
    if (filter === null) {
        return filter;
    }
    var dateFormatted = Object.entries(filter).reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        if (value.includes("|")) {
            acc[key] = (0, time_1.relativeDateFormatToTimestamp)(value);
        }
        else {
            acc[key] = value;
        }
        return acc;
    }, {});
    return dateFormatted;
};
var reducer = function (state, action) {
    var _a;
    switch (action.type) {
        case "setFilters": {
            return __assign(__assign({}, state), { region: action.payload.region, fulfillment: action.payload.fulfillment, payment: action.payload.payment, status: action.payload.status, date: action.payload.date, query: (_a = action === null || action === void 0 ? void 0 : action.payload) === null || _a === void 0 ? void 0 : _a.query });
        }
        case "setQuery": {
            return __assign(__assign({}, state), { query: action.payload });
        }
        case "setDate": {
            var newDateFilters = state.date;
            return __assign(__assign({}, state), { date: newDateFilters });
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
var eqSet = function (as, bs) {
    if (as.size !== bs.size) {
        return false;
    }
    for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
        var a = as_1[_i];
        if (!bs.has(a)) {
            return false;
        }
    }
    return true;
};
var useOrderFilters = function (existing, defaultFilters) {
    if (defaultFilters === void 0) { defaultFilters = null; }
    if (existing && existing[0] === "?") {
        existing = existing.substring(1);
    }
    var initial = (0, react_1.useMemo)(function () { return parseQueryString(existing, defaultFilters); }, [
        existing,
        defaultFilters,
    ]);
    var initialTabs = (0, react_1.useMemo)(function () {
        var storageString = localStorage.getItem("orders::filters");
        if (storageString) {
            var savedTabs = JSON.parse(storageString);
            if (savedTabs) {
                return Object.entries(savedTabs).map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return {
                        label: key,
                        value: key,
                        removable: true,
                        representationString: value,
                    };
                });
            }
        }
        return [];
    }, []);
    var _a = (0, react_1.useReducer)(reducer, initial), state = _a[0], dispatch = _a[1];
    var _b = (0, react_1.useState)(initialTabs), tabs = _b[0], setTabs = _b[1];
    var setDateFilter = function (filter) {
        dispatch({ type: "setDate", payload: filter });
    };
    var setFulfillmentFilter = function (filter) {
        dispatch({ type: "setFulfillment", payload: filter });
    };
    var setPaymentFilter = function (filter) {
        dispatch({ type: "setPayment", payload: filter });
    };
    var setStatusFilter = function (filter) {
        dispatch({ type: "setStatus", payload: filter });
    };
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
            payload: __assign(__assign({}, state), { offset: 0, region: {
                    open: false,
                    filter: null,
                }, payment: {
                    open: false,
                    filter: null,
                }, fulfillment: {
                    open: false,
                    filter: null,
                }, status: {
                    open: false,
                    filter: null,
                }, date: {
                    open: false,
                    filter: null,
                }, query: null }),
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
            else if (value.open) {
                if (key === "date") {
                    toQuery[stateFilterMap[key]] = formatDateFilter(value.filter);
                }
                else {
                    toQuery[stateFilterMap[key]] = value.filter;
                }
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
            else if (value.open) {
                toQuery[stateFilterMap[key]] = value.filter;
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
    var activeFilterTab = (0, react_1.useMemo)(function () {
        var clean = (0, lodash_1.omit)(representationObject, ["limit", "offset"]);
        var stringified = qs_1.default.stringify(clean);
        var existsInSaved = tabs.find(function (el) { return el.representationString === stringified; });
        if (existsInSaved) {
            return existsInSaved.value;
        }
        for (var _i = 0, _a = Object.entries(DefaultTabs); _i < _a.length; _i++) {
            var _b = _a[_i], tab = _b[0], conditions = _b[1];
            var match = true;
            if (Object.keys(clean).length !== Object.keys(conditions).length) {
                continue;
            }
            for (var _c = 0, _d = Object.entries(conditions); _c < _d.length; _c++) {
                var _e = _d[_c], filter = _e[0], value = _e[1];
                if (filter in clean) {
                    if (Array.isArray(value)) {
                        match =
                            Array.isArray(clean[filter]) &&
                                eqSet(new Set(clean[filter]), new Set(value));
                    }
                    else {
                        match = clean[filter] === value;
                    }
                }
                else {
                    match = false;
                }
                if (!match) {
                    break;
                }
            }
            if (match) {
                return tab;
            }
        }
        return null;
    }, [representationObject, tabs]);
    var availableTabs = (0, react_1.useMemo)(function () {
        return __spreadArray([
            {
                label: "Complete",
                value: "complete",
            },
            {
                label: "Incomplete",
                value: "incomplete",
            }
        ], tabs, true);
    }, [tabs]);
    var setTab = function (tabName) {
        var tabToUse = null;
        if (tabName in DefaultTabs) {
            tabToUse = DefaultTabs[tabName];
        }
        else {
            var tabFound = tabs.find(function (t) { return t.value === tabName; });
            if (tabFound) {
                tabToUse = qs_1.default.parse(tabFound.representationString);
            }
        }
        if (tabToUse) {
            var toSubmit = __assign(__assign({}, state), { date: {
                    open: false,
                    filter: null,
                }, payment: {
                    open: false,
                    filter: null,
                }, fulfillment: {
                    open: false,
                    filter: null,
                }, status: {
                    open: false,
                    filter: null,
                } });
            for (var _i = 0, _a = Object.entries(tabToUse); _i < _a.length; _i++) {
                var _b = _a[_i], filter = _b[0], val = _b[1];
                toSubmit[filterStateMap[filter]] = {
                    open: true,
                    filter: val,
                };
            }
            dispatch({ type: "setFilters", payload: toSubmit });
        }
    };
    var saveTab = function (tabName, filters) {
        var repObj = getRepresentationObject(__assign({}, filters));
        var clean = (0, lodash_1.omit)(repObj, ["limit", "offset"]);
        var repString = qs_1.default.stringify(clean, { skipNulls: true });
        var storedString = localStorage.getItem("orders::filters");
        var existing = null;
        if (storedString) {
            existing = JSON.parse(storedString);
        }
        if (existing) {
            existing[tabName] = repString;
            localStorage.setItem("orders::filters", JSON.stringify(existing));
        }
        else {
            var newFilters = {};
            newFilters[tabName] = repString;
            localStorage.setItem("orders::filters", JSON.stringify(newFilters));
        }
        setTabs(function (prev) {
            return __spreadArray(__spreadArray([], prev, true), [
                {
                    label: tabName,
                    value: tabName,
                    representationString: repString,
                    removable: true,
                },
            ], false);
        });
        dispatch({ type: "setFilters", payload: filters });
    };
    var removeTab = function (tabValue) {
        var storedString = localStorage.getItem("orders::filters");
        var existing = null;
        if (storedString) {
            existing = JSON.parse(storedString);
        }
        if (existing) {
            delete existing[tabValue];
            localStorage.setItem("orders::filters", JSON.stringify(existing));
        }
        setTabs(function (prev) {
            var newTabs = prev.filter(function (p) { return p.value !== tabValue; });
            return newTabs;
        });
    };
    return __assign(__assign({}, state), { filters: __assign({}, state), removeTab: removeTab, saveTab: saveTab, setTab: setTab, availableTabs: availableTabs, activeFilterTab: activeFilterTab, representationObject: representationObject, representationString: representationString, queryObject: queryObject, paginate: paginate, getQueryObject: getQueryObject, getQueryString: getQueryString, setQuery: setQuery, setFilters: setFilters, setDefaultFilters: setDefaultFilters, setDateFilter: setDateFilter, setFulfillmentFilter: setFulfillmentFilter, setPaymentFilter: setPaymentFilter, setStatusFilter: setStatusFilter, reset: reset });
};
exports.useOrderFilters = useOrderFilters;
var filterStateMap = {
    status: "status",
    fulfillment_status: "fulfillment",
    payment_status: "payment",
    created_at: "date",
    region_id: "region",
};
var stateFilterMap = {
    region: "region_id",
    status: "status",
    fulfillment: "fulfillment_status",
    payment: "payment_status",
    date: "created_at",
};
var parseQueryString = function (queryString, additionals) {
    if (additionals === void 0) { additionals = null; }
    var defaultVal = {
        status: {
            open: false,
            filter: null,
        },
        fulfillment: {
            open: false,
            filter: null,
        },
        region: {
            open: false,
            filter: null,
        },
        payment: {
            open: false,
            filter: null,
        },
        date: {
            open: false,
            filter: null,
        },
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
                    case "status": {
                        if (typeof value === "string" || Array.isArray(value)) {
                            defaultVal.status = {
                                open: true,
                                filter: value,
                            };
                        }
                        break;
                    }
                    case "fulfillment_status": {
                        if (typeof value === "string" || Array.isArray(value)) {
                            defaultVal.fulfillment = {
                                open: true,
                                filter: value,
                            };
                        }
                        break;
                    }
                    case "region_id": {
                        if (typeof value === "string" || Array.isArray(value)) {
                            defaultVal.region = {
                                open: true,
                                filter: value,
                            };
                        }
                        break;
                    }
                    case "payment_status": {
                        if (typeof value === "string" || Array.isArray(value)) {
                            defaultVal.payment = {
                                open: true,
                                filter: value,
                            };
                        }
                        break;
                    }
                    case "created_at": {
                        defaultVal.date = {
                            open: true,
                            filter: value,
                        };
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
