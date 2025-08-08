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
var selectable_table_1 = require("../shared/selectable-table");
var tags_1 = require("../shared/tags");
var add_condition_footer_1 = require("./add-condition-footer");
var AddTagConditionSelector = function (_a) {
    var _b;
    var onClose = _a.onClose;
    var params = (0, use_query_filters_1.default)(common_1.defaultQueryProps);
    var conditions = (0, discount_form_context_1.useDiscountForm)().conditions;
    var _c = (0, react_1.useState)(((_b = conditions.product_tags) === null || _b === void 0 ? void 0 : _b.items) || []), items = _c[0], setItems = _c[1];
    var _d = (0, react_1.useState)(conditions.product_tags.operator), operator = _d[0], setOperator = _d[1];
    var _e = (0, medusa_react_1.useAdminProductTags)(params.queryObject, {
        keepPreviousData: true,
    }), isLoading = _e.isLoading, count = _e.count, product_tags = _e.product_tags;
    var changed = function (values) {
        var selectedTags = (product_tags === null || product_tags === void 0 ? void 0 : product_tags.filter(function (t) { return values.includes(t.id); })) || [];
        setItems(selectedTags.map(function (t) { return ({ id: t.id, label: t.value }); }));
    };
    return (<>
      <modal_1.default.Content isLargeModal={true}>
        {isLoading ? (<spinner_1.default />) : (<>
            <condition_operator_1.default value={operator} onChange={setOperator}/>
            <selectable_table_1.SelectableTable options={{
                enableSearch: true,
                immediateSearchFocus: true,
                searchPlaceholder: "Search by tag...",
            }} resourceName="Tags" totalCount={count || 0} selectedIds={items.map(function (i) { return i.id; })} data={product_tags} columns={tags_1.TagColumns} isLoading={isLoading} onChange={changed} renderRow={tags_1.TagRow} renderHeaderGroup={tags_1.TagHeader} {...params}/>
          </>)}
      </modal_1.default.Content>
      <modal_1.default.Footer isLargeModal>
        <add_condition_footer_1.default type="product_tags" items={items} onClose={onClose} operator={operator}/>
      </modal_1.default.Footer>
    </>);
};
exports.default = AddTagConditionSelector;
