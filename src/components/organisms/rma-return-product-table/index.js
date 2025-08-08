"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var prices_1 = require("../../../utils/prices");
var button_1 = require("../../fundamentals/button");
var minus_icon_1 = require("../../fundamentals/icons/minus-icon");
var plus_icon_1 = require("../../fundamentals/icons/plus-icon");
var trash_icon_1 = require("../../fundamentals/icons/trash-icon");
var table_1 = require("../../molecules/table");
var extractPrice = function (prices, order) {
    var price = prices.find(function (ma) { return ma.region_id === order.region_id; });
    if (!price) {
        price = prices.find(function (ma) { return ma.currency_code === order.currency_code; });
    }
    if (price) {
        return (0, prices_1.formatAmountWithSymbol)({
            currency: order.currency_code,
            amount: price.amount * (1 + order.tax_rate / 100),
        });
    }
    return 0;
};
var RMAReturnProductsTable = function (_a) {
    var isAdditionalItems = _a.isAdditionalItems, order = _a.order, itemsToAdd = _a.itemsToAdd, handleRemoveItem = _a.handleRemoveItem, handleToAddQuantity = _a.handleToAddQuantity;
    return (<table_1.default>
      <table_1.default.HeadRow className="text-grey-50 inter-small-semibold">
        <table_1.default.HeadCell>Product Details</table_1.default.HeadCell>
        <table_1.default.HeadCell className="text-right pr-8">Quantity</table_1.default.HeadCell>
        <table_1.default.HeadCell className="text-right">
          {isAdditionalItems ? "Unit Price" : "Refundable"}
        </table_1.default.HeadCell>
        <table_1.default.HeadCell></table_1.default.HeadCell>
        <table_1.default.HeadCell></table_1.default.HeadCell>
      </table_1.default.HeadRow>
      <table_1.default.Body>
        {itemsToAdd.map(function (item, index) { return (<table_1.default.Row className={(0, clsx_1.default)("border-b-grey-0 hover:bg-grey-0")}>
            <table_1.default.Cell>
              <div className="min-w-[240px] flex py-2">
                <div className="w-[30px] h-[40px] ">
                  <img className="h-full w-full object-cover rounded" src={item.product.thumbnail}/>
                </div>
                <div className="inter-small-regular text-grey-50 flex flex-col ml-4">
                  <span>
                    <span className="text-grey-90">{item.product.title}</span>{" "}
                  </span>
                  <span>{item.title}</span>
                </div>
              </div>
            </table_1.default.Cell>
            <table_1.default.Cell className="text-right w-32 pr-8">
              <div className="flex w-full text-right justify-end text-grey-50 ">
                <span onClick={function () { return handleToAddQuantity(-1, index); }} className="w-5 h-5 flex items-center justify-center rounded cursor-pointer hover:bg-grey-20 mr-2">
                  <minus_icon_1.default size={16}/>
                </span>
                <span>{item.quantity || ""}</span>
                <span onClick={function () { return handleToAddQuantity(1, index); }} className={(0, clsx_1.default)("w-5 h-5 flex items-center justify-center rounded cursor-pointer hover:bg-grey-20 ml-2")}>
                  <plus_icon_1.default size={16}/>
                </span>
              </div>
            </table_1.default.Cell>
            <table_1.default.Cell className="text-right">
              {extractPrice(item.prices, order)}
            </table_1.default.Cell>
            <table_1.default.Cell className="text-right text-grey-40 pr-1">
              {order.currency_code.toUpperCase()}
            </table_1.default.Cell>
            <table_1.default.Cell>
              <button_1.default onClick={function () { return handleRemoveItem(index); }} variant="ghost" size="small" className="w-8 h-8 text-grey-40">
                <trash_icon_1.default size={20}/>
              </button_1.default>
            </table_1.default.Cell>
          </table_1.default.Row>); })}
      </table_1.default.Body>
    </table_1.default>);
};
exports.default = RMAReturnProductsTable;
