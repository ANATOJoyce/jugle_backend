"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("../../../components/fundamentals/button");
var modal_1 = require("../../../components/molecules/modal");
var select_1 = require("../../../components/molecules/select");
var EditGiftCardModal = function (_a) {
    var handleClose = _a.handleClose, handleSave = _a.handleSave, updating = _a.updating, regions = _a.regions, region = _a.region;
    // const [code, setCode] = useState(giftCard.code)
    var _b = (0, react_1.useState)({
        value: region.id,
        label: region.name,
    }), selectedRegion = _b[0], setSelectedRegion = _b[1];
    var onSubmit = function (e) {
        e.preventDefault();
        if (handleSave) {
            handleSave({ region_id: selectedRegion.value });
        }
    };
    var regionOptions = regions.map(function (r) { return ({
        label: r.name,
        value: r.id,
    }); });
    return (<modal_1.default handleClose={handleClose} isLargeModal={true}>
      <form onSubmit={function (e) { return onSubmit(e); }}>
        <modal_1.default.Body isLargeModal={true}>
          <modal_1.default.Header handleClose={handleClose}>
            <span className="inter-xlarge-semibold">
              Edit Gift Card Details
            </span>
          </modal_1.default.Header>
          <modal_1.default.Content>
            {/* TODO: Missing backend support for updating code
        <InputField
          label="Code"
          name="code"
          value={code}
          onChange={({ currentTarget }) => setCode(currentTarget.value)}
          className="mb-4"
        /> */}
            <select_1.default label="Region" options={regionOptions} value={selectedRegion} onChange={setSelectedRegion}/>
          </modal_1.default.Content>
          <modal_1.default.Footer>
            <div className="w-full flex justify-end">
              <button_1.default variant="ghost" size="small" onClick={handleClose} className="mr-2" type="button">
                Cancel
              </button_1.default>
              <button_1.default loading={updating} variant="primary" className="min-w-[100px]" size="small" type="submit">
                Save
              </button_1.default>
            </div>
          </modal_1.default.Footer>
        </modal_1.default.Body>
      </form>
    </modal_1.default>);
};
exports.default = EditGiftCardModal;
