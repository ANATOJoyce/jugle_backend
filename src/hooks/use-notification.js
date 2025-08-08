"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var notification_1 = require("../components/atoms/notification");
var useNotification = function () {
    return function (title, message, type) {
        react_hot_toast_1.toast.custom(function (t) { return (<notification_1.default toast={t} type={type} title={title} message={message}/>); }, {
            position: "top-right",
            duration: 3000,
        });
    };
};
exports.default = useNotification;
