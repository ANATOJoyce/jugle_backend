"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var section_collapsible_1 = require("../section-collapsible");
var avatar_1 = require("../../../atoms/avatar");
var CustomerResults = function (_a) {
    var _b = _a.customers, customers = _b === void 0 ? [] : _b, getLIProps = _a.getLIProps, offset = _a.offset, selected = _a.selected;
    return customers.length > 0 ? (<section_collapsible_1.default title={"Customers"} length={(customers === null || customers === void 0 ? void 0 : customers.length) || 0}>
      <div className="mt-large">
        <div className="flex flex-col">
          {customers === null || customers === void 0 ? void 0 : customers.map(function (customer, index) { return (<li {...getLIProps({
            index: offset + index,
        })} className={(0, clsx_1.default)("px-base group py-1.5 focus:bg-grey-5 rounded-rounded", { "bg-grey-5": selected === offset + index })}>
              <gatsby_1.Link to={"/a/customers/".concat(customer.id)} className="py-1.5 flex items-center rounded-rounded justify-between">
                <div className="flex items-center gap-x-3">
                  <div className="w-[20px] h-[20px] shrink-0">
                    <avatar_1.default user={customer}/>
                  </div>
                  <p className="inter-small-regular text-grey-90">
                    {(customer === null || customer === void 0 ? void 0 : customer.first_name)
                ? "".concat(customer === null || customer === void 0 ? void 0 : customer.first_name, " ").concat(customer === null || customer === void 0 ? void 0 : customer.last_name)
                : customer.email}
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
exports.default = CustomerResults;
