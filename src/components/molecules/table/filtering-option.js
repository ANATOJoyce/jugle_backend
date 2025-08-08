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
var DropdownMenu = require("@radix-ui/react-dropdown-menu");
var clsx_1 = require("clsx");
var react_1 = require("react");
var check_icon_1 = require("../../fundamentals/icons/check-icon");
var chevron_down_1 = require("../../fundamentals/icons/chevron-down");
var FilteringOptions = function (_a) {
    var _b;
    var title = _a.title, options = _a.options, className = _a.className, props = __rest(_a, ["title", "options", "className"]);
    var _c = (0, react_1.useState)(((_b = options === null || options === void 0 ? void 0 : options[0]) === null || _b === void 0 ? void 0 : _b.title) || "All"), selected = _c[0], setSelected = _c[1];
    var _d = (0, react_1.useState)(false), open = _d[0], setOpen = _d[1];
    return (<div className={(0, clsx_1.default)("inter-small-regular flex text-grey-50 mr-6 last:mr-0", className)} {...props}>
      <span className="">{title}:</span>
      <DropdownMenu.Root onOpenChange={setOpen}>
        <DropdownMenu.Trigger asChild className={(0, clsx_1.default)("inter-small-regular text-grey-50 flex items-center pl-1.5 pr-0.5 rounded active:bg-grey-5 hover:bg-grey-5", { "bg-grey-5": open })}>
          <div className="flex align-center">
            {selected}
            <div className="text-grey-40 h-min">
              <chevron_down_1.default size={16}/>
            </div>
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sideOffset={8} className="bg-grey-0 p-2 border border-grey-20 rounded-rounded shadow-dropdown">
          {options.map(function (opt, idx) { return (<DropdownMenu.DropdownMenuItem key={"".concat(idx, "-").concat(opt.title)} onSelect={function () {
                opt.onClick();
                setSelected(opt.title);
            }} disabled={typeof opt.count !== "undefined" && opt.count < 1} className={(0, clsx_1.default)("py-1.5 my-1 w-48 px-3 flex items-center rounded text-grey-90  hover:border-0 hover:outline-none inter-small-semibold", {
                "cursor-pointer hover:bg-grey-10": typeof opt.count === "undefined" || opt.count > 0,
            })}>
              {selected === opt.title && (<span className="w-4">
                  <check_icon_1.default size={16}/>
                </span>)}
              <div className={(0, clsx_1.default)("ml-3 w-full flex justify-between", {
                "ml-7": selected !== opt.title,
                "text-grey-30": opt.count < 1,
            })}>
                {opt.title}
                <span className={(0, clsx_1.default)("inter-small-regular text-grey-40 ml-3", {
                "text-grey-30": opt.count < 1,
            })}>
                  {opt.count}
                </span>
              </div>
            </DropdownMenu.DropdownMenuItem>); })}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>);
};
exports.default = FilteringOptions;
