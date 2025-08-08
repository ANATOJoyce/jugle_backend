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
exports.FeatureFlagProvider = exports.FeatureFlagContext = exports.defaultFeatureFlagContext = void 0;
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var account_1 = require("./account");
exports.defaultFeatureFlagContext = {
    featureToggleList: {},
    isFeatureEnabled: function (flag) {
        return !!this.featureToggleList[flag];
    },
};
exports.FeatureFlagContext = react_1.default.createContext(exports.defaultFeatureFlagContext);
var FeatureFlagProvider = function (_a) {
    var children = _a.children;
    var isLoggedIn = (0, react_1.useContext)(account_1.AccountContext).isLoggedIn;
    var _b = (0, react_1.useState)([]), featureFlags = _b[0], setFeatureFlags = _b[1];
    var _c = (0, medusa_react_1.useAdminStore)(), store = _c.store, isFetching = _c.isFetching;
    (0, react_1.useEffect)(function () {
        var _a;
        if (isFetching ||
            !store ||
            !isLoggedIn ||
            !((_a = store["feature_flags"]) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        setFeatureFlags(store["feature_flags"]);
    }, [isFetching, store, isLoggedIn]);
    var featureToggleList = featureFlags.reduce(function (acc, flag) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[flag.key] = flag.value, _a)));
    }, {});
    var isFeatureEnabled = function (flag) { return !!featureToggleList[flag]; };
    return (<exports.FeatureFlagContext.Provider value={{ isFeatureEnabled: isFeatureEnabled, featureToggleList: featureToggleList }}>
      {children}
    </exports.FeatureFlagContext.Provider>);
};
exports.FeatureFlagProvider = FeatureFlagProvider;
