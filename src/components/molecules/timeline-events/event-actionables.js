"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var more_horizontal_icon_1 = require("../../fundamentals/icons/more-horizontal-icon");
var actionables_1 = require("../actionables");
var EventActionables = function (_a) {
    var actions = _a.actions;
    var EventTrigger = (<button className="btn-ghost py-0 px-2xsmall flex justify-center items-center focus:outline-none focus:ring-2 rounded-base focus:ring-violet-40">
      <more_horizontal_icon_1.default size={20}/>
    </button>);
    return (<actionables_1.default customTrigger={EventTrigger} forceDropdown actions={actions}/>);
};
exports.default = EventActionables;
