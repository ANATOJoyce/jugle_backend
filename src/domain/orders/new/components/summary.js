"use strict";
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
var react_1 = require("react");
var input_1 = require("../../../../components/molecules/input");
var button_1 = require("../../../../components/fundamentals/button");
var api_1 = require("../../../../services/api");
var prices_1 = require("../../../../utils/prices");
var stepped_modal_1 = require("../../../../components/molecules/modal/stepped-modal");
var avatar_1 = require("../../../../components/atoms/avatar");
var table_1 = require("../../../../components/molecules/table");
var clsx_1 = require("clsx");
var plus_icon_1 = require("../../../../components/fundamentals/icons/plus-icon");
var cross_icon_1 = require("../../../../components/fundamentals/icons/cross-icon");
var image_placeholder_1 = require("../../../../components/fundamentals/image-placeholder");
var Summary = function (_a) {
    var items = _a.items, showCustomPrice = _a.showCustomPrice, customOptionPrice = _a.customOptionPrice, form = _a.form;
    var _b = (0, react_1.useState)(false), showAddDiscount = _b[0], setShowAddDiscount = _b[1];
    var _c = (0, react_1.useState)(false), checkingDiscount = _c[0], setCheckingDiscount = _c[1];
    var _d = (0, react_1.useState)(false), discError = _d[0], setDiscError = _d[1];
    var _e = (0, react_1.useState)(), code = _e[0], setCode = _e[1];
    var _f = form.watch([
        "shipping",
        "billing",
        "email",
        "region",
        "discount",
        "requireShipping",
        "shippingOption",
    ]), shipping = _f.shipping, billing = _f.billing, email = _f.email, region = _f.region, discount = _f.discount, requireShipping = _f.requireShipping, shippingOption = _f.shippingOption;
    var handleAddDiscount = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setCheckingDiscount(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api_1.default.discounts.retrieveByCode(code)
                        // if no discount is found
                    ];
                case 2:
                    data = (_a.sent()).data;
                    // if no discount is found
                    if (!data.discount) {
                        setDiscError(true);
                        return [2 /*return*/];
                    }
                    // if discount is not available in region
                    if (!data.discount.regions.find(function (d) { return d.id === region.id; })) {
                        setDiscError(true);
                    }
                    setCode("");
                    setShowAddDiscount(false);
                    form.setValue("discount", data.discount);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setDiscError(true);
                    return [3 /*break*/, 4];
                case 4:
                    setCheckingDiscount(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var onDiscountRemove = function () {
        form.setValue("discount", {});
        setShowAddDiscount(false);
        setCode("");
    };
    (0, react_1.useEffect)(function () {
        form.register("discount");
    }, []);
    return (<div className="min-h-[705px]">
      <SummarySection title={"Items"} editIndex={1}>
        <table_1.default>
          <table_1.default.HeadRow className="text-grey-50 border-t inter-small-semibold">
            <table_1.default.HeadCell>Details</table_1.default.HeadCell>
            <table_1.default.HeadCell className="text-right">Quantity</table_1.default.HeadCell>
            <table_1.default.HeadCell className="text-right">
              Price (excl. Taxes)
            </table_1.default.HeadCell>
            <table_1.default.HeadCell></table_1.default.HeadCell>
          </table_1.default.HeadRow>
          {items.map(function (item, index) {
            var _a, _b;
            var displayPrice = (0, prices_1.displayUnitPrice)(item, region);
            return (<table_1.default.Row className={(0, clsx_1.default)("border-b-grey-0 hover:bg-grey-0")}>
                <table_1.default.Cell>
                  <div className="min-w-[240px] flex py-2">
                    <div className="w-[30px] h-[40px] ">
                      {((_a = item === null || item === void 0 ? void 0 : item.product) === null || _a === void 0 ? void 0 : _a.thumbnail) ? (<img className="h-full w-full object-cover rounded" src={item.product.thumbnail}/>) : (<image_placeholder_1.default />)}
                    </div>
                    <div className="inter-small-regular text-grey-50 flex flex-col ml-4">
                      <span>
                        <span className="text-grey-90">
                          {(_b = item.product) === null || _b === void 0 ? void 0 : _b.title}
                        </span>{" "}
                      </span>
                      <span>{(item === null || item === void 0 ? void 0 : item.title) || ""}</span>
                    </div>
                  </div>
                </table_1.default.Cell>
                <table_1.default.Cell className="text-right">
                  {item.quantity || ""}
                </table_1.default.Cell>
                <table_1.default.Cell className="text-right">{displayPrice}</table_1.default.Cell>
              </table_1.default.Row>);
        })}
        </table_1.default>
        {!showAddDiscount && !(discount === null || discount === void 0 ? void 0 : discount.rule) && (<div className="w-full flex justify-end">
            <button_1.default variant="ghost" size="small" className="border border-grey-20 inter-small-semibold" onClick={function () { return setShowAddDiscount(true); }}>
              <plus_icon_1.default size={20}/>
              Add Discount
            </button_1.default>
          </div>)}
        {showAddDiscount && !(discount === null || discount === void 0 ? void 0 : discount.rule) && (<>
            <div className="flex w-full items-center gap-x-base">
              <input_1.default type="text" placeholder="SUMMER10" invalid={discError} onFocus={function () { return setDiscError(false); }} fontSize="12px" onChange={function (_a) {
            var currentTarget = _a.currentTarget;
            return setCode(currentTarget.value);
        }} value={code || null}/>
              <button_1.default className="" variant="ghost" className="text-grey-40 w-8 h-8" size="small" onClick={function () { return setShowAddDiscount(false); }}>
                <cross_icon_1.default size={20}/>
              </button_1.default>
            </div>
            <div className="w-full flex justify-end mt-4 ">
              <button_1.default className="border h-full border-grey-20" variant="ghost" size="small" disabled={!code} loading={checkingDiscount} onClick={function () { return handleAddDiscount(); }}>
                <plus_icon_1.default size={20}/>
                Add Discount
              </button_1.default>
            </div>
          </>)}
        {(discount === null || discount === void 0 ? void 0 : discount.rule) && (<div className="flex flex-col w-full border-b border-t border-grey-20 pt-4 mt-4 last:border-b-0 inter-small-regular ">
            <div className="flex w-full justify-between inter-base-semibold mb-4">
              <span>
                Discount
                <span className="inter-base-regular text-grey-50 ml-0.5">
                  (Code: {discount.code})
                </span>
              </span>
              <span onClick={function () { return onDiscountRemove(); }} className="inter-small-semibold text-violet-60 cursor-pointer">
                <cross_icon_1.default size={20}/>
              </span>
            </div>
            <div className="flex w-full">
              <div className={(0, clsx_1.default)("flex flex-col border-grey-20 pr-6", {
                "border-r": discount.rule.type !== "free_shipping",
            })}>
                <span className="text-grey-50">Type</span>
                <span>
                  {discount.rule.type !== "free_shipping"
                ? "".concat(discount.rule.type
                    .charAt(0)
                    .toUpperCase()).concat(discount.rule.type.slice(1))
                : "Free Shipping"}
                </span>
              </div>
              {discount.rule.type !== "free_shipping" && (<div className="pl-6 flex flex-col">
                  <span className="text-grey-50">Value</span>
                  <span>
                    {discount.rule.type === "fixed"
                    ? "".concat((0, prices_1.displayAmount)(region.currency_code, discount.rule.value), " ").concat(region.currency_code.toUpperCase())
                    : "".concat(discount.rule.value, " %")}
                  </span>
                </div>)}
            </div>
          </div>)}
      </SummarySection>
      <SummarySection title={"Customer"} editIndex={2}>
        <div className="flex items-center">
          <div className="w-5 h-5 mr-3">
            <avatar_1.default color="bg-fuschia-40" user={{
            email: email,
            first_name: shipping.first_name,
            last_name: shipping.last_name,
        }} font="inter-small-regular"/>
          </div>
          {email}
        </div>
      </SummarySection>
      {requireShipping && (<SummarySection title={"Shipping details"} editIndex={4}>
          <div className="flex w-full">
            <div className="border-r flex flex-col border-grey-20 pr-6">
              <span className="text-grey-50">Address</span>
              <span>
                {shipping.address_1}, {shipping.address_2}
              </span>
              <span>
                {"".concat(shipping.postal_code, " ").concat(shipping.city, "\n                ").concat(shipping.country_code.toUpperCase())}
              </span>
            </div>
            <div className="pl-6 flex flex-col">
              <span className="text-grey-50">Shipping method</span>
              <span>
                {shippingOption.name} -{" "}
                {showCustomPrice && customOptionPrice ? (<>
                    <strike style={{ marginRight: "5px" }}>
                      {(0, prices_1.extractOptionPrice)(shippingOption.amount, region)}
                    </strike>
                    {customOptionPrice} {region.currency_code.toUpperCase()}
                  </>) : ((0, prices_1.extractOptionPrice)(shippingOption.amount, region))}
              </span>
            </div>
          </div>
        </SummarySection>)}
      <SummarySection title={"Billing details"} editIndex={4}>
        <span className="text-grey-50">Address</span>
        <span>
          {billing.address_1}, {billing.address_2}
        </span>
        <span>
          {"".concat(billing.postal_code, " ").concat(billing.city, "\n                ").concat(billing.country_code.toUpperCase())}
        </span>
      </SummarySection>
    </div>);
};
var SummarySection = function (_a) {
    var title = _a.title, editIndex = _a.editIndex, children = _a.children;
    var setPage = (0, react_1.useContext)(stepped_modal_1.SteppedContext).setPage;
    return (<div className="flex flex-col w-full border-b border-grey-20 mt-4 pb-8 last:border-b-0 inter-small-regular ">
      <div className="flex w-full justify-between inter-base-semibold mb-4">
        {title}
        <span onClick={function () { return setPage(editIndex); }} className="inter-small-semibold text-violet-60 cursor-pointer">
          Edit
        </span>
      </div>
      {children}
    </div>);
};
exports.default = Summary;
