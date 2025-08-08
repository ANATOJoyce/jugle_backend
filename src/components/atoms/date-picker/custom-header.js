"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var native_select_1 = require("../../molecules/native-select");
var utils_1 = require("./utils");
var CustomHeader = function (_a) {
    var date = _a.date, changeYear = _a.changeYear, changeMonth = _a.changeMonth;
    var month = date.getMonth();
    var monthName = utils_1.monthNames[month];
    var year = date.getFullYear();
    return (<div className="flex w-full gap-4 items-center">
      <div className="flex flex-1 items-center justify-end gap-3">
        <native_select_1.default defaultValue={monthName} onValueChange={function (v) { return changeMonth(utils_1.monthNames.indexOf(v)); }}>
          {utils_1.monthNames.map(function (month) { return (<native_select_1.default.Item key={month} value={month}>
              {month}
            </native_select_1.default.Item>); })}
        </native_select_1.default>
      </div>
      <div className="flex flex-1 items-center justify-start gap-3">
        <native_select_1.default defaultValue={year.toString()} onValueChange={function (v) { return changeYear(parseInt(v, 10)); }}>
          {(0, utils_1.getYearRange)().map(function (year) { return (<native_select_1.default.Item key={year} value={year.toString()}>
              {year.toString()}
            </native_select_1.default.Item>); })}
        </native_select_1.default>
      </div>
    </div>);
};
exports.default = CustomHeader;
