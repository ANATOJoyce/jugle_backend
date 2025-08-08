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
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var is_line_item_1 = require("../../../utils/is-line-item");
var prices_1 = require("../../../utils/prices");
var check_icon_1 = require("../../fundamentals/icons/check-icon");
var minus_icon_1 = require("../../fundamentals/icons/minus-icon");
var plus_icon_1 = require("../../fundamentals/icons/plus-icon");
var table_1 = require("../../molecules/table");
var RMASelectReturnProductTable = function (_a) {
    var order = _a.order, allItems = _a.allItems, toReturn = _a.toReturn, setToReturn = _a.setToReturn;
    var handleQuantity = function (change, item) {
        var _a;
        var _b;
        if ((item.quantity === toReturn[item.id].quantity && change > 0) ||
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
                quantity: item.quantity,
            };
        }
        setToReturn(newReturns);
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
            var _a;
            // Only show items that have not been returned,
            // and aren't canceled
            if (!item ||
                (0, is_line_item_1.isLineItemReturned)(item) ||
                (0, is_line_item_1.isLineItemCanceled)(item, order)) {
                return;
            }
            var checked = item.id in toReturn;
            return (<table_1.default.Row className={(0, clsx_1.default)("border-b-grey-0 hover:bg-grey-0")}>
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
                    <span>{((_a = item === null || item === void 0 ? void 0 : item.variant) === null || _a === void 0 ? void 0 : _a.title) || ""}</span>
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
                  </div>) : (<span className="text-grey-40">{item.quantity}</span>)}
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
            </table_1.default.Row>);
        })}
      </table_1.default.Body>
    </table_1.default>);
};
exports.default = RMASelectReturnProductTable;
