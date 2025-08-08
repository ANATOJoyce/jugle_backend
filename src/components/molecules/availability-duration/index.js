"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iso8601_duration_1 = require("iso8601-duration");
var react_1 = require("react");
var input_1 = require("../input");
var getValue = function (e) {
    return parseFloat(e.target.value);
};
var AvailabilityDuration = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    var duration = value ? (0, iso8601_duration_1.parse)(value) : {};
    var _b = (0, react_1.useState)(duration.years || 0), durationYears = _b[0], setDurationYears = _b[1];
    var _c = (0, react_1.useState)(duration.months || 0), durationMonths = _c[0], setDurationMonths = _c[1];
    var _d = (0, react_1.useState)(duration.days || 0), durationDays = _d[0], setDurationDays = _d[1];
    var _e = (0, react_1.useState)(duration.hours || 0), durationHours = _e[0], setDurationHours = _e[1];
    var _f = (0, react_1.useState)(duration.minutes || 0), durationMinutes = _f[0], setDurationMinutes = _f[1];
    (0, react_1.useEffect)(function () {
        var isoString = "P".concat(durationYears || 0, "Y").concat(durationMonths || 0, "M").concat(durationDays || 0, "DT").concat(durationHours || 0, "H").concat(durationMinutes || 0, "M");
        onChange(isoString);
    }, [
        durationYears,
        durationMonths,
        durationDays,
        durationHours,
        durationMinutes,
    ]);
    return (<div>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-xsmall gap-y-base mt-xlarge">
        <input_1.default label="Years" type="number" placeholder="0" value={durationYears} onChange={function (e) { return setDurationYears(getValue(e)); }} min={0}/>
        <input_1.default label="Months" type="number" placeholder="0" value={durationMonths} onChange={function (e) { return setDurationMonths(getValue(e)); }} min={0}/>
        <input_1.default label="Days" type="number" placeholder="0" value={durationDays} onChange={function (e) { return setDurationDays(getValue(e)); }} min={0}/>
        <input_1.default label="Hours" type="number" placeholder="0" value={durationHours} onChange={function (e) { return setDurationHours(getValue(e)); }} min={0}/>
        <input_1.default label="Minutes" type="number" placeholder="0" value={durationMinutes} onChange={function (e) { return setDurationMinutes(getValue(e)); }} min={0}/>
      </div>
    </div>);
};
exports.default = AvailabilityDuration;
