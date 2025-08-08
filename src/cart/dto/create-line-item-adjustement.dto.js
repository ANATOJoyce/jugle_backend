"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLineItemAdjustmentDTO = void 0;
var class_validator_1 = require("class-validator");
var CreateLineItemAdjustmentDTO = function () {
    var _a;
    var _item_decorators;
    var _item_initializers = [];
    var _item_extraInitializers = [];
    var _code_decorators;
    var _code_initializers = [];
    var _code_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _provider_id_decorators;
    var _provider_id_initializers = [];
    var _provider_id_extraInitializers = [];
    var _promotion_id_decorators;
    var _promotion_id_initializers = [];
    var _promotion_id_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateLineItemAdjustmentDTO() {
                /**
                 * Identifiant du LineItem auquel l'ajustement est lié (ObjectId)
                 */
                this.item = __runInitializers(this, _item_initializers, void 0);
                /**
                 * Code promo ou identifiant de l'ajustement
                 */
                this.code = (__runInitializers(this, _item_extraInitializers), __runInitializers(this, _code_initializers, void 0));
                /**
                 * Montant de l'ajustement (>= 0)
                 */
                this.amount = (__runInitializers(this, _code_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                /**
                 * Description optionnelle
                 */
                this.description = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                /**
                 * Provider ID optionnel
                 */
                this.provider_id = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _provider_id_initializers, void 0));
                /**
                 * Promotion ID optionnel
                 */
                this.promotion_id = (__runInitializers(this, _provider_id_extraInitializers), __runInitializers(this, _promotion_id_initializers, void 0));
                /**
                 * Métadonnées optionnelles (objet libre)
                 */
                this.metadata = (__runInitializers(this, _promotion_id_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
                this.item_id = __runInitializers(this, _metadata_extraInitializers);
            }
            return CreateLineItemAdjustmentDTO;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _item_decorators = [(0, class_validator_1.IsMongoId)()];
            _code_decorators = [(0, class_validator_1.IsString)()];
            _amount_decorators = [(0, class_validator_1.IsNumber)()];
            _description_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _provider_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _promotion_id_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _metadata_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsObject)()];
            __esDecorate(null, null, _item_decorators, { kind: "field", name: "item", static: false, private: false, access: { has: function (obj) { return "item" in obj; }, get: function (obj) { return obj.item; }, set: function (obj, value) { obj.item = value; } }, metadata: _metadata }, _item_initializers, _item_extraInitializers);
            __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } }, metadata: _metadata }, _code_initializers, _code_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _provider_id_decorators, { kind: "field", name: "provider_id", static: false, private: false, access: { has: function (obj) { return "provider_id" in obj; }, get: function (obj) { return obj.provider_id; }, set: function (obj, value) { obj.provider_id = value; } }, metadata: _metadata }, _provider_id_initializers, _provider_id_extraInitializers);
            __esDecorate(null, null, _promotion_id_decorators, { kind: "field", name: "promotion_id", static: false, private: false, access: { has: function (obj) { return "promotion_id" in obj; }, get: function (obj) { return obj.promotion_id; }, set: function (obj, value) { obj.promotion_id = value; } }, metadata: _metadata }, _promotion_id_initializers, _promotion_id_extraInitializers);
            __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateLineItemAdjustmentDTO = CreateLineItemAdjustmentDTO;
