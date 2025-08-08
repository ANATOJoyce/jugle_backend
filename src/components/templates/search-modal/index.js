"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var use_debounce_1 = require("../../../hooks/use-debounce");
var spinner_1 = require("../../atoms/spinner");
var text_input_1 = require("../../atoms/text-input");
var search_icon_1 = require("../../fundamentals/icons/search-icon");
var RadixDialog = require("@radix-ui/react-dialog");
var customer_results_1 = require("./results/customer-results");
var discount_results_1 = require("./results/discount-results");
var keyboard_shortcuts_1 = require("./keyboard-shortcuts");
var product_results_1 = require("./results/product-results");
var use_keyboard_navigation_list_1 = require("./use-keyboard-navigation-list");
var clsx_1 = require("clsx");
var order_results_1 = require("./results/order-results");
var cross_icon_1 = require("../../fundamentals/icons/cross-icon");
var tooltip_1 = require("../../atoms/tooltip");
var getTotal = function () {
    var lists = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        lists[_i] = arguments[_i];
    }
    return lists.reduce(function (total, list) {
        if (list === void 0) { list = []; }
        return total + list.length;
    }, 0);
};
var SearchModal = function (_a) {
    var handleClose = _a.handleClose;
    var _b = react_1.default.useState(""), q = _b[0], setQ = _b[1];
    var query = (0, use_debounce_1.useDebounce)(q, 500);
    var onChange = function (e) { return setQ(e.target.value); };
    var handleClear = function () {
        setQ("");
    };
    var _c = (0, medusa_react_1.useAdminOrders)({
        q: query,
        limit: 5,
        offset: 0,
    }, { enabled: !!query, keepPreviousData: true }), orders = _c.orders, isFetchingOrders = _c.isFetching;
    var _d = (0, medusa_react_1.useAdminCustomers)({
        q: query,
        limit: 5,
        offset: 0,
    }, { enabled: !!query, keepPreviousData: true, retry: 0 }), customers = _d.customers, isFetchingCustomers = _d.isFetching;
    var _e = (0, medusa_react_1.useAdminDiscounts)({ q: query, limit: 5, offset: 0 }, { enabled: !!query, keepPreviousData: true }), discounts = _e.discounts, isFetchingDiscounts = _e.isFetching;
    var _f = (0, medusa_react_1.useAdminProducts)({ q: query, limit: 5 }, { enabled: !!query, keepPreviousData: true }), products = _f.products, isFetchingProducts = _f.isFetching;
    var isFetching = isFetchingDiscounts ||
        isFetchingCustomers ||
        isFetchingProducts ||
        isFetchingOrders;
    var totalLength = getTotal(products, discounts, customers, orders);
    var _g = (0, use_keyboard_navigation_list_1.default)({
        length: totalLength,
    }), getInputProps = _g.getInputProps, getLIProps = _g.getLIProps, getULProps = _g.getULProps, selected = _g.selected;
    return (<RadixDialog.Root open onOpenChange={handleClose}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={(0, clsx_1.default)("fixed pt-[140px] pb-[100px] z-50 inset-0 backdrop-blur-sm", { flex: totalLength > 0 })}>
          <RadixDialog.Content className={(0, clsx_1.default)("max-w-[640px] flex-1 flex mx-auto bg-grey-0 rounded-rounded shadow-searchModal")}>
            <div className="py-large flex-1 flex flex-col">
              <div className="flex items-center gap-x-4 pb-large border-solid px-xlarge border-b border-grey-20">
                <search_icon_1.default className="text-grey-40"/>
                <text_input_1.default className="flex-1" onChange={onChange} value={q} placeholder="Search typing to search..." {...getInputProps()}/>
                <tooltip_1.default className="bg-grey-0" onClick={handleClear} content="Clear search">
                  <cross_icon_1.default className="flex text-grey-50"/>
                </tooltip_1.default>
              </div>
              <keyboard_shortcuts_1.default className="mt-xlarge px-xlarge flex items-center gap-x-3 text-grey-40 inter-small-regular"/>
              {totalLength > 0 ? (<ul {...getULProps()} className="flex-1 overflow-y-auto mt-large px-xlarge">
                  {isFetching ? (<div className="w-full pt-2xlarge flex items-center justify-center">
                      <spinner_1.default size={"large"} variant={"secondary"}/>
                    </div>) : (<>
                      <div>
                        <order_results_1.default orders={orders} offset={0} getLIProps={getLIProps} selected={selected}/>
                      </div>

                      <div className="mt-xlarge">
                        <customer_results_1.default customers={customers} offset={(orders === null || orders === void 0 ? void 0 : orders.length) || 0} getLIProps={getLIProps} selected={selected}/>
                      </div>

                      <div className="mt-xlarge">
                        <discount_results_1.default discounts={discounts} offset={(customers === null || customers === void 0 ? void 0 : customers.length) || 0} getLIProps={getLIProps} selected={selected}/>
                      </div>

                      <div className="mt-xlarge">
                        <product_results_1.default products={products} offset={getTotal(customers, discounts)} getLIProps={getLIProps} selected={selected}/>
                      </div>
                    </>)}
                </ul>) : null}
            </div>
          </RadixDialog.Content>
        </RadixDialog.Overlay>
      </RadixDialog.Portal>
    </RadixDialog.Root>);
};
exports.default = SearchModal;
