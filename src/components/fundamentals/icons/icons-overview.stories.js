"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overview = void 0;
var react_1 = require("react");
var arrow_left_icon_1 = require("./arrow-left-icon");
var arrow_right_icon_1 = require("./arrow-right-icon");
var bell_icon_1 = require("./bell-icon");
var bell_noti_icon_1 = require("./bell-noti-icon");
var chevron_right_icon_1 = require("./chevron-right-icon");
var coins_icon_1 = require("./coins-icon");
var crosshair_icon_1 = require("./crosshair-icon");
var customer_icon_1 = require("./customer-icon");
var dollar_sign_icon_1 = require("./dollar-sign-icon");
var edit_icon_1 = require("./edit-icon");
var gear_icon_1 = require("./gear-icon");
var gift_icon_1 = require("./gift-icon");
var happy_icon_1 = require("./happy-icon");
var mail_icon_1 = require("./mail-icon");
var map_pin_icon_1 = require("./map-pin-icon");
var minus_icon_1 = require("./minus-icon");
var percent_icon_1 = require("./percent-icon");
var plus_icon_1 = require("./plus-icon");
var publish_icon_1 = require("./publish-icon");
var search_icon_1 = require("./search-icon");
var tag_icon_1 = require("./tag-icon");
var truck_icon_1 = require("./truck-icon");
var unpublish_icon_1 = require("./unpublish-icon");
var users_icon_1 = require("./users-icon");
var sided_mouth_face_1 = require("./sided-mouth-face");
exports.default = {
    title: "Fundamentals/Icons/Overview",
    component: tag_icon_1.default,
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["24", "20", "16"],
            },
        },
    },
};
var icons = [
    <tag_icon_1.default />,
    <arrow_left_icon_1.default />,
    <arrow_right_icon_1.default />,
    <bell_icon_1.default />,
    <bell_noti_icon_1.default />,
    <chevron_right_icon_1.default />,
    <coins_icon_1.default />,
    <crosshair_icon_1.default />,
    <customer_icon_1.default />,
    <dollar_sign_icon_1.default />,
    <gear_icon_1.default />,
    <gift_icon_1.default />,
    <happy_icon_1.default />,
    <mail_icon_1.default />,
    <map_pin_icon_1.default />,
    <minus_icon_1.default />,
    <percent_icon_1.default />,
    <plus_icon_1.default />,
    <search_icon_1.default />,
    <truck_icon_1.default />,
    <users_icon_1.default />,
    <edit_icon_1.default />,
    <unpublish_icon_1.default />,
    <publish_icon_1.default />,
    <sided_mouth_face_1.default />
];
var Template = function (args) { return (<div className="grid grid-cols-6 gap-base">
    {icons.map(function (icon, key) {
        return (<div key={key} className="bg-grey-10 rounded-base flex items-center justify-center p-base">
          <div>{react_1.default.cloneElement(icon, args)}</div>
        </div>);
    })}
  </div>); };
exports.Overview = Template.bind({});
exports.Overview.args = {
    size: "24",
    color: "currentColor",
};
