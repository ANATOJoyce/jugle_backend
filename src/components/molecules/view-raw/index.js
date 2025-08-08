"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collapsible = require("@radix-ui/react-collapsible");
var clsx_1 = require("clsx");
var react_1 = require("react");
var react_json_view_1 = require("react-json-view");
var use_clipboard_1 = require("../../../hooks/use-clipboard");
var button_1 = require("../../fundamentals/button");
var chevron_down_1 = require("../../fundamentals/icons/chevron-down");
var clipboard_copy_icon_1 = require("../../fundamentals/icons/clipboard-copy-icon");
var ViewRaw = function (_a) {
    var raw = _a.raw, _b = _a.title, title = _b === void 0 ? "Data" : _b, name = _a.name;
    var _c = (0, react_1.useState)(false), expanded = _c[0], setExpanded = _c[1];
    var _d = (0, use_clipboard_1.default)(JSON.stringify(raw, undefined, 2), {
        successDuration: 5500,
        onCopied: function () { },
    }), isCopied = _d[0], handleCopy = _d[1];
    return (<div className="px-base py-xsmall rounded-rounded bg-grey-5">
      <Collapsible.Root open={expanded} onOpenChange={setExpanded}>
        <Collapsible.Trigger asChild>
          <div className="flex items-center justify-between cursor-pointer">
            <p className="inter-base-semibold">
              {title}{" "}
              <span className="inter-base-regular text-grey-50">
                ({Object.keys(raw).length}{" "}
                {Object.keys(raw).length === 1 ? "item" : "items"})
              </span>
            </p>
            <button_1.default variant="ghost" size="small" className="text-grey-50">
              <chevron_down_1.default size={20} className={(0, clsx_1.default)("text-grey-50", {
            "rotate-180": expanded,
        })}/>
            </button_1.default>
          </div>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <div className="mt-xsmall">
            <react_json_view_1.default src={raw} enableClipboard={false} style={{
            fontFamily: "Roboto Mono",
            fontSize: "12px",
        }} shouldCollapse={false} name={name}/>
          </div>
          <div className="flex items-center justify-end w-full gap-x-xsmall text-grey-50 inter-small-regular">
            {isCopied && <span className="animate-fade-in-right">Copied!</span>}
            <button_1.default variant="ghost" size="small" type="button" onClick={function (e) {
            e.currentTarget.blur();
            handleCopy();
        }}>
              <clipboard_copy_icon_1.default size={20}/>
            </button_1.default>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>);
};
exports.default = ViewRaw;
