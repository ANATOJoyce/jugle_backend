"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("../../fundamentals/button");
var input_1 = require("../input");
var lodash_1 = require("lodash");
var SaveFilterItem = function (_a) {
    var saveFilter = _a.saveFilter, setName = _a.setName, name = _a.name;
    var onSave = function () {
        var trimmedName = (0, lodash_1.trim)(name);
        if (trimmedName !== "") {
            saveFilter();
            setName("");
        }
    };
    return (<div className="mt-2 flex w-full">
      <input_1.default className="pt-0 pb-1 max-w-[172px]" placeholder="Name your filter..." onChange={function (e) { return setName(e.target.value); }} value={name}/>
      <button_1.default className="border ml-2 border-grey-20" variant="ghost" size="small" onClick={onSave}>
        Save
      </button_1.default>
    </div>);
};
exports.default = SaveFilterItem;
