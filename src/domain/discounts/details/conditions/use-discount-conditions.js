"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDiscountConditions = void 0;
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var trash_icon_1 = require("../../../../components/fundamentals/icons/trash-icon");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var types_1 = require("../../types");
var useDiscountConditions = function (discount) {
    var refetch = (0, medusa_react_1.useAdminDiscount)(discount.id).refetch;
    var mutate = (0, medusa_react_1.useAdminDiscountRemoveCondition)(discount.id).mutate;
    var notification = (0, use_notification_1.default)();
    var removeCondition = function (conditionId) {
        mutate(conditionId, {
            onSuccess: function () {
                notification("Success", "Condition removed", "success");
                refetch();
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    var itemized = discount.rule.conditions.map(function (condition) { return ({
        type: condition.type,
        title: getTitle(condition.type),
        description: getDescription(condition.type),
        actions: [
            {
                label: "Delete condition",
                icon: <trash_icon_1.default size={16}/>,
                variant: "danger",
                onClick: function () { return removeCondition(condition.id); },
            },
        ],
    }); });
    return itemized;
};
exports.useDiscountConditions = useDiscountConditions;
var getTitle = function (type) {
    switch (type) {
        case types_1.DiscountConditionType.PRODUCTS:
            return "Product";
        case types_1.DiscountConditionType.PRODUCT_COLLECTIONS:
            return "Collection";
        case types_1.DiscountConditionType.PRODUCT_TAGS:
            return "Tag";
        case types_1.DiscountConditionType.PRODUCT_TYPES:
            return "Type";
        case types_1.DiscountConditionType.CUSTOMER_GROUPS:
            return "Customer Group";
    }
};
var getDescription = function (type) {
    switch (type) {
        case types_1.DiscountConditionType.PRODUCTS:
            return "Discount is applicable to specific products";
        case types_1.DiscountConditionType.PRODUCT_COLLECTIONS:
            return "Discount is applicable to specific collections";
        case types_1.DiscountConditionType.PRODUCT_TAGS:
            return "Discount is applicable to specific product tags";
        case types_1.DiscountConditionType.PRODUCT_TYPES:
            return "Discount is applicable to specific product types";
        case types_1.DiscountConditionType.CUSTOMER_GROUPS:
            return "Discount is applicable to specific customer groups";
    }
};
