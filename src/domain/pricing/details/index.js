"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var React = require("react");
var breadcrumb_1 = require("../../../components/molecules/breadcrumb");
var raw_json_1 = require("../../../components/organisms/raw-json");
var mappers_1 = require("../pricing-form/form/mappers");
var pricing_form_context_1 = require("../pricing-form/form/pricing-form-context");
var header_1 = require("./sections/header");
var prices_details_1 = require("./sections/prices-details");
var PricingDetails = function (_a) {
    var id = _a.id;
    var _b = (0, medusa_react_1.useAdminPriceList)(id), price_list = _b.price_list, isLoading = _b.isLoading;
    return (<div className="pb-xlarge">
      <breadcrumb_1.default currentPage="Edit price list" previousBreadcrumb="Pricing" previousRoute="/a/pricing"/>

      {!isLoading && price_list ? (<pricing_form_context_1.PriceListFormProvider priceList={(0, mappers_1.mapPriceListToFormValues)(price_list)}>
          <header_1.default priceList={price_list}/>
          <div className="mt-4 w-full">
            <prices_details_1.default id={price_list === null || price_list === void 0 ? void 0 : price_list.id}/>
          </div>
          <div className="mt-xlarge">
            <raw_json_1.default data={price_list} title="Raw price list"/>
          </div>
        </pricing_form_context_1.PriceListFormProvider>) : null}
    </div>);
};
exports.default = PricingDetails;
