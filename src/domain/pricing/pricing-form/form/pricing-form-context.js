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
exports.usePriceListForm = exports.PriceListFormProvider = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var date_utils_1 = require("../../../../utils/date-utils");
var types_1 = require("../types");
var defaultState = {
    customer_groups: [],
    name: null,
    description: null,
    ends_at: null,
    starts_at: null,
    prices: null,
    type: types_1.PriceListType.SALE,
};
var PriceListFormContext = react_1.default.createContext(null);
var PriceListFormProvider = function (_a) {
    var _b = _a.priceList, priceList = _b === void 0 ? defaultState : _b, children = _a.children;
    var _c = (0, react_1.useState)({
        customer_groups: priceList.customer_groups,
        ends_at: priceList.ends_at,
        starts_at: priceList.starts_at,
    }), configFields = _c[0], setConfigFields = _c[1];
    var methods = (0, react_hook_form_1.useForm)({
        defaultValues: priceList,
    });
    var _d = (0, react_1.useState)(null), prices = _d[0], setPrices = _d[1];
    var currentStartsAt = (0, react_hook_form_1.useWatch)({
        name: "starts_at",
        control: methods.control,
    });
    var currentEndsAt = (0, react_hook_form_1.useWatch)({
        name: "ends_at",
        control: methods.control,
    });
    var currentCustomerGroups = (0, react_hook_form_1.useWatch)({
        name: "customer_groups",
        control: methods.control,
    });
    var disableConfiguration = function (configField) {
        var _a;
        var configToSave = null;
        switch (configField) {
            case types_1.ConfigurationField.CUSTOMER_GROUPS:
                configToSave = currentCustomerGroups;
                break;
            case types_1.ConfigurationField.STARTS_AT:
                configToSave = currentStartsAt;
                break;
            case types_1.ConfigurationField.ENDS_AT:
                configToSave = currentEndsAt;
                break;
        }
        // we save the configuration field value to the state, so that if the user re-enables the field we can populate it with the previous value
        setConfigFields(__assign(__assign({}, configFields), (_a = {}, _a[configField] = configToSave, _a)));
        // use timeout to avoid flashing default value
        setTimeout(function () { return methods.setValue(configField, null); }, 300);
    };
    var enableConfiguration = function (configField) {
        // we get the configuration field value from the state, so that if the user re-enables the field we can populate it with the previous value
        if (configFields[configField]) {
            methods.setValue(configField, configFields[configField]);
        }
        else {
            // if the configuration field value is null, we set a default value
            switch (configField) {
                case types_1.ConfigurationField.STARTS_AT:
                    methods.setValue(configField, new Date());
                    break;
                case types_1.ConfigurationField.ENDS_AT:
                    methods.setValue(configField, (0, date_utils_1.weekFromNow)());
                    break;
                case types_1.ConfigurationField.CUSTOMER_GROUPS:
                    methods.setValue(configField, []);
                    break;
            }
        }
    };
    var handleConfigurationSwitch = function (values) {
        for (var _i = 0, _a = Object.keys(configFields); _i < _a.length; _i++) {
            var key = _a[_i];
            if (values.includes(key)) {
                enableConfiguration(key);
            }
            else {
                disableConfiguration(key);
            }
        }
    };
    var handleSubmit = function (submitHandler) {
        return methods.handleSubmit(function (values) {
            submitHandler(__assign(__assign({}, values), { prices: prices }));
        });
    };
    return (<react_hook_form_1.FormProvider {...methods}>
      <PriceListFormContext.Provider value={{
            configFields: configFields,
            handleConfigurationSwitch: handleConfigurationSwitch,
            prices: prices,
            handleSubmit: handleSubmit,
            setPrices: setPrices,
        }}>
        {children}
      </PriceListFormContext.Provider>
    </react_hook_form_1.FormProvider>);
};
exports.PriceListFormProvider = PriceListFormProvider;
var usePriceListForm = function () {
    var context = react_1.default.useContext(PriceListFormContext);
    var form = (0, react_hook_form_1.useFormContext)();
    if (context === null) {
        throw new Error("usePriceListForm must be used within a PriceListFormProvider");
    }
    return __assign(__assign({}, form), context);
};
exports.usePriceListForm = usePriceListForm;
