"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var BatchJobFileCard = function (_a) {
    var fileName = _a.fileName, fileSize = _a.fileSize, icon = _a.icon, onClick = _a.onClick;
    var preparedOnClick = (onClick !== null && onClick !== void 0 ? onClick : (function () { return void 0; }));
    return (<div className="flex items-center w-full cursor-pointer mt-4" onClick={preparedOnClick}>
      <div className="flex items-center justify-center p-2.5 border border-grey-20 rounded-lg" title={fileName}>
        {!!icon && icon}
      </div>

      <div className="text-left relative w-full pl-4">
        <div className="overflow-hidden truncate inter-small-regular max-w-[80%]">
          {fileName}
        </div>

        {!!fileSize && (<div className="text-grey-40 inter-small-regular">
            {fileSize}
          </div>)}
      </div>
    </div>);
};
exports.default = BatchJobFileCard;
