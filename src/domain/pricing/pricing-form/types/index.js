"use strict";
/* eslint-disable no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewType = exports.PriceListType = exports.PriceListStatus = exports.ConfigurationField = void 0;
var ConfigurationField;
(function (ConfigurationField) {
    ConfigurationField["STARTS_AT"] = "starts_at";
    ConfigurationField["ENDS_AT"] = "ends_at";
    ConfigurationField["CUSTOMER_GROUPS"] = "customer_groups";
})(ConfigurationField || (exports.ConfigurationField = ConfigurationField = {}));
var PriceListStatus;
(function (PriceListStatus) {
    PriceListStatus["ACTIVE"] = "active";
    PriceListStatus["DRAFT"] = "draft";
})(PriceListStatus || (exports.PriceListStatus = PriceListStatus = {}));
var PriceListType;
(function (PriceListType) {
    PriceListType["SALE"] = "sale";
    PriceListType["OVERRIDE"] = "override";
})(PriceListType || (exports.PriceListType = PriceListType = {}));
var ViewType;
(function (ViewType) {
    ViewType["CREATE"] = "create";
    ViewType["EDIT_DETAILS"] = "edit_details";
    ViewType["EDIT_PRICES"] = "edit_prices";
})(ViewType || (exports.ViewType = ViewType = {}));
