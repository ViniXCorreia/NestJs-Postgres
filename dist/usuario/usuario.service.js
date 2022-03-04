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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entity/user.entity");
let UsuarioService = class UsuarioService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    findByCpf(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepo.findOne({ where: { cpf: cpf } });
                if (user instanceof user_entity_1.User) {
                    return user;
                }
                throw new common_1.NotFoundException();
            }
            catch (error) {
                if (error instanceof common_1.NotFoundException) {
                    return "Usuário Não encontrado";
                }
                return common_1.NotFoundException;
            }
        });
    }
    findRole(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepo.findOne({ where: { id: id } });
                if (user instanceof user_entity_1.User) {
                    return user.role;
                }
                throw new common_1.NotFoundException();
            }
            catch (error) {
                if (error instanceof common_1.NotFoundException) {
                    return "Usuário não encontrado";
                }
                return common_1.NotFoundException;
            }
        });
    }
    getPassword(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepo.findOne({ where: { id: id } });
                if (user instanceof user_entity_1.User) {
                    return user.password;
                }
                throw new common_1.NotFoundException();
            }
            catch (error) {
                if (error instanceof common_1.NotFoundException) {
                    return "Usuário não Encontrado";
                }
                return common_1.NotFoundException;
            }
        });
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map