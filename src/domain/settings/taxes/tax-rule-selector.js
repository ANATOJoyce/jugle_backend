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
var react_1 = require("react");
var button_1 = require("../../../components/fundamentals/button");
var radio_group_1 = require("../../../components/organisms/radio-group");
var modal_1 = require("../../../components/molecules/modal");
var layered_modal_1 = require("../../../components/molecules/modal/layered-modal");
var product_selector_1 = require("./product-selector");
var product_type_selector_1 = require("./product-type-selector");
var shipping_option_selector_1 = require("./shipping-option-selector");
var TaxRuleType;
(function (TaxRuleType) {
    TaxRuleType["PRODUCTS"] = "products";
    TaxRuleType["PRODUCT_TYPES"] = "product_types";
    TaxRuleType["SHIPPING_OPTIONS"] = "shipping_options";
})(TaxRuleType || (TaxRuleType = {}));
var TaxRuleSelector = function (_a) {
    var regionId = _a.regionId, type = _a.type, items = _a.items, onSubmit = _a.onSubmit, _b = _a.isLargeModal, isLargeModal = _b === void 0 ? true : _b;
    var isLocked = type && items;
    var pop = (0, react_1.useContext)(layered_modal_1.LayeredModalContext).pop;
    var _c = (0, react_1.useState)(type !== null && type !== void 0 ? type : TaxRuleType.PRODUCTS), selectedType = _c[0], setSelectedType = _c[1];
    var _d = (0, react_1.useState)({
        type: type !== null && type !== void 0 ? type : TaxRuleType.PRODUCTS,
        items: items !== null && items !== void 0 ? items : [],
    }), selectedRule = _d[0], setSelectedRule = _d[1];
    var handleSubmit = function () {
        onSubmit(selectedRule);
        pop();
    };
    var handleTypeChange = function (t) {
        if (t !== selectedType) {
            setSelectedType(t);
            setSelectedRule({
                type: t,
                items: [],
            });
        }
    };
    var handleItemChanges = function (items) {
        setSelectedRule(function (prev) {
            return __assign(__assign({}, prev), { items: items });
        });
    };
    return (<>
      <modal_1.default.Content isLargeModal={isLargeModal}>
        <div className="min-h-[680px]">
          {!isLocked && (<>
              <div className="inter-base-semibold mb-large">Type</div>
              <radio_group_1.default.Root className="flex gap-base" value={selectedType} onValueChange={handleTypeChange}>
                <radio_group_1.default.Item className="flex-1" label={"Products"} description={"Select individual products"} value={TaxRuleType.PRODUCTS}/>
                <radio_group_1.default.Item className="flex-1" label={"Product Types"} description={"Select product types"} value={TaxRuleType.PRODUCT_TYPES}/>
                <radio_group_1.default.Item className="flex-1" label={"Shipping Options"} description={"Select shipping options"} value={TaxRuleType.SHIPPING_OPTIONS}/>
              </radio_group_1.default.Root>
            </>)}
          {selectedType === TaxRuleType.PRODUCTS && (<product_selector_1.ProductSelector items={selectedRule.items} onChange={handleItemChanges}/>)}
          {selectedType === TaxRuleType.PRODUCT_TYPES && (<product_type_selector_1.ProductTypeSelector items={selectedRule.items} onChange={handleItemChanges}/>)}
          {selectedType === TaxRuleType.SHIPPING_OPTIONS && (<shipping_option_selector_1.ShippingOptionSelector regionId={regionId} items={selectedRule.items} onChange={handleItemChanges}/>)}
        </div>
      </modal_1.default.Content>
      <modal_1.default.Footer isLargeModal={isLargeModal}>
        <div className="flex w-full justify-end gap-x-xsmall">
          <button_1.default variant="ghost" size="small" className="w-[112px]" onClick={function () { return pop(); }}>
            Back
          </button_1.default>
          <button_1.default variant="primary" className="w-[112px]" size="small" onClick={handleSubmit}>
            Add
          </button_1.default>
        </div>
      </modal_1.default.Footer>
    </>);
};
exports.default = TaxRuleSelector;
