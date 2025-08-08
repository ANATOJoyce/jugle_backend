"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var badge_1 = require("../../../components/fundamentals/badge");
var actionables_1 = require("../../../components/molecules/actionables");
var NumberedItem = function (_a) {
    var actions = _a.actions, index = _a.index, title = _a.title, description = _a.description;
    return (<div className="p-base border rounded-rounded flex gap-base justify-between items-center">
      <div className="flex overflow-hidden gap-base w-full">
        <div>
          <badge_1.default className="inter-base-semibold flex justify-center items-center w-[40px] h-[40px]" variant="default">
            §{index}
          </badge_1.default>
        </div>
        <div className="truncate flex flex-col justify-center flex-1 w-full">
          <div className="inter-small-semibold">{title}</div>
          {description &&
            (typeof description === "string" ? (<div className="inter-small-regular text-grey-50">
                {description}
              </div>) : (description))}
        </div>
      </div>
      {actions && (<div>
          <actionables_1.default forceDropdown actions={actions}/>
        </div>)}
    </div>);
};
exports.default = NumberedItem;
