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
exports.Presenca = void 0;
var typeorm_1 = require("typeorm");
var aluno_entity_1 = require("../../alunos/entities/aluno.entity");
var turma_entity_1 = require("../../turmas/entities/turma.entity");
var swagger_1 = require("@nestjs/swagger");
var Presenca = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('presencas')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _data_decorators;
    var _data_initializers = [];
    var _data_extraInitializers = [];
    var _horario_decorators;
    var _horario_initializers = [];
    var _horario_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _aluno_decorators;
    var _aluno_initializers = [];
    var _aluno_extraInitializers = [];
    var _turma_decorators;
    var _turma_initializers = [];
    var _turma_extraInitializers = [];
    var Presenca = _classThis = /** @class */ (function () {
        function Presenca_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.data = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _data_initializers, void 0));
            this.horario = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _horario_initializers, void 0));
            this.status = (__runInitializers(this, _horario_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            this.aluno = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _aluno_initializers, void 0));
            this.turma = (__runInitializers(this, _aluno_extraInitializers), __runInitializers(this, _turma_initializers, void 0));
            __runInitializers(this, _turma_extraInitializers);
        }
        return Presenca_1;
    }());
    __setFunctionName(_classThis, "Presenca");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.PrimaryGeneratedColumn)()];
        _data_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)({ type: 'date' })];
        _horario_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)({ type: 'time', nullable: true })];
        _status_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)({
                type: 'enum',
                enum: ['presente', 'atrasado', 'ausente'],
                default: 'presente',
            })];
        _aluno_decorators = [(0, swagger_1.ApiProperty)({ type: function () { return aluno_entity_1.Aluno; } }), (0, typeorm_1.ManyToOne)(function () { return aluno_entity_1.Aluno; }, function (aluno) { return aluno.presencas; }, { onDelete: 'CASCADE' })];
        _turma_decorators = [(0, swagger_1.ApiProperty)({ type: function () { return turma_entity_1.Turma; } }), (0, typeorm_1.ManyToOne)(function () { return turma_entity_1.Turma; }, function (turma) { return turma.presencas; }, { onDelete: 'CASCADE' })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
        __esDecorate(null, null, _horario_decorators, { kind: "field", name: "horario", static: false, private: false, access: { has: function (obj) { return "horario" in obj; }, get: function (obj) { return obj.horario; }, set: function (obj, value) { obj.horario = value; } }, metadata: _metadata }, _horario_initializers, _horario_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _aluno_decorators, { kind: "field", name: "aluno", static: false, private: false, access: { has: function (obj) { return "aluno" in obj; }, get: function (obj) { return obj.aluno; }, set: function (obj, value) { obj.aluno = value; } }, metadata: _metadata }, _aluno_initializers, _aluno_extraInitializers);
        __esDecorate(null, null, _turma_decorators, { kind: "field", name: "turma", static: false, private: false, access: { has: function (obj) { return "turma" in obj; }, get: function (obj) { return obj.turma; }, set: function (obj, value) { obj.turma = value; } }, metadata: _metadata }, _turma_initializers, _turma_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Presenca = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Presenca = _classThis;
}();
exports.Presenca = Presenca;
