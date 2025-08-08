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
exports.UpdateProviderDto = void 0;
var class_validator_1 = require("class-validator");
var UpdateProviderDto = function () {
    var _a;
    var _provider_decorators;
    var _provider_initializers = [];
    var _provider_extraInitializers = [];
    var _enabled_decorators;
    var _enabled_initializers = [];
    var _enabled_extraInitializers = [];
    var _clientId_decorators;
    var _clientId_initializers = [];
    var _clientId_extraInitializers = [];
    var _clientSecret_decorators;
    var _clientSecret_initializers = [];
    var _clientSecret_extraInitializers = [];
    var _redirectUri_decorators;
    var _redirectUri_initializers = [];
    var _redirectUri_extraInitializers = [];
    return _a = /** @class */ (function () {
            function UpdateProviderDto() {
                this.provider = __runInitializers(this, _provider_initializers, void 0);
                this.enabled = (__runInitializers(this, _provider_extraInitializers), __runInitializers(this, _enabled_initializers, void 0));
                this.clientId = (__runInitializers(this, _enabled_extraInitializers), __runInitializers(this, _clientId_initializers, void 0));
                this.clientSecret = (__runInitializers(this, _clientId_extraInitializers), __runInitializers(this, _clientSecret_initializers, void 0));
                this.redirectUri = (__runInitializers(this, _clientSecret_extraInitializers), __runInitializers(this, _redirectUri_initializers, void 0));
                __runInitializers(this, _redirectUri_extraInitializers);
            }
            return UpdateProviderDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _provider_decorators = [(0, class_validator_1.IsString)()];
            _enabled_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsBoolean)()];
            _clientId_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _clientSecret_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _redirectUri_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _provider_decorators, { kind: "field", name: "provider", static: false, private: false, access: { has: function (obj) { return "provider" in obj; }, get: function (obj) { return obj.provider; }, set: function (obj, value) { obj.provider = value; } }, metadata: _metadata }, _provider_initializers, _provider_extraInitializers);
            __esDecorate(null, null, _enabled_decorators, { kind: "field", name: "enabled", static: false, private: false, access: { has: function (obj) { return "enabled" in obj; }, get: function (obj) { return obj.enabled; }, set: function (obj, value) { obj.enabled = value; } }, metadata: _metadata }, _enabled_initializers, _enabled_extraInitializers);
            __esDecorate(null, null, _clientId_decorators, { kind: "field", name: "clientId", static: false, private: false, access: { has: function (obj) { return "clientId" in obj; }, get: function (obj) { return obj.clientId; }, set: function (obj, value) { obj.clientId = value; } }, metadata: _metadata }, _clientId_initializers, _clientId_extraInitializers);
            __esDecorate(null, null, _clientSecret_decorators, { kind: "field", name: "clientSecret", static: false, private: false, access: { has: function (obj) { return "clientSecret" in obj; }, get: function (obj) { return obj.clientSecret; }, set: function (obj, value) { obj.clientSecret = value; } }, metadata: _metadata }, _clientSecret_initializers, _clientSecret_extraInitializers);
            __esDecorate(null, null, _redirectUri_decorators, { kind: "field", name: "redirectUri", static: false, private: false, access: { has: function (obj) { return "redirectUri" in obj; }, get: function (obj) { return obj.redirectUri; }, set: function (obj, value) { obj.redirectUri = value; } }, metadata: _metadata }, _redirectUri_initializers, _redirectUri_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpdateProviderDto = UpdateProviderDto;
