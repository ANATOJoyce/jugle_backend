"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var React = require("react");
var feature_toggle_1 = require("../../../components/fundamentals/feature-toggle");
var breadcrumb_1 = require("../../../components/molecules/breadcrumb");
var raw_json_1 = require("../../../components/organisms/raw-json");
var product_form_context_1 = require("./form/product-form-context");
var general_1 = require("./sections/general");
var images_1 = require("./sections/images");
var prices_1 = require("./sections/prices");
var sales_channels_1 = require("./sections/sales-channels");
var stock_inventory_1 = require("./sections/stock-inventory");
var variants_1 = require("./sections/variants");
var ProductForm = function (_a) {
    var product = _a.product, _b = _a.isEdit, isEdit = _b === void 0 ? false : _b;
    var isVariantsView = (0, product_form_context_1.useProductForm)().isVariantsView;
    var store = (0, medusa_react_1.useAdminStore)().store;
    var currencyCodes = store === null || store === void 0 ? void 0 : store.currencies.map(function (currency) { return currency.code; });
    return (<div>
      <breadcrumb_1.default currentPage={"Product Details"} previousBreadcrumb={"Products"} previousRoute="/a/products"/>
      <div className="flex flex-col space-y-base pb-2xlarge">
        <general_1.default isEdit={isEdit} product={product} showViewOptions={!isEdit}/>

        <feature_toggle_1.default featureFlag="sales_channels">
          <sales_channels_1.default isEdit={isEdit} product={product}/>
        </feature_toggle_1.default>

        {(isVariantsView || isEdit) && (<variants_1.default isEdit={isEdit} product={product}/>)}

        {!isVariantsView && !isEdit && (<prices_1.default currencyCodes={currencyCodes} defaultCurrencyCode={store === null || store === void 0 ? void 0 : store.default_currency_code} defaultAmount={1000}/>)}

        <images_1.default />

        <stock_inventory_1.default />

        <raw_json_1.default data={product} title="Raw product"/>
      </div>
    </div>);
};
exports.default = ProductForm;
