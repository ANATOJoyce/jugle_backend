"use strict";
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
var react_1 = require("react");
var file_upload_field_1 = require("../../../../components/atoms/file-upload-field");
var button_1 = require("../../../../components/fundamentals/button");
var trash_icon_1 = require("../../../../components/fundamentals/icons/trash-icon");
var input_1 = require("../../../../components/molecules/input");
var modal_1 = require("../../../../components/molecules/modal");
var layered_modal_1 = require("../../../../components/molecules/modal/layered-modal");
var select_1 = require("../../../../components/molecules/select");
var api_1 = require("../../../../services/api");
var RMAReturnReasonSubModal = function (_a) {
    var onSubmit = _a.onSubmit, reason = _a.reason, existingNote = _a.existingNote, _b = _a.customReturnOptions, customReturnOptions = _b === void 0 ? undefined : _b, addImage = _a.addImage, images = _a.images, _c = _a.isLargeModal, isLargeModal = _c === void 0 ? true : _c;
    var pop = (0, react_1.useContext)(layered_modal_1.LayeredModalContext).pop;
    var return_reasons = (0, medusa_react_1.useAdminReturnReasons)().return_reasons;
    var _d = (0, react_1.useState)(existingNote || ""), note = _d[0], setNote = _d[1];
    var _e = (0, react_1.useState)([]), files = _e[0], setFiles = _e[1];
    var _f = (0, react_1.useState)(reason ? { value: reason, label: reason.label } : null), selectedReason = _f[0], setSelectedReason = _f[1];
    var onFileChosen = function (file) {
        setFiles(function (files) { return __spreadArray(__spreadArray([], files, true), file, true); });
    };
    var removeFileFromList = function (file) {
        var newFiles = __spreadArray([], files, true);
        newFiles.splice(newFiles.indexOf(file), 1);
        setFiles(newFiles);
    };
    var handleImageDelete = function (url) {
        api_1.default.uploads.delete(url);
    };
    var onChange = function (value) {
        setNote(value.target.value);
    };
    return (<>
      <modal_1.default.Content isLargeModal={isLargeModal}>
        <div className="h-full">
          <h2 className="inter-base-semibold mb-4">Reason for Return</h2>
          <select_1.default label="Reason" value={selectedReason} onChange={setSelectedReason} options={customReturnOptions ||
            (return_reasons === null || return_reasons === void 0 ? void 0 : return_reasons.map(function (rr) { return ({ value: rr, label: rr.label }); })) ||
            []}/>
          <input_1.default label={"Note"} value={note} className="my-4" onChange={function (val) { return onChange(val); }}/>
          {addImage && (<div>
              {images &&
                images.map(function (i) { return (<ImageRow url={i} name={i.split("//").pop()} size={undefined} onDelete={function () { return handleImageDelete(i); }}/>); })}
              {files.map(function (f) { return (<ImageRow url={window.URL.createObjectURL(f)} name={f.name} size={(f.size / 1000).toFixed(2)} onDelete={function () { return removeFileFromList(f); }}/>
            // <div className="flex items-center w-full justify-between my-8">
            //   <div className="flex items-center">
            //     <div className="w-20 h-20 bg-voilet-60">
            //       <img
            //         className="object-cover rounded-rounded w-full h-full"
            //         src={window.URL.createObjectURL(f)}
            //       />
            //     </div>
            //     <div className="inter-small-regular ml-8 flex flex-col">
            //       {f.name}
            //       <span className="text-grey-50">
            //         {(f.size / 1000).toFixed(2)} KB
            //       </span>
            //     </div>
            //   </div>
            //   <Button
            //     variant="ghost"
            //     size="small"
            //     className="w-8 h-8 text-grey-40"
            //     onClick={() => removeFileFromList(f)}
            //   >
            //     <TrashIcon size={20} />
            //   </Button>
            // </div>
            ); })}
              <div className="h-20">
                <file_upload_field_1.default onFileChosen={onFileChosen} filetypes={["image/png", "image/jpeg"]}/>
              </div>
            </div>)}
        </div>
      </modal_1.default.Content>
      <modal_1.default.Footer isLargeModal={isLargeModal}>
        <div className="flex w-full justify-end gap-x-xsmall">
          <button_1.default variant="ghost" size="small" className="w-[112px]" onClick={function () { return pop(); }}>
            Back
          </button_1.default>
          <button_1.default variant="primary" className="w-[112px]" size="small" disabled={typeof selectedReason === "undefined"} onClick={function () {
            onSubmit(selectedReason, note, files);
            pop();
        }}>
            Add
          </button_1.default>
        </div>
      </modal_1.default.Footer>
    </>);
};
var ImageRow = function (_a) {
    var url = _a.url, onDelete = _a.onDelete, name = _a.name, size = _a.size;
    return (<div className="flex items-center w-full justify-between my-8">
    <div className="flex items-center">
      <div className="w-20 h-20 bg-voilet-60">
        <img className="object-cover rounded-rounded w-full h-full" src={url}/>
      </div>
      <div className="inter-small-regular ml-8 flex flex-col">
        {name}
        {size && <span className="text-grey-50">{size} KB</span>}
      </div>
    </div>
    <button_1.default variant="ghost" size="small" className="w-8 h-8 text-grey-40" onClick={onDelete}>
      <trash_icon_1.default size={20}/>
    </button_1.default>
  </div>);
};
exports.default = RMAReturnReasonSubModal;
