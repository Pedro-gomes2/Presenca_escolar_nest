"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresencasService = void 0;
var common_1 = require("@nestjs/common");
var PresencasService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PresencasService = _classThis = /** @class */ (function () {
        function PresencasService_1(presencaRepository, alunosService, turmasService) {
            this.presencaRepository = presencaRepository;
            this.alunosService = alunosService;
            this.turmasService = turmasService;
        }
        PresencasService_1.prototype.create = function (createPresencaDto) {
            return __awaiter(this, void 0, void 0, function () {
                var alunoId, turmaId, rest, aluno, turma, jaExiste, presenca;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            alunoId = createPresencaDto.alunoId, turmaId = createPresencaDto.turmaId, rest = __rest(createPresencaDto, ["alunoId", "turmaId"]);
                            return [4 /*yield*/, this.alunosService.findOne(alunoId)];
                        case 1:
                            aluno = _a.sent();
                            return [4 /*yield*/, this.turmasService.findOne(turmaId)];
                        case 2:
                            turma = _a.sent();
                            return [4 /*yield*/, this.presencaRepository.findOne({
                                    where: {
                                        aluno: { id: alunoId },
                                        turma: { id: turmaId },
                                        data: rest.data,
                                    },
                                    relations: ['aluno', 'turma'],
                                })];
                        case 3:
                            jaExiste = _a.sent();
                            if (jaExiste) {
                                throw new common_1.ConflictException("Presen\u00E7a j\u00E1 registrada para este aluno nesta turma nesta data.");
                            }
                            presenca = this.presencaRepository.create(__assign(__assign({}, rest), { aluno: aluno, turma: turma }));
                            return [4 /*yield*/, this.presencaRepository.save(presenca)];
                        case 4: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        PresencasService_1.prototype.findAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.presencaRepository.find({
                                relations: ['aluno', 'turma'],
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        PresencasService_1.prototype.findOne = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var presenca;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.presencaRepository.findOne({
                                where: { id: id },
                                relations: ['aluno', 'turma'],
                            })];
                        case 1:
                            presenca = _a.sent();
                            if (!presenca) {
                                throw new common_1.NotFoundException("Presen\u00E7a com ID ".concat(id, " n\u00E3o encontrada"));
                            }
                            return [2 /*return*/, presenca];
                    }
                });
            });
        };
        PresencasService_1.prototype.update = function (id, updatePresencaDto) {
            return __awaiter(this, void 0, void 0, function () {
                var presenca, alunoId, turmaId, rest, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.findOne(id)];
                        case 1:
                            presenca = _c.sent();
                            alunoId = updatePresencaDto.alunoId, turmaId = updatePresencaDto.turmaId, rest = __rest(updatePresencaDto, ["alunoId", "turmaId"]);
                            if (!alunoId) return [3 /*break*/, 3];
                            _a = presenca;
                            return [4 /*yield*/, this.alunosService.findOne(alunoId)];
                        case 2:
                            _a.aluno = _c.sent();
                            _c.label = 3;
                        case 3:
                            if (!turmaId) return [3 /*break*/, 5];
                            _b = presenca;
                            return [4 /*yield*/, this.turmasService.findOne(turmaId)];
                        case 4:
                            _b.turma = _c.sent();
                            _c.label = 5;
                        case 5:
                            this.presencaRepository.merge(presenca, rest);
                            return [4 /*yield*/, this.presencaRepository.save(presenca)];
                        case 6: return [2 /*return*/, _c.sent()];
                    }
                });
            });
        };
        PresencasService_1.prototype.remove = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var presenca;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.findOne(id)];
                        case 1:
                            presenca = _a.sent();
                            return [4 /*yield*/, this.presencaRepository.remove(presenca)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        PresencasService_1.prototype.findByFilter = function (data, turmaId, alunoId) {
            return __awaiter(this, void 0, void 0, function () {
                var qb;
                return __generator(this, function (_a) {
                    qb = this.presencaRepository
                        .createQueryBuilder('p')
                        .leftJoinAndSelect('p.aluno', 'aluno')
                        .leftJoinAndSelect('p.turma', 'turma');
                    if (data)
                        qb.andWhere('p.data = :data', { data: data });
                    if (turmaId)
                        qb.andWhere('turma.id = :turmaId', { turmaId: turmaId });
                    if (alunoId)
                        qb.andWhere('aluno.id = :alunoId', { alunoId: alunoId });
                    return [2 /*return*/, qb.orderBy('p.data', 'DESC').addOrderBy('p.horario', 'DESC').getMany()];
                });
            });
        };
        PresencasService_1.prototype.resumoDiario = function (data, turmaId) {
            return __awaiter(this, void 0, void 0, function () {
                var registros, presentes, atrasados, ausentes;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.findByFilter(data, turmaId)];
                        case 1:
                            registros = _a.sent();
                            presentes = registros.filter(function (p) { return p.status === 'presente'; }).length;
                            atrasados = registros.filter(function (p) { return p.status === 'atrasado'; }).length;
                            ausentes = registros.filter(function (p) { return p.status === 'ausente'; }).length;
                            return [2 /*return*/, { presentes: presentes, atrasados: atrasados, ausentes: ausentes, total: registros.length }];
                    }
                });
            });
        };
        return PresencasService_1;
    }());
    __setFunctionName(_classThis, "PresencasService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PresencasService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PresencasService = _classThis;
}();
exports.PresencasService = PresencasService;
