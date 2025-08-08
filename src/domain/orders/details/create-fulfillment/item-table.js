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
var react_1 = require("react");
var check_icon_1 = require("../../../../components/fundamentals/icons/check-icon");
var minus_icon_1 = require("../../../../components/fundamentals/icons/minus-icon");
var plus_icon_1 = require("../../../../components/fundamentals/icons/plus-icon");
var table_1 = require("../../../../components/molecules/table");
var CreateFulfillmentItemsTable = function (_a) {
    var items = _a.items, toFulfill = _a.toFulfill, setToFulfill = _a.setToFulfill, quantities = _a.quantities, setQuantities = _a.setQuantities;
    var handleQuantity = function (upOrDown, item) {
        var _a, _b;
        var current = quantities[item.id];
        var newQuantities = __assign({}, quantities);
        if (upOrDown === -1) {
            newQuantities = __assign(__assign({}, newQuantities), (_a = {}, _a[item.id] = current - 1, _a));
        }
        else {
            newQuantities = __assign(__assign({}, newQuantities), (_b = {}, _b[item.id] = current + 1, _b));
        }
        setQuantities(newQuantities);
    };
    var handleFulfillmentItemToggle = function (item) {
        var _a;
        var id = item.id;
        var idxOfToggled = toFulfill.indexOf(id);
        // if already in fulfillment items, you unchecked the item
        // so we remove the item
        if (idxOfToggled !== -1) {
            var newFulfills = __spreadArray([], toFulfill, true);
            newFulfills.splice(idxOfToggled, 1);
            setToFulfill(newFulfills);
        }
        else {
            var newFulfills = __spreadArray(__spreadArray([], toFulfill, true), [id], false);
            setToFulfill(newFulfills);
            var newQuantities = __assign(__assign({}, quantities), (_a = {}, _a[item.id] = item.quantity - item.fulfilled_quantity, _a));
            setQuantities(newQuantities);
        }
    };
    return (<table_1.default>
      <table_1.default.HeadRow className="text-grey-50 inter-small-semibold border-t border-t-grey-20">
        <table_1.default.HeadCell>Details</table_1.default.HeadCell>
        <table_1.default.HeadCell />
        <table_1.default.HeadCell className="text-right pr-8">Quantity</table_1.default.HeadCell>
      </table_1.default.HeadRow>
      <table_1.default.Body>
        {items === null || items === void 0 ? void 0 : items.map(function (item) {
            var _a, _b;
            var _c;
            var checked = toFulfill.includes(item.id);
            return (<>
              <table_1.default.Row className={"border-b-grey-0 hover:bg-grey-0"}>
                <table_1.default.Cell className="w-[50px]">
                  <div className="items-center ml-1 h-full flex">
                    <div onClick={function () { return handleFulfillmentItemToggle(item); }} className={"w-5 h-5 flex justify-center text-grey-0 border-grey-30 border cursor-pointer rounded-base ".concat(checked && "bg-violet-60")}>
                      <span className="self-center">
                        {checked && <check_icon_1.default size={16}/>}
                      </span>
                    </div>

                    <input className="hidden" checked={checked} tabIndex={-1} onChange={function () { return handleFulfillmentItemToggle(item); }} type="checkbox"/>
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
                      <span>{((_c = item === null || item === void 0 ? void 0 : item.variant) === null || _c === void 0 ? void 0 : _c.title) || ""}</span>
                    </div>
                  </div>
                </table_1.default.Cell>
                <table_1.default.Cell className="text-right w-32 pr-8">
                  {toFulfill.includes(item.id) ? (<div className="flex w-full text-right justify-end text-grey-50 ">
                      <span onClick={function () { return handleQuantity(-1, item); }} className={(0, clsx_1.default)("w-5 h-5 flex text-grey-50 items-center justify-center rounded cursor-pointer hover:bg-grey-20 mr-2", (_a = {},
                        _a["pointer-events-none text-grey-30"] = quantities[item.id] === 1,
                        _a))}>
                        <minus_icon_1.default size={16}/>
                      </span>
                      <span>{quantities[item.id] || ""}</span>
                      <span onClick={function () { return handleQuantity(1, item); }} className={(0, clsx_1.default)("w-5 h-5 flex text-grey-50 items-center justify-center rounded cursor-pointer hover:bg-grey-20 ml-2", (_b = {},
                        _b["pointer-events-none text-grey-30"] = item.quantity - item.fulfilled_quantity ===
                            quantities[item.id],
                        _b))}>
                        <plus_icon_1.default size={16}/>
                      </span>
                    </div>) : (<span className="text-grey-40">
                      {item.quantity - item.returned_quantity}
                    </span>)}
                </table_1.default.Cell>
              </table_1.default.Row>
            </>);
        })}
      </table_1.default.Body>
    </table_1.default>);
};
exports.default = CreateFulfillmentItemsTable;
