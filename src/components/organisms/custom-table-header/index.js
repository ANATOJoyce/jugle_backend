"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var lodash_1 = require("lodash");
var react_1 = require("react");
var TableViewHeader = function (_a) {
    var views = _a.views, _b = _a.activeView, activeView = _b === void 0 ? views[0] : _b, setActiveView = _a.setActiveView;
    return (<div className="flex inter-large-semibold gap-x-base text-grey-40">
      {views.map(function (k, i) {
            var _a;
            return (<div key={i} className={(0, clsx_1.default)("cursor-pointer", (_a = {},
                    _a["text-grey-90"] = k === activeView,
                    _a))} onClick={function () {
                    if (setActiveView) {
                        setActiveView(k);
                    }
                }}>
          {(0, lodash_1.capitalize)(k)}
        </div>);
        })}
    </div>);
};
exports.default = TableViewHeader;
