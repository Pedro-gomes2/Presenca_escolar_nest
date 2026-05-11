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
exports.CreateAlunoDto = void 0;
var class_validator_1 = require("class-validator");
var CreateAlunoDto = function () {
    var _a;
    var _nome_decorators;
    var _nome_initializers = [];
    var _nome_extraInitializers = [];
    var _matricula_decorators;
    var _matricula_initializers = [];
    var _matricula_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _turmaId_decorators;
    var _turmaId_initializers = [];
    var _turmaId_extraInitializers = [];
    var _taxaPresenca_decorators;
    var _taxaPresenca_initializers = [];
    var _taxaPresenca_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateAlunoDto() {
                this.nome = __runInitializers(this, _nome_initializers, void 0);
                this.matricula = (__runInitializers(this, _nome_extraInitializers), __runInitializers(this, _matricula_initializers, void 0));
                this.email = (__runInitializers(this, _matricula_extraInitializers), __runInitializers(this, _email_initializers, void 0));
                this.turmaId = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _turmaId_initializers, void 0));
                this.taxaPresenca = (__runInitializers(this, _turmaId_extraInitializers), __runInitializers(this, _taxaPresenca_initializers, void 0));
                __runInitializers(this, _taxaPresenca_extraInitializers);
            }
            return CreateAlunoDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _nome_decorators = [(0, class_validator_1.IsString)()];
            _matricula_decorators = [(0, class_validator_1.IsString)()];
            _email_decorators = [(0, class_validator_1.IsEmail)()];
            _turmaId_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsOptional)()];
            _taxaPresenca_decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _nome_decorators, { kind: "field", name: "nome", static: false, private: false, access: { has: function (obj) { return "nome" in obj; }, get: function (obj) { return obj.nome; }, set: function (obj, value) { obj.nome = value; } }, metadata: _metadata }, _nome_initializers, _nome_extraInitializers);
            __esDecorate(null, null, _matricula_decorators, { kind: "field", name: "matricula", static: false, private: false, access: { has: function (obj) { return "matricula" in obj; }, get: function (obj) { return obj.matricula; }, set: function (obj, value) { obj.matricula = value; } }, metadata: _metadata }, _matricula_initializers, _matricula_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _turmaId_decorators, { kind: "field", name: "turmaId", static: false, private: false, access: { has: function (obj) { return "turmaId" in obj; }, get: function (obj) { return obj.turmaId; }, set: function (obj, value) { obj.turmaId = value; } }, metadata: _metadata }, _turmaId_initializers, _turmaId_extraInitializers);
            __esDecorate(null, null, _taxaPresenca_decorators, { kind: "field", name: "taxaPresenca", static: false, private: false, access: { has: function (obj) { return "taxaPresenca" in obj; }, get: function (obj) { return obj.taxaPresenca; }, set: function (obj, value) { obj.taxaPresenca = value; } }, metadata: _metadata }, _taxaPresenca_initializers, _taxaPresenca_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateAlunoDto = CreateAlunoDto;
