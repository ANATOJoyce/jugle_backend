"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var feature_flag_1 = require("../../context/feature-flag");
var FeatureToggle = function (_a) {
    var featureFlag = _a.featureFlag, _b = _a.showOnlyWhenDisabled, showOnlyWhenDisabled = _b === void 0 ? false : _b, children = _a.children;
    var isFeatureEnabled = react_1.default.useContext(feature_flag_1.FeatureFlagContext).isFeatureEnabled;
    var showContent = isFeatureEnabled(featureFlag) === !showOnlyWhenDisabled;
    return showContent ? <>{children}</> : null;
};
exports.default = FeatureToggle;
