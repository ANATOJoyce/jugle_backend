"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = require("clsx");
var react_1 = require("react");
var defaultText = (<span>
    Drop your images here, or{" "}
    <span className="text-violet-60">click to browse</span>
  </span>);
var FileUploadField = function (_a) {
    var onFileChosen = _a.onFileChosen, filetypes = _a.filetypes, errorMessage = _a.errorMessage, className = _a.className, _b = _a.text, text = _b === void 0 ? defaultText : _b, _c = _a.placeholder, placeholder = _c === void 0 ? "" : _c;
    var inputRef = (0, react_1.useRef)(null);
    var _d = (0, react_1.useState)(false), fileUploadError = _d[0], setFileUploadError = _d[1];
    var handleFileUpload = function (e) {
        onFileChosen(Array.from(e.target.files));
    };
    var handleFileDrop = function (e) {
        setFileUploadError(false);
        e.preventDefault();
        var files = [];
        if (e.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (var i = 0; i < e.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (e.dataTransfer.items[i].kind === "file") {
                    var file = e.dataTransfer.items[i].getAsFile();
                    if (filetypes.indexOf(file.type) > -1) {
                        files.push(file);
                    }
                }
            }
        }
        else {
            // Use DataTransfer interface to access the file(s)
            for (var i = 0; i < e.dataTransfer.files.length; i++) {
                if (filetypes.indexOf(e.dataTransfer.files[i].type) > -1) {
                    files.push(e.dataTransfer.files[i]);
                }
            }
        }
        if (files.length === 1) {
            onFileChosen(files);
        }
        else {
            setFileUploadError(true);
        }
    };
    return (<div onClick={function () { return inputRef === null || inputRef === void 0 ? void 0 : inputRef.current.click(); }} onDrop={handleFileDrop} onDragOver={function (e) { return e.preventDefault(); }} className={(0, clsx_1.default)("flex flex-col select-none inter-base-regular text-grey-50 cursor-pointer items-center justify-center w-full h-full rounded-rounded border-2 border-dashed border-grey-20 transition-colors hover:border-violet-60 hover:text-grey-40", className)}>
      <div className="flex flex-col items-center">
        <p>{text}</p>
        {placeholder}
      </div>
      {fileUploadError && (<span className="text-rose-60">
          {errorMessage || "Please upload an image file"}
        </span>)}
      <input ref={inputRef} accept={filetypes.join(", ")} type="file" onChange={handleFileUpload} className="hidden"/>
    </div>);
};
exports.default = FileUploadField;
