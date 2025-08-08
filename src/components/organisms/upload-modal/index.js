"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var modal_1 = require("../../molecules/modal");
var button_1 = require("../../fundamentals/button");
var plus_icon_1 = require("../../fundamentals/icons/plus-icon");
var clsx_1 = require("clsx");
var file_icon_1 = require("../../fundamentals/icons/file-icon");
var trash_icon_1 = require("../../fundamentals/icons/trash-icon");
var download_icon_1 = require("../../fundamentals/icons/download-icon");
var x_circle_icon_1 = require("../../fundamentals/icons/x-circle-icon");
var check_circle_icon_1 = require("../../fundamentals/icons/check-circle-icon");
var warning_circle_1 = require("../../fundamentals/icons/warning-circle");
/**
 * "Add manually" component.
 */
function AddManuallyButton(props) {
    return (<div className="flex justify-center items-center gap-2
        font-semibold
        text-small
        rounded-xl border border-1 p-2" role="button">
      <plus_icon_1.default size={18}/>
      <span>{props.text}</span>
    </div>);
}
/**
 * Render an upload file summary (& upload progress).
 */
function FileSummary(props) {
    var action = props.action, name = props.name, progress = props.progress, size = props.size;
    var formattedSize = "".concat((size / 1000000).toFixed(2), " MB");
    return (<div className="relative">
      <div style={{ width: "".concat(progress, "%") }} className="absolute bg-grey-5 h-full transition-width duration-150 ease-in-out"/>
      <div className="relative flex items-center rounded-xl border border-1 mt-6">
        <div className="m-4">
          <file_icon_1.default size={30} fill={progress ? "#9CA3AF" : "#2DD4BF"}/>
        </div>

        <div className="flex-1 my-6">
          <div className="text-small leading-5 text-grey-90">{name}</div>
          <div className="text-xsmall leading-4 text-grey-50">
            {progress ? "Uploading..." : formattedSize}
          </div>
        </div>

        <div className="m-6">{action}</div>
      </div>
    </div>);
}
/**
 * Render a batch update request summary.
 */
function UploadSummary(props) {
    var products = props.products, updates = props.updates, rejections = props.rejections;
    return (<div className="flex gap-6">
      <div className="flex items-center text-small text-grey-90">
        <check_circle_icon_1.default color="#9CA3AF" className="mr-2"/>
        <span className="font-semibold"> {products}&nbsp;</span> products
      </div>
      <div className="flex items-center text-small text-grey-90">
        <warning_circle_1.default fill="#9CA3AF" className="mr-2"/>
        <span className="font-semibold">{updates}&nbsp;</span> updates
      </div>
      <div className="flex items-center text-small text-grey-90">
        <x_circle_icon_1.default color="#9CA3AF" className="mr-2"/>
        <span className="font-semibold">{rejections}&nbsp;</span> rejections
      </div>
    </div>);
}
/**
 * Component handles an CSV file drop.
 */
function DropArea(props) {
    var _a = (0, react_1.useState)(false), isDragOver = _a[0], setIsDragOver = _a[1];
    var handleFileDrop = function (e) {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);
        if ((_a = e.dataTransfer.items) === null || _a === void 0 ? void 0 : _a.length) {
            props.onUpload(e.dataTransfer.items[0].getAsFile());
        }
    };
    var handleFileSelect = function (e) {
        props.onUpload(e.target.files[0]);
    };
    var onDragOver = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    return (<div onDragEnter={function () { return setIsDragOver(true); }} onDragLeave={function () { return setIsDragOver(false); }} onDragOver={onDragOver} onDrop={handleFileDrop} className={(0, clsx_1.default)("flex flex-col justify-center items-center border border-dashed rounded-xl mt-3 p-6", { "opacity-50": isDragOver })}>
      <span className="text-grey-50 text-small">
        Drop your {props.fileTitle} file here, or
        <a className="text-violet-60">
          <label className="cursor-pointer" htmlFor="upload-form-file">
            {" "}
            click to browse.
          </label>
          <input type="file" id="upload-form-file" className="hidden" 
    // multiple
    accept="text/csv" onChange={handleFileSelect}/>
        </a>
      </span>
      <span className="text-grey-40 text-small">
        Only .csv files are supported.
      </span>
    </div>);
}
/**
 * Upload prices modal.
 */
function UploadModal(props) {
    var actionButtonText = props.actionButtonText, description1Text = props.description1Text, description2Text = props.description2Text, description2Title = props.description2Title, fileTitle = props.fileTitle, onUploadComplete = props.onUploadComplete, onClose = props.onClose;
    // TODO: remove hardcoded progress
    var _a = (0, react_1.useState)(20), progress = _a[0], setProgress = _a[1];
    var _b = (0, react_1.useState)(), uploadFile = _b[0], setUploadFile = _b[1];
    var _c = uploadFile || {}, name = _c.name, size = _c.size;
    var onUpload = function (f) {
        setUploadFile(f);
        onUploadComplete();
    };
    var removeFile = function () {
        setUploadFile(undefined);
        // TODO: call an endpoint to remove file from the processing queue
    };
    return (<modal_1.default open handleClose={onClose}>
      <modal_1.default.Body>
        <modal_1.default.Content>
          <div className="flex flex-col">
            <span className="text-2xl text-grey-90 inter-large-semibold py-4">
              Import {fileTitle}
            </span>
          </div>

          <div className="text-grey-90 text-base inter-large-semibold mb-1">
            Import {fileTitle}
          </div>

          <p className="text-grey-50 mb-4 text-base">{description1Text}</p>

          {!uploadFile ? (<AddManuallyButton text={actionButtonText}/>) : (<UploadSummary products={20} updates={1} rejections={4}/>)}

          {!uploadFile ? (<DropArea onUpload={onUpload}/>) : (<FileSummary size={size} name={name} progress={progress} action={<a className="w-6 h-6 cursor-pointer" onClick={removeFile}>
                  <trash_icon_1.default stroke="#9CA3AF"/>
                </a>}/>)}

          <div className="text-grey-90 text-base inter-large-semibold mt-8">
            {description2Title}
          </div>

          <p className="text-grey-50 mb-2 text-base">{description2Text}</p>

          <FileSummary name="medusa-template-product-list.csv" size={624220000} action={
        // TODO: download actual file on click
        <a className="w-6 h-6 cursor-pointer" onClick={console.log}>
                <download_icon_1.default stroke="#9CA3AF"/>
              </a>}/>

          <div className="h-2"/>
        </modal_1.default.Content>
        <modal_1.default.Footer>
          <div className="flex w-full h-8 justify-between">
            <button_1.default variant="secondary" className="mr-2 text-small justify-center" size="small" onClick={onClose}>
              Cancel
            </button_1.default>
            <div className="flex gap-2">
              <button_1.default size="small" disabled={!uploadFile} variant="secondary" className="text-small text-rose-50" onClick={console.log}>
                Override existing list
              </button_1.default>

              <button_1.default size="small" disabled={!uploadFile} variant="primary" className="text-small" onClick={console.log}>
                Add to existing list
              </button_1.default>
            </div>
          </div>
        </modal_1.default.Footer>
      </modal_1.default.Body>
    </modal_1.default>);
}
exports.default = UploadModal;
