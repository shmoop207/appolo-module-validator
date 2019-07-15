"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const isObject_1 = require("../../../../module/src/validators/isObject");
class DataDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], DataDto.prototype, "name", void 0);
exports.DataDto = DataDto;
class DataDto3 {
}
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], DataDto3.prototype, "name", void 0);
tslib_1.__decorate([
    isObject_1.IsObject(),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Object)
], DataDto3.prototype, "obj", void 0);
exports.DataDto3 = DataDto3;
class DataDtoInherit extends DataDto3 {
}
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], DataDtoInherit.prototype, "name2", void 0);
exports.DataDtoInherit = DataDtoInherit;
//# sourceMappingURL=common.js.map