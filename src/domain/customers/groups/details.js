"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lodash_1 = require("lodash");
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var breadcrumb_1 = require("../../../components/molecules/breadcrumb");
var body_card_1 = require("../../../components/organisms/body-card");
var edit_icon_1 = require("../../../components/fundamentals/icons/edit-icon");
var trash_icon_1 = require("../../../components/fundamentals/icons/trash-icon");
var plus_icon_1 = require("../../../components/fundamentals/icons/plus-icon");
var edit_customers_table_1 = require("../../../components/templates/customer-group-table/edit-customers-table");
var customers_list_table_1 = require("../../../components/templates/customer-group-table/customers-list-table");
var customer_group_context_1 = require("./context/customer-group-context");
var use_query_filters_1 = require("../../../hooks/use-query-filters");
var delete_prompt_1 = require("../../../components/organisms/delete-prompt");
/**
 * Default filtering config for querying customer group customers list endpoint.
 */
var defaultQueryProps = {
    additionalFilters: { expand: "groups" },
    limit: 15,
    offset: 0,
};
/*
 * Placeholder for the customer groups list.
 */
function CustomersListPlaceholder() {
    return (<div className="h-full flex center justify-center items-center min-h-[756px]">
      <span className="text-xs text-gray-400">
        No customers in this group yet
      </span>
    </div>);
}
/*
 * Customer groups list container.
 */
function CustomerGroupCustomersList(props) {
    var groupId = props.group.id;
    // toggle to show/hide "edit customers" modal
    var _a = (0, react_1.useState)(false), showCustomersModal = _a[0], setShowCustomersModal = _a[1];
    var _b = (0, use_query_filters_1.default)(defaultQueryProps), q = _b.q, queryObject = _b.queryObject, paginate = _b.paginate, setQuery = _b.setQuery;
    var _c = (0, medusa_react_1.useAdminCustomerGroupCustomers)(groupId, queryObject), _d = _c.customers, customers = _d === void 0 ? [] : _d, isLoading = _c.isLoading, count = _c.count;
    var addCustomers = (0, medusa_react_1.useAdminAddCustomersToCustomerGroup)(groupId).mutate;
    var removeCustomers = (0, medusa_react_1.useAdminRemoveCustomersFromCustomerGroup)(groupId).mutate;
    // list of currently selected customers of a group
    var _e = (0, react_1.useState)(customers.map(function (c) { return c.id; })), selectedCustomerIds = _e[0], setSelectedCustomerIds = _e[1];
    (0, react_1.useEffect)(function () {
        if (!isLoading) {
            setSelectedCustomerIds(customers.map(function (c) { return c.id; }));
        }
    }, [isLoading, customers]);
    var showPlaceholder = !isLoading && !customers.length && !q;
    var actions = [
        {
            label: "Edit customers",
            onClick: function () { return setShowCustomersModal(true); },
            icon: (<span className="text-grey-90">
          <plus_icon_1.default size={20}/>
        </span>),
        },
    ];
    /*
     * Calculate which customers need to be added/removed.
     */
    var calculateDiff = function () {
        var initialIds = customers.map(function (c) { return c.id; });
        return {
            toAdd: (0, lodash_1.difference)(selectedCustomerIds, initialIds),
            toRemove: (0, lodash_1.difference)(initialIds, selectedCustomerIds),
        };
    };
    /**
     * Handle "edit customers" modal form submit.
     */
    var handleSubmit = function () {
        var _a = calculateDiff(), toAdd = _a.toAdd, toRemove = _a.toRemove;
        if (toAdd.length) {
            addCustomers({ customer_ids: toAdd.map(function (i) { return ({ id: i }); }) });
        }
        if (toRemove.length) {
            removeCustomers({ customer_ids: toRemove.map(function (i) { return ({ id: i }); }) });
        }
        setShowCustomersModal(false);
    };
    return (<body_card_1.default title="Customers" actionables={actions} className="min-h-0 w-full my-4 min-h-[756px]">
      {showCustomersModal && (<edit_customers_table_1.default selectedCustomerIds={selectedCustomerIds} setSelectedCustomerIds={setSelectedCustomerIds} handleSubmit={handleSubmit} onClose={function () { return setShowCustomersModal(false); }}/>)}

      {showPlaceholder ? (<CustomersListPlaceholder />) : (<customers_list_table_1.default query={q} count={count || 0} paginate={paginate} setQuery={setQuery} customers={customers} groupId={props.group.id} queryObject={queryObject} removeCustomers={removeCustomers}/>)}
    </body_card_1.default>);
}
/*
 * Customers groups details page header.
 */
function CustomerGroupDetailsHeader(props) {
    var _this = this;
    var showModal = (0, react_1.useContext)(customer_group_context_1.default).showModal;
    var _a = (0, react_1.useState)(false), showDeleteConfirmation = _a[0], setShowDeleteConfirmation = _a[1];
    var deleteGroup = (0, medusa_react_1.useAdminDeleteCustomerGroup)(props.customerGroup.id).mutate;
    var actions = [
        {
            label: "Edit",
            onClick: showModal,
            icon: <edit_icon_1.default size={20}/>,
        },
        {
            label: "Delete",
            onClick: function () {
                setShowDeleteConfirmation(true);
            },
            variant: "danger",
            icon: <trash_icon_1.default size={20}/>,
        },
    ];
    var onDeleteConfirmed = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            deleteGroup();
            (0, gatsby_1.navigate)("/a/customers/groups");
            return [2 /*return*/];
        });
    }); };
    var handleConfirmDialogClose = function () { return setShowDeleteConfirmation(false); };
    return (<>
      <body_card_1.default title={props.customerGroup.name} actionables={actions} className="min-h-0 w-full" subtitle={" "}/>
      {showDeleteConfirmation && (<delete_prompt_1.default onDelete={onDeleteConfirmed} handleClose={handleConfirmDialogClose} confirmText="Yes, delete" heading="Delete the group" successText="Group deleted" text="Are you sure you want to delete this customer group?"/>)}
    </>);
}
/*
 * Customer groups details page
 */
function CustomerGroupDetails(p) {
    var customer_group = (0, medusa_react_1.useAdminCustomerGroup)(p.id).customer_group;
    if (!customer_group) {
        return null;
    }
    return (<customer_group_context_1.CustomerGroupContextContainer group={customer_group}>
      <div className="-mt-4 pb-4">
        <breadcrumb_1.default currentPage={customer_group ? customer_group.name : "Customer Group"} previousBreadcrumb="Groups" previousRoute="/a/customers/groups"/>
        <CustomerGroupDetailsHeader customerGroup={customer_group}/>
        <CustomerGroupCustomersList group={customer_group}/>
      </div>
    </customer_group_context_1.CustomerGroupContextContainer>);
}
exports.default = CustomerGroupDetails;
