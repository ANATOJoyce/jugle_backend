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
exports.CustomerSchema = exports.Customer = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Customer = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({
            timestamps: true,
            toJSON: { virtuals: true },
            toObject: { virtuals: true }
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _first_name_decorators;
    var _first_name_initializers = [];
    var _first_name_extraInitializers = [];
    var _last_name_decorators;
    var _last_name_initializers = [];
    var _last_name_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _phone_decorators;
    var _phone_initializers = [];
    var _phone_extraInitializers = [];
    var _has_account_decorators;
    var _has_account_initializers = [];
    var _has_account_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _created_by_decorators;
    var _created_by_initializers = [];
    var _created_by_extraInitializers = [];
    var _customers_decorators;
    var _customers_initializers = [];
    var _customers_extraInitializers = [];
    var _groups_decorators;
    var _groups_initializers = [];
    var _groups_extraInitializers = [];
    var _addresses_decorators;
    var _addresses_initializers = [];
    var _addresses_extraInitializers = [];
    var _deleted_at_decorators;
    var _deleted_at_initializers = [];
    var _deleted_at_extraInitializers = [];
    var Customer = _classThis = /** @class */ (function () {
        function Customer_1() {
            this.id = __runInitializers(this, _id_initializers, void 0); // Auto-generated with "cus" prefix
            this.first_name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _first_name_initializers, void 0));
            this.last_name = (__runInitializers(this, _first_name_extraInitializers), __runInitializers(this, _last_name_initializers, void 0));
            this.email = (__runInitializers(this, _last_name_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.phone = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _phone_initializers, void 0));
            this.has_account = (__runInitializers(this, _phone_extraInitializers), __runInitializers(this, _has_account_initializers, void 0));
            this.metadata = (__runInitializers(this, _has_account_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
            this.created_by = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _created_by_initializers, void 0));
            this.customers = (__runInitializers(this, _created_by_extraInitializers), __runInitializers(this, _customers_initializers, void 0));
            // Many-to-Many through pivot table
            this.groups = (__runInitializers(this, _customers_extraInitializers), __runInitializers(this, _groups_initializers, void 0));
            // One-to-Many relationship
            this.addresses = (__runInitializers(this, _groups_extraInitializers), __runInitializers(this, _addresses_initializers, void 0));
            this.deleted_at = (__runInitializers(this, _addresses_extraInitializers), __runInitializers(this, _deleted_at_initializers, void 0));
            __runInitializers(this, _deleted_at_extraInitializers);
        }
        return Customer_1;
    }());
    __setFunctionName(_classThis, "Customer");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, mongoose_1.Prop)({ required: true, unique: true })];
        _first_name_decorators = [(0, mongoose_1.Prop)({ type: String, index: true })];
        _last_name_decorators = [(0, mongoose_1.Prop)({ type: String, index: true })];
        _email_decorators = [(0, mongoose_1.Prop)({
                type: String,
                index: true,
                sparse: true // Allows multiple nulls for unique index
            })];
        _phone_decorators = [(0, mongoose_1.Prop)({ type: String, index: true })];
        _has_account_decorators = [(0, mongoose_1.Prop)({ default: false })];
        _metadata_decorators = [(0, mongoose_1.Prop)({ type: Object })];
        _created_by_decorators = [(0, mongoose_1.Prop)()];
        _customers_decorators = [(0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'CustomerGroupCustomer' }] })];
        _groups_decorators = [(0, mongoose_1.Prop)({
                type: [{
                        type: mongoose_2.Types.ObjectId,
                        ref: 'CustomerGroupCustomer'
                    }],
                default: []
            })];
        _addresses_decorators = [(0, mongoose_1.Prop)({
                type: [{
                        type: mongoose_2.Types.ObjectId,
                        ref: 'CustomerAddress'
                    }],
                default: []
            })];
        _deleted_at_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _first_name_decorators, { kind: "field", name: "first_name", static: false, private: false, access: { has: function (obj) { return "first_name" in obj; }, get: function (obj) { return obj.first_name; }, set: function (obj, value) { obj.first_name = value; } }, metadata: _metadata }, _first_name_initializers, _first_name_extraInitializers);
        __esDecorate(null, null, _last_name_decorators, { kind: "field", name: "last_name", static: false, private: false, access: { has: function (obj) { return "last_name" in obj; }, get: function (obj) { return obj.last_name; }, set: function (obj, value) { obj.last_name = value; } }, metadata: _metadata }, _last_name_initializers, _last_name_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _phone_decorators, { kind: "field", name: "phone", static: false, private: false, access: { has: function (obj) { return "phone" in obj; }, get: function (obj) { return obj.phone; }, set: function (obj, value) { obj.phone = value; } }, metadata: _metadata }, _phone_initializers, _phone_extraInitializers);
        __esDecorate(null, null, _has_account_decorators, { kind: "field", name: "has_account", static: false, private: false, access: { has: function (obj) { return "has_account" in obj; }, get: function (obj) { return obj.has_account; }, set: function (obj, value) { obj.has_account = value; } }, metadata: _metadata }, _has_account_initializers, _has_account_extraInitializers);
        __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
        __esDecorate(null, null, _created_by_decorators, { kind: "field", name: "created_by", static: false, private: false, access: { has: function (obj) { return "created_by" in obj; }, get: function (obj) { return obj.created_by; }, set: function (obj, value) { obj.created_by = value; } }, metadata: _metadata }, _created_by_initializers, _created_by_extraInitializers);
        __esDecorate(null, null, _customers_decorators, { kind: "field", name: "customers", static: false, private: false, access: { has: function (obj) { return "customers" in obj; }, get: function (obj) { return obj.customers; }, set: function (obj, value) { obj.customers = value; } }, metadata: _metadata }, _customers_initializers, _customers_extraInitializers);
        __esDecorate(null, null, _groups_decorators, { kind: "field", name: "groups", static: false, private: false, access: { has: function (obj) { return "groups" in obj; }, get: function (obj) { return obj.groups; }, set: function (obj, value) { obj.groups = value; } }, metadata: _metadata }, _groups_initializers, _groups_extraInitializers);
        __esDecorate(null, null, _addresses_decorators, { kind: "field", name: "addresses", static: false, private: false, access: { has: function (obj) { return "addresses" in obj; }, get: function (obj) { return obj.addresses; }, set: function (obj, value) { obj.addresses = value; } }, metadata: _metadata }, _addresses_initializers, _addresses_extraInitializers);
        __esDecorate(null, null, _deleted_at_decorators, { kind: "field", name: "deleted_at", static: false, private: false, access: { has: function (obj) { return "deleted_at" in obj; }, get: function (obj) { return obj.deleted_at; }, set: function (obj, value) { obj.deleted_at = value; } }, metadata: _metadata }, _deleted_at_initializers, _deleted_at_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Customer = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Customer = _classThis;
}();
exports.Customer = Customer;
exports.CustomerSchema = mongoose_1.SchemaFactory.createForClass(Customer);
