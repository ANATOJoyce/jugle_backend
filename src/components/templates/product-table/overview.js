"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var gatsby_1 = require("gatsby");
var React = require("react");
var product_status_variant_1 = require("../../../utils/product-status-variant");
var button_1 = require("../../fundamentals/button");
var list_icon_1 = require("../../fundamentals/icons/list-icon");
var more_horizontal_icon_1 = require("../../fundamentals/icons/more-horizontal-icon");
var tile_icon_1 = require("../../fundamentals/icons/tile-icon");
var status_indicator_1 = require("../../fundamentals/status-indicator");
var actionables_1 = require("../../molecules/actionables");
var use_product_actions_1 = require("./use-product-actions");
var ProductOverview = function (_a) {
    var products = _a.products, toggleListView = _a.toggleListView;
    return (<>
      <div className="flex justify-end border-t border-b border-grey-20 py-2.5 pr-xlarge">
        <div className="inter-small-semibold text-grey-50 flex justify-self-end">
          <span onClick={toggleListView} className={(0, clsx_1.default)("hover:bg-grey-5 cursor-pointer rounded p-0.5 text-grey-40")}>
            <list_icon_1.default size={20}/>
          </span>
          <span className={(0, clsx_1.default)("hover:bg-grey-5 cursor-pointer rounded p-0.5 text-grey-90")}>
            <tile_icon_1.default size={20}/>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-6">
        {products.map(function (product) { return (<ProductTile product={product}/>); })}
      </div>
    </>);
};
var ProductTile = function (_a) {
    var _b;
    var product = _a.product;
    var getActions = (0, use_product_actions_1.default)(product).getActions;
    return (<div className="p-base group rounded-rounded hover:bg-grey-5 flex-col">
      <div className="relative">
        <div className={(0, clsx_1.default)("rounded-base inline-block absolute top-2 right-2")}>
          <actionables_1.default actions={getActions()} customTrigger={<button_1.default variant="ghost" size="small" className="w-xlarge h-xlarge hidden-actions group-hover:opacity-100 focus-within:opacity-100 opacity-0 bg-grey-0">
                <more_horizontal_icon_1.default size={20}/>
              </button_1.default>}/>
        </div>
        <gatsby_1.Link to={"".concat(product.id)}>
          <img className="min-h-[230px] block object-cover rounded-rounded" src={product.thumbnail}/>
          <div>
            <div className="mt-base flex items-center justify-between">
              <p className="inter-small-regular text-grey-90 line-clamp-1 mr-3">
                {product.title}
              </p>
              <status_indicator_1.default variant={(0, product_status_variant_1.getProductStatusVariant)(product.status)} className="shrink-0"/>
            </div>
            <span className="inter-small-regular text-grey-50 line-clamp-1">
              {(_b = product.collection) === null || _b === void 0 ? void 0 : _b.title}
            </span>
          </div>
        </gatsby_1.Link>
      </div>
    </div>);
};
exports.default = ProductOverview;
