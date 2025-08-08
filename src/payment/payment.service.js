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
exports.PaymentService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("mongoose");
var PaymentService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PaymentService = _classThis = /** @class */ (function () {
        function PaymentService_1(paymentModel, paymentCollectionModel, paymentSessionModel, refundModel, captureModel, orderModel) {
            this.paymentModel = paymentModel;
            this.paymentCollectionModel = paymentCollectionModel;
            this.paymentSessionModel = paymentSessionModel;
            this.refundModel = refundModel;
            this.captureModel = captureModel;
            this.orderModel = orderModel;
        }
        PaymentService_1.prototype.createPaymentForOrder = function (orderId, amount, provider) {
            return __awaiter(this, void 0, void 0, function () {
                var session, collection, payment;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.paymentSessionModel.create({
                                provider: provider,
                                status: 'pending',
                            })];
                        case 1:
                            session = _a.sent();
                            return [4 /*yield*/, this.paymentCollectionModel.create({
                                    payments: [],
                                })];
                        case 2:
                            collection = _a.sent();
                            return [4 /*yield*/, this.paymentModel.create({
                                    order_id: orderId,
                                    amount: amount,
                                    provider: provider,
                                    status: 'pending',
                                    session: session._id,
                                    collection: collection._id,
                                })];
                        case 3:
                            payment = _a.sent();
                            // Mise à jour collection
                            collection.payments.push(payment._id);
                            return [4 /*yield*/, collection.save()];
                        case 4:
                            _a.sent();
                            return [2 /*return*/, payment];
                    }
                });
            });
        };
        PaymentService_1.prototype.create = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var payment;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            payment = new this.paymentModel(dto);
                            return [4 /*yield*/, payment.save()];
                        case 1: return [2 /*return*/, _a.sent()]; // ici, tu reçois bien un document complet avec _id, etc.
                    }
                });
            });
        };
        PaymentService_1.prototype.findAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.paymentModel
                            .find()
                            .populate('payment_collection')
                            .populate('payment_session')
                            .populate('refunds')
                            .populate('captures')
                            .exec()];
                });
            });
        };
        PaymentService_1.prototype.validateObjectId = function (id) {
            if (!mongoose_1.Types.ObjectId.isValid(id)) {
                throw new common_1.BadRequestException('ID invalide');
            }
        };
        /** Récupérer un paiement avec toutes ses relations */
        PaymentService_1.prototype.findOne = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var payment;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.validateObjectId(id);
                            return [4 /*yield*/, this.paymentModel
                                    .findById(id)
                                    .populate('payment_collection')
                                    .populate('payment_session')
                                    .populate('refunds')
                                    .populate('captures')
                                    .exec()];
                        case 1:
                            payment = _a.sent();
                            if (!payment) {
                                throw new common_1.NotFoundException("Paiement avec l'ID ".concat(id, " non trouv\u00E9"));
                            }
                            return [2 /*return*/, payment];
                    }
                });
            });
        };
        /** Mettre à jour un paiement */
        PaymentService_1.prototype.update = function (id, updateDto) {
            return __awaiter(this, void 0, void 0, function () {
                var updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.validateObjectId(id);
                            return [4 /*yield*/, this.paymentModel
                                    .findByIdAndUpdate(id, updateDto, { new: true })
                                    .exec()];
                        case 1:
                            updated = _a.sent();
                            if (!updated) {
                                throw new common_1.NotFoundException("Paiement avec l'ID ".concat(id, " non trouv\u00E9"));
                            }
                            return [2 /*return*/, updated];
                    }
                });
            });
        };
        /** Supprimer un paiement */
        PaymentService_1.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var deleted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.validateObjectId(id);
                            return [4 /*yield*/, this.paymentModel.findByIdAndDelete(id).exec()];
                        case 1:
                            deleted = _a.sent();
                            if (!deleted) {
                                throw new common_1.NotFoundException("Paiement avec l'ID ".concat(id, " non trouv\u00E9"));
                            }
                            return [2 /*return*/, deleted];
                    }
                });
            });
        };
        PaymentService_1.prototype.createPayment = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var created;
                return __generator(this, function (_a) {
                    created = new this.paymentModel(data);
                    return [2 /*return*/, created.save()];
                });
            });
        };
        PaymentService_1.prototype.createPaymentCollection = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var created;
                return __generator(this, function (_a) {
                    created = new this.paymentCollectionModel(data);
                    return [2 /*return*/, created.save()];
                });
            });
        };
        PaymentService_1.prototype.createPaymentSession = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var created;
                return __generator(this, function (_a) {
                    created = new this.paymentSessionModel(data);
                    return [2 /*return*/, created.save()];
                });
            });
        };
        PaymentService_1.prototype.capturePayment = function (paymentId) {
            return __awaiter(this, void 0, void 0, function () {
                var payment, capture;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.paymentModel.findById(paymentId)];
                        case 1:
                            payment = _a.sent();
                            if (!payment)
                                throw new common_1.NotFoundException('Paiement introuvable');
                            capture = new this.captureModel({
                                payment: payment._id,
                                amount: payment.amount,
                                created_at: new Date(),
                            });
                            return [4 /*yield*/, capture.save()];
                        case 2:
                            _a.sent();
                            payment.status = 'captured';
                            return [2 /*return*/, payment.save()];
                    }
                });
            });
        };
        PaymentService_1.prototype.refundPayment = function (paymentId, amount) {
            return __awaiter(this, void 0, void 0, function () {
                var payment, refund;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.paymentModel.findById(paymentId)];
                        case 1:
                            payment = _a.sent();
                            if (!payment)
                                throw new common_1.NotFoundException('Paiement introuvable');
                            refund = new this.refundModel({
                                payment: payment._id,
                                amount: amount,
                                created_at: new Date(),
                            });
                            payment.status = 'refunded';
                            return [4 /*yield*/, payment.save()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, refund.save()];
                    }
                });
            });
        };
        PaymentService_1.prototype.getAllPayments = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.paymentModel.find().exec()];
                });
            });
        };
        PaymentService_1.prototype.findByStore = function (storeId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.paymentModel.find({
                            where: { store: { id: storeId } },
                            relations: ['order'],
                        })];
                });
            });
        };
        return PaymentService_1;
    }());
    __setFunctionName(_classThis, "PaymentService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PaymentService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PaymentService = _classThis;
}();
exports.PaymentService = PaymentService;
