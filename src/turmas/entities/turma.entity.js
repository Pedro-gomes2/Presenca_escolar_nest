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
exports.Turma = void 0;
var typeorm_1 = require("typeorm");
var aluno_entity_1 = require("../../alunos/entities/aluno.entity");
var professor_entity_1 = require("../../professores/entities/professor.entity");
var presenca_entity_1 = require("../../presencas/entities/presenca.entity");
var swagger_1 = require("@nestjs/swagger");
var Turma = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('turmas')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _nome_decorators;
    var _nome_initializers = [];
    var _nome_extraInitializers = [];
    var _codigo_decorators;
    var _codigo_initializers = [];
    var _codigo_extraInitializers = [];
    var _horario_decorators;
    var _horario_initializers = [];
    var _horario_extraInitializers = [];
    var _alunos_decorators;
    var _alunos_initializers = [];
    var _alunos_extraInitializers = [];
    var _professores_decorators;
    var _professores_initializers = [];
    var _professores_extraInitializers = [];
    var _presencas_decorators;
    var _presencas_initializers = [];
    var _presencas_extraInitializers = [];
    var Turma = _classThis = /** @class */ (function () {
        function Turma_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.nome = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _nome_initializers, void 0));
            this.codigo = (__runInitializers(this, _nome_extraInitializers), __runInitializers(this, _codigo_initializers, void 0));
            this.horario = (__runInitializers(this, _codigo_extraInitializers), __runInitializers(this, _horario_initializers, void 0));
            this.alunos = (__runInitializers(this, _horario_extraInitializers), __runInitializers(this, _alunos_initializers, void 0));
            this.professores = (__runInitializers(this, _alunos_extraInitializers), __runInitializers(this, _professores_initializers, void 0));
            this.presencas = (__runInitializers(this, _professores_extraInitializers), __runInitializers(this, _presencas_initializers, void 0));
            __runInitializers(this, _presencas_extraInitializers);
        }
        return Turma_1;
    }());
    __setFunctionName(_classThis, "Turma");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.PrimaryGeneratedColumn)()];
        _nome_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)()];
        _codigo_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)()];
        _horario_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)()];
        _alunos_decorators = [(0, swagger_1.ApiProperty)({ type: function () { return aluno_entity_1.Aluno; }, isArray: true }), (0, typeorm_1.OneToMany)(function () { return aluno_entity_1.Aluno; }, function (aluno) { return aluno.turma; })];
        _professores_decorators = [(0, swagger_1.ApiProperty)({ type: function () { return professor_entity_1.Professor; }, isArray: true }), (0, typeorm_1.ManyToMany)(function () { return professor_entity_1.Professor; }, function (professor) { return professor.turmas; }), (0, typeorm_1.JoinTable)({ name: 'professor_turmas' })];
        _presencas_decorators = [(0, swagger_1.ApiProperty)({ type: function () { return presenca_entity_1.Presenca; }, isArray: true }), (0, typeorm_1.OneToMany)(function () { return presenca_entity_1.Presenca; }, function (presenca) { return presenca.turma; })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _nome_decorators, { kind: "field", name: "nome", static: false, private: false, access: { has: function (obj) { return "nome" in obj; }, get: function (obj) { return obj.nome; }, set: function (obj, value) { obj.nome = value; } }, metadata: _metadata }, _nome_initializers, _nome_extraInitializers);
        __esDecorate(null, null, _codigo_decorators, { kind: "field", name: "codigo", static: false, private: false, access: { has: function (obj) { return "codigo" in obj; }, get: function (obj) { return obj.codigo; }, set: function (obj, value) { obj.codigo = value; } }, metadata: _metadata }, _codigo_initializers, _codigo_extraInitializers);
        __esDecorate(null, null, _horario_decorators, { kind: "field", name: "horario", static: false, private: false, access: { has: function (obj) { return "horario" in obj; }, get: function (obj) { return obj.horario; }, set: function (obj, value) { obj.horario = value; } }, metadata: _metadata }, _horario_initializers, _horario_extraInitializers);
        __esDecorate(null, null, _alunos_decorators, { kind: "field", name: "alunos", static: false, private: false, access: { has: function (obj) { return "alunos" in obj; }, get: function (obj) { return obj.alunos; }, set: function (obj, value) { obj.alunos = value; } }, metadata: _metadata }, _alunos_initializers, _alunos_extraInitializers);
        __esDecorate(null, null, _professores_decorators, { kind: "field", name: "professores", static: false, private: false, access: { has: function (obj) { return "professores" in obj; }, get: function (obj) { return obj.professores; }, set: function (obj, value) { obj.professores = value; } }, metadata: _metadata }, _professores_initializers, _professores_extraInitializers);
        __esDecorate(null, null, _presencas_decorators, { kind: "field", name: "presencas", static: false, private: false, access: { has: function (obj) { return "presencas" in obj; }, get: function (obj) { return obj.presencas; }, set: function (obj, value) { obj.presencas = value; } }, metadata: _metadata }, _presencas_initializers, _presencas_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Turma = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Turma = _classThis;
}();
exports.Turma = Turma;
