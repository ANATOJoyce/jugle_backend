"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var section_collapsible_1 = require("../section-collapsible");
var ProductResults = function (_a) {
    var _b = _a.products, products = _b === void 0 ? [] : _b, getLIProps = _a.getLIProps, offset = _a.offset, selected = _a.selected;
    return products.length > 0 ? (<section_collapsible_1.default title={"Products"} length={products.length || 0}>
      <div className="mt-large">
        <div className="flex flex-col">
          {products === null || products === void 0 ? void 0 : products.slice(0, 5).map(function (product, index) { return (<li {...getLIProps({
            index: offset + index,
        })} className={(0, clsx_1.default)("px-base py-1.5 group focus:bg-grey-5 rounded-rounded", {
                "bg-grey-5": selected === offset + index,
            })}>
              <gatsby_1.Link to={"/a/products/".concat(product.id)} className="flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <img src={product.thumbnail} className="h-[32px] w-[24px] object-cover rounded"/>
                  <p className="inter-small-regular text-grey-90">
                    {product.title}
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
exports.default = ProductResults;
