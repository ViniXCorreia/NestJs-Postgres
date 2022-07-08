"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChamadoController = void 0;
const common_1 = require("@nestjs/common");
const chamado_service_1 = require("./chamado.service");
const chamadoDTO_dto_1 = require("./dto/chamadoDTO.dto");
let ChamadoController = class ChamadoController {
    constructor(chamadoService) {
        this.chamadoService = chamadoService;
    }
    creteNewChamado(param) {
        return __awaiter(this, void 0, void 0, function* () {
            return '';
        });
    }
    deleteChamado(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return '';
        });
    }
    updateChamado(param) {
        return __awaiter(this, void 0, void 0, function* () {
            return '';
        });
    }
    getChamado(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return '';
        });
    }
    getAllChamados() {
        return __awaiter(this, void 0, void 0, function* () {
            return '';
        });
    }
    getOpenedChamados(Param) {
        return __awaiter(this, void 0, void 0, function* () {
            return '';
        });
    }
};
__decorate([
    (0, common_1.Post)('createChamado'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [chamadoDTO_dto_1.chamadoDTO]),
    __metadata("design:returntype", Promise)
], ChamadoController.prototype, "creteNewChamado", null);
__decorate([
    (0, common_1.Delete)('deleteChamado/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChamadoController.prototype, "deleteChamado", null);
__decorate([
    (0, common_1.Put)('updateChamado'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [chamadoDTO_dto_1.chamadoDTO]),
    __metadata("design:returntype", Promise)
], ChamadoController.prototype, "updateChamado", null);
__decorate([
    (0, common_1.Get)('getChamado/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChamadoController.prototype, "getChamado", null);
__decorate([
    (0, common_1.Get)('allChamados'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChamadoController.prototype, "getAllChamados", null);
__decorate([
    (0, common_1.Get)('chamadosAbertos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChamadoController.prototype, "getOpenedChamados", null);
ChamadoController = __decorate([
    (0, common_1.Controller)('chamado'),
    __metadata("design:paramtypes", [chamado_service_1.ChamadoService])
], ChamadoController);
exports.ChamadoController = ChamadoController;
//# sourceMappingURL=chamado.controller.js.map