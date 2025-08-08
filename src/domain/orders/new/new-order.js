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
var gatsby_1 = require("gatsby");
var lodash_1 = require("lodash");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var layered_modal_1 = require("../../../components/molecules/modal/layered-modal");
var stepped_modal_1 = require("../../../components/molecules/modal/stepped-modal");
var use_medusa_1 = require("../../../hooks/use-medusa");
var use_notification_1 = require("../../../hooks/use-notification");
var api_1 = require("../../../services/api");
var prices_1 = require("../../../utils/prices");
var remove_nullish_1 = require("../../../utils/remove-nullish");
var billing_details_1 = require("./components/billing-details");
var items_1 = require("./components/items");
var select_region_1 = require("./components/select-region");
var select_shipping_1 = require("./components/select-shipping");
var shipping_details_1 = require("./components/shipping-details");
var summary_1 = require("./components/summary");
var defaultFormValues = {
    region: null,
    shipping: null,
    billing: null,
    email: "",
    customerId: "",
    customer: null,
    shippingOption: null,
    requireShipping: true,
    total: 0,
};
var NewOrder = function (_a) {
    var onDismiss = _a.onDismiss, refresh = _a.refresh;
    var _b = (0, react_1.useState)([]), searchResults = _b[0], setSearchResults = _b[1];
    var _c = (0, react_1.useState)([]), customerAddresses = _c[0], setCustomerAddresses = _c[1];
    var _d = (0, react_1.useState)([]), items = _d[0], setItems = _d[1];
    var _e = (0, react_1.useState)([]), shippingOptions = _e[0], setShippingOptions = _e[1];
    var _f = (0, react_1.useState)(), customOptionPrice = _f[0], setCustomOptionPrice = _f[1];
    var _g = (0, react_1.useState)(false), showCustomPrice = _g[0], setShowCustomPrice = _g[1];
    var _h = (0, react_1.useState)(false), creatingOrder = _h[0], setCreatingOrder = _h[1];
    var _j = (0, react_1.useState)(false), noNotification = _j[0], setNoNotification = _j[1];
    var _k = (0, react_1.useState)(false), searchingProducts = _k[0], setSearchingProducts = _k[1];
    var notification = (0, use_notification_1.default)();
    var steppedContext = react_1.default.useContext(stepped_modal_1.SteppedContext);
    var layeredContext = react_1.default.useContext(layered_modal_1.LayeredModalContext);
    var form = (0, react_hook_form_1.useForm)({
        shouldUnregister: false,
        defaultValues: defaultFormValues,
    });
    var _l = form.watch(), shipping = _l.shipping, billing = _l.billing, discount = _l.discount, email = _l.email, customerId = _l.customerId, region = _l.region, shippingOption = _l.shippingOption, requireShipping = _l.requireShipping;
    var regions = (0, use_medusa_1.default)("regions").regions;
    var addCustomItem = function (_a) {
        var title = _a.title, unit_price = _a.unit_price, quantity = _a.quantity;
        var item = { title: title, unit_price: unit_price, quantity: quantity || 1 };
        setItems(__spreadArray(__spreadArray([], items, true), [item], false));
    };
    var handleAddItems = function (variants) {
        setItems(function (items) { return __spreadArray(__spreadArray([], items, true), variants
            .filter(function (variant) { return items.indexOf(function (v) { return v.id === variant.id; }) < 0; })
            .map(function (variant) { return (__assign(__assign({}, variant), { quantity: 1 })); }), true); });
    };
    var handlePriceChange = function (price, index) {
        var value = Math.round(price * 100);
        var updated = __spreadArray([], items, true);
        updated[index] = __assign(__assign({}, items[index]), { unit_price: value });
        setItems(updated);
    };
    var handleAddQuantity = function (quantity, index) {
        if (quantity < 0) {
            return;
        }
        var updated = __spreadArray([], items, true);
        updated[index] = __assign(__assign({}, items[index]), { quantity: quantity });
        setItems(updated);
    };
    var handleRemoveItem = function (index) {
        var updated = __spreadArray([], items, true);
        updated.splice(index, 1);
        setItems(updated);
    };
    var fetchShippingOptions = function (region) { return __awaiter(void 0, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, api_1.default.shippingOptions.list({
                            region_id: region.id,
                            is_return: false,
                        })];
                case 1:
                    data = (_a.sent()).data;
                    setShippingOptions(data.shipping_options);
                    return [2 /*return*/, data.shipping_options];
                case 2:
                    error_1 = _a.sent();
                    throw Error("Could not fetch shipping options");
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var getValidShippingOptions = function () {
        var options = shippingOptions;
        var total = calculateTotal();
        return options.reduce(function (acc, next) {
            if (next.requirements) {
                var minSubtotal = next.requirements.find(function (req) { return req.type === "min_subtotal"; });
                if (minSubtotal) {
                    if (total <= minSubtotal.amount) {
                        return acc;
                    }
                }
                var maxSubtotal = next.requirements.find(function (req) { return req.type === "max_subtotal"; });
                if (maxSubtotal) {
                    if (total >= maxSubtotal.amount) {
                        return acc;
                    }
                }
            }
            acc.push(next);
            return acc;
        }, []);
    };
    var submit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var doItems, draftOrder, option, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    doItems = items.map(function (i) {
                        var obj = {
                            variant_id: i.id || "",
                            quantity: i.quantity,
                            title: i.title,
                        };
                        if (i.unit_price) {
                            obj.unit_price = i.unit_price;
                        }
                        return obj;
                    });
                    draftOrder = {
                        region_id: region.id,
                        items: doItems,
                        email: email,
                    };
                    if (customerId) {
                        draftOrder.customer_id = customerId;
                    }
                    if ("id" in billing) {
                        draftOrder.billing_address = billing.id;
                    }
                    else {
                        draftOrder.billing_address = (0, remove_nullish_1.removeNullish)(billing);
                    }
                    if (!lodash_1.default.isEmpty(shipping)) {
                        if ("id" in shipping) {
                            draftOrder.shipping_address = shipping.id;
                        }
                        else {
                            draftOrder.shipping_address = (0, remove_nullish_1.removeNullish)(shipping);
                        }
                    }
                    if (discount && discount.code) {
                        draftOrder.discounts = [{ code: discount.code }];
                    }
                    option = {
                        option_id: shippingOption.id,
                        data: shippingOption.data,
                    };
                    if (customOptionPrice && showCustomPrice) {
                        option.price = customOptionPrice * 100;
                    }
                    if (noNotification) {
                        draftOrder.no_notification_order = true;
                    }
                    draftOrder.shipping_methods = [option];
                    setCreatingOrder(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api_1.default.draftOrders.create(draftOrder)];
                case 2:
                    data = (_a.sent()).data;
                    (0, gatsby_1.navigate)("/a/draft-orders/".concat(data.draft_order.id));
                    onDismiss();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    notification("Error", "Something went wrong. Please try again", "error");
                    return [3 /*break*/, 4];
                case 4:
                    setCreatingOrder(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleRegionSelect = function (regionOption) {
        form.setValue("region", regionOption === null || regionOption === void 0 ? void 0 : regionOption.value);
        fetchShippingOptions(regionOption === null || regionOption === void 0 ? void 0 : regionOption.value);
    };
    var handleOptionSelect = function (so) {
        var selectSo = shippingOptions === null || shippingOptions === void 0 ? void 0 : shippingOptions.find(function (s) { return so.value === s.id; });
        form.setValue("shippingOption", selectSo);
    };
    var calculateTotal = function () {
        var tot = items.reduce(function (acc, next) {
            if ("unit_price" in next) {
                acc = acc + next.unit_price * next.quantity;
            }
            else {
                acc = acc + (0, prices_1.extractUnitPrice)(next, region, false) * next.quantity;
            }
            return acc;
        }, 0);
        return tot;
    };
    (0, react_1.useEffect)(function () {
        if (regions) {
            form.setValue("region", regions[0]);
        }
    }, []);
    return (<stepped_modal_1.default layeredContext={layeredContext} context={steppedContext} onSubmit={function () { return submit(); }} steps={[
            <select_region_1.default handleRegionSelect={handleRegionSelect} region={region} options={(regions === null || regions === void 0 ? void 0 : regions.map(function (r) { return ({
                    value: r,
                    label: r.name,
                }); })) || []}/>,
            <items_1.default items={items} handleAddItems={handleAddItems} handleAddQuantity={handleAddQuantity} handleRemoveItem={handleRemoveItem} handleAddCustom={addCustomItem} selectedRegion={region} handlePriceChange={handlePriceChange}/>,
            <select_shipping_1.default shippingOptions={getValidShippingOptions()} handleOptionSelect={handleOptionSelect} region={region} shippingOption={shippingOption} showCustomPrice={showCustomPrice} setShowCustomPrice={setShowCustomPrice} setCustomOptionPrice={setCustomOptionPrice} customOptionPrice={customOptionPrice}/>,
            <shipping_details_1.default form={form} region={region} customerAddresses={customerAddresses} setCustomerAddresses={setCustomerAddresses}/>,
            <billing_details_1.default form={form} region={region}/>,
            <summary_1.default items={items} showCustomPrice={showCustomPrice} customOptionPrice={customOptionPrice} form={form}/>,
        ]} lastScreenIsSummary={true} title={"Create Draft Order"} handleClose={onDismiss}/>);
};
exports.default = NewOrder;
