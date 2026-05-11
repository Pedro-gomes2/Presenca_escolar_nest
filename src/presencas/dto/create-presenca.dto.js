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
exports.CreatePresencaDto = void 0;
var class_validator_1 = require("class-validator");
var CreatePresencaDto = function () {
    var _a;
    var _data_decorators;
    var _data_initializers = [];
    var _data_extraInitializers = [];
    var _horario_decorators;
    var _horario_initializers = [];
    var _horario_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _alunoId_decorators;
    var _alunoId_initializers = [];
    var _alunoId_extraInitializers = [];
    var _turmaId_decorators;
    var _turmaId_initializers = [];
    var _turmaId_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreatePresencaDto() {
                this.data = __runInitializers(this, _data_initializers, void 0);
                this.horario = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _horario_initializers, void 0));
                this.status = (__runInitializers(this, _horario_extraInitializers), __runInitializers(this, _status_initializers, void 0));
                this.alunoId = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _alunoId_initializers, void 0));
                this.turmaId = (__runInitializers(this, _alunoId_extraInitializers), __runInitializers(this, _turmaId_initializers, void 0));
                __runInitializers(this, _turmaId_extraInitializers);
            }
            return CreatePresencaDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _data_decorators = [(0, class_validator_1.IsDateString)()];
            _horario_decorators = [(0, class_validator_1.IsString)()];
            _status_decorators = [(0, class_validator_1.IsIn)(['presente', 'atrasado', 'ausente'])];
            _alunoId_decorators = [(0, class_validator_1.IsNumber)()];
            _turmaId_decorators = [(0, class_validator_1.IsNumber)()];
            __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
            __esDecorate(null, null, _horario_decorators, { kind: "field", name: "horario", static: false, private: false, access: { has: function (obj) { return "horario" in obj; }, get: function (obj) { return obj.horario; }, set: function (obj, value) { obj.horario = value; } }, metadata: _metadata }, _horario_initializers, _horario_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _alunoId_decorators, { kind: "field", name: "alunoId", static: false, private: false, access: { has: function (obj) { return "alunoId" in obj; }, get: function (obj) { return obj.alunoId; }, set: function (obj, value) { obj.alunoId = value; } }, metadata: _metadata }, _alunoId_initializers, _alunoId_extraInitializers);
            __esDecorate(null, null, _turmaId_decorators, { kind: "field", name: "turmaId", static: false, private: false, access: { has: function (obj) { return "turmaId" in obj; }, get: function (obj) { return obj.turmaId; }, set: function (obj, value) { obj.turmaId = value; } }, metadata: _metadata }, _turmaId_initializers, _turmaId_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreatePresencaDto = CreatePresencaDto;
