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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresencasController = void 0;
var common_1 = require("@nestjs/common");
var jwt_auth_guard_1 = require("../../auth/guard/jwt-auth.guard");
var swagger_1 = require("@nestjs/swagger");
var PresencasController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('presenca'), (0, common_1.Controller)('/presenca'), (0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard)];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _create_decorators;
    var _findAll_decorators;
    var _relatorio_decorators;
    var _resumoDiario_decorators;
    var _findOne_decorators;
    var _update_decorators;
    var _remove_decorators;
    var PresencasController = _classThis = /** @class */ (function () {
        function PresencasController_1(presencasService) {
            this.presencasService = (__runInitializers(this, _instanceExtraInitializers), presencasService);
        }
        PresencasController_1.prototype.create = function (createPresencaDto) {
            return this.presencasService.create(createPresencaDto);
        };
        PresencasController_1.prototype.findAll = function () {
            return this.presencasService.findAll();
        };
        PresencasController_1.prototype.relatorio = function (data, turmaId, alunoId) {
            return this.presencasService.findByFilter(data, turmaId ? +turmaId : undefined, alunoId ? +alunoId : undefined);
        };
        PresencasController_1.prototype.resumoDiario = function (data, turmaId) {
            return this.presencasService.resumoDiario(data, turmaId ? +turmaId : undefined);
        };
        PresencasController_1.prototype.findOne = function (id) {
            return this.presencasService.findOne(+id);
        };
        PresencasController_1.prototype.update = function (id, updatePresencaDto) {
            return this.presencasService.update(+id, updatePresencaDto);
        };
        PresencasController_1.prototype.remove = function (id) {
            return this.presencasService.remove(+id);
        };
        return PresencasController_1;
    }());
    __setFunctionName(_classThis, "PresencasController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _create_decorators = [(0, common_1.Post)()];
        _findAll_decorators = [(0, common_1.Get)()];
        _relatorio_decorators = [(0, common_1.Get)('relatorio')];
        _resumoDiario_decorators = [(0, common_1.Get)('resumo-diario')];
        _findOne_decorators = [(0, common_1.Get)(':id')];
        _update_decorators = [(0, common_1.Put)(':id')];
        _remove_decorators = [(0, common_1.Delete)(':id')];
        __esDecorate(_classThis, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: function (obj) { return "create" in obj; }, get: function (obj) { return obj.create; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: function (obj) { return "findAll" in obj; }, get: function (obj) { return obj.findAll; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _relatorio_decorators, { kind: "method", name: "relatorio", static: false, private: false, access: { has: function (obj) { return "relatorio" in obj; }, get: function (obj) { return obj.relatorio; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _resumoDiario_decorators, { kind: "method", name: "resumoDiario", static: false, private: false, access: { has: function (obj) { return "resumoDiario" in obj; }, get: function (obj) { return obj.resumoDiario; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findOne_decorators, { kind: "method", name: "findOne", static: false, private: false, access: { has: function (obj) { return "findOne" in obj; }, get: function (obj) { return obj.findOne; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: function (obj) { return "update" in obj; }, get: function (obj) { return obj.update; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: function (obj) { return "remove" in obj; }, get: function (obj) { return obj.remove; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PresencasController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PresencasController = _classThis;
}();
exports.PresencasController = PresencasController;
