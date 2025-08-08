"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_1 = require("gatsby");
var react_collapsible_1 = require("react-collapsible");
var SidebarMenuItem = function (_a) {
    var pageLink = _a.pageLink, icon = _a.icon, text = _a.text, triggerHandler = _a.triggerHandler, _b = _a.subItems, subItems = _b === void 0 ? [] : _b;
    var activeStyles = "bg-grey-10 text-violet-50";
    return (<react_collapsible_1.default transitionTime={150} transitionCloseTime={150} {...triggerHandler()} trigger={<gatsby_1.Link className={"py-1.5 px-3 my-0.5 rounded-base flex text-grey-90 hover:bg-grey-10 items-center"} activeClassName={activeStyles} to={pageLink} partiallyActive>
          <span className="items-start">{icon}</span>
          <span className="ml-3">{text}</span>
        </gatsby_1.Link>}>
      {(subItems === null || subItems === void 0 ? void 0 : subItems.length) > 0 &&
            subItems.map(function (_a) {
                var pageLink = _a.pageLink, text = _a.text;
                return (<SubItem pageLink={pageLink} text={text}/>);
            })}
    </react_collapsible_1.default>);
};
var SubItem = function (_a) {
    var pageLink = _a.pageLink, text = _a.text;
    var activeStyles = "bg-grey-10 font-semibold";
    return (<gatsby_1.Link className={"py-0.5 px-1 my-0.5 rounded-base flex hover:bg-grey-10"} activeClassName={activeStyles} to={pageLink} partiallyActive>
      <span className="text-grey-90 text-small ml-3">{text}</span>
    </gatsby_1.Link>);
};
SidebarMenuItem.SubItem = SubItem;
exports.default = SidebarMenuItem;
