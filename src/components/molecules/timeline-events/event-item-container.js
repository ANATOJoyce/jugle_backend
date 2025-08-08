"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var EventItemContainer = function (_a) {
    var item = _a.item;
    if (!item) {
        return null;
    }
    return (<div className="flex items-center gap-x-small mb-base last:mb-0">
      {item.thumbnail && (<div className="h-10 w-[30px] rounded-base overflow-hidden">
          <img src={item.thumbnail} alt={"Thumbnail for ".concat(item.title)} className="h-full w-full object-cover"/>
        </div>)}
      <div className="flex flex-col inter-small-regular w-full">
        <div className="flex items-center justify-between w-full">
          <p>{item.title}</p>
          <span className="inter-small-semibold text-violet-60">{"x".concat(item.quantity)}</span>
        </div>
        <p className="text-grey-50">{item.variant.title}</p>
      </div>
    </div>);
};
exports.default = EventItemContainer;
