"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.InviteSchema = exports.Invite = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Invite = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            collection: 'invites',
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
    var _classSuper = mongoose_2.Document;
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _accepted_decorators;
    var _accepted_initializers = [];
    var _accepted_extraInitializers = [];
    var _token_decorators;
    var _token_initializers = [];
    var _token_extraInitializers = [];
    var _expires_at_decorators;
    var _expires_at_initializers = [];
    var _expires_at_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var Invite = _classThis = /** @class */ (function (_super) {
        __extends(Invite_1, _super);
        function Invite_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.email = __runInitializers(_this, _email_initializers, void 0);
            _this.accepted = (__runInitializers(_this, _email_extraInitializers), __runInitializers(_this, _accepted_initializers, void 0));
            _this.token = (__runInitializers(_this, _accepted_extraInitializers), __runInitializers(_this, _token_initializers, void 0));
            _this.expires_at = (__runInitializers(_this, _token_extraInitializers), __runInitializers(_this, _expires_at_initializers, void 0));
            _this.metadata = (__runInitializers(_this, _expires_at_extraInitializers), __runInitializers(_this, _metadata_initializers, void 0));
            _this.deleted_at = (__runInitializers(_this, _metadata_extraInitializers), __runInitializers(_this, _deleted_at_initializers, void 0));
            __runInitializers(_this, _deleted_at_extraInitializers);
            return _this;
        }
        return Invite_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Invite");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _email_decorators = [(0, mongoose_1.Prop)({ required: true, index: true, unique: true })];
        _accepted_decorators = [(0, mongoose_1.Prop)({ default: false })];
        _token_decorators = [(0, mongoose_1.Prop)({ required: true, index: true })];
        _expires_at_decorators = [(0, mongoose_1.Prop)({ type: Date, required: true })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object, default: null })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)({ type: Date, default: null })];
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _accepted_decorators, { kind: "field", name: "accepted", static: false, private: false, access: { has: function (obj) { return "accepted" in obj; }, get: function (obj) { return obj.accepted; }, set: function (obj, value) { obj.accepted = value; } }, metadata: _metadata }, _accepted_initializers, _accepted_extraInitializers);
        __esDecorate(null, null, _token_decorators, { kind: "field", name: "token", static: false, private: false, access: { has: function (obj) { return "token" in obj; }, get: function (obj) { return obj.token; }, set: function (obj, value) { obj.token = value; } }, metadata: _metadata }, _token_initializers, _token_extraInitializers);
        __esDecorate(null, null, _expires_at_decorators, { kind: "field", name: "expires_at", static: false, private: false, access: { has: function (obj) { return "expires_at" in obj; }, get: function (obj) { return obj.expires_at; }, set: function (obj, value) { obj.expires_at = value; } }, metadata: _metadata }, _expires_at_initializers, _expires_at_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Invite = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Invite = _classThis;
}();
exports.Invite = Invite;
exports.InviteSchema = mongoose_1.SchemaFactory.createForClass(Invite);
