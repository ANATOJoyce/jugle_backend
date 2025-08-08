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
var groups_1 = require("../shared/groups");
var selectable_table_1 = require("../shared/selectable-table");
var add_condition_footer_1 = require("./add-condition-footer");
var AddCustomerGroupConditionSelector = function (_a) {
    var _b;
    var onClose = _a.onClose;
    var params = (0, use_query_filters_1.default)(common_1.defaultQueryProps);
    var conditions = (0, discount_form_context_1.useDiscountForm)().conditions;
    var _c = (0, react_1.useState)(((_b = conditions === null || conditions === void 0 ? void 0 : conditions.customer_groups) === null || _b === void 0 ? void 0 : _b.items) || []), items = _c[0], setItems = _c[1];
    var _d = (0, react_1.useState)(conditions.customer_groups.operator), operator = _d[0], setOperator = _d[1];
    var _e = (0, medusa_react_1.useAdminCustomerGroups)(params.queryObject, {
        // avoid UI flickering by keeping previous data
        keepPreviousData: true,
    }), isLoading = _e.isLoading, count = _e.count, customer_groups = _e.customer_groups;
    var changed = function (values) {
        var selectedCustomerGroups = (customer_groups === null || customer_groups === void 0 ? void 0 : customer_groups.filter(function (cg) { return values.includes(cg.id); })) || [];
        setItems(selectedCustomerGroups.map(function (customer_group) { return ({
            id: customer_group.id,
            label: customer_group.name,
        }); }));
    };
    var columns = (0, groups_1.useGroupColumns)();
    return (<>
      <modal_1.default.Content isLargeModal={true}>
        {isLoading ? (<spinner_1.default />) : (<>
            <condition_operator_1.default value={operator} onChange={setOperator}/>
            <selectable_table_1.SelectableTable options={{
                enableSearch: true,
                immediateSearchFocus: true,
                searchPlaceholder: "Search groups...",
            }} resourceName="Customer groups" totalCount={count || 0} selectedIds={items.map(function (i) { return i.id; })} data={customer_groups} columns={columns} isLoading={isLoading} onChange={changed} renderRow={groups_1.CustomerGroupsRow} renderHeaderGroup={groups_1.CustomerGroupsHeader} {...params}/>
          </>)}
      </modal_1.default.Content>
      <modal_1.default.Footer isLargeModal>
        <add_condition_footer_1.default type="customer_groups" items={items} onClose={onClose} operator={operator}/>
      </modal_1.default.Footer>
    </>);
};
exports.default = AddCustomerGroupConditionSelector;
