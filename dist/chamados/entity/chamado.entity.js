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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chamado = void 0;
const typeorm_1 = require("typeorm");
let Chamado = class Chamado {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Chamado.prototype, "idChamado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Chamado.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Chamado.prototype, "idTecnico", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Chamado.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Chamado.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Chamado.prototype, "dataAbertura", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Chamado.prototype, "dataFechamento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Chamado.prototype, "solucao", void 0);
Chamado = __decorate([
    (0, typeorm_1.Entity)('chamado')
], Chamado);
exports.Chamado = Chamado;
//# sourceMappingURL=chamado.entity.js.map