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
exports.VerifyOtpDto = void 0;
var class_validator_1 = require("class-validator");
var VerifyOtpDto = function () {
    var _a;
    var _phone_decorators;
    var _phone_initializers = [];
    var _phone_extraInitializers = [];
    var _otp_decorators;
    var _otp_initializers = [];
    var _otp_extraInitializers = [];
    return _a = /** @class */ (function () {
            function VerifyOtpDto() {
                this.phone = __runInitializers(this, _phone_initializers, void 0);
                this.otp = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _otp_initializers, void 0));
                __runInitializers(this, _otp_extraInitializers);
            }
            return VerifyOtpDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _phone_decorators = [(0, class_validator_1.IsPhoneNumber)('ZZ', {
                    message: 'Le numéro doit être au format international (ex: +33612345678)'
                })];
            _otp_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.Length)(4, 6, {
                    message: 'Le code OTP doit contenir entre 4 et 6 caractères'
                })];
            __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
            __esDecorate(null, null, _otp_decorators, { kind: "field", name: "otp", static: false, private: false, access: { has: function (obj) { return "otp" in obj; }, get: function (obj) { return obj.otp; }, set: function (obj, value) { obj.otp = value; } }, metadata: _metadata }, _otp_initializers, _otp_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.VerifyOtpDto = VerifyOtpDto;
