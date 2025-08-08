"use strict";
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
var react_1 = require("react");
var medusa_react_1 = require("medusa-react");
var button_1 = require("../../../components/fundamentals/button");
var focus_modal_1 = require("../../../components/molecules/modal/focus-modal");
var cross_icon_1 = require("../../../components/fundamentals/icons/cross-icon");
var accordion_1 = require("../../../components/organisms/accordion");
var input_1 = require("../../../components/molecules/input");
var use_notification_1 = require("../../../hooks/use-notification");
var plus_icon_1 = require("../../../components/fundamentals/icons/plus-icon");
/**
 * General section for the SC create form.
 */
function General(props) {
    var name = props.name, description = props.description, setName = props.setName, setDescription = props.setDescription;
    return (<div className="flex flex-col gap-y-base my-base">
      <div className="flex-1">
        <input_1.default label="Title" type="string" name="name" placeholder="Website, app, Amazon, physical store POS, facebook product feed..." value={name} onChange={function (ev) { return setName(ev.target.value); }}/>
      </div>
      <div className="flex-1">
        <input_1.default label="Description" type="string" name="description" placeholder="Available products at our website, app..." value={description} onChange={function (ev) { return setDescription(ev.target.value); }}/>
      </div>
    </div>);
}
function AddProducts() {
    var _a = (0, react_1.useState)(false), showModal = _a[0], setShowModal = _a[1];
    return (<div>
      <sapn className="text-gray-500">
        Select products that will be available via this channel. You can assign
        products to multiple channels.
      </sapn>
      <button_1.default size="small" type="button" variant="secondary" className="w-full h-[40px] mt-6" onClick={function () { return setShowModal(true); }}>
        <plus_icon_1.default size={20}/>
        Add Products
      </button_1.default>
      {/*{showModal && (*/}
      {/*  <SalesChannelAvaliableProductsModal*/}
      {/*    handleClose={() => setShowModal(false)}*/}
      {/*  />*/}
      {/*)}*/}
    </div>);
}
/**
 * Modal for creating sales channels.
 */
var AddSalesChannelModal = function (_a) {
    var onClose = _a.onClose;
    var createSalesChannel = (0, medusa_react_1.useAdminCreateSalesChannel)().mutate;
    var notification = (0, use_notification_1.default)();
    var _b = (0, react_1.useState)(), name = _b[0], setName = _b[1];
    var _c = (0, react_1.useState)(), description = _c[0], setDescription = _c[1];
    function save() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, createSalesChannel({ name: name, description: description }, {
                            onSuccess: function (_a) {
                                var sales_channel = _a.sales_channel;
                                notification("Success", "The sales channel is successfully created", "success");
                                onClose(sales_channel.id);
                            },
                            onError: function () {
                                return notification("Error", "Failed to create the sales channel", "error");
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function saveAsDraft() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, createSalesChannel({
                            name: name,
                            description: description,
                            is_disabled: true,
                        }, {
                            onSuccess: function (_a) {
                                var sales_channel = _a.sales_channel;
                                notification("Success", "The sales channel is successfully created", "success");
                                onClose(sales_channel.id);
                            },
                            onError: function () {
                                return notification("Error", "Failed to create the sales channel", "error");
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    return (<focus_modal_1.default>
      <focus_modal_1.default.Header>
        <div className="medium:w-8/12 w-full px-8 flex justify-between">
          <button_1.default size="small" variant="ghost" onClick={onClose} className="border rounded-rounded w-8 h-8">
            <cross_icon_1.default size={20}/>
          </button_1.default>
          <div className="gap-x-small flex">
            <button_1.default size="small" variant="secondary" onClick={function () { return saveAsDraft(); }} disabled={!name} className="rounded-rounded">
              Save as draft
            </button_1.default>

            <button_1.default size="small" variant="primary" onClick={function () { return save(); }} disabled={!name} className="rounded-rounded">
              Publish channel
            </button_1.default>
          </div>
        </div>
      </focus_modal_1.default.Header>
      <focus_modal_1.default.Main>
        <div className="flex justify-center mb-[25%]">
          <div className="medium:w-7/12 large:w-6/12 small:w-4/5 w-full pt-16">
            <h1 className="inter-xlarge-semibold">Create new sales channel</h1>
            <accordion_1.default className="pt-7 text-grey-90" defaultValue={["general"]} type="multiple">
              <accordion_1.default.Item title="General info" value="general" forceMountContent>
                <General name={name} description={description} setName={setName} setDescription={setDescription}/>
              </accordion_1.default.Item>
              {/*TODO: add a modal for initially selecting products*/}
              {/*<Accordion.Item title="Products" value="products">*/}
              {/*  <AddProducts />*/}
              {/*</Accordion.Item>*/}
            </accordion_1.default>
          </div>
        </div>
      </focus_modal_1.default.Main>
    </focus_modal_1.default>);
};
exports.default = AddSalesChannelModal;
