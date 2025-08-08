"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityCard = void 0;
var react_1 = require("react");
var status_indicator_1 = require("../../fundamentals/status-indicator");
var tooltip_1 = require("../../atoms/tooltip");
var clsx_1 = require("clsx");
var ActivityCard = function (props) {
    var key = props.key, title = props.title, icon = props.icon, relativeTimeElapsed = props.relativeTimeElapsed, shouldShowStatus = props.shouldShowStatus, children = props.children;
    var date = !!props.date && new Date(props.date).toLocaleDateString("en-us", {
        hour12: true,
        day: "2-digit",
        month: "short",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });
    var formattedDate = !!date && date.replace(",", " at");
    var getTimeElement = function () {
        return (<div className="flex cursor-default">
        {!!relativeTimeElapsed && (<span>{relativeTimeElapsed}</span>)}
        {shouldShowStatus &&
                <status_indicator_1.default variant={"primary"} className="ml-2"/>}
      </div>);
    };
    return (<div key={key} className="mx-8 border-b last:border-b-0 border-grey-20">
      <div className="flex hover:bg-grey-5 -mx-8 px-8 py-6">
        <div className="relative w-full h-full">
          <div className="flex justify-between inter-small-semibold text-grey-90">
            <div className="flex">
              {!!icon && icon}
              <span>{title}</span>
            </div>

            {((!!relativeTimeElapsed || shouldShowStatus)) && (formattedDate ? (<tooltip_1.default content={formattedDate}>
                    {getTimeElement()}
                  </tooltip_1.default>) : (getTimeElement()))}
          </div>

          <div className={(0, clsx_1.default)(!!icon && "pl-8")}>
            {children}
          </div>
        </div>
      </div>
    </div>);
};
exports.ActivityCard = ActivityCard;
