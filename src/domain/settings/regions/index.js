"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var spinner_1 = require("../../../components/atoms/spinner");
var plus_icon_1 = require("../../../components/fundamentals/icons/plus-icon");
var breadcrumb_1 = require("../../../components/molecules/breadcrumb");
var body_card_1 = require("../../../components/organisms/body-card");
var radio_group_1 = require("../../../components/organisms/radio-group");
var two_split_pane_1 = require("../../../components/templates/two-split-pane");
var fulfillment_providers_mapper_1 = require("../../../utils/fulfillment-providers.mapper");
var payment_providers_mapper_1 = require("../../../utils/payment-providers-mapper");
var details_1 = require("./details");
var new_1 = require("./new");
var Regions = function () {
    var _a = (0, medusa_react_1.useAdminRegions)(), regions = _a.regions, isLoading = _a.isLoading, refetch = _a.refetch;
    var _b = (0, react_1.useState)(undefined), selectedRegion = _b[0], setSelectedRegion = _b[1];
    var _c = (0, react_1.useState)(false), addRegion = _c[0], setAddRegion = _c[1];
    (0, react_1.useEffect)(function () {
        var setRegion = function () {
            var _a;
            if (!isLoading && selectedRegion === null) {
                setSelectedRegion((_a = regions === null || regions === void 0 ? void 0 : regions[0]) === null || _a === void 0 ? void 0 : _a.id);
            }
        };
        setRegion();
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
        <breadcrumb_1.default previousRoute="/a/settings" previousBreadcrumb="Settings" currentPage="Regions"/>
        <two_split_pane_1.default>
          <body_card_1.default title="Regions" subtitle="Manage the markets that you will operate within" actionables={[
            {
                icon: <plus_icon_1.default />,
                label: "Add region",
                onClick: function () { return setAddRegion(!addRegion); },
            },
        ]}>
            {isLoading || !regions ? (<div className="flex-grow h-full flex items-center justify-center">
                <spinner_1.default size="large" variant="secondary"/>
              </div>) : (<radio_group_1.default.Root value={selectedRegion} onValueChange={setSelectedRegion}>
                {regions.map(function (r) {
                var providers = "Payment providers: ".concat(r.payment_providers
                    .map(function (pp) { return (0, payment_providers_mapper_1.default)(pp.id).label; })
                    .join(", ") || "not configured", " - Fulfillment providers: ").concat(r.fulfillment_providers
                    .map(function (fp) { return (0, fulfillment_providers_mapper_1.default)(fp.id).label; })
                    .join(", ") || "not configured");
                return (<radio_group_1.default.Item label={r.name} sublabel={r.countries.length
                        ? "(".concat(r.countries
                            .map(function (c) { return c.display_name; })
                            .join(", "), ")")
                        : undefined} description={providers} value={r.id} key={r.id} id={r.id}></radio_group_1.default.Item>);
            })}
              </radio_group_1.default.Root>)}
          </body_card_1.default>
          {selectedRegion && (<details_1.default id={selectedRegion} onDelete={handleDelete} handleSelect={handleSelect}/>)}
        </two_split_pane_1.default>
      </div>
      {addRegion && (<new_1.default onClick={function () { return setAddRegion(!addRegion); }} onDone={handleSelect}/>)}
    </>);
};
exports.default = Regions;
