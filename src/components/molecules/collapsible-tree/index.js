"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapsibleTree = void 0;
var react_1 = require("react");
var clsx_1 = require("clsx");
var more_horizontal_icon_1 = require("../../fundamentals/icons/more-horizontal-icon");
var minus_icon_1 = require("../../fundamentals/icons/minus-icon");
var plus_icon_1 = require("../../fundamentals/icons/plus-icon");
var button_1 = require("../../fundamentals/button");
var actionables_1 = require("../actionables");
var CollapsibleTreeContext = react_1.default.createContext(null);
var CollapsibleTree = function (_a) {
    var children = _a.children;
    var _b = react_1.default.useState(false), open = _b[0], setOpen = _b[1];
    return (<CollapsibleTreeContext.Provider value={{
            open: open,
            handleOpen: function () { return setOpen(true); },
            handleClose: function () { return setOpen(false); },
            toggle: function () { return setOpen(function (open) { return !open; }); },
        }}>
      {children}
    </CollapsibleTreeContext.Provider>);
};
exports.CollapsibleTree = CollapsibleTree;
CollapsibleTreeContext.displayName = "CollapsibleTreeContext";
var useCollapsibleTree = function () {
    var context = react_1.default.useContext(CollapsibleTreeContext);
    if (!context) {
        throw new Error("useCollapsibleTree must be a child of CollapsibleTree");
    }
    return context;
};
var CollapsibleTreeContent = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    var open = useCollapsibleTree().open;
    return (<div className={(0, clsx_1.default)("pl-5 mt-xsmall", {
            hidden: !open,
            "animate-fade-in-top": open,
        }, className)} {...props}>
      {children}
    </div>);
};
exports.CollapsibleTree.Content = CollapsibleTreeContent;
var CollapsibleTreeParent = function (_a) {
    var actions = _a.actions, className = _a.className, children = _a.children;
    var _b = useCollapsibleTree(), open = _b.open, toggle = _b.toggle;
    return (<div>
      <Container className={className}>
        <div className="flex items-center justify-between">
          <div className="gap-x-small flex items-center">{children}</div>
          <div className="flex items-center gap-x-xsmall">
            {actions && (<actionables_1.default customTrigger={Trigger()} actions={actions}/>)}
            <div className="h-5 w-px rounded-circle bg-grey-20"/>
            <button_1.default variant="ghost" size="small" className="p-[6px] text-grey-50" onClick={toggle}>
              {open ? <minus_icon_1.default size={20}/> : <plus_icon_1.default size={20}/>}
            </button_1.default>
          </div>
        </div>
      </Container>
    </div>);
};
exports.CollapsibleTree.Parent = CollapsibleTreeParent;
var CollapsibleTreeLeaf = function (_a) {
    var className = _a.className, children = _a.children, actions = _a.actions;
    return (<div className={(0, clsx_1.default)("col-tree flex items-center relative pb-xsmall last:pb-0", className)}>
      <div className="absolute top-0 left-0 bottom-0">
        <div className="border-l border-dashed border-grey-20 h-1/2 w-px"/>
        <div className="h-1/2 border-l border-dashed border-grey-20 w-px bottom-half-dash"/>
      </div>
      <div className="w-[13px] h-px border-t border-grey-20 border-dashed mr-xsmall"/>
      <Container className="w-full flex items-center justify-between inter-small-regular">
        {children}
        {actions && (<actionables_1.default forceDropdown customTrigger={Trigger()} actions={actions}/>)}
      </Container>
    </div>);
};
exports.CollapsibleTree.Leaf = CollapsibleTreeLeaf;
var Container = function (_a) {
    var children = _a.children, className = _a.className;
    return (<div className={(0, clsx_1.default)("rounded-rounded border border-grey-20 py-2xsmall px-small", className)}>
      {children}
    </div>);
};
var Trigger = function () {
    return (<button_1.default variant="ghost" size="small" className="p-[6px] text-grey-50">
      <more_horizontal_icon_1.default size={20}/>
    </button_1.default>);
};
