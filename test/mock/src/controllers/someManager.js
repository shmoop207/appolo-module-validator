"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const appolo_1 = require("appolo");
const index_1 = require("../../../../index");
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
let SomeManager = class SomeManager {
    async getData(data) {
        return data;
    }
    async getData2(data) {
        return data;
    }
    async getData3(data) {
        return data;
    }
    async getData4(data) {
        return data instanceof DataDto3;
    }
    async getData5(data) {
        return { name: "11" };
    }
};
tslib_1.__decorate([
    index_1.validate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [DataDto]),
    tslib_1.__metadata("design:returntype", Promise)
], SomeManager.prototype, "getData", null);
tslib_1.__decorate([
    tslib_1.__param(0, index_1.validate()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [DataDto]),
    tslib_1.__metadata("design:returntype", Promise)
], SomeManager.prototype, "getData2", null);
tslib_1.__decorate([
    tslib_1.__param(0, index_1.validate(DataDto3)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SomeManager.prototype, "getData3", null);
tslib_1.__decorate([
    tslib_1.__param(0, index_1.transform(DataDto3)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SomeManager.prototype, "getData4", null);
tslib_1.__decorate([
    index_1.transformAfter(DataDto3),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SomeManager.prototype, "getData5", null);
SomeManager = tslib_1.__decorate([
    appolo_1.define(),
    appolo_1.singleton()
], SomeManager);
exports.SomeManager = SomeManager;
//# sourceMappingURL=someManager.js.map