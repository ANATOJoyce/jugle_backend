"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var arrow_right_icon_1 = require("../../../fundamentals/icons/arrow-right-icon");
var mail_icon_1 = require("../../../fundamentals/icons/mail-icon");
var send_icon_1 = require("../../../fundamentals/icons/send-icon");
var event_actionables_1 = require("../event-actionables");
var event_container_1 = require("../event-container");
var resend_modal_1 = require("./resend-modal");
var notificationTitleMap = {
    "order.items_returned": "Return Received Notice Sent",
    "order.return_requested": "Return Request Confirmation Sent",
    "order.placed": "Order Confirmation Sent",
    "order.shipment_created": "Shipment Confirmation Sent",
};
var Notification = function (_a) {
    var event = _a.event;
    var _b = (0, react_1.useState)(false), showResend = _b[0], setShowResend = _b[1];
    var actions = (<event_actionables_1.default actions={[
            {
                label: "Re-Send Mail",
                icon: <send_icon_1.default size={20}/>,
                onClick: function () { return setShowResend(true); },
            },
        ]}/>);
    return (<>
      <event_container_1.default icon={<mail_icon_1.default size={20}/>} title={notificationTitleMap[event.title] || event.title} time={event.time} topNode={actions} midNode={<ReceiverNode email={event.to}/>}/>
      {showResend && (<resend_modal_1.default handleCancel={function () { return setShowResend(false); }} notificationId={event.id} email={event.to}/>)}
    </>);
};
var ReceiverNode = function (_a) {
    var email = _a.email;
    return (<div className="flex items-center">
      <div className="text-grey-40 mr-2xsmall">
        <arrow_right_icon_1.default size={16}/>
      </div>
      <span>{email}</span>
    </div>);
};
exports.default = Notification;
