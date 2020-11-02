"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DtoGroups = exports.DataDtoInherit = exports.DataDto3 = exports.DataDto = void 0;
const tslib_1 = require("tslib");
const appolo_validator_1 = require("appolo-validator");
class DataDto {
}
tslib_1.__decorate([
    appolo_validator_1.string(),
    tslib_1.__metadata("design:type", String)
], DataDto.prototype, "name", void 0);
exports.DataDto = DataDto;
class DataDto3 {
}
tslib_1.__decorate([
    appolo_validator_1.number().toFloat(),
    tslib_1.__metadata("design:type", Number)
], DataDto3.prototype, "name", void 0);
tslib_1.__decorate([
    appolo_validator_1.object(),
    tslib_1.__metadata("design:type", Object)
], DataDto3.prototype, "obj", void 0);
exports.DataDto3 = DataDto3;
class DataDtoInherit extends DataDto3 {
}
tslib_1.__decorate([
    appolo_validator_1.number(),
    tslib_1.__metadata("design:type", Number)
], DataDtoInherit.prototype, "name2", void 0);
exports.DataDtoInherit = DataDtoInherit;
class DtoGroups {
}
tslib_1.__decorate([
    appolo_validator_1.number(),
    tslib_1.__metadata("design:type", Number)
], DtoGroups.prototype, "name", void 0);
tslib_1.__decorate([
    appolo_validator_1.string({ groups: ["test"] }),
    tslib_1.__metadata("design:type", String)
], DtoGroups.prototype, "name2", void 0);
exports.DtoGroups = DtoGroups;
//# sourceMappingURL=common.js.map