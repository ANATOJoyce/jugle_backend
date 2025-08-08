"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hydrateDiscount = void 0;
var extract_options_1 = require("./extract-options");
var prices_1 = require("./prices");
var hydrateDiscount = function (_a) {
    var discount = _a.discount, _b = _a.actions, setValue = _b.setValue, setAllocationItem = _b.setAllocationItem, setStartDate = _b.setStartDate, setExpiryDate = _b.setExpiryDate, setHasExpiryDate = _b.setHasExpiryDate, setAvailabilityDuration = _b.setAvailabilityDuration, setAppliesToAll = _b.setAppliesToAll, setSelectedProducts = _b.setSelectedProducts, setIsDynamic = _b.setIsDynamic, setIsFreeShipping = _b.setIsFreeShipping, setDiscountType = _b.setDiscountType, setRegionsDisabled = _b.setRegionsDisabled, setSelectedRegions = _b.setSelectedRegions, setIsDisabled = _b.setIsDisabled, _c = _a.isEdit, isEdit = _c === void 0 ? false : _c;
    if (!discount)
        return;
    setValue("code", isEdit ? discount.code : "".concat(discount.code, "_COPY"));
    setValue("usage_limit", discount.usage_limit);
    setValue("rule.description", discount.rule.description);
    setAllocationItem(discount.rule.allocation === "item");
    setStartDate(discount.starts_at);
    if (discount.rule.type === "fixed") {
        var displayPrice = (0, prices_1.displayAmount)(discount.regions[0].currency_code, discount.rule.value);
        setValue("rule.value", displayPrice);
    }
    else {
        setValue("rule.value", discount.rule.value);
    }
    if (setIsDisabled) {
        setIsDisabled(discount.is_disabled);
    }
    if (discount.ends_at) {
        setHasExpiryDate(true);
        setExpiryDate(discount.ends_at);
    }
    if (discount.valid_duration) {
        setAvailabilityDuration(discount.valid_duration);
    }
    if (discount.rule.valid_for.length > 0) {
        setAppliesToAll(false);
        setSelectedProducts((0, extract_options_1.extractProductOptions)(discount.rule.valid_for));
    }
    else {
        setAppliesToAll(true);
    }
    if (discount.regions.length) {
        setSelectedRegions((0, extract_options_1.extractRegionOptions)(discount.regions));
    }
    if (discount.is_dynamic) {
        setIsDynamic(true);
    }
    if (discount.rule.type === "free_shipping") {
        setIsFreeShipping(true);
    }
    else if (discount.rule.type === "percentage") {
        setDiscountType("percentage");
    }
    else {
        setDiscountType("fixed");
        if (isEdit && setRegionsDisabled) {
            setRegionsDisabled(true);
        }
    }
};
exports.hydrateDiscount = hydrateDiscount;
