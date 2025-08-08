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
var gatsby_1 = require("gatsby");
var medusa_react_1 = require("medusa-react");
var react_1 = require("react");
var spinner_1 = require("../../../components/atoms/spinner");
var edit_icon_1 = require("../../../components/fundamentals/icons/edit-icon");
var trash_icon_1 = require("../../../components/fundamentals/icons/trash-icon");
var actionables_1 = require("../../../components/molecules/actionables");
var breadcrumb_1 = require("../../../components/molecules/breadcrumb");
var view_raw_1 = require("../../../components/molecules/view-raw");
var body_card_1 = require("../../../components/organisms/body-card");
var delete_prompt_1 = require("../../../components/organisms/delete-prompt");
var collection_modal_1 = require("../../../components/templates/collection-modal");
var add_product_table_1 = require("../../../components/templates/collection-product-table/add-product-table");
var view_products_table_1 = require("../../../components/templates/collection-product-table/view-products-table");
var use_notification_1 = require("../../../hooks/use-notification");
var api_1 = require("../../../services/api");
var error_messages_1 = require("../../../utils/error-messages");
var CollectionDetails = function (_a) {
    var _b;
    var location = _a.location;
    var ensuredPath = location.pathname.replace("/a/collections/", "");
    var _c = (0, medusa_react_1.useAdminCollection)(ensuredPath), collection = _c.collection, isLoading = _c.isLoading, refetch = _c.refetch;
    var deleteCollection = (0, medusa_react_1.useAdminDeleteCollection)(ensuredPath);
    var updateCollection = (0, medusa_react_1.useAdminUpdateCollection)(ensuredPath);
    var _d = (0, react_1.useState)(false), showEdit = _d[0], setShowEdit = _d[1];
    var _e = (0, react_1.useState)(false), showDelete = _e[0], setShowDelete = _e[1];
    var _f = (0, react_1.useState)(false), showAddProducts = _f[0], setShowAddProducts = _f[1];
    var notification = (0, use_notification_1.default)();
    var _g = (0, react_1.useState)(0), updates = _g[0], setUpdates = _g[1];
    var handleDelete = function () {
        deleteCollection.mutate(undefined, {
            onSuccess: function () { return (0, gatsby_1.navigate)("/a/collections"); },
        });
    };
    var handleUpdateDetails = function (data, metadata) {
        var payload = {
            title: data.title,
            handle: data.handle,
        };
        if (metadata.length > 0) {
            var payloadMetadata = metadata
                .filter(function (m) { return m.key && m.value; }) // remove empty metadata
                .reduce(function (acc, next) {
                var _a;
                return __assign(__assign({}, acc), (_a = {}, _a[next.key] = next.value, _a));
            }, {});
            payload.metadata = payloadMetadata; // deleting metadata will not work as it's not supported by the core
        }
        updateCollection.mutate(payload, {
            onSuccess: function () {
                setShowEdit(false);
                refetch();
            },
        });
    };
    var handleAddProducts = function (addedIds, removedIds) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!(addedIds.length > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, api_1.default.collections.addProducts(collection === null || collection === void 0 ? void 0 : collection.id, {
                            product_ids: addedIds,
                        })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(removedIds.length > 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, api_1.default.collections.removeProducts(collection === null || collection === void 0 ? void 0 : collection.id, {
                            product_ids: removedIds,
                        })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    setShowAddProducts(false);
                    notification("Success", "Updated products in collection", "success");
                    refetch();
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    notification("Error", (0, error_messages_1.getErrorMessage)(error_1), "error");
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        var _a;
        if ((_a = collection === null || collection === void 0 ? void 0 : collection.products) === null || _a === void 0 ? void 0 : _a.length) {
            setUpdates(updates + 1); // force re-render product table when products are added/removed
        }
    }, [collection === null || collection === void 0 ? void 0 : collection.products]);
    return (<>
      <div className="flex flex-col h-full">
        <breadcrumb_1.default currentPage="Edit Collection" previousBreadcrumb="Collections" previousRoute="/a/products?view=collections"/>
        <div className="rounded-rounded py-large px-xlarge border border-grey-20 bg-grey-0 mb-large">
          {isLoading || !collection ? (<div className="flex items-center w-full h-12">
              <spinner_1.default variant="secondary" size="large"/>
            </div>) : (<div>
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="inter-xlarge-semibold mb-2xsmall">
                    {collection.title}
                  </h2>
                  <actionables_1.default forceDropdown actions={[
                {
                    label: "Edit Collection",
                    onClick: function () { return setShowEdit(true); },
                    icon: <edit_icon_1.default size="20"/>,
                },
                {
                    label: "Delete",
                    onClick: function () { return setShowDelete(!showDelete); },
                    variant: "danger",
                    icon: <trash_icon_1.default size="20"/>,
                },
            ]}/>
                </div>
                <p className="inter-small-regular text-grey-50">
                  /{collection.handle}
                </p>
              </div>
              {collection.metadata && (<div className="mt-large flex flex-col gap-y-base">
                  <h3 className="inter-base-semibold">Metadata</h3>
                  <div>
                    <view_raw_1.default raw={collection.metadata} name="metadata"/>
                  </div>
                </div>)}
            </div>)}
        </div>
        <body_card_1.default title="Products" subtitle="To start selling, all you need is a name, price, and image." className="h-full" actionables={[
            {
                label: "Edit Products",
                icon: <edit_icon_1.default size="20"/>,
                onClick: function () { return setShowAddProducts(!showAddProducts); },
            },
        ]}>
          <div className="mt-large h-full">
            {isLoading || !collection ? (<div className="flex items-center w-full h-12">
                <spinner_1.default variant="secondary" size="large"/>
              </div>) : (<view_products_table_1.default key={updates} // force re-render when collection is updated
         collectionId={collection.id} refetchCollection={refetch}/>)}
          </div>
        </body_card_1.default>
      </div>
      {showEdit && (<collection_modal_1.default onClose={function () { return setShowEdit(!showEdit); }} onSubmit={handleUpdateDetails} isEdit collection={collection}/>)}
      {showDelete && (<delete_prompt_1.default handleClose={function () { return setShowDelete(!showDelete); }} heading="Delete collection" successText="Successfully deleted collection" onDelete={function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, handleDelete()];
        }); }); }} confirmText="Yes, delete"/>)}
      {showAddProducts && (<add_product_table_1.default onClose={function () { return setShowAddProducts(false); }} onSubmit={handleAddProducts} existingRelations={(_b = collection === null || collection === void 0 ? void 0 : collection.products) !== null && _b !== void 0 ? _b : []}/>)}
    </>);
};
exports.default = CollectionDetails;
