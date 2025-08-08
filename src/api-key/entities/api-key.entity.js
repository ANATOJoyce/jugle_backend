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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeySchema = exports.ApiKey = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var ApiKey = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'api_keys',
            toJSON: {
                virtuals: true,
                transform: function (_, ret) {
                    ret.id = ret._id.toString();
                    delete ret._id;
                    delete ret.__v;
                    return ret;
                },
            },
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _token_decorators;
    var _token_initializers = [];
    var _token_extraInitializers = [];
    var _salt_decorators;
    var _salt_initializers = [];
    var _salt_extraInitializers = [];
    var _redacted_decorators;
    var _redacted_initializers = [];
    var _redacted_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _last_used_at_decorators;
    var _last_used_at_initializers = [];
    var _last_used_at_extraInitializers = [];
    var _created_by_decorators;
    var _created_by_initializers = [];
    var _created_by_extraInitializers = [];
    var _revoked_by_decorators;
    var _revoked_by_initializers = [];
    var _revoked_by_extraInitializers = [];
    var _revoked_at_decorators;
    var _revoked_at_initializers = [];
    var _revoked_at_extraInitializers = [];
    var ApiKey = _classThis = /** @class */ (function () {
        function ApiKey_1() {
            this.token = __runInitializers(this, _token_initializers, void 0);
            this.salt = (__runInitializers(this, _token_extraInitializers), __runInitializers(this, _salt_initializers, void 0));
            this.redacted = (__runInitializers(this, _salt_extraInitializers), __runInitializers(this, _redacted_initializers, void 0));
            this.title = (__runInitializers(this, _redacted_extraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.type = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _type_initializers, void 0));
            this.last_used_at = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _last_used_at_initializers, void 0));
            this.created_by = (__runInitializers(this, _last_used_at_extraInitializers), __runInitializers(this, _created_by_initializers, void 0));
            this.revoked_by = (__runInitializers(this, _created_by_extraInitializers), __runInitializers(this, _revoked_by_initializers, void 0));
            this.revoked_at = (__runInitializers(this, _revoked_by_extraInitializers), __runInitializers(this, _revoked_at_initializers, void 0));
            __runInitializers(this, _revoked_at_extraInitializers);
        }
        return ApiKey_1;
    }());
    __setFunctionName(_classThis, "ApiKey");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _token_decorators = [(0, mongoose_1.Prop)({ required: true, unique: true, index: true })];
        _salt_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _redacted_decorators = [(0, mongoose_1.Prop)({ required: true, index: true })];
        _title_decorators = [(0, mongoose_1.Prop)({ required: true, index: true })];
        _type_decorators = [(0, mongoose_1.Prop)({ required: true, enum: ['publishable', 'secret'] })];
        _last_used_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        _created_by_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _revoked_by_decorators = [(0, mongoose_1.Prop)({ default: null })];
        _revoked_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        __esDecorate(null, null, _token_decorators, { kind: "field", name: "token", static: false, private: false, access: { has: function (obj) { return "token" in obj; }, get: function (obj) { return obj.token; }, set: function (obj, value) { obj.token = value; } }, metadata: _metadata }, _token_initializers, _token_extraInitializers);
        __esDecorate(null, null, _salt_decorators, { kind: "field", name: "salt", static: false, private: false, access: { has: function (obj) { return "salt" in obj; }, get: function (obj) { return obj.salt; }, set: function (obj, value) { obj.salt = value; } }, metadata: _metadata }, _salt_initializers, _salt_extraInitializers);
        __esDecorate(null, null, _redacted_decorators, { kind: "field", name: "redacted", static: false, private: false, access: { has: function (obj) { return "redacted" in obj; }, get: function (obj) { return obj.redacted; }, set: function (obj, value) { obj.redacted = value; } }, metadata: _metadata }, _redacted_initializers, _redacted_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, null, _last_used_at_decorators, { kind: "field", name: "last_used_at", static: false, private: false, access: { has: function (obj) { return "last_used_at" in obj; }, get: function (obj) { return obj.last_used_at; }, set: function (obj, value) { obj.last_used_at = value; } }, metadata: _metadata }, _last_used_at_initializers, _last_used_at_extraInitializers);
        __esDecorate(null, null, _created_by_decorators, { kind: "field", name: "created_by", static: false, private: false, access: { has: function (obj) { return "created_by" in obj; }, get: function (obj) { return obj.created_by; }, set: function (obj, value) { obj.created_by = value; } }, metadata: _metadata }, _created_by_initializers, _created_by_extraInitializers);
        __esDecorate(null, null, _revoked_by_decorators, { kind: "field", name: "revoked_by", static: false, private: false, access: { has: function (obj) { return "revoked_by" in obj; }, get: function (obj) { return obj.revoked_by; }, set: function (obj, value) { obj.revoked_by = value; } }, metadata: _metadata }, _revoked_by_initializers, _revoked_by_extraInitializers);
        __esDecorate(null, null, _revoked_at_decorators, { kind: "field", name: "revoked_at", static: false, private: false, access: { has: function (obj) { return "revoked_at" in obj; }, get: function (obj) { return obj.revoked_at; }, set: function (obj, value) { obj.revoked_at = value; } }, metadata: _metadata }, _revoked_at_initializers, _revoked_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ApiKey = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ApiKey = _classThis;
}();
exports.ApiKey = ApiKey;
exports.ApiKeySchema = mongoose_1.SchemaFactory.createForClass(ApiKey);
