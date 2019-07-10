"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
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
exports.DataDto3 = DataDto3;
//# sourceMappingURL=common.js.map