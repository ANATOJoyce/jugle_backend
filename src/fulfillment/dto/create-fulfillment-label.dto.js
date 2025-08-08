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
exports.CreateFulfillmentLabelDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateFulfillmentLabelDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _tracking_number_decorators;
    var _tracking_number_initializers = [];
    var _tracking_number_extraInitializers = [];
    var _tracking_url_decorators;
    var _tracking_url_initializers = [];
    var _tracking_url_extraInitializers = [];
    var _label_url_decorators;
    var _label_url_initializers = [];
    var _label_url_extraInitializers = [];
    var _fulfillment_decorators;
    var _fulfillment_initializers = [];
    var _fulfillment_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateFulfillmentLabelDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.tracking_number = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _tracking_number_initializers, void 0));
                this.tracking_url = (__runInitializers(this, _tracking_number_extraInitializers), __runInitializers(this, _tracking_url_initializers, void 0));
                this.label_url = (__runInitializers(this, _tracking_url_extraInitializers), __runInitializers(this, _label_url_initializers, void 0));
                this.fulfillment = (__runInitializers(this, _label_url_extraInitializers), __runInitializers(this, _fulfillment_initializers, void 0));
                __runInitializers(this, _fulfillment_extraInitializers);
            }
            return CreateFulfillmentLabelDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({ description: 'Unique ID with prefix "fulla"', example: 'fulla_60c72b2f9b1e8c001cf9f123' }), (0, class_validator_1.IsString)()];
            _tracking_number_decorators = [(0, swagger_1.ApiProperty)({ description: 'Tracking number of the label' }), (0, class_validator_1.IsString)()];
            _tracking_url_decorators = [(0, swagger_1.ApiProperty)({ description: 'Tracking URL' }), (0, class_validator_1.IsString)()];
            _label_url_decorators = [(0, swagger_1.ApiProperty)({ description: 'Label URL' }), (0, class_validator_1.IsString)()];
            _fulfillment_decorators = [(0, swagger_1.ApiProperty)({ description: 'Fulfillment reference ID (ObjectId)' }), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _tracking_number_decorators, { kind: "field", name: "tracking_number", static: false, private: false, access: { has: function (obj) { return "tracking_number" in obj; }, get: function (obj) { return obj.tracking_number; }, set: function (obj, value) { obj.tracking_number = value; } }, metadata: _metadata }, _tracking_number_initializers, _tracking_number_extraInitializers);
            __esDecorate(null, null, _tracking_url_decorators, { kind: "field", name: "tracking_url", static: false, private: false, access: { has: function (obj) { return "tracking_url" in obj; }, get: function (obj) { return obj.tracking_url; }, set: function (obj, value) { obj.tracking_url = value; } }, metadata: _metadata }, _tracking_url_initializers, _tracking_url_extraInitializers);
            __esDecorate(null, null, _label_url_decorators, { kind: "field", name: "label_url", static: false, private: false, access: { has: function (obj) { return "label_url" in obj; }, get: function (obj) { return obj.label_url; }, set: function (obj, value) { obj.label_url = value; } }, metadata: _metadata }, _label_url_initializers, _label_url_extraInitializers);
            __esDecorate(null, null, _fulfillment_decorators, { kind: "field", name: "fulfillment", static: false, private: false, access: { has: function (obj) { return "fulfillment" in obj; }, get: function (obj) { return obj.fulfillment; }, set: function (obj, value) { obj.fulfillment = value; } }, metadata: _metadata }, _fulfillment_initializers, _fulfillment_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateFulfillmentLabelDto = CreateFulfillmentLabelDto;
