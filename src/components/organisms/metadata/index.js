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
var react_1 = require("react");
var button_1 = require("../../fundamentals/button");
var plus_icon_1 = require("../../fundamentals/icons/plus-icon");
var trash_icon_1 = require("../../fundamentals/icons/trash-icon");
var input_1 = require("../../molecules/input");
var Metadata = function (_a) {
    var metadata = _a.metadata, setMetadata = _a.setMetadata, _b = _a.heading, heading = _b === void 0 ? "Metadata" : _b;
    var _c = (0, react_1.useState)([]), localData = _c[0], setLocalData = _c[1];
    (0, react_1.useEffect)(function () {
        setLocalData(metadata);
    }, [metadata]);
    var addKeyPair = function () {
        setMetadata(__spreadArray(__spreadArray([], metadata, true), [{ key: "", value: "" }], false));
    };
    var onKeyChange = function (index) {
        return function (key) {
            var newFields = metadata;
            newFields[index] = { key: key, value: newFields[index].value };
            setMetadata(newFields);
        };
    };
    var onValueChange = function (index) {
        return function (value) {
            var newFields = metadata;
            newFields[index] = {
                key: newFields[index].key,
                value: value,
            };
            setMetadata(newFields);
        };
    };
    var deleteKeyPair = function (index) {
        return function () {
            setMetadata(metadata.filter(function (_, i) { return i !== index; }));
        };
    };
    return (<div>
      <span className="inter-base-semibold">{heading}</span>
      <div className="flex flex-col mt-base gap-y-base">
        {localData.map(function (field, index) {
            return (<DeletableElement key={index} onDelete={deleteKeyPair(index)}>
              <Field field={field} updateKey={onKeyChange(index)} updateValue={onValueChange(index)}/>
            </DeletableElement>);
        })}
        <div>
          <button_1.default variant="secondary" size="small" type="button" className="w-full" onClick={addKeyPair}>
            <plus_icon_1.default size={20}/>
            Add Metadata
          </button_1.default>
        </div>
      </div>
    </div>);
};
var Field = function (_a) {
    var field = _a.field, updateKey = _a.updateKey, updateValue = _a.updateValue;
    return (<div className="flex items-center w-full gap-x-xsmall">
      <div className="maw-w-[200px]">
        <input_1.default label="Key" placeholder="Some key" defaultValue={field.key} onChange={function (e) {
            updateKey(e.currentTarget.value);
        }}/>
      </div>
      <div className="flex-grow">
        <input_1.default label="Value" placeholder="Some value" defaultValue={field.value} onChange={function (e) {
            updateValue(e.currentTarget.value);
        }}/>
      </div>
    </div>);
};
var DeletableElement = function (_a) {
    var onDelete = _a.onDelete, children = _a.children;
    return (<div className="flex items-center gap-x-xlarge">
      <div className="flex-grow">{children}</div>
      <button_1.default variant="ghost" size="small" className="text-grey-40 justify-end" type="button" onClick={onDelete}>
        <trash_icon_1.default size={20}/>
      </button_1.default>
    </div>);
};
exports.default = Metadata;
