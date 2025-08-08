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
var Dropdown = require("@radix-ui/react-dropdown-menu");
var clsx_1 = require("clsx");
var react_1 = require("react");
var spinner_1 = require("../../atoms/spinner");
var chevron_down_1 = require("../../fundamentals/icons/chevron-down");
var refresh_icon_1 = require("../../fundamentals/icons/refresh-icon");
var FormToasterContainer = function (_a) {
    var children = _a.children, toast = _a.toast, _b = _a.isLoading, isLoading = _b === void 0 ? false : _b, _c = _a.loadingMessage, loadingMessage = _c === void 0 ? "Hang on, this may take a few moments..." : _c, _d = _a.unsavedChangesMessage, unsavedChangesMessage = _d === void 0 ? "You have unsaved changes" : _d, _e = _a.icon, icon = _e === void 0 ? <refresh_icon_1.default size="20"/> : _e;
    var content = (0, react_1.useMemo)(function () {
        if (isLoading) {
            return (<div className="flex items-center p-base gap-x-base">
          <span>
            <spinner_1.default />
          </span>
          <span className="inter-small-regular">{loadingMessage}</span>
        </div>);
        }
        else {
            return (<>
          <div className="flex items-center p-base gap-x-base">
            <span>{icon}</span>
            <span className="inter-small-regular">{unsavedChangesMessage}</span>
          </div>
          {children}
        </>);
        }
    }, [isLoading, children]);
    return (<div className={(0, clsx_1.default)({
            "animate-enter": toast === null || toast === void 0 ? void 0 : toast.visible,
            "animate-leave": !(toast === null || toast === void 0 ? void 0 : toast.visible),
        })} {...toast === null || toast === void 0 ? void 0 : toast.ariaProps}>
      <div className="flex items-center rounded-rounded bg-grey-90 h-[72px] w-[344px] text-grey-0 justify-between">
        {content}
      </div>
    </div>);
};
var Actions = function (_a) {
    var children = _a.children;
    return (<div className="border-l border-grey-70 h-full">
      {react_1.Children.map(children, function (child) {
            return (<div className="flex items-center justify-center border-b border-grey-70 last:border-none h-1/2 w-[72px]">
            {child}
          </div>);
        })}
    </div>);
};
var DiscardButton = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (<button className={(0, clsx_1.default)("flex items-center justify-center text-white inter-small-semibold h-full w-full", className)} {...props}>
      {children}
    </button>);
};
var ActionButton = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (<button className={(0, clsx_1.default)("flex items-center justify-center text-white inter-small-semibold h-full w-full", className)} {...props}>
      {children}
    </button>);
};
var MultiActionButton = function (_a) {
    var children = _a.children, className = _a.className, actions = _a.actions;
    return (<Dropdown.Root>
      <Dropdown.Trigger className={(0, clsx_1.default)("inter-small-semibold flex items-center justify-center h-full w-full", className)}>
        {children}
        <chevron_down_1.default size={16} className="ml-[2px]"/>
      </Dropdown.Trigger>

      <Dropdown.Content className="rounded-rounded flex bg-grey-90 text-white p-xsmall flex-col min-w-[208px]" sideOffset={10}>
        {actions.map(function (action, i) {
            return (<Dropdown.Item key={i}>
              <button onClick={action.onClick} className="p-2xsmall hover:bg-grey-80 hover:outline-none inter-small-semibold rounded-base text-left flex items-center w-full">
                {action.icon && (<span className="text-grey-0 mr-xsmall">
                    {react_1.default.cloneElement(action.icon, {
                        size: 20,
                    })}
                  </span>)}
                {action.label}
              </button>
            </Dropdown.Item>);
        })}
      </Dropdown.Content>
    </Dropdown.Root>);
};
FormToasterContainer.Actions = Actions;
FormToasterContainer.DiscardButton = DiscardButton;
FormToasterContainer.ActionButton = ActionButton;
FormToasterContainer.MultiActionButton = MultiActionButton;
exports.default = FormToasterContainer;
