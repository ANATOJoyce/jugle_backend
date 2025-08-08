"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerGroupContextContainer = CustomerGroupContextContainer;
var react_1 = require("react");
var medusa_react_1 = require("medusa-react");
var customer_group_modal_1 = require("../customer-group-modal");
var error_messages_1 = require("../../../../utils/error-messages");
var use_notification_1 = require("../../../../hooks/use-notification");
var CustomerGroupContext = (0, react_1.createContext)();
/*
 * A context provider which sets a display mode for `CustomerGroupModal` (create/edit)
 * and provide form data inside the context.
 */
function CustomerGroupContextContainer(props) {
    var _a;
    var notification = (0, use_notification_1.default)();
    var createGroup = (0, medusa_react_1.useAdminCreateCustomerGroup)().mutate;
    var updateGroup = (0, medusa_react_1.useAdminUpdateCustomerGroup)((_a = props.group) === null || _a === void 0 ? void 0 : _a.id).mutate;
    var _b = (0, react_1.useState)(false), isModalVisible = _b[0], setIsModalVisible = _b[1];
    var showModal = function () { return setIsModalVisible(true); };
    var hideModal = function () { return setIsModalVisible(false); };
    var handleSubmit = function (data) {
        var isEdit = !!props.group;
        var method = isEdit ? updateGroup : createGroup;
        var message = "Successfully ".concat(isEdit ? "edited" : "created", " the customer group");
        method(data, {
            onSuccess: function () {
                notification("Success", message, "success");
                hideModal();
            },
            onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
        });
    };
    var context = {
        group: props.group,
        isModalVisible: isModalVisible,
        showModal: showModal,
        hideModal: hideModal,
    };
    return (<CustomerGroupContext.Provider value={context}>
      {props.children}

      {isModalVisible && (<customer_group_modal_1.default handleClose={hideModal} handleSubmit={handleSubmit} initialData={props.group}/>)}
    </CustomerGroupContext.Provider>);
}
exports.default = CustomerGroupContext;
