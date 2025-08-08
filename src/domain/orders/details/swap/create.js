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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var spinner_1 = require("../../../../components/atoms/spinner");
var button_1 = require("../../../../components/fundamentals/button");
var check_icon_1 = require("../../../../components/fundamentals/icons/check-icon");
var icon_tooltip_1 = require("../../../../components/molecules/icon-tooltip");
var modal_1 = require("../../../../components/molecules/modal");
var layered_modal_1 = require("../../../../components/molecules/modal/layered-modal");
var rma_select_shipping_1 = require("../../../../components/molecules/rma-select-shipping");
var select_1 = require("../../../../components/molecules/select");
var rma_return_product_table_1 = require("../../../../components/organisms/rma-return-product-table");
var rma_select_product_table_1 = require("../../../../components/organisms/rma-select-product-table");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var prices_1 = require("../../../../utils/prices");
var products_1 = require("../rma-sub-modals/products");
var create_filtering_1 = require("../utils/create-filtering");
var SwapMenu = function (_a) {
    var _b, _c;
    var order = _a.order, onDismiss = _a.onDismiss;
    var refetch = (0, medusa_react_1.useAdminOrder)(order.id).refetch;
    var _d = (0, medusa_react_1.useAdminCreateSwap)(order.id), mutate = _d.mutate, isLoading = _d.isLoading;
    var layeredModalContext = (0, react_1.useContext)(layered_modal_1.LayeredModalContext);
    var _e = (0, react_1.useState)({}), toReturn = _e[0], setToReturn = _e[1];
    var _f = (0, react_1.useState)(false), useCustomShippingPrice = _f[0], setUseCustomShippingPrice = _f[1];
    var _g = (0, react_1.useState)([]), itemsToAdd = _g[0], setItemsToAdd = _g[1];
    var _h = (0, react_1.useState)(null), shippingMethod = _h[0], setShippingMethod = _h[1];
    var _j = (0, react_1.useState)(undefined), shippingPrice = _j[0], setShippingPrice = _j[1];
    var _k = (0, react_1.useState)(order.no_notification), noNotification = _k[0], setNoNotification = _k[1];
    var notification = (0, use_notification_1.default)();
    // Includes both order items and swap items
    var allItems = (0, react_1.useMemo)(function () {
        if (order) {
            return (0, create_filtering_1.filterItems)(order, false);
        }
        return [];
    }, [order]);
    var _l = (0, medusa_react_1.useAdminShippingOptions)({
        is_return: true,
        region_id: order.region_id,
    }), shippingOptions = _l.shipping_options, shippingLoading = _l.isLoading;
    var returnTotal = (0, react_1.useMemo)(function () {
        var items = Object.keys(toReturn).map(function (t) {
            return allItems.find(function (i) { return i.id === t; });
        });
        return (items.reduce(function (acc, next) {
            if (!next) {
                return acc;
            }
            return (acc +
                ((next.refundable || 0) / (next.quantity - next.returned_quantity)) *
                    toReturn[next.id].quantity);
        }, 0) - (shippingPrice || 0));
    }, [toReturn, shippingPrice]);
    var additionalTotal = (0, react_1.useMemo)(function () {
        return itemsToAdd.reduce(function (acc, next) {
            var _a, _b;
            var amount = (_a = next.prices.find(function (ma) { return ma.region_id === order.region_id; })) === null || _a === void 0 ? void 0 : _a.amount;
            if (!amount) {
                amount = (_b = next.prices.find(function (ma) { return ma.currency_code === order.currency_code; })) === null || _b === void 0 ? void 0 : _b.amount;
            }
            if (!amount) {
                amount = 0;
            }
            var lineTotal = amount * next.quantity;
            return acc + lineTotal;
        }, 0);
    }, [itemsToAdd]);
    var handleToAddQuantity = function (value, index) {
        var updated = __spreadArray([], itemsToAdd, true);
        var itemToUpdate = updated[index];
        updated[index] = __assign(__assign({}, itemToUpdate), { quantity: itemToUpdate.quantity + value });
        setItemsToAdd(updated);
    };
    var handleRemoveItem = function (index) {
        var updated = __spreadArray([], itemsToAdd, true);
        updated.splice(index, 1);
        setItemsToAdd(updated);
    };
    var handleShippingSelected = function (selectedItem) {
        if (!shippingOptions) {
            return;
        }
        setShippingMethod(selectedItem);
        var method = shippingOptions === null || shippingOptions === void 0 ? void 0 : shippingOptions.find(function (o) { return selectedItem.value === o.id; });
        setShippingPrice(method === null || method === void 0 ? void 0 : method.amount);
    };
    var handleUpdateShippingPrice = function (value) {
        if (value && value >= 0) {
            setShippingPrice(value);
        }
    };
    (0, react_1.useEffect)(function () {
        if (!useCustomShippingPrice && shippingMethod && shippingOptions) {
            var method = shippingOptions.find(function (o) { return shippingMethod.value === o.id; });
            setShippingPrice(method === null || method === void 0 ? void 0 : method.amount);
        }
    }, [useCustomShippingPrice, shippingMethod]);
    var handleProductSelect = function (variants) {
        var existingIds = itemsToAdd.map(function (i) { return i.id; });
        setItemsToAdd(function (itemsToAdd) { return __spreadArray(__spreadArray([], itemsToAdd, true), variants
            .filter(function (variant) { return !existingIds.includes(variant.id); })
            .map(function (variant) { return (__assign(__assign({}, variant), { quantity: 1 })); }), true); });
    };
    var onSubmit = function () {
        var items = Object.entries(toReturn).map(function (_a) {
            var _b, _c, _d;
            var key = _a[0], value = _a[1];
            return {
                item_id: key,
                note: (_b = value.note) !== null && _b !== void 0 ? _b : undefined,
                quantity: value.quantity,
                reason_id: (_d = (_c = value.reason) === null || _c === void 0 ? void 0 : _c.value.id) !== null && _d !== void 0 ? _d : undefined,
            };
        });
        var data = {
            return_items: items,
            additional_items: itemsToAdd.map(function (i) { return ({
                variant_id: i.id,
                quantity: i.quantity,
            }); }),
            no_notification: noNotification !== order.no_notification ? noNotification : undefined,
        };
        if (shippingMethod) {
            data.return_shipping = {
                option_id: shippingMethod.value,
                price: Math.round(shippingPrice || 0),
            };
        }
        return mutate(data, {
            onSuccess: function () {
                refetch();
                notification("Success", "Successfully created exchange", "success");
                onDismiss();
            },
            onError: function (err) {
                notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
            },
        });
    };
    return (<layered_modal_1.default context={layeredModalContext} handleClose={onDismiss}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={onDismiss}>
          <h2 className="inter-xlarge-semibold">Register Exchange</h2>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div className="mb-7">
            <h3 className="inter-base-semibold">Items to return</h3>
            <rma_select_product_table_1.default order={order} allItems={allItems} toReturn={toReturn} setToReturn={function (items) { return setToReturn(items); }}/>
          </div>

          <div>
            <h3 className="inter-base-semibold ">Shipping</h3>
            {shippingLoading ? (<div className="flex justify-center">
                <spinner_1.default size="medium" variant="secondary"/>
              </div>) : (<select_1.default label="Shipping Method" className="mt-2" placeholder="Add a shipping method" value={shippingMethod} onChange={handleShippingSelected} options={(shippingOptions === null || shippingOptions === void 0 ? void 0 : shippingOptions.map(function (o) { return ({
                label: o.name,
                value: o.id,
            }); })) || []}/>)}
            {shippingMethod && (<rma_select_shipping_1.default useCustomShippingPrice={useCustomShippingPrice} shippingPrice={shippingPrice} currencyCode={order.currency_code} updateShippingPrice={handleUpdateShippingPrice} setUseCustomShippingPrice={setUseCustomShippingPrice}/>)}
          </div>
          <div className="flex justify-between mt-8 items-center">
            <h3 className="inter-base-semibold ">Items to send</h3>
            {itemsToAdd.length === 0 ? (<button_1.default variant="ghost" className="border border-grey-20" size="small" onClick={function () {
                layeredModalContext.push(SelectProductsScreen(layeredModalContext.pop, itemsToAdd, handleProductSelect));
            }}>
                Add Product
              </button_1.default>) : (<></>)}
          </div>
          {itemsToAdd.length > 0 && (<>
              <rma_return_product_table_1.default isAdditionalItems order={order} itemsToAdd={itemsToAdd} handleRemoveItem={handleRemoveItem} handleToAddQuantity={handleToAddQuantity}/>

              <div className="flex w-full justify-end">
                <button_1.default variant="ghost" className="border border-grey-20" size="small" onClick={function () {
                layeredModalContext.push(SelectProductsScreen(layeredModalContext.pop, itemsToAdd, handleProductSelect));
            }}>
                  Add Product
                </button_1.default>
              </div>
            </>)}
          <div className="flex text-grey-90 justify-between items-center inter-small-regular mt-8">
            <span>Return Total</span>
            <span>
              {(0, prices_1.formatAmountWithSymbol)({
            currency: order.currency_code,
            amount: returnTotal,
        })}
            </span>
          </div>
          <div className="flex text-grey-90 justify-between items-center inter-small-regular mt-2">
            <span>Additional Total</span>
            <span>
              {(0, prices_1.formatAmountWithSymbol)({
            currency: order.currency_code,
            amount: additionalTotal,
            digits: 2,
            tax: (_b = order.tax_rate) !== null && _b !== void 0 ? _b : undefined,
        })}
            </span>
          </div>
          <div className="flex text-grey-90 justify-between items-center inter-small-regular mt-2">
            <span>Outbond Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="flex justify-between items-center inter-base-semibold mt-4">
            <span>Estimated difference</span>
            <span className="inter-large-semibold">
              {(0, prices_1.formatAmountWithSymbol)({
            currency: order.currency_code,
            amount: additionalTotal - returnTotal,
            digits: 2,
            tax: (_c = order.tax_rate) !== null && _c !== void 0 ? _c : undefined,
        })}
            </span>
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full justify-between">
            <div className="items-center h-full flex cursor-pointer" onClick={function () { return setNoNotification(!noNotification); }}>
              <div className={"w-5 h-5 flex justify-center text-grey-0 border-grey-30 border rounded-base ".concat(!noNotification && "bg-violet-60")}>
                <span className="self-center">
                  {!noNotification && <check_icon_1.default size={16}/>}
                </span>
              </div>
              <input id="noNotification" className="hidden" name="noNotification" checked={!noNotification} type="checkbox"/>
              <span className="ml-3 flex items-center text-grey-90 gap-x-xsmall">
                Send notifications
                <icon_tooltip_1.default content="If unchecked the customer will not receive communication about this exchange"/>
              </span>
            </div>

            <button_1.default onClick={onSubmit} disabled={Object.keys(toReturn).length === 0 || itemsToAdd.length === 0} loading={isLoading} type="submit" variant="primary">
              Complete
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </layered_modal_1.default>);
};
var SelectProductsScreen = function (pop, itemsToAdd, setSelectedItems) {
    return {
        title: "Add Products",
        onBack: function () { return pop(); },
        view: (<products_1.default selectedItems={itemsToAdd || []} onSubmit={setSelectedItems}/>),
    };
};
exports.default = SwapMenu;
