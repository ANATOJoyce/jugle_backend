"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var React = require("react");
var button_1 = require("../../../../../../components/fundamentals/button");
var collapsible_tree_1 = require("../../../../../../components/molecules/collapsible-tree");
var modal_1 = require("../../../../../../components/molecules/modal");
var layered_modal_1 = require("../../../../../../components/molecules/modal/layered-modal");
var price_overrides_1 = require("../../../../../../components/templates/price-overrides");
var product_variant_leaf_1 = require("./product-variant-leaf");
var router_1 = require("@reach/router");
var mappers_1 = require("./mappers");
var utils_1 = require("../../../utils");
var EditPricesOverridesModal = function (_a) {
    var close = _a.close, product = _a.product;
    var context = (0, layered_modal_1.useLayeredModal)();
    var priceListId = (0, router_1.useParams)().id;
    var updatePriceList = (0, medusa_react_1.useAdminUpdatePriceList)(priceListId);
    var store = (0, medusa_react_1.useAdminStore)().store;
    var defaultPrices = store === null || store === void 0 ? void 0 : store.currencies.map(function (curr) { return ({
        currency_code: curr.code,
        amount: 0,
    }); });
    var getOnClick = function (variant) { return function () {
        return context.push({
            title: "Edit price overrides",
            onBack: function () { return context.pop(); },
            view: (<price_overrides_1.default prices={(0, utils_1.mergeExistingWithDefault)(variant.prices.filter(function (pr) { return pr.price_list_id; }), defaultPrices)} isEdit defaultVariant={variant} variants={product.variants} onClose={close} onSubmit={function (values) {
                    var updatedPrices = (0, mappers_1.mapToPriceList)(values, variant.id);
                    updatePriceList.mutate({
                        prices: updatedPrices,
                    }, {
                        onSuccess: function () {
                            context.pop();
                            close();
                        },
                    });
                }}/>),
        });
    }; };
    return (<layered_modal_1.default isLargeModal context={context} handleClose={close}>
      <modal_1.default.Body className="h-[calc(100vh-134px)] flex flex-col">
        <modal_1.default.Header handleClose={close}>
          <h1 className="inter-xlarge-semibold">
            Price overrides{" "}
            <span className="text-grey-50 inter-xlarge-regular truncate">
              ({product.title})
            </span>
          </h1>
        </modal_1.default.Header>

        <modal_1.default.Content className="flex-1">
          <collapsible_tree_1.CollapsibleTree>
            <collapsible_tree_1.CollapsibleTree.Parent>
              <div>
                <img src={product.thumbnail} className="w-4 h-5 rounded-base"/>
              </div>
              <span className="inter-small-semibold">{product.title}</span>
            </collapsible_tree_1.CollapsibleTree.Parent>
            <collapsible_tree_1.CollapsibleTree.Content>
              {product.variants.map(function (variant) { return (<collapsible_tree_1.CollapsibleTree.Leaf>
                  <product_variant_leaf_1.default key={variant.id} onClick={getOnClick(variant)} variant={variant} prices={variant.prices.filter(function (pr) { return pr.price_list_id; })}/>
                </collapsible_tree_1.CollapsibleTree.Leaf>); })}
            </collapsible_tree_1.CollapsibleTree.Content>
          </collapsible_tree_1.CollapsibleTree>
        </modal_1.default.Content>

        <modal_1.default.Footer>
          <div className="flex w-full h-8 justify-end">
            <button_1.default variant="ghost" className="mr-2 w-32 text-small justify-center rounded-rounded" size="large" onClick={close}>
              Cancel
            </button_1.default>
            <button_1.default disabled size="large" className="w-32 text-small justify-center rounded-rounded" variant="primary">
              Save
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </layered_modal_1.default>);
};
exports.default = EditPricesOverridesModal;
