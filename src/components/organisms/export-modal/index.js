"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("../../fundamentals/button");
var modal_1 = require("../../molecules/modal");
var ExportModal = function (_a) {
    var handleClose = _a.handleClose, title = _a.title, loading = _a.loading, onSubmit = _a.onSubmit;
    return (<modal_1.default handleClose={handleClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={handleClose}>
          <span className="inter-xlarge-semibold">{title}</span>
        </modal_1.default.Header>
        <modal_1.default.Content>
          {/* TODO: Add filtering
        <div className="flex inter-small-semibold mb-2">Current filters</div>
        <div className="flex mb-4 inter-small-regular text-grey-50">
          You havn’t applied any filtering. Remember that the export list
          feature in many ways are controlled by how you filter the list
          overview.
        </div> */}
          <div className="flex mb-4 inter-small-regular text-grey-50">
            Initialize an export of your data
          </div>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="w-full flex justify-end">
            <button_1.default variant="ghost" size="small" onClick={handleClose} className="mr-2">
              Cancel
            </button_1.default>
            <button_1.default loading={loading} variant="primary" size="small" onClick={onSubmit}>
              Export
            </button_1.default>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = ExportModal;
