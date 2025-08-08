"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var spinner_1 = require("../../../components/atoms/spinner");
var gear_icon_1 = require("../../../components/fundamentals/icons/gear-icon");
var breadcrumb_1 = require("../../../components/molecules/breadcrumb");
var body_card_1 = require("../../../components/organisms/body-card");
var radio_group_1 = require("../../../components/organisms/radio-group");
var two_split_pane_1 = require("../../../components/templates/two-split-pane");
var details_1 = require("./details");
var Taxes = function () {
    var _a = (0, medusa_react_1.useAdminRegions)(), regions = _a.regions, isLoading = _a.isLoading, refetch = _a.refetch;
    var _b = (0, react_1.useState)(undefined), selectedRegion = _b[0], setSelectedRegion = _b[1];
    (0, react_1.useEffect)(function () {
        if (!isLoading && regions && selectedRegion === null) {
            setSelectedRegion(regions[0].id);
        }
    }, [regions, isLoading, selectedRegion]);
    var handleDelete = function () {
        refetch().then(function (_a) {
            var _b, _c, _d;
            var data = _a.data;
            var id = (_c = (_b = data === null || data === void 0 ? void 0 : data.regions) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.id;
            if (!id) {
                return;
            }
            setSelectedRegion(id);
            (_d = document.getElementById(id)) === null || _d === void 0 ? void 0 : _d.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        });
    };
    var handleSelect = function (id) {
        refetch().then(function () {
            var _a;
            setSelectedRegion(id);
            (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
                behavior: "smooth",
            });
        });
    };
    return (<>
      <div>
        <breadcrumb_1.default previousRoute="/a/settings" previousBreadcrumb="Settings" currentPage="Taxes"/>
        <two_split_pane_1.default threeCols>
          <body_card_1.default forceDropdown title="Regions" subtitle="Select the region you wish to manage taxes for" actionables={[
            {
                icon: <gear_icon_1.default />,
                label: "Go to Region settings",
                onClick: function () { return (0, gatsby_1.navigate)("/a/settings/regions"); },
            },
        ]}>
            {isLoading || !regions ? (<div className="flex-grow h-full flex items-center justify-center">
                <spinner_1.default size="large" variant="secondary"/>
              </div>) : (<radio_group_1.default.Root value={selectedRegion} onValueChange={setSelectedRegion}>
                {regions.map(function (r) {
                return (<radio_group_1.default.Item label={r.name} description={r.countries.length
                        ? "".concat(r.countries
                            .map(function (c) { return c.display_name; })
                            .join(", "))
                        : undefined} value={r.id} key={r.id} id={r.id}/>);
            })}
              </radio_group_1.default.Root>)}
          </body_card_1.default>
          <details_1.default id={selectedRegion} onDelete={handleDelete} handleSelect={handleSelect}/>
        </two_split_pane_1.default>
      </div>
    </>);
};
exports.default = Taxes;
