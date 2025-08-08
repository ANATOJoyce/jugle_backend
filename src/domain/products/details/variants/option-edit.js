"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var button_1 = require("../../../../components/fundamentals/button");
var input_1 = require("../../../../components/molecules/input");
var modal_1 = require("../../../../components/molecules/modal");
var use_notification_1 = require("../../../../hooks/use-notification");
var error_messages_1 = require("../../../../utils/error-messages");
var NewOption = function (_a) {
    var productId = _a.productId, options = _a.options, onDismiss = _a.onDismiss;
    var optionsArray = (0, react_1.useMemo)(function () {
        return __spreadArray([], options, true);
    }, [options]);
    var _b = (0, react_1.useState)(optionsArray), toSave = _b[0], setToSave = _b[1];
    var notification = (0, use_notification_1.default)();
    var createOption = (0, medusa_react_1.useAdminCreateProductOption)(productId);
    var updateOption = (0, medusa_react_1.useAdminUpdateProductOption)(productId);
    var deleteOption = (0, medusa_react_1.useAdminDeleteProductOption)(productId);
    var onAddOption = function (e) {
        e.preventDefault();
        setToSave(function (prev) {
            var newVal = __spreadArray([], prev, true);
            newVal.push({
                id: "".concat(Math.random()),
                title: "",
                isNew: true,
            });
            return newVal;
        });
    };
    var onRemove = function (id) {
        setToSave(function (prev) {
            var newVal = __spreadArray([], prev, true);
            var idx = newVal.findIndex(function (o) { return o.id === id; });
            if (idx !== -1) {
                var editVal = newVal[idx];
                if (editVal.created_at) {
                    newVal.splice(idx, 1, __assign(__assign({}, editVal), { isRemoved: true }));
                    return newVal;
                }
                else {
                    newVal.splice(idx, 1);
                    return newVal;
                }
            }
            return prev;
        });
    };
    var onChange = function (id, e) {
        var value = e.target.value;
        setToSave(function (prev) {
            var newVal = __spreadArray([], prev, true);
            var idx = newVal.findIndex(function (o) { return o.id === id; });
            if (idx !== -1) {
                var editVal = newVal[idx];
                newVal.splice(idx, 1, __assign(__assign({}, editVal), { title: value, editted: true }));
                return newVal;
            }
            return prev;
        });
    };
    var onSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    return [4 /*yield*/, Promise.all(toSave.map(function (o) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                if (o.isRemoved) {
                                    return [2 /*return*/, deleteOption.mutateAsync(o.id)];
                                }
                                else if (o.isNew) {
                                    return [2 /*return*/, createOption.mutateAsync({
                                            title: o.title,
                                        })];
                                }
                                else if (o.editted) {
                                    return [2 /*return*/, updateOption.mutateAsync({
                                            option_id: o.id,
                                            title: o.title,
                                        })];
                                }
                                return [2 /*return*/];
                            });
                        }); }))
                            .then(function () {
                            notification("Success", "Options updated", "success");
                            onDismiss();
                        })
                            .catch(function (err) {
                            notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (<modal_1.default handleClose={onDismiss} isLargeModal={false}>
      <form onSubmit={onSubmit}>
        <modal_1.default.Body>
          <modal_1.default.Header handleClose={onDismiss}>
            <h2>Add Option</h2>
          </modal_1.default.Header>
          <modal_1.default.Content>
            {toSave.map(function (o, index) {
            return !o.isRemoved && (<div className="mb-2" key={o.id}>
                    <input_1.default deletable label="Title" name={"toAdd[".concat(index, "].title")} value={o.title} onChange={function (v) { return onChange(o.id, v); }} onDelete={function () { return onRemove(o.id); }}/>
                  </div>);
        })}
            <div className="flex w-full justify-end mt-4">
              <button_1.default size="small" variant="secondary" onClick={onAddOption}>
                + Add option
              </button_1.default>
            </div>
          </modal_1.default.Content>
          <modal_1.default.Footer>
            <div className="flex w-full h-8 justify-end">
              <button_1.default variant="ghost" className="mr-2 w-32 text-small justify-center" size="large" onClick={onDismiss}>
                Cancel
              </button_1.default>
              <button_1.default type="submit" variant="primary">
                Save
              </button_1.default>
            </div>
          </modal_1.default.Footer>
        </modal_1.default.Body>
      </form>
    </modal_1.default>);
};
exports.default = NewOption;
