"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var layered_modal_1 = require("../../../../components/molecules/modal/layered-modal");
var types_1 = require("../../types");
var collections_1 = require("./condition-tables/add-condition-tables/collections");
var customer_groups_1 = require("./condition-tables/add-condition-tables/customer-groups");
var products_1 = require("./condition-tables/add-condition-tables/products");
var tags_1 = require("./condition-tables/add-condition-tables/tags");
var types_2 = require("./condition-tables/add-condition-tables/types");
var collections_2 = require("./condition-tables/details-condition-tables/collections");
var customer_groups_2 = require("./condition-tables/details-condition-tables/customer-groups");
var products_2 = require("./condition-tables/details-condition-tables/products");
var tags_2 = require("./condition-tables/details-condition-tables/tags");
var types_3 = require("./condition-tables/details-condition-tables/types");
var useConditionModalItems = function (_a) {
    var isDetails = _a.isDetails, onClose = _a.onClose;
    var layeredModalContext = (0, react_1.useContext)(layered_modal_1.LayeredModalContext);
    var items = (0, react_1.useMemo)(function () { return [
        {
            label: "Product",
            value: types_1.DiscountConditionType.PRODUCTS,
            description: "Only for specific products",
            onClick: function () {
                return layeredModalContext.push({
                    title: "Choose products",
                    onBack: function () { return layeredModalContext.pop(); },
                    view: isDetails ? (<products_2.default onClose={onClose}/>) : (<products_1.default onClose={onClose}/>),
                });
            },
        },
        {
            label: "Customer group",
            value: types_1.DiscountConditionType.CUSTOMER_GROUPS,
            description: "Only for specific customer groups",
            onClick: function () {
                layeredModalContext.push({
                    title: "Choose groups",
                    onBack: function () { return layeredModalContext.pop(); },
                    view: isDetails ? (<customer_groups_2.default onClose={onClose}/>) : (<customer_groups_1.default onClose={onClose}/>),
                });
            },
        },
        {
            label: "Tag",
            value: types_1.DiscountConditionType.PRODUCT_TAGS,
            description: "Only for specific tags",
            onClick: function () {
                return layeredModalContext.push({
                    title: "Choose tags",
                    onBack: function () { return layeredModalContext.pop(); },
                    view: isDetails ? (<tags_2.default onClose={onClose}/>) : (<tags_1.default onClose={onClose}/>),
                });
            },
        },
        {
            label: "Collection",
            value: types_1.DiscountConditionType.PRODUCT_COLLECTIONS,
            description: "Only for specific product collections",
            onClick: function () {
                return layeredModalContext.push({
                    title: "Choose collections",
                    onBack: function () { return layeredModalContext.pop(); },
                    view: isDetails ? (<collections_2.default onClose={onClose}/>) : (<collections_1.default onClose={onClose}/>),
                });
            },
        },
        {
            label: "Type",
            value: types_1.DiscountConditionType.PRODUCT_TYPES,
            description: "Only for specific product types",
            onClick: function () {
                return layeredModalContext.push({
                    title: "Choose types",
                    onBack: function () { return layeredModalContext.pop(); },
                    view: isDetails ? (<types_3.default onClose={onClose}/>) : (<types_2.default onClose={onClose}/>),
                });
            },
        },
    ]; }, [isDetails]);
    return items;
};
exports.default = useConditionModalItems;
