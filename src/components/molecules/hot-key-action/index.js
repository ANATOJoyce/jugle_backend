"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hotkeys_hook_1 = require("react-hotkeys-hook");
var HotKeyAction = function (_a) {
    var label = _a.label, hotKey = _a.hotKey, icon = _a.icon, onAction = _a.onAction;
    (0, react_hotkeys_hook_1.useHotkeys)(hotKey, onAction, {});
    return (<div className="flex items-center gap-2">
      <span className="text-grey-0 inter-small-semibold">{label}</span>
      <div className="inter-small-semibold text-grey-30 flex items-center justify-center w-[24px] h-[24px] rounded bg-grey-70">
        {icon}
      </div>
    </div>);
};
exports.default = HotKeyAction;
