"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var section_collapsible_1 = require("../section-collapsible");
var DiscountResults = function (_a) {
    var _b = _a.discounts, discounts = _b === void 0 ? [] : _b, getLIProps = _a.getLIProps, offset = _a.offset, selected = _a.selected;
    return discounts.length > 0 ? (<section_collapsible_1.default title={"Discounts"} length={(discounts === null || discounts === void 0 ? void 0 : discounts.length) || 0}>
      <div className="mt-large">
        <div className="flex flex-col">
          {discounts === null || discounts === void 0 ? void 0 : discounts.map(function (discount, index) { return (<li {...getLIProps({ index: offset + index })} className={(0, clsx_1.default)("px-base py-1.5 group focus:bg-grey-5 rounded-rounded", { "bg-grey-5": selected === offset + index })}>
              <gatsby_1.Link to={"/a/discounts/".concat(discount.id)} className="py-1.5 flex items-center rounded-rounded justify-between">
                <div className="flex items-center gap-x-3">
                  <div className="py-0.5 px-2 bg-grey-10 rounded-rounded">
                    <span className="inter-small-regular">{discount.code}</span>
                  </div>
                  <p className="inter-small-regular text-grey-90">
                    {discount.rule.description}
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
exports.default = DiscountResults;
