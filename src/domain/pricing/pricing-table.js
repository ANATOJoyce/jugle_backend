"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var use_set_search_params_1 = require("../../hooks/use-set-search-params");
var loading_container_1 = require("../../components/loading-container");
var use_price_list_columns_1 = require("../../components/templates/price-list-table/use-price-list-columns");
var use_price_list_filters_1 = require("../../components/templates/price-list-table/use-price-list-filters");
var router_1 = require("@reach/router");
var price_list_table_1 = require("../../components/templates/price-list-table/price-list-table");
var price_list_filters_1 = require("../../components/templates/price-list-table/price-list-filters");
/**
 * Default filtering config for querying price lists endpoint.
 */
var DEFAULT_PAGE_SIZE = 15;
var defaultQueryProps = {
    expand: "customer_groups,prices",
    offset: 0,
    limit: DEFAULT_PAGE_SIZE,
};
var PricingTable = function () {
    var location = (0, router_1.useLocation)();
    var params = (0, use_price_list_filters_1.usePriceListFilters)(location.search, defaultQueryProps);
    var columns = (0, use_price_list_columns_1.usePriceListTableColumns)()[0];
    var _a = (0, medusa_react_1.useAdminPriceLists)(params.queryObject, {
        keepPreviousData: true,
    }), price_lists = _a.price_lists, isLoading = _a.isLoading, _b = _a.count, count = _b === void 0 ? 0 : _b;
    (0, use_set_search_params_1.default)(params.representationObject);
    var resetFilters = function () {
        params.setQuery("");
        params.reset();
    };
    return (<div className="w-full overflow-y-auto flex flex-col justify-between min-h-[300px] h-full ">
      <loading_container_1.default isLoading={isLoading}>
        <price_list_table_1.PriceListTable columns={columns} count={count} priceLists={price_lists || []} options={{
            enableSearch: true,
            filter: (<price_list_filters_1.default filters={params.filters} submitFilters={params.setFilters} clearFilters={resetFilters} tabs={params.availableTabs} onTabClick={params.setTab} activeTab={params.activeFilterTab} onRemoveTab={params.removeTab} onSaveTab={params.saveTab}/>),
        }} {...params}/>
      </loading_container_1.default>
    </div>);
};
exports.default = PricingTable;
