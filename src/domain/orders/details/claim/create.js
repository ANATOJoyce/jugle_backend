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
var clsx_1 = require("clsx");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var button_1 = require("../../../../components/fundamentals/button");
var check_icon_1 = require("../../../../components/fundamentals/icons/check-icon");
var trash_icon_1 = require("../../../../components/fundamentals/icons/trash-icon");
var icon_tooltip_1 = require("../../../../components/molecules/icon-tooltip");
var modal_1 = require("../../../../components/molecules/modal");
var layered_modal_1 = require("../../../../components/molecules/modal/layered-modal");
var rma_select_shipping_1 = require("../../../../components/molecules/rma-select-shipping");
var select_1 = require("../../../../components/molecules/select");
var currency_input_1 = require("../../../../components/organisms/currency-input");
var rma_return_product_table_1 = require("../../../../components/organisms/rma-return-product-table");
var rma_select_product_table_1 = require("../../../../components/organisms/rma-select-product-table");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var address_3 = require("../rma-sub-modals/address");
var products_1 = require("../rma-sub-modals/products");
var create_filtering_1 = require("../utils/create-filtering");
var reasonOptions = [
    {
        label: "Missing Item",
        value: "missing_item",
    },
    {
        label: "Wrong Item",
        value: "wrong_item",
    },
    {
        label: "Production Failure",
        value: "production_failure",
    },
    {
        label: "Other",
        value: "other",
    },
];
var ClaimMenu = function (_a) {
    var order = _a.order, onDismiss = _a.onDismiss;
    var _b = (0, medusa_react_1.useAdminCreateClaim)(order.id), mutate = _b.mutate, isLoading = _b.isLoading;
    var refetch = (0, medusa_react_1.useAdminOrder)(order.id).refetch;
    var _c = (0, react_1.useState)(undefined), shippingAddress = _c[0], setShippingAddress = _c[1];
    var _d = (0, react_1.useState)([]), countries = _d[0], setCountries = _d[1];
    var _e = (0, react_1.useState)(false), isReplace = _e[0], toggleReplace = _e[1];
    var _f = (0, react_1.useState)(order.no_notification), noNotification = _f[0], setNoNotification = _f[1];
    var _g = (0, react_1.useState)({}), toReturn = _g[0], setToReturn = _g[1];
    var _h = (0, react_1.useState)([]), itemsToAdd = _h[0], setItemsToAdd = _h[1];
    var _j = (0, react_1.useState)(null), returnShippingMethod = _j[0], setReturnShippingMethod = _j[1];
    var _k = (0, react_1.useState)(undefined), returnShippingPrice = _k[0], setReturnShippingPrice = _k[1];
    var _l = (0, react_1.useState)(null), shippingMethod = _l[0], setShippingMethod = _l[1];
    var _m = (0, react_1.useState)({
        standard: false,
        return: false,
    }), showCustomPrice = _m[0], setShowCustomPrice = _m[1];
    var _o = (0, react_1.useState)({
        standard: 0,
        return: undefined,
    }), customOptionPrice = _o[0], setCustomOptionPrice = _o[1];
    var _p = (0, react_1.useState)(false), ready = _p[0], setReady = _p[1];
    var notification = (0, use_notification_1.default)();
    var layeredModalContext = (0, react_1.useContext)(layered_modal_1.LayeredModalContext);
    // Includes both order items and swap items
    var _q = (0, react_1.useState)([]), allItems = _q[0], setAllItems = _q[1];
    var formatAddress = function (address) {
        var _a;
        var addr = [address.address_1];
        if (address.address_2) {
            addr.push(address.address_2);
        }
        var city = "".concat(address.postal_code, " ").concat(address.city);
        return "".concat(addr.join(", "), ", ").concat(city, ", ").concat((_a = address.country_code) === null || _a === void 0 ? void 0 : _a.toUpperCase());
    };
    (0, react_1.useEffect)(function () {
        if (order) {
            setAllItems((0, create_filtering_1.filterItems)(order, true));
        }
    }, [order]);
    var returnShippingOptions = (0, medusa_react_1.useAdminShippingOptions)({
        is_return: true,
        region_id: order.region_id,
    }).shipping_options;
    var region = (0, medusa_react_1.useAdminRegion)(order.region_id).region;
    (0, react_1.useEffect)(function () {
        if (region) {
            setCountries(region.countries.map(function (c) { return c.iso_2; }));
        }
    }, [region]);
    var shippingOptions = (0, medusa_react_1.useAdminShippingOptions)({
        region_id: order.region_id,
        is_return: false,
    }).shipping_options;
    (0, react_1.useEffect)(function () {
        if (toReturn) {
            if (Object.keys(toReturn).length !== 0 &&
                isReplace &&
                itemsToAdd.length > 0 &&
                shippingMethod) {
                setReady(true);
            }
            else if (!isReplace && Object.keys(toReturn).length !== 0) {
                setReady(true);
            }
            else {
                setReady(false);
            }
        }
        else {
            setReady(false);
        }
    }, [toReturn, isReplace, itemsToAdd, shippingMethod]);
    (0, react_1.useEffect)(function () {
        if (!isReplace) {
            setShippingMethod(null);
            setShowCustomPrice(__assign(__assign({}, showCustomPrice), { standard: false }));
        }
    }, [isReplace]);
    (0, react_1.useEffect)(function () {
        setCustomOptionPrice(__assign(__assign({}, customOptionPrice), { standard: 0 }));
    }, [shippingMethod, showCustomPrice]);
    (0, react_1.useEffect)(function () { return console.log(shippingAddress); }, [shippingAddress]);
    var onSubmit = function () {
        var claim_items = Object.entries(toReturn).map(function (_a) {
            var _b, _c;
            var key = _a[0], value = _a[1];
            return {
                item_id: key,
                note: (_b = value.note) !== null && _b !== void 0 ? _b : undefined,
                quantity: value.quantity,
                reason: (_c = value.reason) === null || _c === void 0 ? void 0 : _c.value,
            };
        });
        var data = {
            type: isReplace ? "replace" : "refund",
            claim_items: claim_items,
            additional_items: itemsToAdd.map(function (i) { return ({
                variant_id: i.id,
                quantity: i.quantity,
            }); }),
            no_notification: noNotification !== order.no_notification ? noNotification : undefined,
        };
        if (shippingAddress) {
            data.shipping_address = shippingAddress;
        }
        if (returnShippingMethod) {
            data.return_shipping = {
                option_id: returnShippingMethod.id,
                price: showCustomPrice.return && customOptionPrice.return
                    ? customOptionPrice.return * 100
                    : Math.round(returnShippingPrice || 0 / (1 + (order.tax_rate || 0 / 100))),
            };
        }
        if (shippingMethod) {
            data.shipping_methods = [
                {
                    option_id: shippingMethod.id,
                    price: customOptionPrice.standard * 100,
                },
            ];
        }
        mutate(data, {
            onSuccess: function () {
                refetch();
                notification("Success", "Successfully created claim", "success");
                onDismiss();
            },
            onError: function (error) {
                notification("Error", (0, error_messages_1.getErrorMessage)(error), "error");
            },
        });
    };
    var handleToAddQuantity = function (value, index) {
        var updated = __spreadArray([], itemsToAdd, true);
        updated[index] = __assign(__assign({}, itemsToAdd[index]), { quantity: itemsToAdd[index].quantity + value });
        setItemsToAdd(updated);
    };
    var handleRemoveItem = function (index) {
        var updated = __spreadArray([], itemsToAdd, true);
        updated.splice(index, 1);
        setItemsToAdd(updated);
    };
    var handleReturnShippingSelected = function (so) {
        if (!so) {
            setReturnShippingMethod(null);
            return;
        }
        var selectSo = returnShippingOptions === null || returnShippingOptions === void 0 ? void 0 : returnShippingOptions.find(function (s) { return so.value === s.id; });
        if (selectSo) {
            setReturnShippingMethod(selectSo);
            setReturnShippingPrice(selectSo.amount * (1 + (order.tax_rate || 0 / 100)));
        }
        else {
            setReturnShippingMethod(null);
            setReturnShippingPrice(0);
        }
    };
    var handleShippingSelected = function (so) {
        var selectSo = shippingOptions === null || shippingOptions === void 0 ? void 0 : shippingOptions.find(function (s) { return so.value === s.id; });
        if (selectSo) {
            setShippingMethod(selectSo);
        }
        else {
            setShippingMethod(null);
        }
    };
    var handleProductSelect = function (variants) {
        var existingIds = itemsToAdd.map(function (i) { return i.id; });
        setItemsToAdd(function (itemsToAdd) { return __spreadArray(__spreadArray([], itemsToAdd, true), variants
            .filter(function (variant) { return !existingIds.includes(variant.id); })
            .map(function (variant) { return (__assign(__assign({}, variant), { quantity: 1 })); }), true); });
    };
    return (<layered_modal_1.default context={layeredModalContext} handleClose={onDismiss}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={onDismiss}>
          <h2 className="inter-xlarge-semibold">Create Claim</h2>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div>
            <h3 className="inter-base-semibold">Items to claim</h3>
            <rma_select_product_table_1.default order={order} allItems={allItems} imagesOnReturns={true} customReturnOptions={reasonOptions} toReturn={toReturn} setToReturn={function (items) { return setToReturn(items); }}/>
          </div>
          <div className="mt-4">
            <h3 className="inter-base-semibold">
              Shipping Return
              {returnShippingMethod && (<span className="text-grey-40 inter-base-regular">
                  ({returnShippingMethod.region.name})
                </span>)}
            </h3>
            <select_1.default clearSelected label="Shipping Method" className="mt-2" placeholder="Add a shipping method" value={returnShippingMethod
            ? {
                label: returnShippingMethod.name,
                value: returnShippingMethod.id,
            }
            : null} onChange={handleReturnShippingSelected} options={(returnShippingOptions === null || returnShippingOptions === void 0 ? void 0 : returnShippingOptions.map(function (o) { return ({
            label: o.name,
            value: o.id,
        }); })) || []}/>
            {returnShippingMethod && (<rma_select_shipping_1.default useCustomShippingPrice={showCustomPrice.return} shippingPrice={customOptionPrice.return || undefined} currencyCode={returnShippingMethod.region.currency_code} updateShippingPrice={function (value) {
                return setCustomOptionPrice(__assign(__assign({}, customOptionPrice), { return: value }));
            }} setUseCustomShippingPrice={function (value) {
                setCustomOptionPrice(__assign(__assign({}, customOptionPrice), { return: returnShippingMethod.amount }));
                setShowCustomPrice(__assign(__assign({}, showCustomPrice), { return: value }));
            }}/>)}
          </div>
          <div className="flex w-full mt-4 items-center inter-base-regular gap-x-xlarge">
            <div className="cursor-pointer items-center flex" onClick={function () {
            toggleReplace(true);
        }}>
              <div className={(0, clsx_1.default)("rounded-full w-5 h-5 flex mr-3 items-center justify-center", {
            "border-violet-60 border-2": isReplace,
            "border-grey-40 border": !isReplace,
        })}>
                {isReplace && (<div className="w-3 h-3 bg-violet-60 rounded-full"></div>)}
              </div>
              Replace
            </div>
            <div className="cursor-pointer items-center flex" onClick={function () {
            toggleReplace(false);
        }}>
              <div className={(0, clsx_1.default)("rounded-full w-5 h-5 flex mr-3 items-center justify-center", {
            "border-violet-60 border-2": !isReplace,
            "border-grey-40 border": isReplace,
        })}>
                {!isReplace && (<div className="w-3 h-3 bg-violet-60 rounded-full"></div>)}
              </div>
              Refund
            </div>
          </div>
          {isReplace && (<div className="mt-8">
              <div className="flex justify-between items-center">
                <h3 className="inter-base-semibold ">Items to send</h3>
                {itemsToAdd.length === 0 ? (<button_1.default variant="ghost" className="border border-grey-20" size="small" onClick={function () {
                    layeredModalContext.push(SelectProductsScreen(layeredModalContext.pop, itemsToAdd, handleProductSelect));
                }}>
                    Add Product
                  </button_1.default>) : (<></>)}
              </div>
              {itemsToAdd.length > 0 && (<>
                  <rma_return_product_table_1.default order={order} itemsToAdd={itemsToAdd} handleRemoveItem={handleRemoveItem} handleToAddQuantity={handleToAddQuantity}/>

                  <div className="flex w-full justify-end">
                    <button_1.default variant="ghost" className="border border-grey-20" size="small" onClick={function () {
                    layeredModalContext.push(SelectProductsScreen(layeredModalContext.pop, itemsToAdd, handleProductSelect));
                }}>
                      Add Product
                    </button_1.default>
                  </div>
                </>)}
              <div className="mt-8">
                <span className="inter-base-semibold">Shipping Address</span>
                {shippingAddress ? (<>
                    <div className="flex w-full inter-small-regular text-grey-50">
                      {formatAddress(shippingAddress)}
                    </div>
                    <div className="flex w-full justify-end">
                      <button_1.default onClick={function () {
                    layeredModalContext.push(showEditAddressScreen(layeredModalContext.pop, shippingAddress, order, countries, setShippingAddress));
                }} variant="ghost" size="small" className="border border-grey-20">
                        Edit
                      </button_1.default>
                    </div>
                  </>) : (<div>
                    <span className="flex w-full inter-small-regular text-grey-50">
                      {formatAddress(order.shipping_address)}
                    </span>
                    <div className="flex w-full justify-end">
                      <button_1.default onClick={function () {
                    layeredModalContext.push(showEditAddressScreen(layeredModalContext.pop, order.shipping_address, order, countries, setShippingAddress));
                }} variant="ghost" size="small" className="border border-grey-20">
                        Ship to a different address
                      </button_1.default>
                    </div>
                  </div>)}
              </div>
              <div>
                <h3 className="inter-base-semibold mt-8">Shipping new</h3>
                <span className="inter-small-regular text-grey-50">
                  Shipping new items is free by default. Use custom price, if
                  this is not the case
                </span>
                <select_1.default label="Shipping Method" className="mt-2" placeholder="Add a shipping method" value={shippingMethod
                ? {
                    label: shippingMethod === null || shippingMethod === void 0 ? void 0 : shippingMethod.name,
                    value: shippingMethod === null || shippingMethod === void 0 ? void 0 : shippingMethod.id,
                }
                : null} onChange={handleShippingSelected} options={(shippingOptions === null || shippingOptions === void 0 ? void 0 : shippingOptions.map(function (o) { return ({
                label: o.name,
                value: o.id,
            }); })) || []}/>
                <div>
                  {shippingMethod ? (<>
                      <div className="flex justify-end w-full">
                        {!showCustomPrice.standard && (<button_1.default variant="ghost" size="small" className="border border-grey-20 mt-4 " disabled={!shippingMethod} onClick={function () {
                        return setShowCustomPrice(__assign(__assign({}, showCustomPrice), { standard: true }));
                    }}>
                            {showCustomPrice.standard
                        ? "Submit"
                        : "Set custom price"}
                          </button_1.default>)}
                        {showCustomPrice.standard && (<div className="flex w-full items-center">
                            <currency_input_1.default readOnly className="mt-4 w-full" size="small" currentCurrency={order.currency_code}>
                              <currency_input_1.default.AmountInput label={"Amount"} amount={customOptionPrice.standard} onChange={function (value) {
                        return setCustomOptionPrice(__assign(__assign({}, customOptionPrice), { standard: value || 0 }));
                    }}/>
                            </currency_input_1.default>
                            <button_1.default onClick={function () {
                        return setShowCustomPrice(__assign(__assign({}, showCustomPrice), { standard: false }));
                    }} className="w-8 h-8 ml-8 text-grey-40" variant="ghost" size="small">
                              <trash_icon_1.default size={20}/>
                            </button_1.default>
                          </div>)}
                      </div>
                    </>) : null}
                </div>
              </div>
            </div>)}
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full justify-between">
            <div className="items-center h-full flex cursor-pointer" onClick={function () { return setNoNotification(!noNotification); }}>
              <div className={"w-5 h-5 flex justify-center text-grey-0 border-grey-30 border rounded-base ".concat(!noNotification && "bg-violet-60")}>
                <span className="self-center">
                  {!noNotification && <check_icon_1.default size={16}/>}
                </span>
              </div>
              <input id="noNotification" className="hidden" name="noNotification" checked={!noNotification} onChange={function () { return setNoNotification(!noNotification); }} type="checkbox"/>
              <span className="ml-3 flex items-center text-grey-90 gap-x-xsmall">
                Send notifications
                <icon_tooltip_1.default content="Notify customer of created return"/>
              </span>
            </div>
            <div className="flex gap-x-xsmall">
              <button_1.default onClick={function () { return onDismiss(); }} className="w-[112px]" type="submit" size="small" variant="ghost">
                Back
              </button_1.default>
              <button_1.default onClick={onSubmit} disabled={!ready} loading={isLoading} className="w-[112px]" size="small" variant="primary">
                Complete
              </button_1.default>
            </div>
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
var showEditAddressScreen = function (pop, address, order, countries, setShippingAddress) {
    return {
        title: "Edit Address",
        onBack: function () { return pop(); },
        view: (<address_3.default onSubmit={setShippingAddress} address={address} order={order} countries={countries}/>),
    };
};
exports.default = ClaimMenu;
