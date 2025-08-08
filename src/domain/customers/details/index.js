"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var moment_1 = require("moment");
var react_1 = require("react");
var avatar_1 = require("../../../components/atoms/avatar");
var spinner_1 = require("../../../components/atoms/spinner");
var edit_icon_1 = require("../../../components/fundamentals/icons/edit-icon");
var trash_icon_1 = require("../../../components/fundamentals/icons/trash-icon");
var status_indicator_1 = require("../../../components/fundamentals/status-indicator");
var actionables_1 = require("../../../components/molecules/actionables");
var breadcrumb_1 = require("../../../components/molecules/breadcrumb");
var body_card_1 = require("../../../components/organisms/body-card");
var raw_json_1 = require("../../../components/organisms/raw-json");
var customer_orders_table_1 = require("../../../components/templates/customer-orders-table");
var edit_1 = require("./edit");
var CustomerDetail = function (_a) {
    var id = _a.id;
    var _b = (0, medusa_react_1.useAdminCustomer)(id, {}), customer = _b.customer, isLoading = _b.isLoading;
    var _c = (0, react_1.useState)(false), showEdit = _c[0], setShowEdit = _c[1];
    var customerName = function () {
        if ((customer === null || customer === void 0 ? void 0 : customer.first_name) && (customer === null || customer === void 0 ? void 0 : customer.last_name)) {
            return "".concat(customer.first_name, " ").concat(customer.last_name);
        }
        else {
            return customer === null || customer === void 0 ? void 0 : customer.email;
        }
    };
    var actions = [
        {
            label: "Edit",
            onClick: function () { return setShowEdit(true); },
            icon: <edit_icon_1.default size={20}/>,
        },
        {
            label: "Delete (not implemented yet)",
            onClick: function () { return console.log("TODO: delete customer"); },
            variant: "danger",
            icon: <trash_icon_1.default size={20}/>,
        },
    ];
    return (<div>
      <breadcrumb_1.default currentPage={"Customer Details"} previousBreadcrumb={"Customers"} previousRoute="/a/customers"/>
      <body_card_1.default className={"h-auto w-full pt-[100px] mb-4 relative"}>
        <div className="h-[120px] w-full absolute top-0 right-0 left-0 bg-gradient-to-b from-fuschia-20 z-0"/>
        <div className="flex flex-col grow overflow-y-auto">
          <div className="w-[64px] h-[64px] mb-4">
            <avatar_1.default user={customer} font="inter-2xlarge-semibold" color="bg-fuschia-40"/>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="inter-xlarge-semibold text-grey-90 truncate max-w-[50%]">
              {customerName()}
            </h1>
            <actionables_1.default actions={actions}/>
          </div>
          <h3 className="inter-small-regular pt-1.5 text-grey-50">
            {customer === null || customer === void 0 ? void 0 : customer.email}
          </h3>
        </div>
        <div className="flex mt-6 space-x-6 divide-x">
          <div className="flex flex-col">
            <div className="inter-smaller-regular text-grey-50 mb-1">
              First seen
            </div>
            <div>{(0, moment_1.default)(customer === null || customer === void 0 ? void 0 : customer.created_at).format("DD MMM YYYY")}</div>
          </div>
          <div className="flex flex-col pl-6">
            <div className="inter-smaller-regular text-grey-50 mb-1">Phone</div>
            <div className="truncate max-w-[200px]">
              {(customer === null || customer === void 0 ? void 0 : customer.phone) || "N/A"}
            </div>
          </div>
          <div className="flex flex-col pl-6">
            <div className="inter-smaller-regular text-grey-50 mb-1">
              Orders
            </div>
            <div>{customer === null || customer === void 0 ? void 0 : customer.orders.length}</div>
          </div>
          <div className="flex flex-col pl-6 h-100">
            <div className="inter-smaller-regular text-grey-50 mb-1">User</div>
            <div className="flex justify-center items-center h-50">
              <status_indicator_1.default variant={(customer === null || customer === void 0 ? void 0 : customer.has_account) ? "success" : "danger"} title={(customer === null || customer === void 0 ? void 0 : customer.has_account) ? "True" : "False"}/>
            </div>
          </div>
        </div>
      </body_card_1.default>
      <body_card_1.default title={"Orders (".concat(customer === null || customer === void 0 ? void 0 : customer.orders.length, ")")} subtitle="An overview of Customer Orders">
        {isLoading || !customer ? (<div className="w-full pt-2xlarge flex items-center justify-center">
            <spinner_1.default size={"large"} variant={"secondary"}/>
          </div>) : (<div className="flex grow  flex-col pt-2 mt-large">
            <customer_orders_table_1.default customerId={customer.id}/>
          </div>)}
      </body_card_1.default>
      <div className="mt-large">
        <raw_json_1.default data={customer} title="Raw customer"/>
      </div>

      {showEdit && (<edit_1.default customer={customer} handleClose={function () { return setShowEdit(false); }}/>)}
    </div>);
};
exports.default = CustomerDetail;
