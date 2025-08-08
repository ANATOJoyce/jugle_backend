"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableToasterContainer = void 0;
var clsx_1 = require("clsx");
var react_1 = require("react");
var TableToasterContainer = function (_a) {
    var children = _a.children, toast = _a.toast;
    return (<div className={(0, clsx_1.default)({
            "animate-enter": toast === null || toast === void 0 ? void 0 : toast.visible,
            "animate-leave": !(toast === null || toast === void 0 ? void 0 : toast.visible),
        })} {...toast === null || toast === void 0 ? void 0 : toast.ariaProps}>
      <div className="flex items-center rounded-rounded bg-grey-90 px-base py-3.5">
        {children}
      </div>
    </div>);
};
exports.TableToasterContainer = TableToasterContainer;
