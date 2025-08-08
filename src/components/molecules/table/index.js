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
exports.TablePagination = void 0;
var clsx_1 = require("clsx");
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var arrow_left_icon_1 = require("../../fundamentals/icons/arrow-left-icon");
var arrow_right_icon_1 = require("../../fundamentals/icons/arrow-right-icon");
var sorting_icon_1 = require("../../fundamentals/icons/sorting-icon");
var actionables_1 = require("../../molecules/actionables");
var filtering_option_1 = require("./filtering-option");
var table_search_1 = require("./table-search");
var Table = react_1.default.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, tableActions = _a.tableActions, enableSearch = _a.enableSearch, immediateSearchFocus = _a.immediateSearchFocus, searchPlaceholder = _a.searchPlaceholder, searchValue = _a.searchValue, handleSearch = _a.handleSearch, filteringOptions = _a.filteringOptions, containerClassName = _a.containerClassName, props = __rest(_a, ["className", "children", "tableActions", "enableSearch", "immediateSearchFocus", "searchPlaceholder", "searchValue", "handleSearch", "filteringOptions", "containerClassName"]);
    if (enableSearch && !handleSearch) {
        throw new Error("Table cannot enable search without a search handler");
    }
    return (<div className={"flex flex-col ".concat(containerClassName)}>
        <div className="w-full flex justify-between mb-2">
          {filteringOptions ? (<div className="flex mb-2 self-end">
              {Array.isArray(filteringOptions)
                ? filteringOptions.map(function (fo) { return <filtering_option_1.default {...fo}/>; })
                : filteringOptions}
            </div>) : (<span aria-hidden/>)}
          <div className="flex items-center">
            {tableActions && <div className="mr-small">{tableActions}</div>}
            {enableSearch && (<table_search_1.default autoFocus={immediateSearchFocus} placeholder={searchPlaceholder} searchValue={searchValue} onSearch={handleSearch}/>)}
          </div>
        </div>
        <table ref={ref} className={(0, clsx_1.default)("w-full table-auto", className)} {...props}>
          {children}
        </table>
      </div>);
});
Table.Head = react_1.default.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (<thead ref={ref} className={(0, clsx_1.default)("whitespace-nowrap inter-small-semibold text-grey-50 border-t border-b border-grey-20", className)} {...props}>
    {children}
  </thead>);
});
Table.HeadRow = react_1.default.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (<tr ref={ref} className={(0, clsx_1.default)(className)} {...props}>
    {children}
  </tr>);
});
Table.HeadCell = react_1.default.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (<th ref={ref} className={(0, clsx_1.default)("text-left h-[40px]", className)} {...props}>
    {children}
  </th>);
});
Table.SortingHeadCell = react_1.default.forwardRef(function (_a, ref) {
    var onSortClicked = _a.onSortClicked, sortDirection = _a.sortDirection, setSortDirection = _a.setSortDirection, className = _a.className, children = _a.children, props = __rest(_a, ["onSortClicked", "sortDirection", "setSortDirection", "className", "children"]);
    return (<th ref={ref} className={(0, clsx_1.default)("text-left py-2.5", className)} {...props}>
        <div className="flex items-center cursor-pointer select-none" onClick={function (e) {
            e.preventDefault();
            if (!sortDirection) {
                setSortDirection("ASC");
            }
            else {
                if (sortDirection === "ASC") {
                    setSortDirection("DESC");
                }
                else {
                    setSortDirection(undefined);
                }
            }
            onSortClicked();
        }}>
          {children}
          <sorting_icon_1.default size={16} ascendingColor={sortDirection === "ASC" ? "#111827" : undefined} descendingColor={sortDirection === "DESC" ? "#111827" : undefined}/>
        </div>
      </th>);
});
Table.Body = react_1.default.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    return (<tbody ref={ref} className={(0, clsx_1.default)(className)} {...props}>
    {children}
  </tbody>);
});
Table.Cell = react_1.default.forwardRef(function (_a, ref) {
    var className = _a.className, linkTo = _a.linkTo, children = _a.children, props = __rest(_a, ["className", "linkTo", "children"]);
    return (<td ref={ref} className={(0, clsx_1.default)("inter-small-regular h-[40px]", className)} {...props} {...(linkTo && {
        onClick: function (e) {
            (0, gatsby_1.navigate)(linkTo);
            e.stopPropagation();
        },
    })}>
      {children}
    </td>);
});
Table.Row = react_1.default.forwardRef(function (_a, ref) {
    var className = _a.className, actions = _a.actions, children = _a.children, linkTo = _a.linkTo, forceDropdown = _a.forceDropdown, props = __rest(_a, ["className", "actions", "children", "linkTo", "forceDropdown"]);
    return (<tr ref={ref} className={(0, clsx_1.default)("inter-small-regular border-t border-b border-grey-20 text-grey-90", className, { "cursor-pointer hover:bg-grey-5": linkTo !== undefined })} {...props} {...(linkTo && {
        onClick: function () {
            (0, gatsby_1.navigate)(linkTo);
        },
    })}>
      {children}
      {actions && (<Table.Cell onClick={function (e) { return e.stopPropagation(); }} className="w-[32px]">
          <actionables_1.default forceDropdown={forceDropdown} actions={actions}/>
        </Table.Cell>)}
    </tr>);
});
var TablePagination = function (_a) {
    var _b, _c, _d, _e;
    var className = _a.className, _f = _a.title, title = _f === void 0 ? "Elements" : _f, currentPage = _a.currentPage, pageCount = _a.pageCount, pageSize = _a.pageSize, count = _a.count, offset = _a.offset, nextPage = _a.nextPage, prevPage = _a.prevPage, hasNext = _a.hasNext, hasPrev = _a.hasPrev;
    var soothedOffset = count > 0 ? offset + 1 : 0;
    var soothedPageCount = Math.max(1, pageCount);
    return (<div className={(0, clsx_1.default)("flex w-full justify-between inter-small-regular text-grey-50 mt-14", className)}>
      <div>{"".concat(soothedOffset, " - ").concat(pageSize, " of ").concat(count, " ").concat(title)}</div>
      <div className="flex space-x-4">
        <div>{"".concat(currentPage, " of ").concat(soothedPageCount)}</div>
        <div className="flex space-x-4 items-center">
          <div className={(0, clsx_1.default)((_b = {}, _b["text-grey-30"] = !hasPrev, _b), (_c = {}, _c["cursor-pointer"] = hasPrev, _c))} onClick={function () { return prevPage(); }}>
            <arrow_left_icon_1.default />
          </div>
          <div className={(0, clsx_1.default)((_d = {}, _d["text-grey-30"] = !hasNext, _d), (_e = {}, _e["cursor-pointer"] = hasNext, _e))} onClick={function () { return nextPage(); }}>
            <arrow_right_icon_1.default />
          </div>
        </div>
      </div>
    </div>);
};
exports.TablePagination = TablePagination;
exports.default = Table;
