"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var modal_1 = require("../../../../components/molecules/modal");
var types_1 = require("../../types");
var collections_1 = require("./condition-tables/edit-condition-tables/collections");
var customer_groups_1 = require("./condition-tables/edit-condition-tables/customer-groups");
var products_1 = require("./condition-tables/edit-condition-tables/products");
var tags_1 = require("./condition-tables/edit-condition-tables/tags");
var types_2 = require("./condition-tables/edit-condition-tables/types");
var EditConditionsModal = function (_a) {
    var onClose = _a.onClose, view = _a.view;
    return (<modal_1.default open handleClose={onClose}>
      <modal_1.default.Header handleClose={onClose}>
        <h1 className="inter-xlarge-semibold">Edit {getTitle(view)}</h1>
      </modal_1.default.Header>
      <modal_1.default.Body>
        <Content view={view} onClose={onClose}/>
      </modal_1.default.Body>
    </modal_1.default>);
};
var getTitle = function (view) {
    switch (view) {
        case types_1.DiscountConditionType.PRODUCTS:
            return "products";
        case types_1.DiscountConditionType.CUSTOMER_GROUPS:
            return "groups";
        case types_1.DiscountConditionType.PRODUCT_TAGS:
            return "tags";
        case types_1.DiscountConditionType.PRODUCT_COLLECTIONS:
            return "collections";
        case types_1.DiscountConditionType.PRODUCT_TYPES:
            return "types";
    }
};
var Content = function (_a) {
    var view = _a.view, onClose = _a.onClose;
    switch (view) {
        case types_1.DiscountConditionType.PRODUCTS:
            return <products_1.default onClose={onClose}/>;
        case types_1.DiscountConditionType.CUSTOMER_GROUPS:
            return <customer_groups_1.default onClose={onClose}/>;
        case types_1.DiscountConditionType.PRODUCT_COLLECTIONS:
            return <collections_1.default onClose={onClose}/>;
        case types_1.DiscountConditionType.PRODUCT_TAGS:
            return <tags_1.default onClose={onClose}/>;
        case types_1.DiscountConditionType.PRODUCT_TYPES:
            return <types_2.default onClose={onClose}/>;
    }
};
exports.default = EditConditionsModal;
