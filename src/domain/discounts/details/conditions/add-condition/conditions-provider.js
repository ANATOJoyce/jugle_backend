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
exports.useConditions = exports.ConditionsProvider = void 0;
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var use_notification_1 = require("../../../../../hooks/use-notification");
var error_messages_1 = require("../../../../../utils/error-messages");
var types_1 = require("../../../types");
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
var ConditionsContext = (0, react_1.createContext)(null);
var ConditionsProvider = function (_a) {
    var discount = _a.discount, children = _a.children;
    var _b = (0, react_1.useState)(defaultConditions), conditions = _b[0], setConditions = _b[1];
    var mutate = (0, medusa_react_1.useAdminUpdateDiscount)(discount.id).mutate;
    var notification = (0, use_notification_1.default)();
    var reset = function () {
        var _a;
        if (discount.rule.conditions.length) {
            var initialConditions = defaultConditions;
            for (var _i = 0, _b = discount.rule.conditions; _i < _b.length; _i++) {
                var condition = _b[_i];
                initialConditions = __assign(__assign({}, initialConditions), (_a = {}, _a[condition.type] = __assign(__assign({}, initialConditions[condition.type]), { id: condition.id }), _a));
                setConditions(initialConditions);
            }
        }
        else {
            setConditions(defaultConditions);
        }
    };
    (0, react_1.useEffect)(function () {
        reset();
    }, [discount]);
    var updateCondition = function (_a) {
        var type = _a.type, items = _a.items, operator = _a.operator;
        setConditions(function (prevConditions) {
            var _a;
            return (__assign(__assign({}, prevConditions), (_a = {}, _a[type] = __assign(__assign({}, prevConditions[type]), { items: items, operator: operator }), _a)));
        });
    };
    var handleSubmit = function (conditions) {
        var conditionsToSubmit = Object.values(conditions)
            .filter(function (condition) { return condition.items.length; })
            .map(function (condition) {
            var _a;
            return (_a = {},
                _a[condition.type] = condition.items.map(function (i) { return i.id; }),
                _a.operator = condition.operator,
                _a);
        });
        if (!conditionsToSubmit.length) {
            return;
        }
        mutate({
            rule: {
                id: discount.rule.id,
                conditions: conditionsToSubmit,
            },
        }, {
            onSuccess: function () {
                notification("Condtions were succesfully added", "Discount conditions updated", "success");
            },
            onError: function (err) {
                notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
            },
        });
    };
    var save = function () {
        handleSubmit(conditions);
    };
    var updateAndSave = function (_a) {
        var _b;
        var type = _a.type, items = _a.items, operator = _a.operator;
        var update = __assign(__assign({}, conditions), (_b = {}, _b[type] = __assign(__assign({}, conditions[type]), { items: items, operator: operator }), _b));
        handleSubmit(update);
    };
    return (<ConditionsContext.Provider value={{
            conditions: conditions,
            updateCondition: updateCondition,
            reset: reset,
            save: save,
            updateAndSave: updateAndSave,
        }}>
      {children}
    </ConditionsContext.Provider>);
};
exports.ConditionsProvider = ConditionsProvider;
var useConditions = function () {
    var context = (0, react_1.useContext)(ConditionsContext);
    if (context === null) {
        throw new Error("useConditions must be used within a ConditionsProvider");
    }
    return context;
};
exports.useConditions = useConditions;
