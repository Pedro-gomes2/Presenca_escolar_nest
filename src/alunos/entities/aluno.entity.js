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
exports.Aluno = void 0;
var typeorm_1 = require("typeorm");
var turma_entity_1 = require("../../turmas/entities/turma.entity");
var presenca_entity_1 = require("../../presencas/entities/presenca.entity");
var swagger_1 = require("@nestjs/swagger");
var Aluno = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('alunos')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _nome_decorators;
    var _nome_initializers = [];
    var _nome_extraInitializers = [];
    var _matricula_decorators;
    var _matricula_initializers = [];
    var _matricula_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _turma_decorators;
    var _turma_initializers = [];
    var _turma_extraInitializers = [];
    var _presencas_decorators;
    var _presencas_initializers = [];
    var _presencas_extraInitializers = [];
    var _taxaPresenca_decorators;
    var _taxaPresenca_initializers = [];
    var _taxaPresenca_extraInitializers = [];
    var Aluno = _classThis = /** @class */ (function () {
        function Aluno_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.nome = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _nome_initializers, void 0));
            this.matricula = (__runInitializers(this, _nome_extraInitializers), __runInitializers(this, _matricula_initializers, void 0));
            this.email = (__runInitializers(this, _matricula_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.turma = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _turma_initializers, void 0));
            this.presencas = (__runInitializers(this, _turma_extraInitializers), __runInitializers(this, _presencas_initializers, void 0));
            this.taxaPresenca = (__runInitializers(this, _presencas_extraInitializers), __runInitializers(this, _taxaPresenca_initializers, void 0));
            __runInitializers(this, _taxaPresenca_extraInitializers);
        }
        return Aluno_1;
    }());
    __setFunctionName(_classThis, "Aluno");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.PrimaryGeneratedColumn)()];
        _nome_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)()];
        _matricula_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)({ unique: true })];
        _email_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)({ unique: true })];
        _turma_decorators = [(0, swagger_1.ApiProperty)({ type: function () { return turma_entity_1.Turma; } }), (0, typeorm_1.ManyToOne)(function () { return turma_entity_1.Turma; }, function (turma) { return turma.alunos; }, { onDelete: 'SET NULL' })];
        _presencas_decorators = [(0, swagger_1.ApiProperty)({ type: function () { return presenca_entity_1.Presenca; }, isArray: true }), (0, typeorm_1.OneToMany)(function () { return presenca_entity_1.Presenca; }, function (presenca) { return presenca.aluno; })];
        _taxaPresenca_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)({ type: 'float', default: 0 })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _nome_decorators, { kind: "field", name: "nome", static: false, private: false, access: { has: function (obj) { return "nome" in obj; }, get: function (obj) { return obj.nome; }, set: function (obj, value) { obj.nome = value; } }, metadata: _metadata }, _nome_initializers, _nome_extraInitializers);
        __esDecorate(null, null, _matricula_decorators, { kind: "field", name: "matricula", static: false, private: false, access: { has: function (obj) { return "matricula" in obj; }, get: function (obj) { return obj.matricula; }, set: function (obj, value) { obj.matricula = value; } }, metadata: _metadata }, _matricula_initializers, _matricula_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _turma_decorators, { kind: "field", name: "turma", static: false, private: false, access: { has: function (obj) { return "turma" in obj; }, get: function (obj) { return obj.turma; }, set: function (obj, value) { obj.turma = value; } }, metadata: _metadata }, _turma_initializers, _turma_extraInitializers);
        __esDecorate(null, null, _presencas_decorators, { kind: "field", name: "presencas", static: false, private: false, access: { has: function (obj) { return "presencas" in obj; }, get: function (obj) { return obj.presencas; }, set: function (obj, value) { obj.presencas = value; } }, metadata: _metadata }, _presencas_initializers, _presencas_extraInitializers);
        __esDecorate(null, null, _taxaPresenca_decorators, { kind: "field", name: "taxaPresenca", static: false, private: false, access: { has: function (obj) { return "taxaPresenca" in obj; }, get: function (obj) { return obj.taxaPresenca; }, set: function (obj, value) { obj.taxaPresenca = value; } }, metadata: _metadata }, _taxaPresenca_initializers, _taxaPresenca_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Aluno = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Aluno = _classThis;
}();
exports.Aluno = Aluno;
