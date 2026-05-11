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
exports.Usuario = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var Usuario = function () {
    var _classDecorators = [(0, typeorm_1.Entity)('tb_usuarios')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _nome_decorators;
    var _nome_initializers = [];
    var _nome_extraInitializers = [];
    var _usuario_decorators;
    var _usuario_initializers = [];
    var _usuario_extraInitializers = [];
    var _senha_decorators;
    var _senha_initializers = [];
    var _senha_extraInitializers = [];
    var _foto_decorators;
    var _foto_initializers = [];
    var _foto_extraInitializers = [];
    var _tipo_decorators;
    var _tipo_initializers = [];
    var _tipo_extraInitializers = [];
    var _professorId_decorators;
    var _professorId_initializers = [];
    var _professorId_extraInitializers = [];
    var _alunoId_decorators;
    var _alunoId_initializers = [];
    var _alunoId_extraInitializers = [];
    var _data_cadastro_decorators;
    var _data_cadastro_initializers = [];
    var _data_cadastro_extraInitializers = [];
    var Usuario = _classThis = /** @class */ (function () {
        function Usuario_1() {
            this.id = __runInitializers(this, _id_initializers, void 0);
            this.nome = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _nome_initializers, void 0));
            this.usuario = (__runInitializers(this, _nome_extraInitializers), __runInitializers(this, _usuario_initializers, void 0)); // Este será o e-mail para login
            this.senha = (__runInitializers(this, _usuario_extraInitializers), __runInitializers(this, _senha_initializers, void 0));
            this.foto = (__runInitializers(this, _senha_extraInitializers), __runInitializers(this, _foto_initializers, void 0));
            this.tipo = (__runInitializers(this, _foto_extraInitializers), __runInitializers(this, _tipo_initializers, void 0));
            this.professorId = (__runInitializers(this, _tipo_extraInitializers), __runInitializers(this, _professorId_initializers, void 0));
            this.alunoId = (__runInitializers(this, _professorId_extraInitializers), __runInitializers(this, _alunoId_initializers, void 0));
            this.data_cadastro = (__runInitializers(this, _alunoId_extraInitializers), __runInitializers(this, _data_cadastro_initializers, void 0));
            __runInitializers(this, _data_cadastro_extraInitializers);
        }
        return Usuario_1;
    }());
    __setFunctionName(_classThis, "Usuario");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _id_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.PrimaryGeneratedColumn)()];
        _nome_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)()];
        _usuario_decorators = [(0, swagger_1.ApiProperty)(), (0, class_validator_1.IsEmail)(), (0, class_validator_1.IsNotEmpty)(), (0, typeorm_1.Column)({ unique: true })];
        _senha_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)()];
        _foto_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)({ nullable: true })];
        _tipo_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)({
                type: 'enum',
                enum: ['admin', 'professor', 'aluno'],
                default: 'aluno'
            })];
        _professorId_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)({ nullable: true })];
        _alunoId_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.Column)({ nullable: true })];
        _data_cadastro_decorators = [(0, swagger_1.ApiProperty)(), (0, typeorm_1.CreateDateColumn)()];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
        __esDecorate(null, null, _nome_decorators, { kind: "field", name: "nome", static: false, private: false, access: { has: function (obj) { return "nome" in obj; }, get: function (obj) { return obj.nome; }, set: function (obj, value) { obj.nome = value; } }, metadata: _metadata }, _nome_initializers, _nome_extraInitializers);
        __esDecorate(null, null, _usuario_decorators, { kind: "field", name: "usuario", static: false, private: false, access: { has: function (obj) { return "usuario" in obj; }, get: function (obj) { return obj.usuario; }, set: function (obj, value) { obj.usuario = value; } }, metadata: _metadata }, _usuario_initializers, _usuario_extraInitializers);
        __esDecorate(null, null, _senha_decorators, { kind: "field", name: "senha", static: false, private: false, access: { has: function (obj) { return "senha" in obj; }, get: function (obj) { return obj.senha; }, set: function (obj, value) { obj.senha = value; } }, metadata: _metadata }, _senha_initializers, _senha_extraInitializers);
        __esDecorate(null, null, _foto_decorators, { kind: "field", name: "foto", static: false, private: false, access: { has: function (obj) { return "foto" in obj; }, get: function (obj) { return obj.foto; }, set: function (obj, value) { obj.foto = value; } }, metadata: _metadata }, _foto_initializers, _foto_extraInitializers);
        __esDecorate(null, null, _tipo_decorators, { kind: "field", name: "tipo", static: false, private: false, access: { has: function (obj) { return "tipo" in obj; }, get: function (obj) { return obj.tipo; }, set: function (obj, value) { obj.tipo = value; } }, metadata: _metadata }, _tipo_initializers, _tipo_extraInitializers);
        __esDecorate(null, null, _professorId_decorators, { kind: "field", name: "professorId", static: false, private: false, access: { has: function (obj) { return "professorId" in obj; }, get: function (obj) { return obj.professorId; }, set: function (obj, value) { obj.professorId = value; } }, metadata: _metadata }, _professorId_initializers, _professorId_extraInitializers);
        __esDecorate(null, null, _alunoId_decorators, { kind: "field", name: "alunoId", static: false, private: false, access: { has: function (obj) { return "alunoId" in obj; }, get: function (obj) { return obj.alunoId; }, set: function (obj, value) { obj.alunoId = value; } }, metadata: _metadata }, _alunoId_initializers, _alunoId_extraInitializers);
        __esDecorate(null, null, _data_cadastro_decorators, { kind: "field", name: "data_cadastro", static: false, private: false, access: { has: function (obj) { return "data_cadastro" in obj; }, get: function (obj) { return obj.data_cadastro; }, set: function (obj, value) { obj.data_cadastro = value; } }, metadata: _metadata }, _data_cadastro_initializers, _data_cadastro_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Usuario = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Usuario = _classThis;
}();
exports.Usuario = Usuario;
