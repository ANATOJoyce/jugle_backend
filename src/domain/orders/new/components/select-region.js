"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var stepped_modal_1 = require("../../../../components/molecules/modal/stepped-modal");
var select_1 = require("../../../../components/molecules/select");
var SelectRegionScreen = function (_a) {
    var handleRegionSelect = _a.handleRegionSelect, region = _a.region, options = _a.options;
    var _b = react_1.default.useContext(stepped_modal_1.SteppedContext), enableNextPage = _b.enableNextPage, disableNextPage = _b.disableNextPage;
    (0, react_1.useEffect)(function () {
        if (!region) {
            disableNextPage();
        }
    }, []);
    return (<div className="flex flex-col min-h-[705px]">
      <span className="inter-base-semibold mb-4">Choose region</span>
      <select_1.default label={"Region"} value={region ? { value: region, label: region.name } : null} onChange={function (option) {
            if (option) {
                enableNextPage();
            }
            else {
                disableNextPage();
            }
            handleRegionSelect(option);
        }} options={options}/>
    </div>);
};
exports.default = SelectRegionScreen;
