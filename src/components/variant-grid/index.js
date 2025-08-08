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
var variant_editor_1 = require("../../domain/products/details/variants/variant-editor");
var utils_1 = require("../../domain/products/product-form/utils");
var use_imperative_dialog_1 = require("../../hooks/use-imperative-dialog");
var use_notification_1 = require("../../hooks/use-notification");
var error_messages_1 = require("../../utils/error-messages");
var duplicate_icon_1 = require("../fundamentals/icons/duplicate-icon");
var edit_icon_1 = require("../fundamentals/icons/edit-icon");
var trash_icon_1 = require("../fundamentals/icons/trash-icon");
var grid_input_1 = require("../molecules/grid-input");
var table_1 = require("../molecules/table");
var use_grid_columns_1 = require("./use-grid-columns");
var VariantGrid = function (_a) {
    var product = _a.product, variants = _a.variants, edit = _a.edit, onVariantsChange = _a.onVariantsChange;
    var _b = (0, react_1.useState)(false), isDuplicate = _b[0], setIsDuplicate = _b[1];
    var _c = (0, react_1.useState)(null), selectedVariant = _c[0], setSelectedVariant = _c[1];
    var createVariant = (0, medusa_react_1.useAdminCreateVariant)(product === null || product === void 0 ? void 0 : product.id);
    var updateVariant = (0, medusa_react_1.useAdminUpdateVariant)(product === null || product === void 0 ? void 0 : product.id);
    var deleteVariant = (0, medusa_react_1.useAdminDeleteVariant)(product === null || product === void 0 ? void 0 : product.id);
    var notification = (0, use_notification_1.default)();
    var dialog = (0, use_imperative_dialog_1.default)();
    var columns = (0, use_grid_columns_1.useGridColumns)(product, edit);
    var handleChange = function (index, field, value) {
        var _a;
        var newVariants = __spreadArray([], variants, true);
        newVariants[index] = __assign(__assign({}, newVariants[index]), (_a = {}, _a[field] = value, _a));
        onVariantsChange(newVariants);
    };
    var getDisplayValue = function (variant, column) {
        var formatter = column.formatter, field = column.field;
        return formatter ? formatter(variant[field]) : variant[field];
    };
    var handleUpdateVariant = function (data) {
        updateVariant.mutate(__assign({ variant_id: selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.id }, data), {
            onSuccess: function () {
                notification("Success", "Successfully update variant", "success");
                setSelectedVariant(null);
            },
            onError: function (err) {
                notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
            },
        });
    };
    var handleDeleteVariant = function (variant) { return __awaiter(void 0, void 0, void 0, function () {
        var shouldDelete;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dialog({
                        heading: "Delete product variant",
                        text: "Are you sure?",
                    })];
                case 1:
                    shouldDelete = _a.sent();
                    if (shouldDelete) {
                        return [2 /*return*/, deleteVariant.mutate(variant.id)];
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDuplicateVariant = function (variant) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            createVariant.mutate(__assign({}, variant), {
                onSuccess: function () {
                    notification("Success", "Successfully created variant", "success");
                    setSelectedVariant(null);
                },
                onError: function (err) {
                    notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
                },
            });
            return [2 /*return*/];
        });
    }); };
    var editVariantActions = function (variant) {
        return [
            {
                label: "Edit",
                icon: <edit_icon_1.default size={20}/>,
                onClick: function () { return setSelectedVariant(variant); },
            },
            {
                label: "Duplicate",
                icon: <duplicate_icon_1.default size={20}/>,
                onClick: function () {
                    setSelectedVariant(variant);
                    setIsDuplicate(true);
                },
            },
            {
                label: "Delete",
                icon: <trash_icon_1.default size={20}/>,
                onClick: function () { return handleDeleteVariant(variant); },
                variant: "danger",
            },
        ];
    };
    return (<>
      <table_1.default>
        <table_1.default.Head>
          <table_1.default.HeadRow>
            {columns.map(function (col) { return (<table_1.default.HeadCell className="w-[100px] px-2 py-4">
                {col.header}
              </table_1.default.HeadCell>); })}
          </table_1.default.HeadRow>
        </table_1.default.Head>
        <table_1.default.Body>
          {variants.map(function (variant, i) {
            return (<table_1.default.Row key={i} color={"inherit"} actions={edit && editVariantActions(variant)}>
                {columns.map(function (col, j) {
                    return (<table_1.default.Cell key={j}>
                      {edit || col.readOnly ? (<div className="px-2 py-4 truncate">
                          {getDisplayValue(variant, col)}
                        </div>) : (<grid_input_1.default key={j} value={variant[col.field]} onChange={function (_a) {
                                var currentTarget = _a.currentTarget;
                                return handleChange(i, col.field, currentTarget.value);
                            }}/>)}
                    </table_1.default.Cell>);
                })}
              </table_1.default.Row>);
        })}
        </table_1.default.Body>
      </table_1.default>
      {selectedVariant && (<variant_editor_1.default variant={selectedVariant} onCancel={function () { return setSelectedVariant(null); }} onSubmit={isDuplicate ? handleDuplicateVariant : handleUpdateVariant} optionsMap={(0, utils_1.buildOptionsMap)(product, selectedVariant)} title="Edit variant"/>)}
    </>);
};
exports.default = VariantGrid;
