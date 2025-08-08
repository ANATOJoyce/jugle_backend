"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var discount_form_1 = require("./discount-form");
var discount_form_context_1 = require("./discount-form/form/discount-form-context");
var mappers_1 = require("./discount-form/form/mappers");
var New = function (_a) {
    var _b;
    var location = _a.location;
    var toDuplicate = (_b = location === null || location === void 0 ? void 0 : location.state) === null || _b === void 0 ? void 0 : _b.discount;
    return (<div className="pb-xlarge">
      <discount_form_context_1.DiscountFormProvider discount={toDuplicate ? (0, mappers_1.discountToFormValuesMapper)(toDuplicate) : undefined}>
        <discount_form_1.default discount={toDuplicate}/>
      </discount_form_context_1.DiscountFormProvider>
    </div>);
};
exports.default = New;
