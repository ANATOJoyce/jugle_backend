"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var spinner_1 = require("../../../../../../components/atoms/spinner");
var modal_1 = require("../../../../../../components/molecules/modal");
var use_query_filters_1 = require("../../../../../../hooks/use-query-filters");
var discount_form_context_1 = require("../../form/discount-form-context");
var collection_1 = require("../shared/collection");
var common_1 = require("../shared/common");
var condition_operator_1 = require("../shared/condition-operator");
var selectable_table_1 = require("../shared/selectable-table");
var edit_condition_footer_1 = require("./edit-condition-footer");
var EditCollectionConditionSelector = function (_a) {
    var _b;
    var onClose = _a.onClose;
    var params = (0, use_query_filters_1.default)(common_1.defaultQueryProps);
    var conditions = (0, discount_form_context_1.useDiscountForm)().conditions;
    var _c = (0, react_1.useState)(((_b = conditions.product_collections) === null || _b === void 0 ? void 0 : _b.items) || []), items = _c[0], setItems = _c[1];
    var _d = (0, react_1.useState)(conditions.product_collections.operator), operator = _d[0], setOperator = _d[1];
    var _e = (0, medusa_react_1.useAdminCollections)(params.queryObject, {
        // avoid UI flickering by keeping previous data
        keepPreviousData: true,
    }), isLoading = _e.isLoading, count = _e.count, collections = _e.collections;
    var changed = function (values) {
        var selectedCollections = (collections === null || collections === void 0 ? void 0 : collections.filter(function (collections) { return values.includes(collections.id); })) ||
            [];
        setItems(selectedCollections.map(function (collection) { return ({
            id: collection.id,
            label: collection.title,
        }); }));
    };
    var columns = (0, collection_1.useCollectionColumns)();
    return (<>
      <modal_1.default.Content isLargeModal={true}>
        {isLoading ? (<spinner_1.default />) : (<>
            <condition_operator_1.default value={operator} onChange={setOperator}/>
            <selectable_table_1.SelectableTable options={{
                enableSearch: true,
                immediateSearchFocus: true,
                searchPlaceholder: "Search by title...",
                filters: [{ title: "Title", name: "title" }],
            }} resourceName="Collections" totalCount={count || 0} selectedIds={items === null || items === void 0 ? void 0 : items.map(function (c) { return c.id; })} data={collections} columns={columns} isLoading={isLoading} onChange={changed} renderRow={collection_1.CollectionRow} renderHeaderGroup={collection_1.CollectionsHeader} {...params}/>
          </>)}
      </modal_1.default.Content>
      <modal_1.default.Footer isLargeModal>
        <edit_condition_footer_1.default type="product_collections" items={items} operator={operator} onClose={onClose}/>
      </modal_1.default.Footer>
    </>);
};
exports.default = EditCollectionConditionSelector;
