"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var React = require("react");
var cancel_icon_1 = require("../../../../../../components/fundamentals/icons/cancel-icon");
var edit_icon_1 = require("../../../../../../components/fundamentals/icons/edit-icon");
var table_1 = require("../../../../../../components/molecules/table");
var selectable_table_1 = require("../../../../../../components/templates/selectable-table");
var use_notification_1 = require("../../../../../../hooks/use-notification");
var use_query_filters_1 = require("../../../../../../hooks/use-query-filters");
var error_messages_1 = require("../../../../../../utils/error-messages");
var use_columns_1 = require("./use-columns");
var DEFAULT_PAGE_SIZE = 9;
var defaultQueryProps = {
    offset: 0,
    limit: DEFAULT_PAGE_SIZE,
};
var PricesTable = function (_a) {
    var id = _a.id, selectProduct = _a.selectProduct;
    var params = (0, use_query_filters_1.default)(defaultQueryProps);
    var _b = (0, medusa_react_1.useAdminPriceListProducts)(id, params.queryObject), products = _b.products, isLoading = _b.isLoading, _c = _b.count, count = _c === void 0 ? 0 : _c;
    var columns = (0, use_columns_1.default)();
    return (<div className="w-full overflow-y-auto flex flex-col justify-between min-h-[300px] h-full ">
      <selectable_table_1.SelectableTable columns={columns} data={products || []} renderRow={function (_a) {
            var row = _a.row;
            var handleSelect = function () {
                selectProduct(row.original);
            };
            return (<PricesTableRow {...row.getRowProps()} product={row.original} priceListId={id} onClick={handleSelect} className="hover:bg-grey-5 hover:cursor-pointer">
              {row.cells.map(function (cell) {
                    return (<table_1.default.Cell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </table_1.default.Cell>);
                })}
            </PricesTableRow>);
        }} renderHeaderGroup={ProductHeader} isLoading={isLoading} totalCount={count} options={{
            enableSearch: false,
            searchPlaceholder: "Search by name or SKU...",
        }} {...params}/>
    </div>);
};
var ProductHeader = function (_a) {
    var headerGroup = _a.headerGroup;
    return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map(function (col) { return (<table_1.default.HeadCell {...col.getHeaderProps(col.getSortByToggleProps())}>
          {col.render("Header")}
        </table_1.default.HeadCell>); })}
    </table_1.default.HeadRow>);
};
var PricesTableRow = function (_a) {
    var children = _a.children, priceListId = _a.priceListId, product = _a.product, onClick = _a.onClick, props = __rest(_a, ["children", "priceListId", "product", "onClick"]);
    var notification = (0, use_notification_1.default)();
    var deleteProductPrices = (0, medusa_react_1.useAdminDeletePriceListProductPrices)(priceListId, product.id);
    var actions = [
        {
            label: "Edit prices",
            icon: <edit_icon_1.default size={20}/>,
            onClick: onClick,
        },
        {
            label: "Remove product",
            icon: <cancel_icon_1.default size={20}/>,
            variant: "danger",
            onClick: function () {
                deleteProductPrices.mutate(undefined, {
                    onSuccess: function () {
                        notification("Success", "Deleted prices of product: ".concat(product.title), "success");
                    },
                    onError: function (err) {
                        return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
                    },
                });
            },
        },
    ];
    return (<table_1.default.Row {...props} actions={actions}>
      {children}
    </table_1.default.Row>);
};
exports.default = PricesTable;
