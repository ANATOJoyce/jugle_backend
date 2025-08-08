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
exports.UserController = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("mongoose");
var role_enum_1 = require("../auth/role.enum");
var roles_decorator_1 = require("../../../../../../../../src/auth/roles.decorator");
var passport_1 = require("@nestjs/passport");
var roles_guards_1 = require("../../../../../../../../src/auth/roles.guards");
var UserController = function () {
    var _classDecorators = [(0, common_1.Controller)('users')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createUser_decorators;
    var _getProfile_decorators;
    var _findAll_decorators;
    var _findMe_decorators;
    var _updateUser_decorators;
    var _deleteUser_decorators;
    var _findAllByRole_decorators;
    var UserController = _classThis = /** @class */ (function () {
        function UserController_1(userService) {
            this.userService = (__runInitializers(this, _instanceExtraInitializers), userService);
        }
        UserController_1.prototype.createUser = function (createUserDto) {
            return this.userService.createUser(createUserDto);
        };
        UserController_1.prototype.getProfile = function (user) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, user]; // déjà bien typé grâce au décorateur
                });
            });
        };
        //Afficher tout les utilisateur
        UserController_1.prototype.findAll = function () {
            return this.userService.findAll();
        };
        //user/:id(recherceh d'un utililisateur par son id )
        UserController_1.prototype.findMe = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var isValid, findOneUser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isValid = mongoose_1.default.Types.ObjectId.isValid(id);
                            if (!isValid)
                                throw new common_1.HttpException('Utilisateur introuvable', 404);
                            return [4 /*yield*/, this.userService.findOneById(id)];
                        case 1:
                            findOneUser = _a.sent();
                            if (!findOneUser)
                                throw new common_1.HttpException('Utilisateur est absent', 404);
                            return [2 /*return*/, findOneUser];
                    }
                });
            });
        };
        UserController_1.prototype.updateUser = function (id, updateUserDto) {
            return __awaiter(this, void 0, void 0, function () {
                var isValid, updateUser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isValid = mongoose_1.default.Types.ObjectId.isValid(id);
                            if (!isValid)
                                throw new common_1.HttpException('ID invalide', 400);
                            return [4 /*yield*/, this.userService.update(id, updateUserDto)];
                        case 1:
                            updateUser = _a.sent();
                            if (!updateUser)
                                throw new common_1.HttpException('user not found', 404);
                            return [2 /*return*/, updateUser];
                    }
                });
            });
        };
        UserController_1.prototype.deleteUser = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var isValid, deleteUser;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isValid = mongoose_1.default.Types.ObjectId.isValid(id);
                            if (!isValid)
                                throw new common_1.HttpException('Invalid ID', 400);
                            return [4 /*yield*/, this.userService.remove(id)];
                        case 1:
                            deleteUser = _a.sent();
                            if (!deleteUser)
                                throw new common_1.HttpException('User Not Found', 404);
                            return [2 /*return*/, this.userService.remove(id)];
                    }
                });
            });
        };
        UserController_1.prototype.findAllByRole = function (role) {
            if (role) {
                return this.userService.findAllByRole(role);
            }
            return this.userService.findAll(); // <- récupère tout si aucun rôle fourni
        };
        return UserController_1;
    }());
    __setFunctionName(_classThis, "UserController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createUser_decorators = [(0, common_1.Post)()];
        _getProfile_decorators = [(0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guards_1.RolesGuard), (0, common_1.Get)('/profile'), (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.VENDOR)];
        _findAll_decorators = [(0, common_1.Get)()];
        _findMe_decorators = [(0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guards_1.RolesGuard), (0, roles_decorator_1.Roles)(role_enum_1.Role.VENDOR), (0, common_1.Get)('me')];
        _updateUser_decorators = [(0, common_1.Patch)(':id'), (0, common_1.UsePipes)()];
        _deleteUser_decorators = [(0, common_1.Delete)(':id')];
        _findAllByRole_decorators = [(0, common_1.Get)()];
        __esDecorate(_classThis, null, _createUser_decorators, { kind: "method", name: "createUser", static: false, private: false, access: { has: function (obj) { return "createUser" in obj; }, get: function (obj) { return obj.createUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getProfile_decorators, { kind: "method", name: "getProfile", static: false, private: false, access: { has: function (obj) { return "getProfile" in obj; }, get: function (obj) { return obj.getProfile; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: function (obj) { return "findAll" in obj; }, get: function (obj) { return obj.findAll; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findMe_decorators, { kind: "method", name: "findMe", static: false, private: false, access: { has: function (obj) { return "findMe" in obj; }, get: function (obj) { return obj.findMe; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateUser_decorators, { kind: "method", name: "updateUser", static: false, private: false, access: { has: function (obj) { return "updateUser" in obj; }, get: function (obj) { return obj.updateUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteUser_decorators, { kind: "method", name: "deleteUser", static: false, private: false, access: { has: function (obj) { return "deleteUser" in obj; }, get: function (obj) { return obj.deleteUser; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findAllByRole_decorators, { kind: "method", name: "findAllByRole", static: false, private: false, access: { has: function (obj) { return "findAllByRole" in obj; }, get: function (obj) { return obj.findAllByRole; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UserController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserController = _classThis;
}();
exports.UserController = UserController;
