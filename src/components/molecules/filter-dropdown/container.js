"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RadixPopover = require("@radix-ui/react-popover");
var react_1 = require("react");
var use_window_dimensions_1 = require("../../../hooks/use-window-dimensions");
var button_1 = require("../../fundamentals/button");
var FilterDropdownContainer = function (_a) {
    var submitFilters = _a.submitFilters, clearFilters = _a.clearFilters, triggerElement = _a.triggerElement, children = _a.children;
    var height = (0, use_window_dimensions_1.useWindowDimensions)().height;
    var ref = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = (0, react_1.useState)({
        maxHeight: height,
    }), heightStyle = _c[0], setHeightStyle = _c[1];
    (0, react_1.useEffect)(function () {
        var _a;
        setHeightStyle({
            maxHeight: height - ((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().y) - 50,
        });
    }, [ref]);
    var onSubmit = function () {
        setIsOpen(false);
        submitFilters();
    };
    var onClear = function () {
        setIsOpen(false);
        clearFilters();
    };
    return (<RadixPopover.Root open={isOpen} onOpenChange={setIsOpen}>
      <RadixPopover.Trigger ref={ref} asChild>
        {triggerElement}
      </RadixPopover.Trigger>
      <RadixPopover.Content sideOffset={8} style={heightStyle} className="bg-grey-0 overflow-y-auto rounded-rounded shadow-dropdown max-w-[272px] py-4">
        <div className="flex px-4 pb-4 border-b border-grey-20">
          <button_1.default size="small" tabIndex={-1} className="mr-2 border border-grey-20" variant="ghost" onClick={function () { return onClear(); }}>
            Clear
          </button_1.default>
          <button_1.default tabIndex={-1} variant="primary" className="w-44 justify-center" size="small" onClick={function () { return onSubmit(); }}>
            Apply
          </button_1.default>
        </div>
        {react_1.default.Children.map(children, function (child) {
            return (<div className="border-b border-grey-20 py-2 px-4 last:pb-0 last:border-0">
              {child}
            </div>);
        })}
      </RadixPopover.Content>
    </RadixPopover.Root>);
};
exports.default = FilterDropdownContainer;
