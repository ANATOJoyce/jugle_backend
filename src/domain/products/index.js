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
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@reach/router");
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var button_1 = require("../../components/fundamentals/button");
var export_icon_1 = require("../../components/fundamentals/icons/export-icon");
var plus_icon_1 = require("../../components/fundamentals/icons/plus-icon");
var body_card_1 = require("../../components/organisms/body-card");
var custom_table_header_1 = require("../../components/organisms/custom-table-header");
var export_modal_1 = require("../../components/organisms/export-modal");
var collection_modal_1 = require("../../components/templates/collection-modal");
var collections_table_1 = require("../../components/templates/collections-table");
var product_table_1 = require("../../components/templates/product-table");
var use_notification_1 = require("../../hooks/use-notification");
var use_toggle_state_1 = require("../../hooks/use-toggle-state");
var error_messages_1 = require("../../utils/error-messages");
var edit_1 = require("./edit");
var new_1 = require("./new");
var VIEWS = ["products", "collections"];
var ProductIndex = function () {
    var location = (0, router_1.useLocation)();
    var _a = (0, react_1.useState)("products"), view = _a[0], setView = _a[1];
    var createBatchJob = (0, medusa_react_1.useAdminCreateBatchJob)();
    var notification = (0, use_notification_1.default)();
    var createCollection = (0, medusa_react_1.useAdminCreateCollection)();
    (0, react_1.useEffect)(function () {
        if (location.search.includes("?view=collections")) {
            setView("collections");
        }
    }, [location]);
    (0, react_1.useEffect)(function () {
        location.search = "";
    }, [view]);
    var CurrentView = function () {
        switch (view) {
            case "products":
                return <product_table_1.default />;
            default:
                return <collections_table_1.default />;
        }
    };
    var CurrentAction = function () {
        switch (view) {
            case "products":
                return (<div className="flex space-x-2">
            <button_1.default variant="secondary" size="small" onClick={function () { return openExportModal(); }}>
              <export_icon_1.default size={20}/>
              Export Products
            </button_1.default>
            <button_1.default variant="secondary" size="small" onClick={function () { return (0, gatsby_1.navigate)("/a/products/new"); }}>
              <plus_icon_1.default size={20}/>
              New Product
            </button_1.default>
          </div>);
            default:
                return (<div className="flex space-x-2">
            <button_1.default variant="secondary" size="small" onClick={function () { return setShowNewCollection(!showNewCollection); }}>
              <plus_icon_1.default size={20}/>
              New Collection
            </button_1.default>
          </div>);
        }
    };
    var _b = (0, react_1.useState)(false), showNewCollection = _b[0], setShowNewCollection = _b[1];
    var _c = (0, use_toggle_state_1.default)(false), openExportModal = _c.open, closeExportModal = _c.close, exportModalOpen = _c.state;
    var handleCreateCollection = function (data, colMetadata) { return __awaiter(void 0, void 0, void 0, function () {
        var metadata;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    metadata = colMetadata
                        .filter(function (m) { return m.key && m.value; }) // remove empty metadata
                        .reduce(function (acc, next) {
                        var _a;
                        return __assign(__assign({}, acc), (_a = {}, _a[next.key] = next.value, _a));
                    }, {});
                    return [4 /*yield*/, createCollection.mutateAsync(__assign(__assign({}, data), { metadata: metadata }), {
                            onSuccess: function (_a) {
                                var collection = _a.collection;
                                notification("Success", "Successfully created collection", "success");
                                (0, gatsby_1.navigate)("/a/collections/".concat(collection.id));
                                setShowNewCollection(false);
                            },
                            onError: function (err) { return notification("Error", (0, error_messages_1.getErrorMessage)(err), "error"); },
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleCreateExport = function () {
        var reqObj = {
            type: "product-export",
            context: {},
        };
        createBatchJob.mutate(reqObj, {
            onSuccess: function () {
                notification("Success", "Successfully initiated export", "success");
            },
            onError: function (err) {
                notification("Error", (0, error_messages_1.getErrorMessage)(err), "error");
            },
        });
        closeExportModal();
    };
    return (<>
      <div className="flex flex-col grow h-full">
        <div className="w-full flex flex-col grow">
          <body_card_1.default forceDropdown={false} customActionable={CurrentAction()} customHeader={<custom_table_header_1.default views={VIEWS} setActiveView={setView} activeView={view}/>}>
            <CurrentView />
          </body_card_1.default>
        </div>
      </div>
      {showNewCollection && (<collection_modal_1.default onClose={function () { return setShowNewCollection(!showNewCollection); }} onSubmit={handleCreateCollection}/>)}
      {exportModalOpen && (<export_modal_1.default title="Export Products" handleClose={function () { return closeExportModal(); }} onSubmit={handleCreateExport} loading={createBatchJob.isLoading}/>)}
    </>);
};
var Products = function () {
    return (<router_1.Router>
      <ProductIndex path="/"/>
      <edit_1.default path=":id"/>
      <new_1.default path="new"/>
    </router_1.Router>);
};
exports.default = Products;
