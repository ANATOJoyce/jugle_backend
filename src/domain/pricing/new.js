"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var pricing_form_1 = require("./pricing-form");
var pricing_form_context_1 = require("./pricing-form/form/pricing-form-context");
var types_1 = require("./pricing-form/types");
var New = function () {
    return (<pricing_form_context_1.PriceListFormProvider>
      <pricing_form_1.default viewType={types_1.ViewType.CREATE}/>
    </pricing_form_context_1.PriceListFormProvider>);
};
exports.default = New;
