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
exports.ProviderIdentitySchema = exports.ProviderIdentity = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var ProviderIdentity = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _entity_id_decorators;
    var _entity_id_initializers = [];
    var _entity_id_extraInitializers = [];
    var _provider_decorators;
    var _provider_initializers = [];
    var _provider_extraInitializers = [];
    var _user_metadata_decorators;
    var _user_metadata_initializers = [];
    var _user_metadata_extraInitializers = [];
    var _auth_identity_decorators;
    var _auth_identity_initializers = [];
    var _auth_identity_extraInitializers = [];
    var ProviderIdentity = _classThis = /** @class */ (function () {
        function ProviderIdentity_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.entity_id = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _entity_id_initializers, void 0));
            this.provider = (__runInitializers(this, _entity_id_extraInitializers), __runInitializers(this, _provider_initializers, void 0));
            this.user_metadata = (__runInitializers(this, _provider_extraInitializers), __runInitializers(this, _user_metadata_initializers, void 0));
            this.auth_identity = (__runInitializers(this, _user_metadata_extraInitializers), __runInitializers(this, _auth_identity_initializers, void 0));
            __runInitializers(this, _auth_identity_extraInitializers);
        }
        return ProviderIdentity_1;
    }());
    __setFunctionName(_classThis, "ProviderIdentity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _entity_id_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _provider_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _user_metadata_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        _auth_identity_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'AuthIdentity' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _entity_id_decorators, { kind: "field", name: "entity_id", static: false, private: false, access: { has: function (obj) { return "entity_id" in obj; }, get: function (obj) { return obj.entity_id; }, set: function (obj, value) { obj.entity_id = value; } }, metadata: _metadata }, _entity_id_initializers, _entity_id_extraInitializers);
        __esDecorate(null, null, _provider_decorators, { kind: "field", name: "provider", static: false, private: false, access: { has: function (obj) { return "provider" in obj; }, get: function (obj) { return obj.provider; }, set: function (obj, value) { obj.provider = value; } }, metadata: _metadata }, _provider_initializers, _provider_extraInitializers);
        __esDecorate(null, null, _user_metadata_decorators, { kind: "field", name: "user_metadata", static: false, private: false, access: { has: function (obj) { return "user_metadata" in obj; }, get: function (obj) { return obj.user_metadata; }, set: function (obj, value) { obj.user_metadata = value; } }, metadata: _metadata }, _user_metadata_initializers, _user_metadata_extraInitializers);
        __esDecorate(null, null, _auth_identity_decorators, { kind: "field", name: "auth_identity", static: false, private: false, access: { has: function (obj) { return "auth_identity" in obj; }, get: function (obj) { return obj.auth_identity; }, set: function (obj, value) { obj.auth_identity = value; } }, metadata: _metadata }, _auth_identity_initializers, _auth_identity_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProviderIdentity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProviderIdentity = _classThis;
}();
exports.ProviderIdentity = ProviderIdentity;
exports.ProviderIdentitySchema = mongoose_1.SchemaFactory.createForClass(ProviderIdentity);
