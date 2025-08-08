"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountRuleType = exports.AllocationType = exports.DiscountConditionOperator = exports.DiscountConditionType = void 0;
var DiscountConditionType;
(function (DiscountConditionType) {
    DiscountConditionType["PRODUCTS"] = "products";
    DiscountConditionType["PRODUCT_TYPES"] = "product_types";
    DiscountConditionType["PRODUCT_COLLECTIONS"] = "product_collections";
    DiscountConditionType["PRODUCT_TAGS"] = "product_tags";
    DiscountConditionType["CUSTOMER_GROUPS"] = "customer_groups";
})(DiscountConditionType || (exports.DiscountConditionType = DiscountConditionType = {}));
var DiscountConditionOperator;
(function (DiscountConditionOperator) {
    DiscountConditionOperator["IN"] = "in";
    DiscountConditionOperator["NOT_IN"] = "not_in";
})(DiscountConditionOperator || (exports.DiscountConditionOperator = DiscountConditionOperator = {}));
var AllocationType;
(function (AllocationType) {
    AllocationType["ITEM"] = "item";
    AllocationType["TOTAL"] = "total";
})(AllocationType || (exports.AllocationType = AllocationType = {}));
var DiscountRuleType;
(function (DiscountRuleType) {
    DiscountRuleType["FIXED"] = "fixed";
    DiscountRuleType["PERCENTAGE"] = "percentage";
    DiscountRuleType["FREE_SHIPPING"] = "free_shipping";
})(DiscountRuleType || (exports.DiscountRuleType = DiscountRuleType = {}));
