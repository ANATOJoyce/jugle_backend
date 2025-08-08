"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var icon_tooltip_1 = require("../icon-tooltip");
var Section = function (_a) {
    var title = _a.title, description = _a.description, tooltip = _a.tooltip, children = _a.children;
    return (<div>
      <div className="flex items-center mb-2xsmall">
        <h3 className="inter-base-semibold">{title}</h3>
        {tooltip && (<div className="flex items-center ml-1.5">
            <icon_tooltip_1.default content={tooltip}/>
          </div>)}
      </div>
      <p className="inter-small-regular text-grey-50 mb-base">{description}</p>
      {children}
    </div>);
};
exports.default = Section;
