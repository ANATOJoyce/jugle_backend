"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventIconColor = void 0;
var clsx_1 = require("clsx");
var react_1 = require("react");
var tooltip_1 = require("../../atoms/tooltip");
var bell_off_icon_1 = require("../../fundamentals/icons/bell-off-icon");
var chevron_down_1 = require("../../fundamentals/icons/chevron-down");
var chevron_up_1 = require("../../fundamentals/icons/chevron-up");
var EventIconColor;
(function (EventIconColor) {
    EventIconColor["GREEN"] = "text-emerald-40";
    EventIconColor["RED"] = "text-rose-50";
    EventIconColor["ORANGE"] = "text-orange-40";
    EventIconColor["DEFAULT"] = "text-grey-50";
})(EventIconColor || (exports.EventIconColor = EventIconColor = {}));
var EventContainer = function (_a) {
    var icon = _a.icon, _b = _a.iconColor, iconColor = _b === void 0 ? EventIconColor.DEFAULT : _b, title = _a.title, topNode = _a.topNode, midNode = _a.midNode, time = _a.time, _c = _a.noNotification, noNotification = _c === void 0 ? false : _c, _d = _a.isFirst, isFirst = _d === void 0 ? false : _d, _e = _a.expandable, expandable = _e === void 0 ? false : _e, children = _a.children;
    var _f = (0, react_1.useState)(!expandable), isExpanded = _f[0], setIsExpanded = _f[1];
    var toggleExpand = function () {
        setIsExpanded(function (prev) { return !prev; });
    };
    return (<div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-xsmall">
          <div className={(0, clsx_1.default)("h-5 w-5", iconColor)}>{icon}</div>
          <div className="inter-small-semibold">{title}</div>
        </div>
        <div className="flex items-center gap-x-xsmall">
          {noNotification && (<tooltip_1.default content="Notifications related to this event are disabled">
              <bell_off_icon_1.default size={20} className="text-grey-40"/>
            </tooltip_1.default>)}
          {topNode}
          {expandable && (<button onClick={toggleExpand}>
              {isExpanded ? (<chevron_up_1.default size={16}/>) : (<chevron_down_1.default size={16}/>)}
            </button>)}
        </div>
      </div>
      <div className="flex gap-x-xsmall">
        <div className="w-5 flex justify-center pt-base">
          {!isFirst && <div className="w-px bg-grey-20 min-h-[24px]"/>}
        </div>
        <div className="mt-2xsmall w-full inter-small-regular">
          <div className="flex items-center justify-between">
            <div className="text-grey-50">{new Date(time).toUTCString()}</div>
            {midNode}
          </div>
          {children && isExpanded && (<div className="mt-small w-full pb-base">{children}</div>)}
        </div>
      </div>
    </div>);
};
exports.default = EventContainer;
