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
exports.useDiscountForm = exports.DiscountFormProvider = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var types_1 = require("../../../types");
var defaultDiscount = {
    code: "",
    rule: {
        type: types_1.DiscountRuleType.PERCENTAGE,
        value: 0,
        description: "",
    },
    usage_limit: null,
    valid_duration: null,
    is_dynamic: false,
    regions: [],
    starts_at: new Date(),
    ends_at: null,
};
var defaultConditions = {
    products: {
        id: undefined,
        operator: types_1.DiscountConditionOperator.IN,
        type: types_1.DiscountConditionType.PRODUCTS,
        items: [],
    },
    product_collections: {
        id: undefined,
        operator: types_1.DiscountConditionOperator.IN,
        type: types_1.DiscountConditionType.PRODUCT_COLLECTIONS,
        items: [],
    },
    product_tags: {
        id: undefined,
        operator: types_1.DiscountConditionOperator.IN,
        type: types_1.DiscountConditionType.PRODUCT_TAGS,
        items: [],
    },
    product_types: {
        id: undefined,
        operator: types_1.DiscountConditionOperator.IN,
        type: types_1.DiscountConditionType.PRODUCT_TYPES,
        items: [],
    },
    customer_groups: {
        id: undefined,
        operator: types_1.DiscountConditionOperator.IN,
        type: types_1.DiscountConditionType.CUSTOMER_GROUPS,
        items: [],
    },
};
var DiscountFormProvider = function (_a) {
    var _b = _a.discount, discount = _b === void 0 ? defaultDiscount : _b, children = _a.children;
    var _c = (0, react_1.useState)(false), hasExpiryDate = _c[0], setHasExpiryDate = _c[1];
    var _d = (0, react_1.useState)(false), hasStartDate = _d[0], setHasStartDate = _d[1];
    var _e = (0, react_1.useState)(null), prevUsageLimit = _e[0], setPrevUsageLimit = _e[1];
    var _f = (0, react_1.useState)(null), prevValidDuration = _f[0], setPrevValidDuration = _f[1];
    var _g = (0, react_1.useState)(defaultConditions), conditions = _g[0], setConditions = _g[1];
    var updateCondition = function (_a) {
        var type = _a.type, items = _a.items, operator = _a.operator;
        setConditions(function (prevConditions) {
            var _a;
            return (__assign(__assign({}, prevConditions), (_a = {}, _a[type] = __assign(__assign({}, prevConditions[type]), { items: items, operator: operator }), _a)));
        });
    };
    var methods = (0, react_hook_form_1.useForm)({
        defaultValues: discount,
    });
    var type = methods.watch("rule.type");
    var isDynamic = methods.watch("is_dynamic");
    var usageLimit = methods.watch("usage_limit");
    var validDuration = methods.watch("valid_duration");
    var endsAt = methods.watch("ends_at");
    var startsAt = methods.watch("starts_at");
    (0, react_1.useEffect)(function () {
        if (hasExpiryDate && !endsAt) {
            methods.setValue("ends_at", new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000));
        }
        if (!hasExpiryDate && endsAt) {
            methods.setValue("ends_at", null);
        }
    }, [endsAt, hasExpiryDate]);
    (0, react_1.useEffect)(function () {
        if (hasStartDate && !startsAt) {
            methods.setValue("starts_at", new Date(new Date().getTime()));
        }
        if (!hasStartDate && startsAt) {
            methods.setValue("starts_at", undefined);
        }
    }, [endsAt, hasExpiryDate]);
    var handleConfigurationChanged = function (values) {
        if (values.indexOf("ends_at") > -1 && !hasExpiryDate) {
            setHasExpiryDate(true);
        }
        else if (values.indexOf("ends_at") === -1 && hasExpiryDate) {
            setHasExpiryDate(false);
        }
        if (values.indexOf("starts_at") === -1 && hasStartDate) {
            setHasStartDate(false);
        }
        else if (values.indexOf("starts_at") > -1 && !hasStartDate) {
            setHasStartDate(true);
        }
        // usage_limit
        if (values.indexOf("usage_limit") === -1 && usageLimit) {
            setPrevUsageLimit(usageLimit);
            // debounce the setValue call to not flash an empty field when collapsing the accordion
            setTimeout(function () {
                methods.setValue("usage_limit", null);
            }, 300);
        }
        else if (values.indexOf("usage_limit") > -1 && usageLimit) {
            methods.setValue("usage_limit", prevUsageLimit);
        }
        // valid duration
        if (values.indexOf("valid_duration") === -1 && validDuration !== "") {
            setPrevValidDuration(validDuration);
            // debounce the setValue call to not flash an empty field when collapsing the accordion
            setTimeout(function () {
                methods.setValue("valid_duration", "");
            }, 300);
        }
        else if (values.indexOf("valid_duration") > -1 && validDuration === "") {
            methods.setValue("valid_duration", prevValidDuration);
        }
    };
    var handleReset = function () {
        setHasExpiryDate(discount.ends_at ? true : false);
        setHasStartDate(discount.starts_at ? true : false);
        setConditions(defaultConditions);
        methods.reset(__assign({}, discount));
    };
    (0, react_1.useEffect)(function () {
        handleReset();
    }, [discount]);
    return (<react_hook_form_1.FormProvider {...methods}>
      <DiscountFormContext.Provider value={{
            type: type,
            isDynamic: isDynamic,
            hasExpiryDate: hasExpiryDate,
            setHasExpiryDate: setHasExpiryDate,
            hasStartDate: hasStartDate,
            setHasStartDate: setHasStartDate,
            handleConfigurationChanged: handleConfigurationChanged,
            conditions: conditions,
            updateCondition: updateCondition,
            setConditions: setConditions,
            handleReset: handleReset,
        }}>
        {children}
      </DiscountFormContext.Provider>
    </react_hook_form_1.FormProvider>);
};
exports.DiscountFormProvider = DiscountFormProvider;
var DiscountFormContext = react_1.default.createContext(null);
var useDiscountForm = function () {
    var context = react_1.default.useContext(DiscountFormContext);
    var form = (0, react_hook_form_1.useFormContext)();
    if (!context) {
        throw new Error("useDiscountForm must be a child of DiscountFormContext");
    }
    return __assign(__assign({}, form), context);
};
exports.useDiscountForm = useDiscountForm;
