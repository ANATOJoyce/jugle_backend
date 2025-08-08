"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var React = require("react");
var button_1 = require("../../fundamentals/button");
var modal_1 = require("../../molecules/modal");
var selectable_table_1 = require("../selectable-table");
var use_query_filters_1 = require("../../../hooks/use-query-filters");
var product_table_config_1 = require("./product-table-config");
var utils_1 = require("./utils");
var defaultQueryProps = {
    limit: 12,
    offset: 0,
};
var AddProductsModal = function (_a) {
    /* ************* Data ************  */
    var close = _a.close, initialSelection = _a.initialSelection, onSave = _a.onSave;
    var params = (0, use_query_filters_1.default)(defaultQueryProps);
    var _b = (0, medusa_react_1.useAdminProducts)(params.queryObject, {
        keepPreviousData: true,
    }), products = _b.products, isLoading = _b.isLoading, _c = _b.count, count = _c === void 0 ? 0 : _c;
    /* ************* State ************  */
    var _d = React.useState(initialSelection.map(function (prod) { return prod.id; })), selectedIds = _d[0], setSelectedIds = _d[1];
    /* selectedItems hold the selected products across different pages */
    var _e = React.useState(initialSelection), selectedItems = _e[0], setSelectedItems = _e[1];
    React.useEffect(function () {
        /**
         * Every time we select an id is selected, we should update the selectedItems
         * ... to include the selected products across different pages/query objects
         */
        setSelectedItems((0, utils_1.mapIdsToItems)(selectedItems, selectedIds, products));
    }, [selectedIds, products]);
    /* ************* Handlers ************  */
    var handleSave = function () {
        onSave(selectedItems);
        close();
    };
    return (<modal_1.default open handleClose={close}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={close}>
          <h2 className="inter-xlarge-semibold">Add Products</h2>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div className="w-full flex flex-col justify-between min-h-[300px] h-full ">
            <selectable_table_1.SelectableTable columns={product_table_config_1.columns} data={products || []} renderRow={product_table_config_1.ProductRow} renderHeaderGroup={product_table_config_1.ProductHeader} onChange={function (ids) { return setSelectedIds(ids); }} selectedIds={selectedIds} isLoading={isLoading} resourceName="products" totalCount={count} options={{
            enableSearch: true,
            searchPlaceholder: "Search by name or description...",
        }} {...params}/>
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="w-full flex justify-end gap-2">
            <button_1.default variant="ghost" className="rounded-rounded h-8 w-[128px]" onClick={close}>
              Cancel
            </button_1.default>
            <button_1.default variant="primary" className="rounded-rounded h-8 w-[128px]" onClick={handleSave}>
              Save
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = AddProductsModal;
