"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var collapsible_tree_1 = require("../../molecules/collapsible-tree");
var ProductVariantTree = function (_a) {
    var product = _a.product, getProductActions = _a.getProductActions, getVariantActions = _a.getVariantActions;
    return (<collapsible_tree_1.CollapsibleTree>
      <collapsible_tree_1.CollapsibleTree.Parent actions={getProductActions && getProductActions(product)}>
        <div>
          <img src={product.thumbnail} className="w-4 h-5 rounded-base"/>
        </div>
        <span className="inter-small-semibold">{product.title}</span>
      </collapsible_tree_1.CollapsibleTree.Parent>
      <collapsible_tree_1.CollapsibleTree.Content>
        {product.variants.map(function (variant) { return (<collapsible_tree_1.CollapsibleTree.Leaf key={variant.id} actions={getVariantActions && getVariantActions(variant)}>
            <ProductVariantLeaf {...variant}/>
          </collapsible_tree_1.CollapsibleTree.Leaf>); })}
      </collapsible_tree_1.CollapsibleTree.Content>
    </collapsible_tree_1.CollapsibleTree>);
};
var ProductVariantLeaf = function (_a) {
    var sku = _a.sku, title = _a.title, _b = _a.prices, prices = _b === void 0 ? [] : _b;
    var filteredPrices = prices.filter(function (pr) { return pr.price_list_id; });
    return (<div className="flex flex-1">
      <div className="truncate">
        <span>{title}</span>
        {sku && <span className="text-grey-50 ml-xsmall">(SKU: {sku})</span>}
      </div>
      <div className="flex items-center text-grey-50 flex-1 justify-end">
        <div className="text-grey-50 mr-xsmall">
          {filteredPrices.length ? (<span>{"".concat(filteredPrices.length, " price").concat(filteredPrices.length > 1 ? "s" : "")}</span>) : (<span className="inter-small-semibold text-orange-40">
              Add prices
            </span>)}
        </div>
      </div>
    </div>);
};
exports.default = ProductVariantTree;
