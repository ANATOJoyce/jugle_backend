"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var spinner_1 = require("../../../../../../components/atoms/spinner");
var modal_1 = require("../../../../../../components/molecules/modal");
var use_query_filters_1 = require("../../../../../../hooks/use-query-filters");
var conditions_provider_1 = require("../../../../details/conditions/add-condition/conditions-provider");
var common_1 = require("../shared/common");
var condition_operator_1 = require("../shared/condition-operator");
var selectable_table_1 = require("../shared/selectable-table");
var types_1 = require("../shared/types");
var details_condition_footer_1 = require("./details-condition-footer");
var DetailsTypeConditionSelector = function (_a) {
    var _b;
    var onClose = _a.onClose;
    var params = (0, use_query_filters_1.default)(common_1.defaultQueryProps);
    var conditions = (0, conditions_provider_1.useConditions)().conditions;
    var _c = (0, react_1.useState)(((_b = conditions.product_types) === null || _b === void 0 ? void 0 : _b.items) || []), items = _c[0], setItems = _c[1];
    var _d = (0, react_1.useState)(conditions.product_types.operator), operator = _d[0], setOperator = _d[1];
    var _e = (0, medusa_react_1.useAdminProductTypes)(params.queryObject, {
        // avoid UI flickering by keeping previous data
        keepPreviousData: true,
    }), isLoading = _e.isLoading, count = _e.count, product_types = _e.product_types;
    var changed = function (values) {
        var selectedTypes = (product_types === null || product_types === void 0 ? void 0 : product_types.filter(function (type) { return values.includes(type.id); })) || [];
        setItems(selectedTypes.map(function (type) { return ({ id: type.id, label: type.value }); }));
    };
    var columns = (0, types_1.useTypesColumns)();
    return (<>
      <modal_1.default.Content isLargeModal={true}>
        {isLoading ? (<spinner_1.default />) : (<>
            <condition_operator_1.default value={operator} onChange={setOperator}/>
            <selectable_table_1.SelectableTable options={{
                enableSearch: true,
                immediateSearchFocus: true,
                searchPlaceholder: "Search by type...",
            }} resourceName="Types" totalCount={count || 0} selectedIds={items === null || items === void 0 ? void 0 : items.map(function (c) { return c.id; })} data={product_types} columns={columns} isLoading={isLoading} onChange={changed} renderRow={types_1.TypeRow} renderHeaderGroup={types_1.TypesHeader} {...params}/>
          </>)}
      </modal_1.default.Content>
      <modal_1.default.Footer isLargeModal>
        <details_condition_footer_1.default type="product_types" items={items} onClose={onClose} operator={operator}/>
      </modal_1.default.Footer>
    </>);
};
exports.default = DetailsTypeConditionSelector;
