"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DropdownMenu = require("@radix-ui/react-dropdown-menu");
var react_1 = require("react");
var button_1 = require("../../fundamentals/button");
var status_indicator_1 = require("../../fundamentals/status-indicator");
var StatusSelector = function (_a) {
    var isDraft = _a.isDraft, draftState = _a.draftState, activeState = _a.activeState, onChange = _a.onChange;
    return (<div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button_1.default variant="ghost" size="small">
            <status_indicator_1.default title={isDraft ? draftState : activeState} variant={isDraft ? "default" : "active"}/>
          </button_1.default>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sideOffset={5} className="border bg-grey-0 border-grey-20 rounded-rounded shadow-dropdown p-xsmall min-w-[200px] z-30">
          <DropdownMenu.Item>
            {<button_1.default variant="ghost" size="small" className="w-full justify-start" onClick={onChange}>
                <status_indicator_1.default title={!isDraft ? draftState : activeState} variant={!isDraft ? "default" : "active"}/>
              </button_1.default>}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>);
};
exports.default = StatusSelector;
