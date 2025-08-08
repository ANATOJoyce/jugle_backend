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
var medusa_react_1 = require("medusa-react");
var clsx_1 = require("clsx");
var react_1 = require("react");
var react_table_1 = require("react-table");
var spinner_1 = require("../../../components/atoms/spinner");
var plus_icon_1 = require("../../../components/fundamentals/icons/plus-icon");
var table_1 = require("../../../components/molecules/table");
var body_card_1 = require("../../../components/organisms/body-card");
var use_tax_rate_columns_1 = require("./use-tax-rate-columns");
var new_1 = require("./new");
var edit_1 = require("./edit");
var tax_rate_row_1 = require("./tax-rate-row");
var region_form_1 = require("./region-form");
var shared_1 = require("../../../types/shared");
var DEFAULT_PAGESIZE = 10;
var TaxDetails = function (_a) {
    var _b;
    var id = _a.id;
    if (!id) {
        return null;
    }
    var _c = (0, react_1.useState)({
        limit: DEFAULT_PAGESIZE,
        offset: 0,
    }), pagination = _c[0], setPagination = _c[1];
    var _d = (0, react_1.useState)(false), showNew = _d[0], setShowNew = _d[1];
    var _e = (0, react_1.useState)(null), editRate = _e[0], setEditRate = _e[1];
    var _f = (0, react_1.useState)([]), tableEntries = _f[0], setTableEntries = _f[1];
    var _g = (0, medusa_react_1.useAdminTaxRates)(__assign({ region_id: id }, pagination)), tax_rates = _g.tax_rates, taxRatesLoading = _g.isLoading;
    var _h = (0, medusa_react_1.useAdminRegion)(id), region = _h.region, regionIsLoading = _h.isLoading;
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (!taxRatesLoading && !regionIsLoading && region && tax_rates) {
            var regionDefaultRate = {
                id: region.id,
                name: "Default",
                code: (_a = region.tax_code) !== null && _a !== void 0 ? _a : null,
                rate: (_b = region.tax_rate) !== null && _b !== void 0 ? _b : null,
                type: shared_1.TaxRateType.REGION,
            };
            setTableEntries(__spreadArray([
                regionDefaultRate
            ], tax_rates.map(function (tr) {
                return {
                    id: tr.id,
                    name: tr.name,
                    code: tr.code,
                    rate: tr.rate,
                    type: shared_1.TaxRateType.RATE,
                };
            }), true));
        }
    }, [taxRatesLoading, regionIsLoading, region, tax_rates]);
    var columns = (0, use_tax_rate_columns_1.default)()[0];
    var _j = (0, react_table_1.useTable)({
        columns: columns,
        data: tableEntries || [],
        manualPagination: true,
        autoResetPage: false,
    }), getTableProps = _j.getTableProps, getTableBodyProps = _j.getTableBodyProps, headerGroups = _j.headerGroups, rows = _j.rows, prepareRow = _j.prepareRow;
    return (<>
      <body_card_1.default title="Details" actionables={[
            {
                label: "New Tax Rate",
                onClick: function () { return setShowNew(true); },
                icon: <plus_icon_1.default />,
            },
        ]}>
        <table_1.default {...getTableProps()} className={(0, clsx_1.default)((_b = {}, _b["relative"] = regionIsLoading, _b))}>
          <table_1.default.Head>
            {headerGroups === null || headerGroups === void 0 ? void 0 : headerGroups.map(function (headerGroup, index) { return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(function (col, headerIndex) { return (<table_1.default.HeadCell {...col.getHeaderProps()}>
                    {col.render("Header")}
                  </table_1.default.HeadCell>); })}
              </table_1.default.HeadRow>); })}
          </table_1.default.Head>
          {regionIsLoading || taxRatesLoading ? (<div className="flex w-full h-full absolute items-center justify-center mt-10">
              <div className="">
                <spinner_1.default size={"large"} variant={"secondary"}/>
              </div>
            </div>) : (<table_1.default.Body {...getTableBodyProps()}>
              {rows.map(function (row) {
                prepareRow(row);
                return (<tax_rate_row_1.TaxRateRow key={row.original.id} onEdit={setEditRate} row={row}/>);
            })}
            </table_1.default.Body>)}
        </table_1.default>
        <h3 className="inter-large-semibold mt-2xlarge mb-base">
          Tax Calculation Settings
        </h3>
        <div className="flex flex-1">
          {!regionIsLoading && <region_form_1.RegionTaxForm region={region}/>}
        </div>
      </body_card_1.default>
      {showNew && (<new_1.default regionId={id} onDismiss={function () { return setShowNew(false); }}/>)}
      {editRate && (<edit_1.default regionId={id} taxRate={editRate} taxRateId={editRate.id} onDismiss={function () { return setEditRate(null); }}/>)}
    </>);
};
exports.default = TaxDetails;
