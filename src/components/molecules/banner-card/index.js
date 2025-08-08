"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var actionables_1 = require("../../molecules/actionables");
var BannerCard = function (_a) {
    var title = _a.title, thumbnail = _a.thumbnail, actions = _a.actions, children = _a.children;
    return (<div className="rounded-rounded border bg-grey-0 border-grey-20 w-full p-base medium:p-xlarge">
      <div className="flex gap-large items-start">
        {thumbnail && (<div className="min-w-[72px] min-h-[72px] w-[72px] h-[72px] rounded-base overflow-hidden">
            <img src={thumbnail} alt="Thumbnail" className="w-full h-full object-cover"/>
          </div>)}
        <div className="w-full">
          <div className="flex items-center justify-between pb-2">
            <p className="inter-large-semibold">{title}</p>
            <actionables_1.default actions={actions}/>
          </div>
          {children}
        </div>
      </div>
    </div>);
};
var Description = function (_a) {
    var cta = _a.cta, children = _a.children;
    return (<div>
      <p className="inter-small-regular text-grey-50 max-w-[460px] line-clamp-2">
        {children}
      </p>
      {cta && (<button className="text-violet-60 inter-small-semibold mt-base" onClick={cta.onClick}>
          {cta.label}
        </button>)}
    </div>);
};
var Footer = function (_a) {
    var children = _a.children;
    return <div className="mt-base">{children}</div>;
};
BannerCard.Description = Description;
BannerCard.Footer = Footer;
exports.default = BannerCard;
