"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var save_notification_1 = require("../components/atoms/save-notification");
var useDetectChange = function (_a) {
    var isDirty = _a.isDirty, reset = _a.reset, options = _a.options;
    (0, react_1.useEffect)(function () {
        var fn = options.fn, title = options.title, message = options.message, icon = options.icon;
        var showToaster = function () {
            react_hot_toast_1.toast.custom(function (t) { return (<save_notification_1.default toast={t} icon={icon} title={title} message={message} onSave={fn} reset={reset}/>); }, {
                position: "bottom-right",
                duration: Infinity,
                id: "form-change",
            });
        };
        if (isDirty) {
            showToaster();
        }
        else {
            react_hot_toast_1.toast.dismiss("form-change");
        }
    }, [isDirty, options]);
};
exports.default = useDetectChange;
