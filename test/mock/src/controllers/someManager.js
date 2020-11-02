"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeManager = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const index_1 = require("../../../../index");
const common_1 = require("../common/common");
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
    async getData6(data) {
        return data;
    }
    async getData7(data) {
        return data;
    }
};
tslib_1.__decorate([
    index_1.validate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [common_1.DataDto]),
    tslib_1.__metadata("design:returntype", Promise)
], SomeManager.prototype, "getData", null);
tslib_1.__decorate([
    tslib_1.__param(0, index_1.validate()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [common_1.DataDto]),
    tslib_1.__metadata("design:returntype", Promise)
], SomeManager.prototype, "getData2", null);
tslib_1.__decorate([
    tslib_1.__param(0, index_1.validate(common_1.DataDto3)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SomeManager.prototype, "getData3", null);
tslib_1.__decorate([
    tslib_1.__param(0, index_1.validate(common_1.DtoGroups, { groups: ["test2"] })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SomeManager.prototype, "getData6", null);
tslib_1.__decorate([
    index_1.validate({
        name: index_1.number(),
        name2: index_1.number()
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SomeManager.prototype, "getData7", null);
SomeManager = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], SomeManager);
exports.SomeManager = SomeManager;
//# sourceMappingURL=someManager.js.map