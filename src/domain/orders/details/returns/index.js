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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var spinner_1 = require("../../../../components/atoms/spinner");
var button_1 = require("../../../../components/fundamentals/button");
var check_icon_1 = require("../../../../components/fundamentals/icons/check-icon");
var edit_icon_1 = require("../../../../components/fundamentals/icons/edit-icon");
var icon_tooltip_1 = require("../../../../components/molecules/icon-tooltip");
var modal_1 = require("../../../../components/molecules/modal");
var layered_modal_1 = require("../../../../components/molecules/modal/layered-modal");
var rma_select_shipping_1 = require("../../../../components/molecules/rma-select-shipping");
var select_1 = require("../../../../components/molecules/select");
var currency_input_1 = require("../../../../components/organisms/currency-input");
var rma_select_product_table_1 = require("../../../../components/organisms/rma-select-product-table");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var prices_1 = require("../../../../utils/prices");
var remove_nullish_1 = require("../../../../utils/remove-nullish");
var create_filtering_1 = require("../utils/create-filtering");
var ReturnMenu = function (_a) {
    var order = _a.order, onDismiss = _a.onDismiss;
    var layoutmodalcontext = (0, react_1.useContext)(layered_modal_1.LayeredModalContext);
    var _b = (0, react_1.useState)(false), submitting = _b[0], setSubmitting = _b[1];
    var _c = (0, react_1.useState)(false), refundEdited = _c[0], setRefundEdited = _c[1];
    var _d = (0, react_1.useState)(0), refundable = _d[0], setRefundable = _d[1];
    var _e = (0, react_1.useState)(0), refundAmount = _e[0], setRefundAmount = _e[1];
    var _f = (0, react_1.useState)({}), toReturn = _f[0], setToReturn = _f[1];
    var _g = (0, react_1.useState)(false), useCustomShippingPrice = _g[0], setUseCustomShippingPrice = _g[1];
    var _h = (0, react_1.useState)(order.no_notification), noNotification = _h[0], setNoNotification = _h[1];
    var _j = (0, react_1.useState)(), shippingPrice = _j[0], setShippingPrice = _j[1];
    var _k = (0, react_1.useState)(null), shippingMethod = _k[0], setShippingMethod = _k[1];
    var _l = (0, react_1.useState)([]), allItems = _l[0], setAllItems = _l[1];
    var notification = (0, use_notification_1.default)();
    var requestReturnOrder = (0, medusa_react_1.useAdminRequestReturn)(order.id);
    (0, react_1.useEffect)(function () {
        if (order) {
            setAllItems((0, create_filtering_1.filterItems)(order, false));
        }
    }, [order]);
    var _m = (0, medusa_react_1.useAdminShippingOptions)({
        region_id: order.region_id,
        is_return: "true",
    }), shippingLoading = _m.isLoading, shippingOptions = _m.shipping_options;
    (0, react_1.useEffect)(function () {
        var items = Object.keys(toReturn)
            .map(function (t) { return allItems.find(function (i) { return i.id === t; }); })
            .filter(function (i) { return typeof i !== "undefined"; });
        var itemTotal = items.reduce(function (acc, curr) {
            var unitRefundable = (curr.refundable || 0) / (curr.quantity - curr.returned_quantity);
            return acc + unitRefundable * toReturn[curr.id].quantity;
        }, 0);
        var total = itemTotal - (shippingPrice || 0);
        setRefundable(total);
        setRefundAmount(total);
    }, [toReturn, shippingPrice]);
    var onSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var items, data, taxRate;
        return __generator(this, function (_a) {
            items = Object.entries(toReturn).map(function (_a) {
                var _b;
                var key = _a[0], value = _a[1];
                var toSet = __assign({ reason_id: (_b = value.reason) === null || _b === void 0 ? void 0 : _b.value.id }, value);
                delete toSet.reason;
                var clean = (0, remove_nullish_1.removeNullish)(toSet);
                return __assign({ item_id: key }, clean);
            });
            data = {
                items: items,
                refund: Math.round(refundAmount),
                no_notification: noNotification !== order.no_notification ? noNotification : undefined,
            };
            if (shippingMethod) {
                taxRate = shippingMethod.tax_rates.reduce(function (acc, curr) {
                    return acc + curr.rate / 100;
                }, 0);
                data.return_shipping = {
                    option_id: shippingMethod.value,
                    price: shippingPrice ? Math.round(shippingPrice / (1 + taxRate)) : 0,
                };
            }
            setSubmitting(true);
            return [2 /*return*/, requestReturnOrder
                    .mutateAsync(data)
                    .then(function () { return onDismiss(); })
                    .then(function () {
                    return notification("Success", "Successfully returned order", "success");
                })
                    .catch(function (error) { return notification("Error", (0, error_messages_1.getErrorMessage)(error), "error"); })
                    .finally(function () { return setSubmitting(false); })];
        });
    }); };
    var handleRefundUpdated = function (value) {
        if (value < order.refundable_amount && value >= 0) {
            setRefundAmount(value);
        }
    };
    var handleShippingSelected = function (selectedItem) {
        setShippingMethod(selectedItem);
        var method = shippingOptions === null || shippingOptions === void 0 ? void 0 : shippingOptions.find(function (o) { return selectedItem.value === o.id; });
        if (method) {
            setShippingPrice(method.price_incl_tax);
        }
    };
    (0, react_1.useEffect)(function () {
        if (!useCustomShippingPrice && shippingMethod) {
            var method = shippingOptions === null || shippingOptions === void 0 ? void 0 : shippingOptions.find(function (o) { return shippingMethod.value === o.id; });
            if (method) {
                setShippingPrice(method.price_incl_tax);
            }
        }
    }, [useCustomShippingPrice, shippingMethod]);
    var handleUpdateShippingPrice = function (value) {
        if (value >= 0) {
            setShippingPrice(value);
        }
    };
    return (<layered_modal_1.default context={layoutmodalcontext} handleClose={onDismiss}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={onDismiss}>
          <h2 className="inter-xlarge-semibold">Request Return</h2>
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
                tax_rates: o.tax_rates
            }); })) || []}/>)}
            {shippingMethod && (<rma_select_shipping_1.default inclTax useCustomShippingPrice={useCustomShippingPrice} shippingPrice={shippingPrice} currencyCode={order.currency_code} updateShippingPrice={handleUpdateShippingPrice} setUseCustomShippingPrice={setUseCustomShippingPrice}/>)}
          </div>

          {refundable >= 0 && (<div className="mt-10">
              {!useCustomShippingPrice && shippingMethod && (<div className="flex mb-4 inter-small-regular justify-between">
                  <span>Shipping</span>
                  <div>
                    {(0, prices_1.displayAmount)(order.currency_code, shippingPrice || 0)}{" "}
                    <span className="text-grey-40 ml-3">
                      {order.currency_code.toUpperCase()}
                    </span>
                  </div>
                </div>)}
              <div className="flex inter-base-semibold justify-between w-full">
                <span>Total Refund</span>
                <div className="flex items-center">
                  {!refundEdited && (<>
                      <span className="mr-2 cursor-pointer text-grey-40" onClick={function () { return setRefundEdited(true); }}>
                        <edit_icon_1.default size={20}/>{" "}
                      </span>
                      {"".concat((0, prices_1.displayAmount)(order.currency_code, refundAmount), " ").concat(order.currency_code.toUpperCase())}
                    </>)}
                </div>
              </div>
              {refundEdited && (<currency_input_1.default className="mt-2" size="small" currentCurrency={order.currency_code} readOnly>
                  <currency_input_1.default.AmountInput label={"Amount"} amount={refundAmount} onChange={handleRefundUpdated}/>
                </currency_input_1.default>)}
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
              <button_1.default onClick={onSubmit} loading={submitting} className="w-[112px]" type="submit" size="small" variant="primary">
                Submit
              </button_1.default>
            </div>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </layered_modal_1.default>);
};
exports.default = ReturnMenu;
