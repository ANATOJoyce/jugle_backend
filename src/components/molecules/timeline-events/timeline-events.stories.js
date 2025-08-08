"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InLine = exports.ReturnRequested = exports.OrderPlaced = exports.ItemsFulfilled = exports.ItemsShipped = exports.MailNotice = exports.NoteOtherUser = exports.NoteCurrentUser = void 0;
var react_1 = require("react");
var avatar_1 = require("../../atoms/avatar");
var button_1 = require("../../fundamentals/button");
var alert_icon_1 = require("../../fundamentals/icons/alert-icon");
var arrow_right_icon_1 = require("../../fundamentals/icons/arrow-right-icon");
var back_icon_1 = require("../../fundamentals/icons/back-icon");
var check_circle_icon_1 = require("../../fundamentals/icons/check-circle-icon");
var mail_icon_1 = require("../../fundamentals/icons/mail-icon");
var package_icon_1 = require("../../fundamentals/icons/package-icon");
var truck_icon_1 = require("../../fundamentals/icons/truck-icon");
var event_actionables_1 = require("./event-actionables");
var event_container_1 = require("./event-container");
var event_item_container_1 = require("./event-item-container");
exports.default = {
    title: "Molecules/EventContainer",
    component: event_container_1.default,
};
var Template = function (args) { return (<div className="max-w-md px-xlarge py-large">
    <event_container_1.default {...args}/>
  </div>); };
var eventActions = (<event_actionables_1.default actions={[
        {
            label: "Dummy Action",
            icon: <back_icon_1.default size={20}/>,
            onClick: function () { },
        },
    ]}/>);
exports.NoteCurrentUser = Template.bind({});
exports.NoteCurrentUser.args = {
    icon: <avatar_1.default user={{ email: "kasper@medusajs.com" }}/>,
    title: "kasper@medusajs.com",
    topNode: eventActions,
    time: new Date(),
    children: (<div className="bg-violet-5 text-violet-90 rounded-2xl px-base py-base">
      Return will be shipped together with return 74421
    </div>),
};
exports.NoteOtherUser = Template.bind({});
exports.NoteOtherUser.args = {
    icon: <avatar_1.default user={{ email: "oli@medusajs.com" }}/>,
    title: "oli@medusajs.com",
    topNode: eventActions,
    time: new Date(),
    children: (<div className="bg-grey-5 rounded-2xl px-base py-base">
      Added discount code: "OLI_DISCOUNT"
    </div>),
};
exports.MailNotice = Template.bind({});
exports.MailNotice.args = {
    icon: <mail_icon_1.default size={20}/>,
    time: new Date(),
    title: "Shipment Notice Sent",
    midNode: (<div className="flex items-center">
      <div className="text-grey-40 mr-2xsmall">
        <arrow_right_icon_1.default size={16}/>
      </div>
      <span>kasper@medusajs.com</span>
    </div>),
    topNode: eventActions,
};
var bathrobe = {
    title: "Hooded Bathrobe",
    thumbnail: "https://images.ctfassets.net/4g6al16haqoj/2f87V5hComRvKsAJGJqXd1/768a1256ed7f51b6833d2fdb270ab861/robe_for_green_2665_copy.jpg?w=1666&h=2082&q=50&fm=webp",
    quantity: 1,
    variant: {
        title: "Extra Small",
    },
};
var sleepwear = {
    title: "Flannel Sleepwear",
    thumbnail: "https://images.ctfassets.net/4g6al16haqoj/7DiYDZz6olzxMECmqlFGog/e15481f823dd1a102e80f624d1fe14a5/male_frontal_0003_pj_mid_blu_0541.jpg?w=1678&h=2098&q=50&fm=webp",
    quantity: 2,
    variant: {
        title: "Large",
    },
};
exports.ItemsShipped = Template.bind({});
exports.ItemsShipped.args = {
    icon: <truck_icon_1.default size={20}/>,
    time: new Date(),
    title: "Items Shipped",
    children: [
        <event_item_container_1.default item={bathrobe}/>,
        <event_item_container_1.default item={sleepwear}/>,
    ],
};
exports.ItemsFulfilled = Template.bind({});
exports.ItemsFulfilled.args = {
    icon: <package_icon_1.default size={20}/>,
    time: new Date(),
    title: "Items Fulfilled",
    children: [
        <event_item_container_1.default item={bathrobe}/>,
        <event_item_container_1.default item={sleepwear}/>,
    ],
};
exports.OrderPlaced = Template.bind({});
exports.OrderPlaced.args = {
    icon: <check_circle_icon_1.default size={20}/>,
    iconColor: event_container_1.EventIconColor.GREEN,
    time: new Date(),
    title: "Order Placed",
    topNode: <div className="inter-small-semibold">4,756.50 kr.</div>,
};
exports.ReturnRequested = Template.bind({});
exports.ReturnRequested.args = {
    icon: <alert_icon_1.default size={20}/>,
    iconColor: event_container_1.EventIconColor.ORANGE,
    topNode: eventActions,
    time: new Date(),
    title: "Return Requested",
    noNotification: true,
    children: [
        <event_item_container_1.default item={bathrobe}/>,
        <event_item_container_1.default item={sleepwear}/>,
        <button_1.default variant="secondary" size="small" className="mt-large">
      Receive Return
    </button_1.default>,
    ],
};
var Demo = function (args) { return (<div className="w-full bg-grey-10 p-xlarge">
    <div className="max-w-md px-xlarge py-large flex flex-col gap-y-base bg-grey-0 rounded-rounded border border-grey-20">
      {args.arguments.map(function (arg, i) {
        return (<event_container_1.default {...arg} isFirst={i === args.arguments.length - 1}/>);
    })}
    </div>
  </div>); };
exports.InLine = Demo.bind({});
exports.InLine.args = {
    arguments: [
        exports.NoteCurrentUser.args,
        exports.ReturnRequested.args,
        exports.MailNotice.args,
        exports.ItemsShipped.args,
        exports.ItemsFulfilled.args,
        exports.NoteOtherUser.args,
        exports.OrderPlaced.args,
    ],
};
