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
var medusa_react_1 = require("medusa-react");
var React = require("react");
var button_1 = require("../../../../components/fundamentals/button");
var edit_icon_1 = require("../../../../components/fundamentals/icons/edit-icon");
var plus_icon_1 = require("../../../../components/fundamentals/icons/plus-icon");
var search_icon_1 = require("../../../../components/fundamentals/icons/search-icon");
var trash_icon_1 = require("../../../../components/fundamentals/icons/trash-icon");
var loading_container_1 = require("../../../../components/loading-container");
var input_1 = require("../../../../components/molecules/input");
var modal_1 = require("../../../../components/molecules/modal");
var product_variant_tree_1 = require("../../../../components/organisms/product-variant-tree");
var add_products_modal_1 = require("../../../../components/templates/add-products-modal");
var price_overrides_1 = require("../../../../components/templates/price-overrides");
var utils_1 = require("../../details/utils");
var pricing_form_context_1 = require("../form/pricing-form-context");
var ProductPrices = function (_a) {
    var products = _a.products, setProducts = _a.setProducts, _b = _a.isLoading, isLoading = _b === void 0 ? false : _b, onSearch = _a.onSearch, onFileChosen = _a.onFileChosen;
    var _c = React.useState(false), showAdd = _c[0], setShowAdd = _c[1];
    var _d = React.useState(null), selectedVariant = _d[0], setSelectedVariant = _d[1];
    var unselect = function () { return setSelectedVariant(null); };
    var _e = (0, pricing_form_context_1.usePriceListForm)(), prices = _e.prices, setPrices = _e.setPrices;
    var store = (0, medusa_react_1.useAdminStore)().store;
    var onChange = function (e) {
        var query = e.target.value;
        if (onSearch) {
            onSearch(query);
        }
    };
    var defaultPrices = store === null || store === void 0 ? void 0 : store.currencies.map(function (curr) { return ({
        currency_code: curr.code,
        amount: 0,
    }); });
    var getVariantActions = function (variant) {
        return [
            {
                label: "Edit prices",
                icon: <edit_icon_1.default />,
                onClick: function () {
                    setSelectedVariant(variant);
                },
            },
            {
                label: "Remove from list",
                icon: <trash_icon_1.default size={20}/>,
                onClick: function () {
                    // missing core support
                },
                variant: "danger",
            },
        ];
    };
    var handleSubmit = function (values) {
        values.variants.forEach(function (variantId) {
            var prices = values.prices
                .filter(function (pr) { return pr.amount > 0; })
                .map(function (pr) { return ({
                amount: pr.amount,
                currency_code: pr.currency_code,
            }); });
            setPrices(function (state) {
                var _a;
                return (__assign(__assign({}, state), (_a = {}, _a[variantId] = prices, _a)));
            });
            unselect();
        });
    };
    var selectedProduct = findProduct(products, selectedVariant);
    return (<div className="mt-6">
      <div>
        {onSearch && (<div className="mb-2">
            <input_1.default placeholder="Search by name or SKU..." startAdornment={<search_icon_1.default />} onChange={onChange}/>
          </div>)}
        <div>
          <loading_container_1.default isLoading={isLoading}>
            {products.map(function (product) { return (<div className="mt-2">
                <product_variant_tree_1.default product={product} key={product.id} getVariantActions={getVariantActions}/>
              </div>); })}
          </loading_container_1.default>
        </div>
      </div>
      <div className="mt-6">
        <button_1.default variant="secondary" size="medium" className="w-full rounded-rounded" onClick={function () { return setShowAdd(true); }}>
          <plus_icon_1.default />
          Add Products Manually
        </button_1.default>
      </div>
      {/* {onFileChosen && (
          <div className="mt-3">
            <FileUploadField
              className="py-8"
              onFileChosen={onFileChosen}
              filetypes={[".csx", ".xlsx", ".xls"]}
              placeholder="Only .csv files up to 5MB are supported"
              text={
                <span>
                  Drop your price list file here, or{" "}
                  <span className="text-violet-60">click to browse</span>
                </span>
              }
            />
          </div>
        )} */}
      {showAdd && (<add_products_modal_1.default onSave={setProducts} initialSelection={products} close={function () { return setShowAdd(false); }}/>)}
      {selectedVariant && (<modal_1.default open handleClose={unselect}>
          <modal_1.default.Body>
            <modal_1.default.Header handleClose={unselect}>
              <h2 className="inter-xlarge-semibold">Edit Prices</h2>
            </modal_1.default.Header>

            <price_overrides_1.default onClose={unselect} variants={selectedProduct.variants} prices={prices
                ? (0, utils_1.mergeExistingWithDefault)(prices[selectedVariant.id], defaultPrices)
                : defaultPrices} defaultVariant={selectedVariant} onSubmit={handleSubmit}/>
          </modal_1.default.Body>
        </modal_1.default>)}
    </div>);
};
var findProduct = function (products, variant) {
    if (products === void 0) { products = []; }
    return products.find(function (product) {
        return product.variants.find(function (v) { return v.id === (variant === null || variant === void 0 ? void 0 : variant.id); });
    });
};
exports.default = ProductPrices;
