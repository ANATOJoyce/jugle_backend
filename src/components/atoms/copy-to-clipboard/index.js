"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var use_clipboard_1 = require("../../../hooks/use-clipboard");
var use_notification_1 = require("../../../hooks/use-notification");
var button_1 = require("../../fundamentals/button");
var clipboard_copy_icon_1 = require("../../fundamentals/icons/clipboard-copy-icon");
var CopyToClipboard = function (_a) {
    var _b;
    var value = _a.value, displayValue = _a.displayValue, _c = _a.successDuration, successDuration = _c === void 0 ? 3000 : _c, _d = _a.showValue, showValue = _d === void 0 ? true : _d, _e = _a.iconSize, iconSize = _e === void 0 ? 20 : _e, _f = _a.onCopy, onCopy = _f === void 0 ? function () { } : _f;
    var _g = (0, use_clipboard_1.default)(value, {
        onCopied: onCopy,
        successDuration: successDuration,
    }), isCopied = _g[0], handleCopy = _g[1];
    var notification = (0, use_notification_1.default)();
    (0, react_1.useEffect)(function () {
        if (isCopied) {
            notification("Success", "Copied!", "success");
        }
    }, [isCopied]);
    return (<div className="flex items-center inter-small-regular text-grey-50 gap-x-xsmall">
      <button_1.default variant="ghost" size="small" className={(0, clsx_1.default)("p-0 text-grey-50", (_b = {},
            _b["text-violet-60"] = isCopied,
            _b))} onClick={handleCopy}>
        <clipboard_copy_icon_1.default size={iconSize}/>
      </button_1.default>
      {showValue && (<span className="w-full truncate">
          {displayValue ? displayValue : value}
        </span>)}
    </div>);
};
exports.default = CopyToClipboard;
