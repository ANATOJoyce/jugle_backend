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
exports.AuthIdentitySchema = exports.AuthIdentity = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var AuthIdentity = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _user_decorators;
    var _user_initializers = [];
    var _user_extraInitializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _username_extraInitializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _password_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _providerIdentities_decorators;
    var _providerIdentities_initializers = [];
    var _providerIdentities_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var _phone_decorators;
    var _phone_initializers = [];
    var _phone_extraInitializers = [];
    var _otpCode_decorators;
    var _otpCode_initializers = [];
    var _otpCode_extraInitializers = [];
    var _otpExpires_decorators;
    var _otpExpires_initializers = [];
    var _otpExpires_extraInitializers = [];
    var _isVerified_decorators;
    var _isVerified_initializers = [];
    var _isVerified_extraInitializers = [];
    var _credentials_decorators;
    var _credentials_initializers = [];
    var _credentials_extraInitializers = [];
    var AuthIdentity = _classThis = /** @class */ (function () {
        function AuthIdentity_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.user = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _user_initializers, void 0));
            this.username = (__runInitializers(this, _user_extraInitializers), __runInitializers(this, _username_initializers, void 0));
            this.password = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _password_initializers, void 0));
            this.email = (__runInitializers(this, _password_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.providerIdentities = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _providerIdentities_initializers, void 0));
            this.metadata = (__runInitializers(this, _providerIdentities_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            this.phone = (__runInitializers(this, _deleted_at_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
            this.otpCode = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _otpCode_initializers, void 0));
            this.otpExpires = (__runInitializers(this, _otpCode_extraInitializers), __runInitializers(this, _otpExpires_initializers, void 0));
            this.isVerified = (__runInitializers(this, _otpExpires_extraInitializers), __runInitializers(this, _isVerified_initializers, void 0));
            this.credentials = (__runInitializers(this, _isVerified_extraInitializers), __runInitializers(this, _credentials_initializers, void 0));
            __runInitializers(this, _credentials_extraInitializers);
        }
        return AuthIdentity_1;
    }());
    __setFunctionName(_classThis, "AuthIdentity");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, mongoose_1.Prop)({
                required: true,
                unique: true,
                default: function () { return "auth_".concat(new mongoose_2.Types.ObjectId().toHexString()); },
            })];
        _user_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', required: true })];
        _username_decorators = [(0, mongoose_1.Prop)({ required: true, unique: true })];
        _password_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _email_decorators = [(0, mongoose_1.Prop)({ unique: true, sparse: true })];
        _providerIdentities_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'ProviderIdentity' }] })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date })];
        _phone_decorators = [(0, mongoose_1.Prop)({ unique: true, sparse: true })];
        _otpCode_decorators = [(0, mongoose_1.Prop)()];
        _otpExpires_decorators = [(0, mongoose_1.Prop)()];
        _isVerified_decorators = [(0, mongoose_1.Prop)({ default: false })];
        _credentials_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: function (obj) { return "user" in obj; }, get: function (obj) { return obj.user; }, set: function (obj, value) { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _providerIdentities_decorators, { kind: "field", name: "providerIdentities", static: false, private: false, access: { has: function (obj) { return "providerIdentities" in obj; }, get: function (obj) { return obj.providerIdentities; }, set: function (obj, value) { obj.providerIdentities = value; } }, metadata: _metadata }, _providerIdentities_initializers, _providerIdentities_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
        __esDecorate(null, null, _otpCode_decorators, { kind: "field", name: "otpCode", static: false, private: false, access: { has: function (obj) { return "otpCode" in obj; }, get: function (obj) { return obj.otpCode; }, set: function (obj, value) { obj.otpCode = value; } }, metadata: _metadata }, _otpCode_initializers, _otpCode_extraInitializers);
        __esDecorate(null, null, _otpExpires_decorators, { kind: "field", name: "otpExpires", static: false, private: false, access: { has: function (obj) { return "otpExpires" in obj; }, get: function (obj) { return obj.otpExpires; }, set: function (obj, value) { obj.otpExpires = value; } }, metadata: _metadata }, _otpExpires_initializers, _otpExpires_extraInitializers);
        __esDecorate(null, null, _isVerified_decorators, { kind: "field", name: "isVerified", static: false, private: false, access: { has: function (obj) { return "isVerified" in obj; }, get: function (obj) { return obj.isVerified; }, set: function (obj, value) { obj.isVerified = value; } }, metadata: _metadata }, _isVerified_initializers, _isVerified_extraInitializers);
        __esDecorate(null, null, _credentials_decorators, { kind: "field", name: "credentials", static: false, private: false, access: { has: function (obj) { return "credentials" in obj; }, get: function (obj) { return obj.credentials; }, set: function (obj, value) { obj.credentials = value; } }, metadata: _metadata }, _credentials_initializers, _credentials_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthIdentity = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthIdentity = _classThis;
}();
exports.AuthIdentity = AuthIdentity;
exports.AuthIdentitySchema = mongoose_1.SchemaFactory.createForClass(AuthIdentity);
