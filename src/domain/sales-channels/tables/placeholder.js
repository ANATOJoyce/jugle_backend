"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("../../../components/fundamentals/button");
var sided_mouth_face_1 = require("../../../components/fundamentals/icons/sided-mouth-face");
function Placeholder(_a) {
    var showAddModal = _a.showAddModal;
    return (<div className="h-full flex flex-col justify-center items-center">
      <span className="text-grey-50">
        <sided_mouth_face_1.default width="48" height="48"/>
      </span>

      <h3 className="font-semibold text-large text-gray-90 mt-6">
        Start building your channels setup...
      </h3>
      <p className="mt-2 mb-8 text-grey-50 w-[358px] text-center">
        You haven’t added any products to this channels yet, but once you do
        they will live here.
      </p>

      <button_1.default onClick={showAddModal} variant="primary" size="small">
        Add products
      </button_1.default>
    </div>);
}
exports.default = Placeholder;
