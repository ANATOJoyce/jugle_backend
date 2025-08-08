"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var spinner_1 = require("../../../../../../components/atoms/spinner");
var modal_1 = require("../../../../../../components/molecules/modal");
var use_query_filters_1 = require("../../../../../../hooks/use-query-filters");
var discount_form_context_1 = require("../../form/discount-form-context");
var common_1 = require("../shared/common");
var condition_operator_1 = require("../shared/condition-operator");
var products_1 = require("../shared/products");
var selectable_table_1 = require("../shared/selectable-table");
var add_condition_footer_1 = require("./add-condition-footer");
var AddProductConditionSelector = function (_a) {
    var _b;
    var onClose = _a.onClose;
    var params = (0, use_query_filters_1.default)(common_1.defaultQueryProps);
    var conditions = (0, discount_form_context_1.useDiscountForm)().conditions;
    var _c = (0, react_1.useState)(((_b = conditions.products) === null || _b === void 0 ? void 0 : _b.items) || []), items = _c[0], setItems = _c[1];
    var _d = (0, react_1.useState)(conditions.products.operator), operator = _d[0], setOperator = _d[1];
    var _e = (0, medusa_react_1.useAdminProducts)(params.queryObject, {
        keepPreviousData: true,
    }), isLoading = _e.isLoading, count = _e.count, products = _e.products;
    var changed = function (values) {
        var selectedProducts = (products === null || products === void 0 ? void 0 : products.filter(function (product) { return values.includes(product.id); })) || [];
        setItems(selectedProducts.map(function (product) { return ({
            id: product.id,
            label: product.title,
        }); }));
    };
    var columns = (0, products_1.useProductColumns)();
    return (<>
      <modal_1.default.Content isLargeModal={true}>
        {isLoading ? (<spinner_1.default />) : (<>
            <condition_operator_1.default value={operator} onChange={setOperator}/>
            <selectable_table_1.SelectableTable options={{
                enableSearch: true,
                immediateSearchFocus: true,
                searchPlaceholder: "Search products...",
            }} resourceName="Products" totalCount={count || 0} selectedIds={items.map(function (i) { return i.id; })} data={products} columns={columns} isLoading={isLoading} onChange={changed} renderRow={products_1.ProductRow} renderHeaderGroup={products_1.ProductsHeader} {...params}/>
          </>)}
      </modal_1.default.Content>
      <modal_1.default.Footer isLargeModal>
        <add_condition_footer_1.default type="products" items={items} onClose={onClose} operator={operator}/>
      </modal_1.default.Footer>
    </>);
};
exports.default = AddProductConditionSelector;
