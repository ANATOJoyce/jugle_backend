"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RadixSwitch = require("@radix-ui/react-switch");
var clsx_1 = require("clsx");
var react_1 = require("react");
/**
 * A controlled switch component atom.
 */
function Switch(props) {
    return (<RadixSwitch.Root {...props} className={(0, clsx_1.default)("w-8 h-[18px] rounded-full transition-bg bg-gray-300 radix-state-checked:bg-violet-60")} asChild>
      <div className="flex items-center">
        <RadixSwitch.Thumb className={(0, clsx_1.default)("w-2 h-2 bg-white rounded-full block transition-transform translate-x-[5px] radix-state-checked:translate-x-[19px]")}/>
      </div>
    </RadixSwitch.Root>);
}
exports.default = Switch;
