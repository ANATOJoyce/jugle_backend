"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DropdownMenu = require("@radix-ui/react-dropdown-menu");
var clsx_1 = require("clsx");
var react_1 = require("react");
var button_1 = require("../fundamentals/button");
var more_horizontal_icon_1 = require("../fundamentals/icons/more-horizontal-icon");
var Actionables = function (_a) {
    var actions = _a.actions, customTrigger = _a.customTrigger, _b = _a.forceDropdown, forceDropdown = _b === void 0 ? false : _b;
    if (!(actions === null || actions === void 0 ? void 0 : actions.length) && !customTrigger) {
        return null;
    }
    return (actions === null || actions === void 0 ? void 0 : actions.length) > 1 || forceDropdown ? (<div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          {!customTrigger ? (<button_1.default variant="ghost" size="small" className="w-xlarge h-xlarge focus-visible:outline-none focus-visible:shadow-input focus-visible:border-violet-60 focus:shadow-none">
              <more_horizontal_icon_1.default size={20}/>
            </button_1.default>) : (customTrigger)}
        </DropdownMenu.Trigger>

        <DropdownMenu.Content sideOffset={5} className="border bg-grey-0 border-grey-20 rounded-rounded shadow-dropdown p-xsmall min-w-[200px] z-30">
          {actions.map(function (action, i) {
            return (<DropdownMenu.Item className="mb-1 last:mb-0" key={i}>
                {<button_1.default variant="ghost" size="small" className={(0, clsx_1.default)("w-full justify-start", {
                        "text-rose-50": (action === null || action === void 0 ? void 0 : action.variant) === "danger",
                        "opacity-50 select-none pointer-events-none": action === null || action === void 0 ? void 0 : action.disabled,
                    })} onClick={action === null || action === void 0 ? void 0 : action.onClick}>
                    {action.icon}
                    {action.label}
                  </button_1.default>}
              </DropdownMenu.Item>);
        })}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>) : (<div>
      {customTrigger ? (<div>{customTrigger}</div>) : (<button_1.default variant="ghost" size="small" onClick={actions[0].onClick}>
          {actions[0].icon}
          {actions[0].label}
        </button_1.default>)}
    </div>);
};
exports.default = Actionables;
