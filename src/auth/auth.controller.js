"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var roles_decorator_1 = require("./roles.decorator");
var role_enum_1 = require("./role.enum");
var roles_guards_1 = require("./roles.guards");
var AuthController = function () {
    var _classDecorators = [(0, common_1.Controller)('auth')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _register_decorators;
    var _signIn_decorators;
    var _refresh_decorators;
    var _getProfile_decorators;
    var _requestOtp_decorators;
    var _verifyOtp_decorators;
    var _findOne_decorators;
    var _update_decorators;
    var _remove_decorators;
    var _getVendorDashboard_decorators;
    var _getAdminDashboard_decorators;
    var AuthController = _classThis = /** @class */ (function () {
        function AuthController_1(authService, userService, otpService) {
            this.authService = (__runInitializers(this, _instanceExtraInitializers), authService);
            this.userService = userService;
            this.otpService = otpService;
        }
        /** REGISTER */
        AuthController_1.prototype.register = function (registerDto) {
            return this.authService.register(registerDto);
        };
        /** LOGIN PAR PHONE + PASSWORD */
        AuthController_1.prototype.signIn = function (signInDto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.authService.signIn(signInDto.login, signInDto.password)];
                });
            });
        };
        /** REFRESH TOKEN */
        AuthController_1.prototype.refresh = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!(body === null || body === void 0 ? void 0 : body.refresh_token)) {
                        throw new common_1.BadRequestException('Le refresh_token est requis');
                    }
                    return [2 /*return*/, this.authService.refresh(body.refresh_token)];
                });
            });
        };
        /** PROFILE */
        AuthController_1.prototype.getProfile = function (req) {
            return __awaiter(this, void 0, void 0, function () {
                var userId, user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            userId = req.user.sub;
                            console.log(userId, "userId");
                            return [4 /*yield*/, this.userService.findOneByUserId(userId)];
                        case 1:
                            user = _a.sent();
                            if (!user) {
                                return [2 /*return*/, { message: 'Utilisateur non trouvé' }];
                            }
                            return [2 /*return*/, {
                                    id: user.id,
                                    first_name: user.first_name,
                                    last_name: user.last_name,
                                    phone: user.phone,
                                    email: user.email,
                                    role: user.role,
                                    createdAt: user.createdAt,
                                    updatedAt: user.updatedAt,
                                    deletedAt: user.deleted_at,
                                }];
                    }
                });
            });
        };
        /** OTP: Vérification */
        AuthController_1.prototype.requestOtp = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('Body reçu:', body);
                            if (!body.email) {
                                throw new common_1.BadRequestException('Email requis.');
                            }
                            return [4 /*yield*/, this.otpService.generate(body.email)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, { message: 'Code envoyé à votre adresse email.' }];
                    }
                });
            });
        };
        AuthController_1.prototype.verifyOtp = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var isValid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.otpService.verify(body.email, body.code)];
                        case 1:
                            isValid = _a.sent();
                            if (!isValid) {
                                throw new common_1.BadRequestException('Code incorrect ou expiré.');
                            }
                            return [2 /*return*/, { message: 'Code vérifié avec succès.' }];
                    }
                });
            });
        };
        /** CRUD AuthIdentity */
        AuthController_1.prototype.findOne = function (id) {
            return this.authService.findOne(id);
        };
        AuthController_1.prototype.update = function (id, updateAuthDto) {
            return this.authService.update(id, updateAuthDto);
        };
        AuthController_1.prototype.remove = function (id) {
            return this.authService.remove(id);
        };
        /** DASHBOARDS protégés par rôle */
        AuthController_1.prototype.getVendorDashboard = function (req) {
            return {
                message: "Hello Vendor ".concat(req.user.first_name, " !"),
                user: req.user,
            };
        };
        AuthController_1.prototype.getAdminDashboard = function (req) {
            return {
                message: "Hello Admin ".concat(req.user.first_name, " !"),
                user: req.user,
            };
        };
        return AuthController_1;
    }());
    __setFunctionName(_classThis, "AuthController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _register_decorators = [(0, common_1.Post)('register')];
        _signIn_decorators = [(0, common_1.Post)('login')];
        _refresh_decorators = [(0, common_1.Post)('refresh'), (0, common_1.HttpCode)(common_1.HttpStatus.OK)];
        _getProfile_decorators = [(0, common_1.Get)('profile'), (0, roles_decorator_1.Roles)(role_enum_1.Role.VENDOR), (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guards_1.RolesGuard)];
        _requestOtp_decorators = [(0, common_1.Post)('request-otp')];
        _verifyOtp_decorators = [(0, common_1.Post)('verify-otp')];
        _findOne_decorators = [(0, common_1.Get)(':id')];
        _update_decorators = [(0, common_1.Patch)(':id')];
        _remove_decorators = [(0, common_1.Delete)(':id')];
        _getVendorDashboard_decorators = [(0, common_1.Get)('vendor-dashboard'), (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guards_1.RolesGuard), (0, roles_decorator_1.Roles)(role_enum_1.Role.VENDOR)];
        _getAdminDashboard_decorators = [(0, common_1.Get)('admin-dashboard'), (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guards_1.RolesGuard), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)];
        __esDecorate(_classThis, null, _register_decorators, { kind: "method", name: "register", static: false, private: false, access: { has: function (obj) { return "register" in obj; }, get: function (obj) { return obj.register; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _signIn_decorators, { kind: "method", name: "signIn", static: false, private: false, access: { has: function (obj) { return "signIn" in obj; }, get: function (obj) { return obj.signIn; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _refresh_decorators, { kind: "method", name: "refresh", static: false, private: false, access: { has: function (obj) { return "refresh" in obj; }, get: function (obj) { return obj.refresh; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getProfile_decorators, { kind: "method", name: "getProfile", static: false, private: false, access: { has: function (obj) { return "getProfile" in obj; }, get: function (obj) { return obj.getProfile; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _requestOtp_decorators, { kind: "method", name: "requestOtp", static: false, private: false, access: { has: function (obj) { return "requestOtp" in obj; }, get: function (obj) { return obj.requestOtp; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _verifyOtp_decorators, { kind: "method", name: "verifyOtp", static: false, private: false, access: { has: function (obj) { return "verifyOtp" in obj; }, get: function (obj) { return obj.verifyOtp; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: function (obj) { return "findOne" in obj; }, get: function (obj) { return obj.findOne; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: function (obj) { return "update" in obj; }, get: function (obj) { return obj.update; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: function (obj) { return "remove" in obj; }, get: function (obj) { return obj.remove; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getVendorDashboard_decorators, { kind: "method", name: "getVendorDashboard", static: false, private: false, access: { has: function (obj) { return "getVendorDashboard" in obj; }, get: function (obj) { return obj.getVendorDashboard; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAdminDashboard_decorators, { kind: "method", name: "getAdminDashboard", static: false, private: false, access: { has: function (obj) { return "getAdminDashboard" in obj; }, get: function (obj) { return obj.getAdminDashboard; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthController = _classThis;
}();
exports.AuthController = AuthController;
