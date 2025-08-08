"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
exports.AuthService = void 0;
// auth.service.ts
var common_1 = require("@nestjs/common");
var bcrypt = require("bcrypt");
var mongoose_1 = require("mongoose");
var role_enum_1 = require("./role.enum");
var AuthService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AuthService = _classThis = /** @class */ (function () {
        function AuthService_1(userService, jwtService, otpService, authIdentityModel, userModel, providerIdentityModel, verificationCodeModel, mailService) {
            this.userService = userService;
            this.jwtService = jwtService;
            this.otpService = otpService;
            this.authIdentityModel = authIdentityModel;
            this.userModel = userModel;
            this.providerIdentityModel = providerIdentityModel;
            this.verificationCodeModel = verificationCodeModel;
            this.mailService = mailService;
            // auth.service.ts
            this.refreshTokens = new Map();
        }
        AuthService_1.prototype.register = function (registerDto) {
            return __awaiter(this, void 0, void 0, function () {
                var phone, email, password, first_name, last_name, existingUserByPhone, existingUserByEmail, existingAuthIdentityByEmail, hashedPassword, newUser, baseUsername, username, counter, authIdentity, error_1;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            phone = registerDto.phone, email = registerDto.email, password = registerDto.password, first_name = registerDto.first_name, last_name = registerDto.last_name;
                            return [4 /*yield*/, this.userService.findByPhone(phone)];
                        case 1:
                            existingUserByPhone = _b.sent();
                            if (existingUserByPhone) {
                                throw new common_1.BadRequestException('Un utilisateur avec ce téléphone existe déjà.');
                            }
                            if (!email) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.userService.findByEmail(email)];
                        case 2:
                            existingUserByEmail = _b.sent();
                            if (existingUserByEmail) {
                                throw new common_1.BadRequestException('Un utilisateur avec cet email existe déjà.');
                            }
                            return [4 /*yield*/, this.authIdentityModel.findOne({ email: email })];
                        case 3:
                            existingAuthIdentityByEmail = _b.sent();
                            if (existingAuthIdentityByEmail) {
                                throw new common_1.BadRequestException('Un utilisateur avec cet email existe déjà.');
                            }
                            _b.label = 4;
                        case 4: return [4 /*yield*/, bcrypt.hash(password, 10)];
                        case 5:
                            hashedPassword = _b.sent();
                            return [4 /*yield*/, this.userService.createUser({
                                    phone: phone,
                                    first_name: first_name,
                                    last_name: last_name,
                                    email: email,
                                    password: hashedPassword,
                                    role: role_enum_1.Role.VENDOR,
                                })];
                        case 6:
                            newUser = _b.sent();
                            baseUsername = "".concat(first_name, ".").concat(last_name).toLowerCase().replace(/\s+/g, '');
                            username = baseUsername;
                            counter = 1;
                            _b.label = 7;
                        case 7: return [4 /*yield*/, this.authIdentityModel.findOne({ username: username })];
                        case 8:
                            if (!_b.sent()) return [3 /*break*/, 9];
                            username = "".concat(baseUsername).concat(counter);
                            counter++;
                            return [3 /*break*/, 7];
                        case 9:
                            authIdentity = new this.authIdentityModel({
                                username: username,
                                email: email,
                                password: hashedPassword,
                                phone: phone,
                                user: newUser._id,
                            });
                            _b.label = 10;
                        case 10:
                            _b.trys.push([10, 12, , 13]);
                            return [4 /*yield*/, authIdentity.save()];
                        case 11:
                            _b.sent();
                            return [3 /*break*/, 13];
                        case 12:
                            error_1 = _b.sent();
                            if (error_1.code === 11000 && ((_a = error_1.keyPattern) === null || _a === void 0 ? void 0 : _a.username)) {
                                throw new common_1.BadRequestException("Un utilisateur avec ce nom et prénom existe déjà. Veuillez en choisir d'autres.");
                            }
                            throw error_1;
                        case 13: return [2 /*return*/, this.generateTokens(newUser, authIdentity)];
                    }
                });
            });
        };
        AuthService_1.prototype.generateTokens = function (user, identity) {
            var accessPayload = {
                sub: user._id,
                email: user.email,
                phone: user.phone,
                role: user.role,
                first_name: user.first_name,
            };
            var refreshPayload = {
                sub: user._id,
                identityId: identity.id,
            };
            return {
                access_token: this.jwtService.sign(accessPayload),
                refresh_token: this.jwtService.sign(refreshPayload, {
                    expiresIn: '7d',
                }),
            };
        };
        AuthService_1.prototype.createIdentity = function (createIdentityDto) {
            return __awaiter(this, void 0, void 0, function () {
                var identity;
                return __generator(this, function (_a) {
                    identity = new this.authIdentityModel(createIdentityDto);
                    return [2 /*return*/, identity.save()];
                });
            });
        };
        AuthService_1.prototype.signIn = function (login, password) {
            return __awaiter(this, void 0, void 0, function () {
                var authIdentity, isPhone, loginLower, isPasswordValid, user, tokens;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            console.log(login);
                            if (!login || typeof login !== 'string') {
                                throw new common_1.UnauthorizedException('Login invalide');
                            }
                            isPhone = /^\+?\d+$/.test(login);
                            if (!isPhone) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.authIdentityModel.findOne({ phone: login })];
                        case 1:
                            authIdentity = _b.sent();
                            return [3 /*break*/, 4];
                        case 2:
                            loginLower = login.toLowerCase();
                            return [4 /*yield*/, this.authIdentityModel.findOne({
                                    $or: [{ username: loginLower }, { email: loginLower }],
                                })];
                        case 3:
                            authIdentity = _b.sent();
                            _b.label = 4;
                        case 4:
                            if (!authIdentity) {
                                throw new common_1.UnauthorizedException('Identité non trouvée creer un compte.');
                            }
                            return [4 /*yield*/, bcrypt.compare(password, authIdentity.password)];
                        case 5:
                            isPasswordValid = _b.sent();
                            if (!isPasswordValid) {
                                throw new common_1.UnauthorizedException('Mot de passe incorrect.');
                            }
                            return [4 /*yield*/, this.userService.findOneById(authIdentity.user.toString())];
                        case 6:
                            user = _b.sent();
                            if (!user) {
                                throw new common_1.UnauthorizedException('Utilisateur introuvable.');
                            }
                            //  Si l'utilisateur est un admin "forcé"
                            if (authIdentity.email === 'anatojoyce3@gmail.com') {
                                user.role = 'admin'; //  on force ici le rôle
                            }
                            tokens = this.generateTokens(user, authIdentity);
                            return [2 /*return*/, __assign(__assign({}, tokens), { role: (_a = user.role) !== null && _a !== void 0 ? _a : 'user' })];
                    }
                });
            });
        };
        AuthService_1.prototype.verifyPhoneOtp = function (phone, otp) {
            return __awaiter(this, void 0, void 0, function () {
                var isOtpValid, user, authIdentity;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.otpService.verify(phone, otp)];
                        case 1:
                            isOtpValid = _a.sent();
                            if (!isOtpValid) {
                                throw new common_1.UnauthorizedException('OTP invalide ou expiré');
                            }
                            return [4 /*yield*/, this.userService.findByPhone(phone)];
                        case 2:
                            user = _a.sent();
                            if (!user) {
                                throw new common_1.UnauthorizedException('Utilisateur non trouvé');
                            }
                            return [4 /*yield*/, this.authIdentityModel.findOne({ phone: phone })];
                        case 3:
                            authIdentity = _a.sent();
                            if (!authIdentity) {
                                throw new common_1.UnauthorizedException('Identité non trouvée');
                            }
                            return [2 /*return*/, this.generateTokens(user, authIdentity)];
                    }
                });
            });
        };
        AuthService_1.prototype.refresh = function (refresh_token) {
            return __awaiter(this, void 0, void 0, function () {
                var payload, user, authIdentity, newAccessToken, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            payload = this.jwtService.verify(refresh_token, {
                                secret: process.env.JWT_REFRESH_SECRET,
                            });
                            return [4 /*yield*/, this.userService.findOneById(payload.sub)];
                        case 1:
                            user = _a.sent();
                            if (!user) {
                                throw new common_1.UnauthorizedException('Utilisateur introuvable.');
                            }
                            return [4 /*yield*/, this.authIdentityModel.findOne({ user: user._id })];
                        case 2:
                            authIdentity = _a.sent();
                            if (!authIdentity) {
                                throw new common_1.UnauthorizedException('Identité non trouvée.');
                            }
                            newAccessToken = this.jwtService.sign({
                                sub: user.id.toString(),
                                auth_identity: authIdentity.id.toString(),
                                phone: user.phone,
                                first_name: user.first_name,
                                roles: [user.role],
                            }, {
                                expiresIn: '1h',
                                secret: process.env.JWT_SECRET,
                            });
                            return [2 /*return*/, { access_token: newAccessToken }];
                        case 3:
                            e_1 = _a.sent();
                            throw new common_1.UnauthorizedException('Refresh token invalide ou expiré.');
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        AuthService_1.prototype.findOne = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!(0, mongoose_1.isValidObjectId)(id)) {
                        throw new common_1.BadRequestException('ID invalide');
                    }
                    return [2 /*return*/, this.authIdentityModel.findById(id).populate('providerIdentities').exec()];
                });
            });
        };
        AuthService_1.prototype.update = function (id, updateAuthDto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.authIdentityModel
                            .findByIdAndUpdate(id, updateAuthDto, { new: true })
                            .populate('providerIdentities')
                            .exec()];
                });
            });
        };
        AuthService_1.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.authIdentityModel.findByIdAndDelete(id).exec()];
                        case 1:
                            result = _a.sent();
                            if (result) {
                                return [2 /*return*/, { deleted: true, message: "AuthIdentity ".concat(id, " supprim\u00E9e.") }];
                            }
                            else {
                                return [2 /*return*/, { deleted: false, message: "AuthIdentity ".concat(id, " non trouv\u00E9e.") }];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        AuthService_1.prototype.findOrCreateUser = function (profile) {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.userModel.findOne({ email: profile.email }).exec()];
                        case 1:
                            user = _a.sent();
                            if (!!user) return [3 /*break*/, 3];
                            user = new this.userModel({
                                email: profile.email,
                                first_name: profile.firstName || 'Utilisateur',
                                last_name: profile.lastName || 'Google',
                                is_active: true,
                            });
                            return [4 /*yield*/, user.save()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/, user];
                    }
                });
            });
        };
        // Supprimer des identités de provider
        AuthService_1.prototype.deleteProviderIdentities = function (ids) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        AuthService_1.prototype.listAuthIdentities = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        AuthService_1.prototype.listAndCountAuthIdentities = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        AuthService_1.prototype.listProviderIdentities = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        AuthService_1.prototype.retrieveAuthIdentity = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        AuthService_1.prototype.retrieveProviderIdentity = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        AuthService_1.prototype.updateAuthIdentities = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        AuthService_1.prototype.updateProviderIdentities = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        AuthService_1.prototype.updateProvider = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        AuthService_1.prototype.validateCallback = function (token) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            });
        };
        return AuthService_1;
    }());
    __setFunctionName(_classThis, "AuthService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthService = _classThis;
}();
exports.AuthService = AuthService;
