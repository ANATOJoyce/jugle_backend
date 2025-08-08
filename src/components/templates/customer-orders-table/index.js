"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var moment_1 = require("moment");
var react_1 = require("react");
var use_observe_width_1 = require("../../../hooks/use-observe-width");
var prices_1 = require("../../../utils/prices");
var status_indicator_1 = require("../../fundamentals/status-indicator");
var table_1 = require("../../molecules/table");
var CustomerOrdersTable = function (_a) {
    var customerId = _a.customerId;
    // TODO: Use react-table
    // I've hard coded the limit to 14 for now, since it's quite rare
    // to have customers putting in that many orders. This is only until
    // we've successfully implemented react-table, that will allow us
    // to add pagination
    var _b = (0, medusa_react_1.useAdminOrders)({
        customer_id: customerId,
        offset: 0,
        limit: 14,
        expand: "items",
    }), orders = _b.orders, isLoading = _b.isLoading;
    var containerRef = (0, react_1.useRef)(null);
    var width = (0, use_observe_width_1.useObserveWidth)(containerRef);
    var calcImages = function (order) {
        var columns = Math.max(Math.floor(width / 20) - 1, 1);
        var visibleImages = order.items.slice(0, columns);
        var remainder = order.items.length - columns;
        return { visibleImages: visibleImages, remainder: remainder };
    };
    var decideStatus = function (order) {
        switch (order.payment_status) {
            case "captured":
                return <status_indicator_1.default variant="success" title={"Paid"}/>;
            case "awaiting":
                return <status_indicator_1.default variant="warning" title={"Awaiting"}/>;
            case "requires":
                return <status_indicator_1.default variant="danger" title={"Requires action"}/>;
            default:
                return <status_indicator_1.default variant="primary" title={"N/A"}/>;
        }
    };
    return (<div className="w-full h-full overflow-y-auto">
      <table_1.default>
        <table_1.default.Head>
          <table_1.default.HeadRow>
            <table_1.default.HeadCell className="w-[75px]">Order</table_1.default.HeadCell>
            <table_1.default.HeadCell />
            <table_1.default.HeadCell>Date</table_1.default.HeadCell>
            <table_1.default.HeadCell>Fulfillment</table_1.default.HeadCell>
            <table_1.default.HeadCell>Status</table_1.default.HeadCell>
            <table_1.default.HeadCell>Total</table_1.default.HeadCell>
          </table_1.default.HeadRow>
        </table_1.default.Head>
        <table_1.default.Body>
          {orders === null || orders === void 0 ? void 0 : orders.map(function (order, index) {
            var _a = calcImages(order), remainder = _a.remainder, visibleImages = _a.visibleImages;
            return (<table_1.default.Row key={"invite-".concat(index)} linkTo={"/a/orders/".concat(order.id)} className="py-2">
                <table_1.default.Cell className="text-grey-90 w-20">
                  #{order.display_id}
                </table_1.default.Cell>
                <table_1.default.Cell className="w-40 flex">
                  <div ref={containerRef} className="flex space-x-1 w-[60px] mr-2 items-center">
                    {visibleImages.map(function (tag) { return (<div className="h-[35px] w-[25px] flex items-center ">
                        <img className="rounded object-cover" src={tag.thumbnail}/>
                      </div>); })}
                  </div>
                  {remainder > 0 && (<div className="flex items-center text-grey-40 inter-small-regular">
                      + {remainder} more
                    </div>)}
                </table_1.default.Cell>
                <table_1.default.Cell className="">
                  {(0, moment_1.default)(order.created_at).format("DD MMM YYYY hh:mm")}
                </table_1.default.Cell>
                <table_1.default.Cell className="">{order.fulfillment_status}</table_1.default.Cell>
                <table_1.default.Cell className="truncate">
                  {decideStatus(order)}
                </table_1.default.Cell>
                <table_1.default.Cell className="">
                  {(0, prices_1.stringDisplayPrice)({
                    amount: order.total,
                    currencyCode: order.currency_code,
                })}
                </table_1.default.Cell>
                <table_1.default.Cell />
              </table_1.default.Row>);
        })}
        </table_1.default.Body>
      </table_1.default>
    </div>);
};
exports.default = CustomerOrdersTable;
