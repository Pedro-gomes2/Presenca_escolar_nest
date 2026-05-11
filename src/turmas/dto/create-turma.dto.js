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
exports.CreateTurmaDto = void 0;
var class_validator_1 = require("class-validator");
var CreateTurmaDto = function () {
    var _a;
    var _nome_decorators;
    var _nome_initializers = [];
    var _nome_extraInitializers = [];
    var _codigo_decorators;
    var _codigo_initializers = [];
    var _codigo_extraInitializers = [];
    var _horario_decorators;
    var _horario_initializers = [];
    var _horario_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateTurmaDto() {
                this.nome = __runInitializers(this, _nome_initializers, void 0);
                this.codigo = (__runInitializers(this, _nome_extraInitializers), __runInitializers(this, _codigo_initializers, void 0));
                this.horario = (__runInitializers(this, _codigo_extraInitializers), __runInitializers(this, _horario_initializers, void 0));
                __runInitializers(this, _horario_extraInitializers);
            }
            return CreateTurmaDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _nome_decorators = [(0, class_validator_1.IsString)()];
            _codigo_decorators = [(0, class_validator_1.IsString)()];
            _horario_decorators = [(0, class_validator_1.IsString)()];
            __esDecorate(null, null, _nome_decorators, { kind: "field", name: "nome", static: false, private: false, access: { has: function (obj) { return "nome" in obj; }, get: function (obj) { return obj.nome; }, set: function (obj, value) { obj.nome = value; } }, metadata: _metadata }, _nome_initializers, _nome_extraInitializers);
            __esDecorate(null, null, _codigo_decorators, { kind: "field", name: "codigo", static: false, private: false, access: { has: function (obj) { return "codigo" in obj; }, get: function (obj) { return obj.codigo; }, set: function (obj, value) { obj.codigo = value; } }, metadata: _metadata }, _codigo_initializers, _codigo_extraInitializers);
            __esDecorate(null, null, _horario_decorators, { kind: "field", name: "horario", static: false, private: false, access: { has: function (obj) { return "horario" in obj; }, get: function (obj) { return obj.horario; }, set: function (obj, value) { obj.horario = value; } }, metadata: _metadata }, _horario_initializers, _horario_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateTurmaDto = CreateTurmaDto;
