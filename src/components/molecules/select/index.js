"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var react_select_1 = require("react-select");
var async_1 = require("react-select/async");
var async_creatable_1 = require("react-select/async-creatable");
var creatable_1 = require("react-select/creatable");
var arrow_down_icon_1 = require("../../fundamentals/icons/arrow-down-icon");
var check_icon_1 = require("../../fundamentals/icons/check-icon");
var search_icon_1 = require("../../fundamentals/icons/search-icon");
var x_circle_icon_1 = require("../../fundamentals/icons/x-circle-icon");
var input_container_1 = require("../../fundamentals/input-container");
var input_header_1 = require("../../fundamentals/input-header");
var modal_1 = require("../modal");
var MultiValueLabel = function (_a) {
    var props = __rest(_a, []);
    var isLast = props.data === props.selectProps.value[props.selectProps.value.length - 1];
    if (props.selectProps.menuIsOpen && props.selectProps.isSearchable) {
        return <></>;
    }
    return (<div className={(0, clsx_1.default)("bg-grey-5 mx-0 inter-base-regular p-0", {
            "after:content-[',']": !isLast,
        })}>
      {props.children}
    </div>);
};
var Menu = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<react_select_1.components.Menu className={(0, clsx_1.default)({
            "-mt-1 z-60": !props.selectProps.isSearchable,
        })} {...props}>
      {props.children}
    </react_select_1.components.Menu>);
};
var Placeholder = function (props) {
    return props.selectProps.menuIsOpen ? null : (<react_select_1.components.Placeholder {...props}/>);
};
var SingleValue = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    if (props.selectProps.menuIsOpen && props.selectProps.isSearchable) {
        return null;
    }
    return <react_select_1.components.SingleValue {...props}>{children}</react_select_1.components.SingleValue>;
};
var Input = function (props) {
    if (props.isHidden ||
        !props.selectProps.menuIsOpen ||
        !props.selectProps.isSearchable) {
        return <react_select_1.components.Input {...props} className="pointer-events-none"/>;
    }
    return (<div className="w-full flex items-center h-full space-between">
      <div className="w-full flex items-center">
        <span className="text-grey-40 mr-2">
          <search_icon_1.default size={20}/>
        </span>
        <react_select_1.components.Input {...props}/>
      </div>
      <span className="text-grey-40 hover:bg-grey-5 cursor-pointer rounded">
        {typeof props.value === "string" && props.value !== "" && (<x_circle_icon_1.default size={20}/>)}
      </span>
    </div>);
};
var ClearIndicator = function (_a) {
    var props = __rest(_a, []);
    if (props.selectProps.menuIsOpen && props.selectProps.isMulti) {
        return <></>;
    }
    var _b = props.innerProps, ref = _b.ref, restInnerProps = __rest(_b, ["ref"]);
    return (<div onMouseDown={function (e) {
            restInnerProps.onMouseDown(e);
        }} ref={ref} className="hover:bg-grey-10 text-grey-40 rounded cursor-pointer">
      <x_circle_icon_1.default size={20}/>
    </div>);
};
var CheckboxAdornment = function (_a) {
    var isSelected = _a.isSelected;
    return (<div className={(0, clsx_1.default)("w-5 h-5 flex justify-center text-grey-0 border-grey-30 border rounded-base", {
            "bg-violet-60": isSelected,
        })}>
      <span className="self-center">
        {isSelected && <check_icon_1.default size={16}/>}
      </span>
    </div>);
};
var RadioAdornment = function (_a) {
    var isSelected = _a.isSelected;
    return (<div className={(0, clsx_1.default)("radio-outer-ring outline-0", "shrink-0 w-[20px] h-[20px] rounded-circle", {
            "shadow-[0_0_0_1px] shadow-[#D1D5DB]": !isSelected,
            "shadow-[0_0_0_2px] shadow-violet-60": isSelected,
        })}>
      {isSelected && (<div className={(0, clsx_1.default)("group flex items-center justify-center w-full h-full relative", "after:absolute after:inset-0 after:m-auto after:block after:w-[12px] after:h-[12px] after:bg-violet-60 after:rounded-circle")}/>)}
    </div>);
};
var Option = function (_a) {
    var _b, _c;
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<react_select_1.components.Option {...props} className="my-1 py-0 py-0 px-2 bg-grey-0 active:bg-grey-0">
      <div className={"item-renderer h-full hover:bg-grey-10 py-2 px-2 cursor-pointer rounded"}>
        <div className="items-center h-full flex">
          {((_b = props.data) === null || _b === void 0 ? void 0 : _b.value) !== "all" && ((_c = props.data) === null || _c === void 0 ? void 0 : _c.label) !== "Select All" ? (<>
              {props.isMulti ? (<CheckboxAdornment {...props}/>) : (<RadioAdornment {...props}/>)}
              <span className="ml-3 text-grey-90 inter-base-regular">
                {props.data.label}
              </span>
            </>) : (<span className="text-grey-90 inter-base-regular">
              {props.data.label}
            </span>)}
        </div>
      </div>
    </react_select_1.components.Option>);
};
var SSelect = react_1.default.forwardRef(function (_a, ref) {
    var _b;
    var label = _a.label, name = _a.name, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, required = _a.required, value = _a.value, onChange = _a.onChange, className = _a.className, isMultiSelect = _a.isMultiSelect, hasSelectAll = _a.hasSelectAll, tooltipContent = _a.tooltipContent, tooltip = _a.tooltip, _d = _a.enableSearch, enableSearch = _d === void 0 ? false : _d, _e = _a.clearSelected, clearSelected = _e === void 0 ? false : _e, isCreatable = _a.isCreatable, filterOptions = _a.filterOptions, _f = _a.placeholder, placeholder = _f === void 0 ? "Search..." : _f, options = _a.options, onCreateOption = _a.onCreateOption;
    var portalRef = (0, react_1.useContext)(modal_1.ModalContext).portalRef;
    var _g = (0, react_1.useState)(false), isFocussed = _g[0], setIsFocussed = _g[1];
    var _h = (0, react_1.useState)(true), scrollBlocked = _h[0], setScrollBlocked = _h[1];
    (0, react_1.useEffect)(function () {
        window.addEventListener("resize", function () {
            var _a;
            setIsFocussed(false);
            (_a = selectRef === null || selectRef === void 0 ? void 0 : selectRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        });
    }, []);
    var selectRef = (0, react_1.useRef)(null);
    var containerRef = (0, react_1.useRef)(null);
    var onClick = function (e) {
        var _a;
        if (!isFocussed) {
            setIsFocussed(true);
            (_a = selectRef === null || selectRef === void 0 ? void 0 : selectRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    var onClickOption = function (val) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if ((val === null || val === void 0 ? void 0 : val.length) &&
            (val === null || val === void 0 ? void 0 : val.find(function (option) { return option.value === "all"; })) &&
            hasSelectAll &&
            isMultiSelect) {
            onChange(options);
        }
        else {
            onChange(val);
            if (!isMultiSelect) {
                (_a = selectRef === null || selectRef === void 0 ? void 0 : selectRef.current) === null || _a === void 0 ? void 0 : _a.blur();
                setIsFocussed(false);
            }
        }
    };
    var handleOnCreateOption = function (val) {
        var _a;
        if (onCreateOption) {
            onCreateOption(val);
            setIsFocussed(false);
            (_a = selectRef === null || selectRef === void 0 ? void 0 : selectRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        }
    };
    (0, react_1.useEffect)(function () {
        var delayDebounceFn = setTimeout(function () {
            if (isFocussed) {
                setScrollBlocked(false);
            }
        }, 50);
        return function () { return clearTimeout(delayDebounceFn); };
    }, [isFocussed]);
    return (<div ref={containerRef} className={(0, clsx_1.default)({
            "w-full": fullWidth,
        })}>
        <input_container_1.default key={name} onFocusLost={function () {
            var _a;
            setIsFocussed(false);
            (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.blur();
        }} onClick={onClick} className={(0, clsx_1.default)(className, {
            "bg-white rounded-t-rounded": isFocussed,
        })}>
          {isFocussed && enableSearch ? (<></>) : (<div className="w-full flex text-grey-50 pr-0.5 justify-between pointer-events-none cursor-pointer">
              <input_header_1.default {...{ label: label, required: required, tooltip: tooltip, tooltipContent: tooltipContent }}/>
              <arrow_down_icon_1.default size={16}/>
            </div>)}
          {<GetSelect isCreatable={isCreatable} searchBackend={filterOptions} options={hasSelectAll && isMultiSelect
                ? __spreadArray([{ value: "all", label: "Select All" }], options, true) : options} ref={selectRef} value={value} isMulti={isMultiSelect} openMenuOnFocus={isMultiSelect} isSearchable={enableSearch} isClearable={clearSelected} onChange={onClickOption} onMenuOpen={function () {
                setIsFocussed(true);
            }} onMenuClose={function () {
                setScrollBlocked(true);
                setIsFocussed(false);
            }} closeMenuOnScroll={function (e) {
                var _a;
                if (!scrollBlocked &&
                    ((_a = e.target) === null || _a === void 0 ? void 0 : _a.contains(containerRef.current)) &&
                    e.target !== document) {
                    return true;
                }
            }} closeMenuOnSelect={!isMultiSelect} blurInputOnSelect={!isMultiSelect} styles={{ menuPortal: function (base) { return (__assign(__assign({}, base), { zIndex: 60 })); } }} hideSelectedOptions={false} menuPortalTarget={((_b = portalRef === null || portalRef === void 0 ? void 0 : portalRef.current) === null || _b === void 0 ? void 0 : _b.lastChild) || document.body} menuPlacement="auto" backspaceRemovesValue={false} classNamePrefix="react-select" placeholder={placeholder} className="react-select-container" onCreateOption={handleOnCreateOption} components={{
                DropdownIndicator: function () { return null; },
                IndicatorSeparator: function () { return null; },
                MultiValueRemove: function () { return null; },
                Placeholder: Placeholder,
                MultiValueLabel: MultiValueLabel,
                Option: Option,
                Input: Input,
                Menu: Menu,
                SingleValue: SingleValue,
                ClearIndicator: ClearIndicator,
            }}/>}
          {isFocussed && enableSearch && <div className="w-full h-5"/>}
        </input_container_1.default>
      </div>);
});
var GetSelect = react_1.default.forwardRef(function (_a, ref) {
    var isCreatable = _a.isCreatable, searchBackend = _a.searchBackend, onCreateOption = _a.onCreateOption, handleClose = _a.handleClose, props = __rest(_a, ["isCreatable", "searchBackend", "onCreateOption", "handleClose"]);
    if (isCreatable) {
        return searchBackend ? (<async_creatable_1.default ref={ref} defaultOptions={true} onCreateOption={onCreateOption} isSearchable loadOptions={searchBackend} {...props}/>) : (<creatable_1.default {...props} isSearchable ref={ref} onCreateOption={onCreateOption}/>);
    }
    else if (searchBackend) {
        return (<async_1.default ref={ref} defaultOptions={true} loadOptions={searchBackend} {...props}/>);
    }
    return <react_select_1.default ref={ref} {...props}/>;
});
exports.default = SSelect;
