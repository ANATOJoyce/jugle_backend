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
var clsx_1 = require("clsx");
var react_1 = require("react");
var return_reasons_1 = require("../../../domain/orders/details/rma-sub-modals/return-reasons");
var api_1 = require("../../../services/api");
var is_line_item_1 = require("../../../utils/is-line-item");
var prices_1 = require("../../../utils/prices");
var button_1 = require("../../fundamentals/button");
var check_icon_1 = require("../../fundamentals/icons/check-icon");
var minus_icon_1 = require("../../fundamentals/icons/minus-icon");
var plus_icon_1 = require("../../fundamentals/icons/plus-icon");
var layered_modal_1 = require("../../molecules/modal/layered-modal");
var table_1 = require("../../molecules/table");
var copy_to_clipboard_1 = require("../../atoms/copy-to-clipboard");
var RMASelectProductTable = function (_a) {
    var order = _a.order, allItems = _a.allItems, toReturn = _a.toReturn, _b = _a.customReturnOptions, customReturnOptions = _b === void 0 ? undefined : _b, _c = _a.imagesOnReturns, imagesOnReturns = _c === void 0 ? false : _c, setToReturn = _a.setToReturn, _d = _a.isSwapOrClaim, isSwapOrClaim = _d === void 0 ? false : _d;
    var _e = (0, react_1.useContext)(layered_modal_1.LayeredModalContext), push = _e.push, pop = _e.pop;
    var handleQuantity = function (change, item) {
        var _a;
        var _b;
        if ((item.quantity - item.returned_quantity === toReturn[item.id].quantity &&
            change > 0) ||
            (toReturn[item.id].quantity === 1 && change < 0)) {
            return;
        }
        var newReturns = __assign(__assign({}, toReturn), (_a = {}, _a[item.id] = __assign(__assign({}, toReturn[item.id]), { quantity: (((_b = toReturn[item.id]) === null || _b === void 0 ? void 0 : _b.quantity) || 0) + change }), _a));
        setToReturn(newReturns);
    };
    var handleReturnToggle = function (item) {
        var id = item.id;
        var newReturns = __assign({}, toReturn);
        if (id in toReturn) {
            delete newReturns[id];
        }
        else {
            newReturns[id] = {
                images: imagesOnReturns ? [] : null,
                reason: null,
                note: "",
                quantity: item.quantity - item.returned_quantity,
            };
        }
        setToReturn(newReturns);
    };
    var handleAddImages = function (files) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, api_1.default.uploads
                    .create(files)
                    .then(function (_a) {
                    var data = _a.data;
                    return data.uploads.map(function (_a) {
                        var url = _a.url;
                        return url;
                    });
                })];
        });
    }); };
    var setReturnReason = function (reason, note, files, id) {
        var _a;
        var newReturns = {};
        if (imagesOnReturns && (files === null || files === void 0 ? void 0 : files.length)) {
            handleAddImages(files).then(function (res) {
                var _a;
                newReturns = __assign(__assign({}, toReturn), (_a = {}, _a[id] = __assign(__assign({}, toReturn[id]), { reason: reason, note: note, images: __spreadArray(__spreadArray([], (toReturn[id].images || []), true), res, true) }), _a));
                setToReturn(newReturns);
            });
        }
        else {
            newReturns = __assign(__assign({}, toReturn), (_a = {}, _a[id] = __assign(__assign({}, toReturn[id]), { reason: reason, note: note }), _a));
            setToReturn(newReturns);
        }
    };
    return (<table_1.default>
      <table_1.default.HeadRow className="text-grey-50 inter-small-semibold">
        <table_1.default.HeadCell colSpan={2}>Product Details</table_1.default.HeadCell>
        <table_1.default.HeadCell className="text-right pr-8">Quantity</table_1.default.HeadCell>
        <table_1.default.HeadCell className="text-right">Refundable</table_1.default.HeadCell>
        <table_1.default.HeadCell></table_1.default.HeadCell>
      </table_1.default.HeadRow>
      <table_1.default.Body>
        {allItems.map(function (item) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            // Only show items that have not been returned,
            // and aren't canceled
            if (item.returned_quantity === item.quantity ||
                (0, is_line_item_1.isLineItemCanceled)(item, order)) {
                return;
            }
            var checked = item.id in toReturn;
            return (<>
              <table_1.default.Row className={(0, clsx_1.default)("border-b-grey-0 hover:bg-grey-0")}>
                <table_1.default.Cell>
                  <div className="items-center ml-1 h-full flex">
                    <div onClick={function () { return handleReturnToggle(item); }} className={"mr-4 w-5 h-5 flex justify-center text-grey-0 border-grey-30 border cursor-pointer rounded-base ".concat(checked && "bg-violet-60")}>
                      <span className="self-center">
                        {checked && <check_icon_1.default size={16}/>}
                      </span>
                    </div>

                    <input className="hidden" checked={checked} tabIndex={-1} onChange={function () { return handleReturnToggle(item); }} type="checkbox"/>
                  </div>
                </table_1.default.Cell>
                <table_1.default.Cell>
                  <div className="min-w-[240px] flex py-2">
                    <div className="w-[30px] h-[40px] ">
                      <img className="h-full w-full object-cover rounded" src={item.thumbnail}/>
                    </div>
                    <div className="inter-small-regular text-grey-50 flex flex-col ml-4">
                      <span>
                        <span className="text-grey-90">{item.title}</span>
                      </span>
                      <div className="flex gap-4">
                        {((_a = item === null || item === void 0 ? void 0 : item.variant) === null || _a === void 0 ? void 0 : _a.title) && (<span>{item.variant.title}</span>)}
                        {((_b = item === null || item === void 0 ? void 0 : item.variant) === null || _b === void 0 ? void 0 : _b.sku) && (<copy_to_clipboard_1.default value={item.variant.sku} iconSize={14}/>)}
                      </div>
                    </div>
                  </div>
                </table_1.default.Cell>
                <table_1.default.Cell className="text-right w-32 pr-8">
                  {item.id in toReturn ? (<div className="flex w-full text-right justify-end text-grey-50 ">
                      <span onClick={function () { return handleQuantity(-1, item); }} className="w-5 h-5 flex items-center justify-center rounded cursor-pointer hover:bg-grey-20 mr-2">
                        <minus_icon_1.default size={16}/>
                      </span>
                      <span>{toReturn[item.id].quantity || ""}</span>
                      <span onClick={function () { return handleQuantity(1, item); }} className={(0, clsx_1.default)("w-5 h-5 flex items-center justify-center rounded cursor-pointer hover:bg-grey-20 ml-2")}>
                        <plus_icon_1.default size={16}/>
                      </span>
                    </div>) : (<span className="text-grey-40">
                      {item.quantity - item.returned_quantity}
                    </span>)}
                </table_1.default.Cell>
                <table_1.default.Cell className="text-right">
                  {(0, prices_1.formatAmountWithSymbol)({
                    currency: order.currency_code,
                    amount: item.refundable || 0,
                })}
                </table_1.default.Cell>
                <table_1.default.Cell className="text-right text-grey-40 pr-1">
                  {order.currency_code.toUpperCase()}
                </table_1.default.Cell>
              </table_1.default.Row>
              {checked && !isSwapOrClaim && (<table_1.default.Row className="last:border-b-0 hover:bg-grey-0">
                  <table_1.default.Cell></table_1.default.Cell>
                  <table_1.default.Cell colSpan={2}>
                    <div className="max-w-[470px] truncate">
                      {((_c = toReturn[item.id]) === null || _c === void 0 ? void 0 : _c.reason) && (<span className="inter-small-regular text-grey-40">
                          <span className="text-grey-80 mr-1">
                            <span className="inter-small-semibold mr-1">
                              {(_d = toReturn[item.id]) === null || _d === void 0 ? void 0 : _d.reason.label}
                            </span>
                          </span>
                          {((_e = toReturn[item.id]) === null || _e === void 0 ? void 0 : _e.note) || ""}
                          <span className="ml-2">
                            {((_g = (_f = toReturn[item.id]) === null || _f === void 0 ? void 0 : _f.images) === null || _g === void 0 ? void 0 : _g.length) > 0 && (<>
                                ({(_j = (_h = toReturn[item.id]) === null || _h === void 0 ? void 0 : _h.images) === null || _j === void 0 ? void 0 : _j.length} image{" "}
                                {((_l = (_k = toReturn[item.id]) === null || _k === void 0 ? void 0 : _k.images) === null || _l === void 0 ? void 0 : _l.length) > 1
                                ? "s"
                                : ""}
                                )
                              </>)}
                          </span>
                        </span>)}
                    </div>
                  </table_1.default.Cell>
                  <table_1.default.Cell colSpan={2}>
                    <div className="flex w-full justify-end mb-small">
                      <button_1.default onClick={function () {
                        var _a, _b;
                        return push(ReturnReasonScreen(pop, (_a = toReturn[item.id]) === null || _a === void 0 ? void 0 : _a.reason, (_b = toReturn[item.id]) === null || _b === void 0 ? void 0 : _b.note, customReturnOptions, imagesOnReturns, function (reason, note, files) {
                            return setReturnReason(reason, note, files, item.id);
                        }));
                    }} variant="ghost" size="small" className="border border-grey-20">
                        Select Reason
                      </button_1.default>
                    </div>
                  </table_1.default.Cell>
                </table_1.default.Row>)}
            </>);
        })}
      </table_1.default.Body>
    </table_1.default>);
};
var ReturnReasonScreen = function (pop, reason, note, customReturnOptions, imagesOnReturns, setReturnReason) {
    return {
        title: "Return Reasons",
        onBack: function () { return pop(); },
        view: (<return_reasons_1.default reason={reason} existingNote={note} customReturnOptions={customReturnOptions} addImage={imagesOnReturns} onSubmit={setReturnReason}/>),
    };
};
exports.default = RMASelectProductTable;
