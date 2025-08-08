"use strict";
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
var react_1 = require("react");
var DropdownMenu = require("@radix-ui/react-dropdown-menu");
var lodash_1 = require("lodash");
var plus_icon_1 = require("../../fundamentals/icons/plus-icon");
var button_1 = require("../../fundamentals/button");
var cross_icon_1 = require("../../fundamentals/icons/cross-icon");
var checkbox_1 = require("../../atoms/checkbox");
/******************** COMPONENTS ********************/
/**
 * Table field chip component.
 */
function Chip(props) {
    var remove = props.remove, short = props.short;
    return (<div className="rounded-lg h-[32px] inline-flex gap-1 shrink-0 items-center text-small text-grey-70 border border-gray-70 px-3 mr-1 last:mr-2">
      {short}
      <cross_icon_1.default className="text-grey-40 cursor-pointer" onClick={remove} size={13}/>
    </div>);
}
/**
 * `FieldMenu` item component.
 */
function FieldMenuItem(props) {
    var checked = props.checked, field = props.field, onChange = props.onChange;
    return (<DropdownMenu.Item>
      <checkbox_1.default checked={checked} className="px-[6px] mx-2 h-[32px] hover:bg-grey-10 rounded text-small" onChange={onChange} label={typeof field.label === "function"
            ? field.label({ isSelected: props.checked })
            : field.label}/>
    </DropdownMenu.Item>);
}
/******************** CONTAINERS ********************/
/**
 * The dropdown menu for selecting currently active table fields.
 */
function FieldsMenu(props) {
    var fields = props.fields, onBlur = props.onBlur, selectedFields = props.selectedFields;
    var contentRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    // local copy of selected filters which is synced with the container list on blur
    var _b = (0, react_1.useState)([]), currentlySelected = _b[0], setCurrentlySelected = _b[1];
    var onTriggerClick = function () {
        setOpen(true);
    };
    var toggleCheck = function (id) {
        if (currentlySelected.includes(id)) {
            setCurrentlySelected(currentlySelected.filter(function (f) { return f !== id; }));
        }
        else {
            setCurrentlySelected(__spreadArray(__spreadArray([], currentlySelected, true), [id], false));
        }
    };
    (0, react_1.useEffect)(function () {
        if (open) {
            setCurrentlySelected(selectedFields);
        }
    }, [open, selectedFields]);
    (0, react_1.useEffect)(function () {
        if (!open) {
            onBlur(currentlySelected);
        }
    }, [open]);
    // close dropdown "manually" on click outside the menu
    (0, react_1.useEffect)(function () {
        var handleClickOutside = function (event) {
            var _a;
            if (!((_a = contentRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [contentRef]);
    return (<DropdownMenu.Root open={open}>
      <DropdownMenu.Trigger>
        <button_1.default onClick={onTriggerClick} variant="secondary" className="rounded-lg h-[32px] px-3 text-small font-semibold text-grey-90 inline-flex">
          <span className="flex whitespace-nowrap items-center gap-1">
            Add fields <plus_icon_1.default size={14}/>
          </span>
        </button_1.default>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content ref={contentRef} className="w-[240px] bg-white shadow rounded-xl p-2">
        {fields.map(function (f) { return (<FieldMenuItem key={f.id} field={f} onChange={function () { return toggleCheck(f.id); }} checked={currentlySelected.includes(f.id)}/>); })}
      </DropdownMenu.Content>
    </DropdownMenu.Root>);
}
/**
 * Table fields filter root container.
 */
function TableFieldsFilters(props) {
    var fields = props.fields, onChange = props.onChange;
    var _a = (0, react_1.useState)([]), selectedFields = _a[0], setSelectedFields = _a[1];
    (0, react_1.useEffect)(function () {
        onChange(selectedFields);
    }, [selectedFields]);
    var removeSelected = function (id) {
        setSelectedFields(selectedFields.filter(function (f) { return f !== id; }));
    };
    var _selected = __spreadArray([], selectedFields, true);
    _selected.sort(function (a, b) { return a.localeCompare(b); });
    var visibleFields = _selected.map(function (id) { return fields.find(function (f) { return f.id === id; }); });
    return (<div className="flex-wrap flex items-center gap-y-2">
      <span className="text-small font-semibold whitespace-nowrap text-gray-500 mr-2">
        Currently editing these fields:
      </span>

      {visibleFields.map(function (f) { return (<Chip key={f.id} remove={function () { return removeSelected(f.id); }} {...f}/>); })}

      <FieldsMenu fields={(0, lodash_1.sortBy)(fields, "id")} onBlur={setSelectedFields} selectedFields={_selected}/>
    </div>);
}
exports.default = TableFieldsFilters;
