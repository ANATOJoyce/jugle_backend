"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var create_1 = require("../../../domain/orders/details/claim/create");
var returns_1 = require("../../../domain/orders/details/returns");
var create_2 = require("../../../domain/orders/details/swap/create");
var use_build_timeline_1 = require("../../../hooks/use-build-timeline");
var use_notification_1 = require("../../../hooks/use-notification");
var error_messages_1 = require("../../../utils/error-messages");
var spinner_1 = require("../../atoms/spinner");
var alert_icon_1 = require("../../fundamentals/icons/alert-icon");
var back_icon_1 = require("../../fundamentals/icons/back-icon");
var refresh_icon_1 = require("../../fundamentals/icons/refresh-icon");
var actionables_1 = require("../../molecules/actionables");
var note_input_1 = require("../../molecules/note-input");
var claim_1 = require("../../molecules/timeline-events/claim");
var exchange_1 = require("../../molecules/timeline-events/exchange");
var items_fulfilled_1 = require("../../molecules/timeline-events/items-fulfilled");
var items_shipped_1 = require("../../molecules/timeline-events/items-shipped");
var note_1 = require("../../molecules/timeline-events/note");
var notification_1 = require("../../molecules/timeline-events/notification");
var order_canceled_1 = require("../../molecules/timeline-events/order-canceled");
var order_placed_1 = require("../../molecules/timeline-events/order-placed");
var refund_1 = require("../../molecules/timeline-events/refund");
var return_1 = require("../../molecules/timeline-events/return");
var Timeline = function (_a) {
    var orderId = _a.orderId;
    var _b = (0, use_build_timeline_1.useBuildTimelime)(orderId), events = _b.events, refetch = _b.refetch;
    var notification = (0, use_notification_1.default)();
    var createNote = (0, medusa_react_1.useAdminCreateNote)();
    var order = (0, medusa_react_1.useAdminOrder)(orderId).order;
    var _c = (0, react_1.useState)(false), showRequestReturn = _c[0], setShowRequestReturn = _c[1];
    var _d = (0, react_1.useState)(false), showCreateSwap = _d[0], setshowCreateSwap = _d[1];
    var _e = (0, react_1.useState)(false), showCreateClaim = _e[0], setshowCreateClaim = _e[1];
    var actions = [
        {
            icon: <back_icon_1.default size={20}/>,
            label: "Request Return",
            onClick: function () { return setShowRequestReturn(true); },
        },
        {
            icon: <refresh_icon_1.default size={20}/>,
            label: "Register Exchange",
            onClick: function () { return setshowCreateSwap(true); },
        },
        {
            icon: <alert_icon_1.default size={20}/>,
            label: "Register Claim",
            onClick: function () { return setshowCreateClaim(true); },
        },
    ];
    var handleCreateNote = function (value) {
        if (!value) {
            return;
        }
        createNote.mutate({
            resource_id: orderId,
            resource_type: "order",
            value: value,
        }, {
            onSuccess: function () { return notification("Success", "Added note", "success"); },
            onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
        });
    };
    return (<>
      <div className="h-full w-5/12 rounded-rounded bg-grey-0 border border-grey-20">
        <div className="py-large px-xlarge border-b border-grey-20">
          <div className="flex items-center justify-between">
            <h3 className="inter-xlarge-semibold">Timeline</h3>
            <div className={(0, clsx_1.default)({
            "pointer-events-none opacity-50": !events,
        })}>
              <actionables_1.default actions={actions}/>
            </div>
          </div>
          <div className={(0, clsx_1.default)("mt-base", {
            "pointer-events-none opacity-50": !events,
        })}>
            <note_input_1.default onSubmit={handleCreateNote}/>
          </div>
        </div>
        <div className="py-large px-xlarge">
          {!events ? (<div className="h-96 w-full flex items-center justify-center">
              <spinner_1.default variant="secondary" size="large"/>
            </div>) : (<div className="flex flex-col gap-y-base">
              {events.map(function (event, i) {
                return <div key={i}>{switchOnType(event, refetch)}</div>;
            })}
            </div>)}
        </div>
      </div>
      {showRequestReturn && order && (<returns_1.default order={order} onDismiss={function () { return setShowRequestReturn(false); }}/>)}
      {showCreateSwap && order && (<create_2.default order={order} onDismiss={function () { return setshowCreateSwap(false); }}/>)}
      {showCreateClaim && order && (<create_1.default order={order} onDismiss={function () { return setshowCreateClaim(false); }}/>)}
    </>);
};
function switchOnType(event, refetch) {
    switch (event.type) {
        case "placed":
            return <order_placed_1.default event={event}/>;
        case "fulfilled":
            return <items_fulfilled_1.default event={event}/>;
        case "note":
            return <note_1.default event={event}/>;
        case "shipped":
            return <items_shipped_1.default event={event}/>;
        case "canceled":
            return <order_canceled_1.default event={event}/>;
        case "return":
            return <return_1.default event={event} refetch={refetch}/>;
        case "exchange":
            return <exchange_1.default event={event} refetch={refetch}/>;
        case "claim":
            return <claim_1.default event={event} refetch={refetch}/>;
        case "notification":
            return <notification_1.default event={event}/>;
        case "refund":
            return <refund_1.default event={event}/>;
        default:
            return null;
    }
}
exports.default = Timeline;
