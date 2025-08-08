"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var React = require("react");
var accordion_1 = require("../../../../components/organisms/accordion");
var utils_1 = require("../../details/sections/prices-details/utils");
var product_prices_1 = require("./product-prices");
var defaultQueryFilters = {
    limit: 50,
    offset: 0,
};
var PricesSection = function (_a) {
    var _b = _a.isEdit, isEdit = _b === void 0 ? false : _b, id = _a.id;
    var _c = (0, medusa_react_1.useAdminPriceListProducts)(id, defaultQueryFilters, {
        enabled: isEdit,
    }), _d = _c.products, products = _d === void 0 ? [] : _d, isLoading = _c.isLoading;
    var _e = React.useState([]), selectedProducts = _e[0], setSelectedProducts = _e[1];
    var mergedProducts = (0, utils_1.merge)(products, selectedProducts);
    return (<accordion_1.default.Item forceMountContent required value="prices" title="Prices" description="You will be able to override the prices for the products you add here" tooltip="Define the price overrides for the price list">
      <product_prices_1.default products={mergedProducts} isLoading={isLoading} setProducts={setSelectedProducts} onFileChosen={console.log}/>
    </accordion_1.default.Item>);
};
exports.default = PricesSection;
