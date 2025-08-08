"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var section_collapsible_1 = require("../section-collapsible");
var OrderResults = function (_a) {
    var _b = _a.orders, orders = _b === void 0 ? [] : _b, getLIProps = _a.getLIProps, offset = _a.offset, selected = _a.selected;
    return orders.length > 0 ? (<section_collapsible_1.default title={"Orders"} length={(orders === null || orders === void 0 ? void 0 : orders.length) || 0}>
      <div className="mt-large">
        <div className="flex flex-col">
          {orders === null || orders === void 0 ? void 0 : orders.map(function (order, index) { return (<li {...getLIProps({ index: offset + index })} className={(0, clsx_1.default)("py-1.5 group focus:bg-grey-5 rounded-rounded", {
                "bg-grey-5": selected === offset + index,
            })}>
              <gatsby_1.Link to={"/a/orders/".concat(order.id)} className="px-base py-1.5 flex items-center rounded-rounded justify-between">
                <div className="flex items-center gap-x-3">
                  <span className="inter-small-semibold">
                    #{order.display_id}
                  </span>
                  <p className="inter-small-regular text-grey-90">
                    {order.email}
                  </p>
                </div>
                <span className={(0, clsx_1.default)("group-focus:visible text-grey-40 inter-small-regular", {
                invisible: selected !== offset + index,
            })}>
                  Jump to...
                </span>
              </gatsby_1.Link>
            </li>); })}
        </div>
      </div>
    </section_collapsible_1.default>) : null;
};
exports.default = OrderResults;
