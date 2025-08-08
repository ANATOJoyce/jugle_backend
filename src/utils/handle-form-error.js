"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFormError = void 0;
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var form_error_toaster_1 = require("../components/molecules/form-error-toaster");
var handleFormError = function (errors) {
    var _a = getFormErrors(errors), title = _a.title, list = _a.list, refs = _a.refs;
    if ((refs === null || refs === void 0 ? void 0 : refs[0]) && refs[0].focus) {
        refs[0].focus();
    }
    react_hot_toast_1.toast.custom(function (t) { return <form_error_toaster_1.default toast={t} message={list} title={title}/>; }, {
        position: "top-right",
        duration: 3000,
        ariaProps: {
            role: "alert",
            "aria-live": "polite",
        },
    });
};
exports.handleFormError = handleFormError;
function getFormErrors(errors) {
    var messages = Object.values(errors).reduce(function (acc, _a) {
        var message = _a.message;
        if (message) {
            acc.push(message);
        }
        return acc;
    }, []);
    var refs = Object.values(errors).reduce(function (acc, _a) {
        var ref = _a.ref;
        if (ref) {
            acc.push(ref);
        }
        return acc;
    }, []);
    var list = (<ul className="list-disc list-inside">
      {messages.map(function (m) { return (<li>{m}</li>); })}
    </ul>);
    var title = messages.length > 1
        ? "There were ".concat(messages.length, " errors with your submission")
        : "There was an error with your submission";
    return { title: title, list: list, refs: refs };
}
