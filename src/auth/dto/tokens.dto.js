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
exports.TokensDto = void 0;
var swagger_1 = require("@nestjs/swagger");
// src/auth/dto/tokens.dto.ts
var TokensDto = function () {
    var _a;
    var _access_token_decorators;
    var _access_token_initializers = [];
    var _access_token_extraInitializers = [];
    var _refresh_token_decorators;
    var _refresh_token_initializers = [];
    var _refresh_token_extraInitializers = [];
    return _a = /** @class */ (function () {
            function TokensDto() {
                this.access_token = __runInitializers(this, _access_token_initializers, void 0);
                this.refresh_token = (__runInitializers(this, _access_token_extraInitializers), __runInitializers(this, _refresh_token_initializers, void 0));
                __runInitializers(this, _refresh_token_extraInitializers);
            }
            return TokensDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _access_token_decorators = [(0, swagger_1.ApiProperty)({ description: 'JWT Access Token' })];
            _refresh_token_decorators = [(0, swagger_1.ApiProperty)({ description: 'JWT Refresh Token' })];
            __esDecorate(null, null, _access_token_decorators, { kind: "field", name: "access_token", static: false, private: false, access: { has: function (obj) { return "access_token" in obj; }, get: function (obj) { return obj.access_token; }, set: function (obj, value) { obj.access_token = value; } }, metadata: _metadata }, _access_token_initializers, _access_token_extraInitializers);
            __esDecorate(null, null, _refresh_token_decorators, { kind: "field", name: "refresh_token", static: false, private: false, access: { has: function (obj) { return "refresh_token" in obj; }, get: function (obj) { return obj.refresh_token; }, set: function (obj, value) { obj.refresh_token = value; } }, metadata: _metadata }, _refresh_token_initializers, _refresh_token_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.TokensDto = TokensDto;
