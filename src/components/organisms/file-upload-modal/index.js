"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var file_upload_field_1 = require("../../atoms/file-upload-field");
var modal_1 = require("../../molecules/modal");
var FileUploadModal = function (_a) {
    var handleClose = _a.handleClose, filetypes = _a.filetypes, setFiles = _a.setFiles;
    return (<modal_1.default handleClose={handleClose}>
      <modal_1.default.Body>
        <modal_1.default.Header handleClose={handleClose}>
          <span className="inter-xlarge-semibold">Upload a new photo</span>
        </modal_1.default.Header>
        <modal_1.default.Content>
          <div className="h-96">
            <file_upload_field_1.default filetypes={filetypes} onFileChosen={setFiles}/>
          </div>
        </modal_1.default.Content>
      </modal_1.default.Body>
    </modal_1.default>);
};
exports.default = FileUploadModal;
