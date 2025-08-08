"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formValuesToUpdateDiscountMapper = exports.formValuesToCreateDiscountMapper = exports.discountToFormValuesMapper = exports.DiscountConditionType = void 0;
var types_1 = require("../../../types");
var DiscountConditionType;
(function (DiscountConditionType) {
    DiscountConditionType["PRODUCTS"] = "products";
    DiscountConditionType["PRODUCT_TYPES"] = "product_types";
    DiscountConditionType["PRODUCT_COLLECTIONS"] = "product_collections";
    DiscountConditionType["PRODUCT_TAGS"] = "product_tags";
    DiscountConditionType["CUSTOMER_GROUPS"] = "customer_groups";
})(DiscountConditionType || (exports.DiscountConditionType = DiscountConditionType = {}));
var discountToFormValuesMapper = function (discount) {
    return {
        code: discount.code,
        rule: {
            value: discount.rule.value,
            description: discount.rule.description,
            type: discount.rule.type,
        },
        starts_at: discount.starts_at && new Date(discount.starts_at),
        ends_at: discount.ends_at && new Date(discount.ends_at),
        is_dynamic: discount.is_dynamic,
        usage_limit: discount.usage_limit,
        valid_duration: discount.valid_duration,
        regions: discount.regions.map(function (r) { return ({ label: r.name, value: r.id }); }),
    };
};
exports.discountToFormValuesMapper = discountToFormValuesMapper;
var mapConditionsToCreate = function (map) {
    var _a;
    var conditions = [];
    for (var _i = 0, _b = Object.entries(map); _i < _b.length; _i++) {
        var _c = _b[_i], key = _c[0], value = _c[1];
        if (value && value.items.length) {
            conditions.push((_a = {
                    operator: value.operator
                },
                _a[key] = value.items.map(function (i) { return i.id; }),
                _a));
        }
    }
    if (!conditions.length) {
        return undefined;
    }
    return conditions;
};
var formValuesToCreateDiscountMapper = function (values, conditions) {
    var _a, _b, _c, _d;
    return {
        code: values.code,
        rule: {
            allocation: values.rule.type === "fixed"
                ? types_1.AllocationType.ITEM
                : types_1.AllocationType.TOTAL,
            type: values.rule.type,
            value: values.rule.type !== "free_shipping" ? values.rule.value : 0,
            description: values.rule.description,
            conditions: mapConditionsToCreate(conditions),
        },
        is_dynamic: values.is_dynamic,
        ends_at: (_a = values.ends_at) !== null && _a !== void 0 ? _a : undefined,
        regions: (_b = values.regions) === null || _b === void 0 ? void 0 : _b.map(function (r) { return r.value; }),
        starts_at: values.starts_at,
        usage_limit: (_c = values.usage_limit) !== null && _c !== void 0 ? _c : undefined,
        valid_duration: values.is_dynamic && ((_d = values.valid_duration) === null || _d === void 0 ? void 0 : _d.length)
            ? values.valid_duration
            : undefined,
    };
};
exports.formValuesToCreateDiscountMapper = formValuesToCreateDiscountMapper;
var mapConditionsToUpdate = function (map) {
    var _a;
    var conditions = [];
    for (var _i = 0, _b = Object.entries(map); _i < _b.length; _i++) {
        var _c = _b[_i], key = _c[0], value = _c[1];
        if (value && value.items.length) {
            conditions.push((_a = {
                    id: value.id,
                    operator: value.operator
                },
                _a[key] = value.items.map(function (i) { return i.id; }),
                _a));
        }
    }
    if (!conditions.length) {
        return undefined;
    }
    return conditions;
};
var formValuesToUpdateDiscountMapper = function (ruleId, values, conditions) {
    var _a, _b;
    return {
        code: values.code,
        rule: {
            allocation: values.rule.type === "fixed"
                ? types_1.AllocationType.ITEM
                : types_1.AllocationType.TOTAL,
            id: ruleId,
            value: values.rule.value,
            description: values.rule.description,
            conditions: mapConditionsToUpdate(conditions),
        },
        ends_at: values.ends_at,
        regions: (_a = values.regions) === null || _a === void 0 ? void 0 : _a.map(function (r) { return r.value; }),
        starts_at: values.starts_at,
        usage_limit: values.usage_limit,
        valid_duration: ((_b = values.valid_duration) === null || _b === void 0 ? void 0 : _b.length)
            ? values.valid_duration
            : undefined,
    };
};
exports.formValuesToUpdateDiscountMapper = formValuesToUpdateDiscountMapper;
