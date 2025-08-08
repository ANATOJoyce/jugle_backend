"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@reach/router");
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var button_1 = require("../../components/fundamentals/button");
var export_icon_1 = require("../../components/fundamentals/icons/export-icon");
var body_card_1 = require("../../components/organisms/body-card");
var custom_table_header_1 = require("../../components/organisms/custom-table-header");
var export_modal_1 = require("../../components/organisms/export-modal");
var order_table_1 = require("../../components/templates/order-table");
var use_notification_1 = require("../../hooks/use-notification");
var use_toggle_state_1 = require("../../hooks/use-toggle-state");
var error_messages_1 = require("../../utils/error-messages");
var details_1 = require("./details");
var VIEWS = ["orders", "drafts"];
var OrderIndex = function () {
    var view = "orders";
    var createBatchJob = (0, medusa_react_1.useAdminCreateBatchJob)();
    var notification = (0, use_notification_1.default)();
    var _a = (0, use_toggle_state_1.default)(false), openExportModal = _a.open, closeExportModal = _a.close, exportModalOpen = _a.state;
    var actions = (0, react_1.useMemo)(function () {
        return [
            <button_1.default variant="secondary" size="small" onClick={function () { return openExportModal(); }}>
        <export_icon_1.default size={20}/>
        Export Orders
      </button_1.default>,
        ];
    }, [view]);
    var handleCreateExport = function () {
        var reqObj = {
            type: "order-export",
            context: {},
            dry_run: false,
        };
        createBatchJob.mutate(reqObj, {
            onSuccess: function () {
                notification("Success", "Successfully initiated export", "success");
            },
            onError: function (err) {
                notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
            },
        });
        closeExportModal();
    };
    return (<>
      <div className="flex flex-col grow h-full">
        <div className="w-full flex flex-col grow">
          <body_card_1.default customHeader={<custom_table_header_1.default views={VIEWS} setActiveView={function (v) {
                if (v === "drafts") {
                    (0, gatsby_1.navigate)("/a/draft-orders");
                }
            }} activeView={view}/>} customActionable={actions}>
            <order_table_1.default />
          </body_card_1.default>
        </div>
      </div>
      {exportModalOpen && (<export_modal_1.default title="Export Orders" handleClose={function () { return closeExportModal(); }} onSubmit={handleCreateExport} loading={createBatchJob.isLoading}/>)}
    </>);
};
var Orders = function () {
    return (<router_1.Router>
      <OrderIndex path="/"/>
      <details_1.default path=":id"/>
    </router_1.Router>);
};
exports.default = Orders;
