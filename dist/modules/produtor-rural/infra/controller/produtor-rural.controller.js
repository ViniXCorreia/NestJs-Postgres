'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
var _a;
Object.defineProperty(exports, '__esModule', { value: true });
exports.producerRuralController = void 0;
const common_1 = require('@nestjs/common');
const producer_rural_service_1 = require('../producer-rural.service');
const create_producer_rural_dto_1 = require('../dto/create-producer-rural.dto');
const update_producer_rural_dto_1 = require('../dto/update-producer-rural.dto');
let producerRuralController = class producerRuralController {
  constructor(producerRuralService) {
    this.producerRuralService = producerRuralService;
  }
  create(createproducerRuralDto) {
    return this.producerRuralService.create(createproducerRuralDto);
  }
  findAll() {
    return this.producerRuralService.findAll();
  }
  findOne(id) {
    return this.producerRuralService.findOne(+id);
  }
  update(id, updateproducerRuralDto) {
    return this.producerRuralService.update(+id, updateproducerRuralDto);
  }
  remove(id) {
    return this.producerRuralService.remove(+id);
  }
};
__decorate(
  [
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [
      create_producer_rural_dto_1.CreateproducerRuralDto,
    ]),
    __metadata('design:returntype', void 0),
  ],
  producerRuralController.prototype,
  'create',
  null,
);
__decorate(
  [
    (0, common_1.Get)(),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', void 0),
  ],
  producerRuralController.prototype,
  'findAll',
  null,
);
__decorate(
  [
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  producerRuralController.prototype,
  'findOne',
  null,
);
__decorate(
  [
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [
      String,
      update_producer_rural_dto_1.UpdateproducerRuralDto,
    ]),
    __metadata('design:returntype', void 0),
  ],
  producerRuralController.prototype,
  'update',
  null,
);
__decorate(
  [
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String]),
    __metadata('design:returntype', void 0),
  ],
  producerRuralController.prototype,
  'remove',
  null,
);
producerRuralController = __decorate(
  [
    (0, common_1.Controller)('producer-rural'),
    __metadata('design:paramtypes', [
      typeof (_a =
        typeof producer_rural_service_1.producerRuralService !== 'undefined' &&
        producer_rural_service_1.producerRuralService) === 'function'
        ? _a
        : Object,
    ]),
  ],
  producerRuralController,
);
exports.producerRuralController = producerRuralController;
//# sourceMappingURL=producer-rural.controller.js.map
