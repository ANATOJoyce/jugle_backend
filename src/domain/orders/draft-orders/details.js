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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var moment_1 = require("moment");
var react_1 = require("react");
var react_json_view_1 = require("react-json-view");
var avatar_1 = require("../../../components/atoms/avatar");
var copy_to_clipboard_1 = require("../../../components/atoms/copy-to-clipboard");
var spinner_1 = require("../../../components/atoms/spinner");
var badge_1 = require("../../../components/fundamentals/badge");
var button_1 = require("../../../components/fundamentals/button");
var details_icon_1 = require("../../../components/fundamentals/details-icon");
var dollar_sign_icon_1 = require("../../../components/fundamentals/icons/dollar-sign-icon");
var image_placeholder_icon_1 = require("../../../components/fundamentals/icons/image-placeholder-icon");
var truck_icon_1 = require("../../../components/fundamentals/icons/truck-icon");
var status_indicator_1 = require("../../../components/fundamentals/status-indicator");
var breadcrumb_1 = require("../../../components/molecules/breadcrumb");
var body_card_1 = require("../../../components/organisms/body-card");
var delete_prompt_1 = require("../../../components/organisms/delete-prompt");
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var prices_1 = require("../../../utils/prices");
var address_modal_1 = require("../details/address-modal");
var templates_1 = require("../details/templates");
var DraftOrderDetails = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var id = _a.id;
    var initDeleteState = {
        resource: "",
        onDelete: function () { return Promise.resolve(console.log("Delete resource")); },
        show: false,
    };
    var _l = (0, react_1.useState)(initDeleteState), deletePromptData = _l[0], setDeletePromptData = _l[1];
    var _m = (0, react_1.useState)(null), addressModal = _m[0], setAddressModal = _m[1];
    var _o = (0, medusa_react_1.useAdminDraftOrder)(id), draft_order = _o.draft_order, isLoading = _o.isLoading;
    var _p = (0, medusa_react_1.useAdminStore)(), store = _p.store, isLoadingStore = _p.isLoading;
    var _q = (0, react_1.useState)(""), paymentLink = _q[0], setPaymentLink = _q[1];
    (0, react_1.useEffect)(function () {
        if (store && draft_order && store.payment_link_template) {
            setPaymentLink(store.payment_link_template.replace(/\{cart_id\}/, draft_order.cart_id));
        }
    }, [isLoading, isLoadingStore]);
    var markPaid = (0, medusa_react_1.useAdminDraftOrderRegisterPayment)(id);
    var cancelOrder = (0, medusa_react_1.useAdminDeleteDraftOrder)(id);
    var updateOrder = (0, medusa_react_1.useAdminUpdateDraftOrder)(id);
    var notification = (0, use_notification_1.default)();
    var OrderStatusComponent = function () {
        switch (draft_order === null || draft_order === void 0 ? void 0 : draft_order.status) {
            case "completed":
                return <status_indicator_1.default title="Completed" variant="success"/>;
            case "open":
                return <status_indicator_1.default title="Open" variant="default"/>;
            default:
                return null;
        }
    };
    var PaymentActionables = function () {
        // Default label and action
        var label = "Mark as paid";
        var action = function () {
            markPaid.mutate(void {}, {
                onSuccess: function () {
                    return notification("Success", "Successfully mark as paid", "success");
                },
                onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
            });
        };
        return (<button_1.default variant="secondary" size="small" onClick={action}>
        {label}
      </button_1.default>);
    };
    var handleDeleteOrder = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, cancelOrder.mutate(void {}, {
                    onSuccess: function () {
                        return notification("Success", "Successfully canceled order", "success");
                    },
                    onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
                })];
        });
    }); };
    var handleUpdateAddress = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var email, rest, updateObj;
        var data = _b.data, type = _b.type;
        return __generator(this, function (_c) {
            email = data.email, rest = __rest(data, ["email"]);
            updateObj = {};
            if (type === "shipping") {
                updateObj["shipping_address"] = __assign({}, rest);
            }
            else {
                updateObj["billing_address"] = __assign({}, rest);
            }
            if (email) {
                updateObj["email"] = email;
            }
            return [2 /*return*/, updateOrder.mutate(updateObj, {
                    onSuccess: function () {
                        notification("Success", "Successfully updated address", "success");
                        setAddressModal(null);
                    },
                    onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
                })];
        });
    }); };
    var cart = (draft_order || {}).cart;
    var region = (cart || {}).region;
    return (<div>
      <breadcrumb_1.default currentPage={"Draft Order Details"} previousBreadcrumb={"Draft Orders"} previousRoute="/a/draft-orders"/>
      {isLoading || !draft_order ? (<body_card_1.default className="w-full pt-2xlarge flex items-center justify-center">
          <spinner_1.default size={"large"} variant={"secondary"}/>
        </body_card_1.default>) : (<div className="flex space-x-4">
          <div className="flex flex-col w-full h-full">
            <body_card_1.default className={"w-full mb-4 min-h-[200px]"} title={"Order #".concat(draft_order.display_id)} subtitle={(0, moment_1.default)(draft_order.created_at).format("D MMMM YYYY hh:mm a")} status={<OrderStatusComponent />} customActionable={(draft_order === null || draft_order === void 0 ? void 0 : draft_order.status) === "completed" && (<button_1.default variant="secondary" size="small" onClick={function () {
                    return (0, gatsby_1.navigate)("/a/orders/".concat(draft_order.order_id));
                }}>
                    Go to Order
                  </button_1.default>)} forceDropdown={(draft_order === null || draft_order === void 0 ? void 0 : draft_order.status) === "completed" ? false : true} actionables={(draft_order === null || draft_order === void 0 ? void 0 : draft_order.status) === "completed"
                ? [
                    {
                        label: "Go to Order",
                        icon: null,
                        onClick: function () { return console.log("Should not be here"); },
                    },
                ]
                : [
                    {
                        label: "Cancel Draft Order",
                        icon: null,
                        // icon: <CancelIcon size={"20"} />,
                        variant: "danger",
                        onClick: function () {
                            return setDeletePromptData({
                                resource: "Draft Order",
                                onDelete: function () { return handleDeleteOrder(); },
                                show: true,
                            });
                        },
                    },
                ]}>
              <div className="flex mt-6 space-x-6 divide-x">
                <div className="flex flex-col">
                  <div className="inter-smaller-regular text-grey-50 mb-1">
                    Email
                  </div>
                  <div>{cart === null || cart === void 0 ? void 0 : cart.email}</div>
                </div>
                <div className="flex flex-col pl-6">
                  <div className="inter-smaller-regular text-grey-50 mb-1">
                    Phone
                  </div>
                  <div>{((_b = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _b === void 0 ? void 0 : _b.phone) || ""}</div>
                </div>
                <div className="flex flex-col pl-6">
                  <div className="inter-smaller-regular text-grey-50 mb-1">
                    Amount ({region === null || region === void 0 ? void 0 : region.currency_code.toUpperCase()})
                  </div>
                  <div>
                    {(0, prices_1.formatAmountWithSymbol)({
                amount: cart === null || cart === void 0 ? void 0 : cart.total,
                currency: region === null || region === void 0 ? void 0 : region.currency_code,
            })}
                  </div>
                </div>
              </div>
            </body_card_1.default>
            <body_card_1.default className={"w-full mb-4 min-h-0 h-auto"} title="Summary">
              <div className="mt-6">
                {(_c = cart === null || cart === void 0 ? void 0 : cart.items) === null || _c === void 0 ? void 0 : _c.map(function (item, i) { return (<div key={i} className="flex justify-between mb-1 h-[64px] py-2 mx-[-5px] px-[5px] hover:bg-grey-5 rounded-rounded">
                    <div className="flex space-x-4 justify-center">
                      <div className="flex h-[48px] w-[36px] rounded-rounded bg-grey-10 items-center justify-center">
                        {(item === null || item === void 0 ? void 0 : item.thumbnail) ? (<img src={item.thumbnail} className="rounded-rounded object-cover"/>) : (<div className="text-grey-30">
                            <image_placeholder_icon_1.default />
                          </div>)}
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="inter-small-regular text-grey-90 max-w-[225px] truncate">
                          {item.title}
                        </span>
                        {(item === null || item === void 0 ? void 0 : item.variant) && (<span className="inter-small-regular text-grey-50">
                            {item.variant.sku}
                          </span>)}
                      </div>
                    </div>
                    <div className="flex  items-center">
                      <div className="flex small:space-x-2 medium:space-x-4 large:space-x-6 mr-3">
                        <div className="inter-small-regular text-grey-50">
                          {(0, prices_1.formatAmountWithSymbol)({
                    amount: item.unit_price,
                    currency: region === null || region === void 0 ? void 0 : region.currency_code,
                    digits: 2,
                    tax: region === null || region === void 0 ? void 0 : region.tax_rate,
                })}
                        </div>
                        <div className="inter-small-regular text-grey-50">
                          x {item.quantity}
                        </div>
                        <div className="inter-small-regular text-grey-90">
                          {(0, prices_1.formatAmountWithSymbol)({
                    amount: item.unit_price * item.quantity,
                    currency: region === null || region === void 0 ? void 0 : region.currency_code,
                    digits: 2,
                    tax: region === null || region === void 0 ? void 0 : region.tax_rate,
                })}
                        </div>
                      </div>
                      <div className="inter-small-regular text-grey-50">
                        {region === null || region === void 0 ? void 0 : region.currency_code.toUpperCase()}
                      </div>
                    </div>
                  </div>); })}
                <templates_1.DisplayTotal currency={region === null || region === void 0 ? void 0 : region.currency_code} totalAmount={(_d = draft_order === null || draft_order === void 0 ? void 0 : draft_order.cart) === null || _d === void 0 ? void 0 : _d.subtotal} totalTitle={"Subtotal"}/>
                {(_e = cart === null || cart === void 0 ? void 0 : cart.discounts) === null || _e === void 0 ? void 0 : _e.map(function (discount, index) { return (<div key={index} className="flex justify-between mt-4 items-center">
                    <div className="flex inter-small-regular text-grey-90 items-center">
                      Discount:{" "}
                      <badge_1.default className="ml-3" variant="default">
                        {discount.code}
                      </badge_1.default>
                    </div>
                    <div className="inter-small-regular text-grey-90">
                      -
                      {(0, prices_1.formatAmountWithSymbol)({
                    amount: cart === null || cart === void 0 ? void 0 : cart.discount_total,
                    currency: (region === null || region === void 0 ? void 0 : region.currency_code) || "",
                    digits: 2,
                    tax: region === null || region === void 0 ? void 0 : region.tax_rate,
                })}
                    </div>
                  </div>); })}
                <templates_1.DisplayTotal currency={region === null || region === void 0 ? void 0 : region.currency_code} totalAmount={cart === null || cart === void 0 ? void 0 : cart.shipping_total} totalTitle={"Shipping"}/>
                <templates_1.DisplayTotal currency={region === null || region === void 0 ? void 0 : region.currency_code} totalAmount={cart === null || cart === void 0 ? void 0 : cart.tax_total} totalTitle={"Tax"}/>
                <templates_1.DisplayTotal currency={region === null || region === void 0 ? void 0 : region.currency_code} variant="large" totalAmount={cart === null || cart === void 0 ? void 0 : cart.total} totalTitle={"Total"}/>
              </div>
            </body_card_1.default>
            <body_card_1.default className={"w-full mb-4 min-h-0 h-auto"} title="Payment" customActionable={(draft_order === null || draft_order === void 0 ? void 0 : draft_order.status) !== "completed" && <PaymentActionables />}>
              <div className="mt-6">
                <templates_1.DisplayTotal currency={region === null || region === void 0 ? void 0 : region.currency_code} totalAmount={cart === null || cart === void 0 ? void 0 : cart.subtotal} totalTitle={"Subtotal"}/>
                <templates_1.DisplayTotal currency={region === null || region === void 0 ? void 0 : region.currency_code} totalAmount={cart === null || cart === void 0 ? void 0 : cart.shipping_total} totalTitle={"Shipping"}/>
                <templates_1.DisplayTotal currency={region === null || region === void 0 ? void 0 : region.currency_code} totalAmount={cart === null || cart === void 0 ? void 0 : cart.tax_total} totalTitle={"Tax"}/>
                <templates_1.DisplayTotal variant="bold" currency={region === null || region === void 0 ? void 0 : region.currency_code} totalAmount={cart === null || cart === void 0 ? void 0 : cart.total} totalTitle={"Total to pay"}/>
                {(draft_order === null || draft_order === void 0 ? void 0 : draft_order.status) !== "completed" && (<div className="text-grey-50 inter-small-regular w-full flex items-center mt-5">
                    <span className="mr-2.5">Payment link:</span>
                    {(store === null || store === void 0 ? void 0 : store.payment_link_template) ? (<copy_to_clipboard_1.default value={paymentLink} displayValue={draft_order.cart_id} successDuration={1000}/>) : ("Configure payment link in store settings")}
                  </div>)}
              </div>
            </body_card_1.default>
            <body_card_1.default className={"w-full mb-4 min-h-0 h-auto"} title="Shipping">
              <div className="mt-6">
                {cart === null || cart === void 0 ? void 0 : cart.shipping_methods.map(function (method) { return (<div className="flex flex-col">
                    <span className="inter-small-regular text-grey-50">
                      Shipping Method
                    </span>
                    <span className="inter-small-regular text-grey-90 mt-2">
                      {(method === null || method === void 0 ? void 0 : method.shipping_option.name) || ""}
                    </span>
                    <div className="flex flex-col min-h-[100px] mt-8 bg-grey-5 px-3 py-2 h-full">
                      <span className="inter-base-semibold">
                        Data{" "}
                        <span className="text-grey-50 inter-base-regular">
                          (1 item)
                        </span>
                      </span>
                      <div className="flex flex-grow items-center mt-4">
                        <react_json_view_1.default name={false} collapsed={true} src={method === null || method === void 0 ? void 0 : method.data}/>
                      </div>
                    </div>
                  </div>); })}
              </div>
            </body_card_1.default>
            <body_card_1.default className={"w-full mb-4 min-h-0 h-auto"} title="Customer" actionables={[
                {
                    label: "Edit Shipping Address",
                    icon: <truck_icon_1.default size={"20"}/>,
                    onClick: function () {
                        return setAddressModal({
                            address: cart === null || cart === void 0 ? void 0 : cart.shipping_address,
                            type: "shipping",
                        });
                    },
                },
                {
                    label: "Edit Billing Address",
                    icon: <dollar_sign_icon_1.default size={"20"}/>,
                    onClick: function () {
                        if (cart === null || cart === void 0 ? void 0 : cart.billing_address) {
                            setAddressModal({
                                address: cart === null || cart === void 0 ? void 0 : cart.billing_address,
                                type: "billing",
                            });
                        }
                    },
                },
                {
                    label: "Go to Customer",
                    icon: <details_icon_1.default size={"20"}/>, // TODO: Change to Contact icon
                    onClick: function () { return (0, gatsby_1.navigate)("/a/customers/".concat(cart === null || cart === void 0 ? void 0 : cart.customer.id)); },
                },
            ]}>
              <div className="mt-6">
                <div className="flex w-full space-x-4 items-center">
                  <div className="flex w-[40px] h-[40px] ">
                    <avatar_1.default user={cart === null || cart === void 0 ? void 0 : cart.customer} font="inter-large-semibold" color="bg-fuschia-40"/>
                  </div>
                  <div>
                    <h1 className="inter-large-semibold text-grey-90">
                      {"".concat((_f = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _f === void 0 ? void 0 : _f.first_name, " ").concat((_g = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _g === void 0 ? void 0 : _g.last_name)}
                    </h1>
                    <span className="inter-small-regular text-grey-50">
                      {(_h = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _h === void 0 ? void 0 : _h.city},{" "}
                      {(_j = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _j === void 0 ? void 0 : _j.country_code}
                    </span>
                  </div>
                </div>
                <div className="flex mt-6 space-x-6 divide-x">
                  <div className="flex flex-col">
                    <div className="inter-small-regular text-grey-50 mb-1">
                      Contact
                    </div>
                    <div className="flex flex-col inter-small-regular">
                      <span>{cart === null || cart === void 0 ? void 0 : cart.email}</span>
                      <span>{((_k = cart === null || cart === void 0 ? void 0 : cart.shipping_address) === null || _k === void 0 ? void 0 : _k.phone) || ""}</span>
                    </div>
                  </div>
                  <templates_1.FormattedAddress title={"Shipping"} addr={cart === null || cart === void 0 ? void 0 : cart.shipping_address}/>
                  <templates_1.FormattedAddress title={"Billing"} addr={cart === null || cart === void 0 ? void 0 : cart.billing_address}/>
                </div>
              </div>
            </body_card_1.default>
            <body_card_1.default className={"w-full mb-4 min-h-0 h-auto"} title="Raw Draft Order">
              <react_json_view_1.default style={{ marginTop: "15px" }} name={false} collapsed={true} src={draft_order}/>
            </body_card_1.default>
          </div>
        </div>)}
      {addressModal && (<address_modal_1.default handleClose={function () { return setAddressModal(null); }} handleSave={function (obj) { return handleUpdateAddress(obj); }} address={addressModal.address} type={addressModal.type} email={cart === null || cart === void 0 ? void 0 : cart.email}/>)}
      {/* An attempt to make a reusable delete prompt, so we don't have to hold +10
        state variables for showing different prompts */}
      {deletePromptData.show && (<delete_prompt_1.default text={"Are you sure?"} heading={"Remove ".concat(deletePromptData === null || deletePromptData === void 0 ? void 0 : deletePromptData.resource)} successText={"".concat((deletePromptData === null || deletePromptData === void 0 ? void 0 : deletePromptData.resource) || "Resource", " has been removed")} onDelete={function () { return deletePromptData.onDelete(); }} handleClose={function () { return setDeletePromptData(initDeleteState); }}/>)}
    </div>);
};
exports.default = DraftOrderDetails;
