"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const index_1 = require("../../../../index");
class ValidationsDto {
}
tslib_1.__decorate([
    index_1.string().min(10),
    tslib_1.__metadata("design:type", String)
], ValidationsDto.prototype, "test", void 0);
exports.ValidationsDto = ValidationsDto;
class AuthDto {
}
tslib_1.__decorate([
    index_1.string().min(3),
    tslib_1.__metadata("design:type", String)
], AuthDto.prototype, "userName", void 0);
tslib_1.__decorate([
    index_1.string().min(3),
    tslib_1.__metadata("design:type", String)
], AuthDto.prototype, "password", void 0);
class NestedObject {
}
tslib_1.__decorate([
    index_1.string(),
    tslib_1.__metadata("design:type", String)
], NestedObject.prototype, "test", void 0);
tslib_1.__decorate([
    index_1.string(),
    tslib_1.__metadata("design:type", Number)
], NestedObject.prototype, "test2", void 0);
class ObjectDto {
}
tslib_1.__decorate([
    index_1.number(),
    tslib_1.__metadata("design:type", Number)
], ObjectDto.prototype, "b", void 0);
tslib_1.__decorate([
    index_1.object(NestedObject),
    tslib_1.__metadata("design:type", NestedObject)
], ObjectDto.prototype, "a", void 0);
class GetAllModel {
}
tslib_1.__decorate([
    index_1.number().optional(),
    tslib_1.__metadata("design:type", Number)
], GetAllModel.prototype, "page", void 0);
tslib_1.__decorate([
    index_1.number().optional(),
    tslib_1.__metadata("design:type", Number)
], GetAllModel.prototype, "pageSize", void 0);
tslib_1.__decorate([
    index_1.object().optional(),
    tslib_1.__metadata("design:type", Object)
], GetAllModel.prototype, "sort", void 0);
tslib_1.__decorate([
    index_1.object().optional(),
    tslib_1.__metadata("design:type", Object)
], GetAllModel.prototype, "filter", void 0);
tslib_1.__decorate([
    index_1.object().optional(),
    tslib_1.__metadata("design:type", Object)
], GetAllModel.prototype, "fields", void 0);
tslib_1.__decorate([
    index_1.array(index_1.object()).optional(),
    tslib_1.__metadata("design:type", Array)
], GetAllModel.prototype, "populate", void 0);
tslib_1.__decorate([
    index_1.boolean().optional(),
    tslib_1.__metadata("design:type", Boolean)
], GetAllModel.prototype, "lean", void 0);
exports.GetAllModel = GetAllModel;
let ValidationController = class ValidationController extends appolo_1.Controller {
    test(model, req, res) {
        res.json({ working: true, controllerName: this.route.controller, model: model });
    }
    test2(model, req, res) {
        res.json({ working: true, controllerName: this.route.controller, model: model });
    }
    validation(model, req, res) {
        res.json(model);
    }
    validationObject(model, req, res) {
        res.json({ model: model, name: this.constructor.name });
    }
    async getAll(model, ...rest) {
        return model;
    }
};
tslib_1.__decorate([
    appolo_1.get("/test/validations/"),
    index_1.validate(),
    tslib_1.__param(0, appolo_1.query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ValidationsDto, Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ValidationController.prototype, "test", null);
tslib_1.__decorate([
    index_1.validate(),
    tslib_1.__param(0, appolo_1.query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ValidationsDto, Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ValidationController.prototype, "test2", null);
tslib_1.__decorate([
    appolo_1.get("/test/validations/auth"),
    index_1.validate(),
    tslib_1.__param(0, appolo_1.query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AuthDto, Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ValidationController.prototype, "validation", null);
tslib_1.__decorate([
    appolo_1.get('/test/validations/param_object'),
    index_1.validate(),
    tslib_1.__param(0, appolo_1.query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ObjectDto, Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ValidationController.prototype, "validationObject", null);
tslib_1.__decorate([
    appolo_1.get('/test/validations/get_all'),
    tslib_1.__param(0, index_1.validate()), tslib_1.__param(0, index_1.validate()), tslib_1.__param(0, appolo_1.model()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [GetAllModel, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ValidationController.prototype, "getAll", null);
ValidationController = tslib_1.__decorate([
    appolo_1.controller()
], ValidationController);
exports.ValidationController = ValidationController;
//# sourceMappingURL=validationController.js.map