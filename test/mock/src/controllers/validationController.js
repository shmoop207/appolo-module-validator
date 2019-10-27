"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const index_1 = require("../../../../index");
const class_validator_1 = require("class-validator");
class ValidationsDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(10),
    tslib_1.__metadata("design:type", String)
], ValidationsDto.prototype, "test", void 0);
exports.ValidationsDto = ValidationsDto;
class AuthDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(3),
    tslib_1.__metadata("design:type", String)
], AuthDto.prototype, "userName", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(3),
    tslib_1.__metadata("design:type", String)
], AuthDto.prototype, "password", void 0);
class NestedObject {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], NestedObject.prototype, "test", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], NestedObject.prototype, "test2", void 0);
class ObjectDto {
}
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    tslib_1.__metadata("design:type", Number)
], ObjectDto.prototype, "b", void 0);
tslib_1.__decorate([
    class_validator_1.ValidateNested(),
    tslib_1.__metadata("design:type", NestedObject)
], ObjectDto.prototype, "a", void 0);
class GetAllModel {
}
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], GetAllModel.prototype, "page", void 0);
tslib_1.__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], GetAllModel.prototype, "pageSize", void 0);
tslib_1.__decorate([
    index_1.IsObject(),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Object)
], GetAllModel.prototype, "sort", void 0);
tslib_1.__decorate([
    index_1.IsObject(),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Object)
], GetAllModel.prototype, "filter", void 0);
tslib_1.__decorate([
    index_1.IsObject(),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Object)
], GetAllModel.prototype, "fields", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsArray(),
    index_1.IsObject({ each: true }),
    index_1.Type(() => Object),
    tslib_1.__metadata("design:type", Array)
], GetAllModel.prototype, "populate", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], GetAllModel.prototype, "lean", void 0);
exports.GetAllModel = GetAllModel;
let ValidationController = class ValidationController extends appolo_1.Controller {
    test(req, res, model) {
        res.json({ working: true, controllerName: this.route.controller, model: model });
    }
    test2(req, res, model) {
        res.json({ working: true, controllerName: this.route.controller, model: model });
    }
    validation(req, res, model) {
        res.json(model);
    }
    validationObject(req, res, model) {
        res.json({ model: model, name: this.constructor.name });
    }
    async getAll(model, ...rest) {
        return model;
    }
};
tslib_1.__decorate([
    appolo_1.get("/test/validations/"),
    index_1.validate(),
    tslib_1.__param(2, appolo_1.query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, ValidationsDto]),
    tslib_1.__metadata("design:returntype", void 0)
], ValidationController.prototype, "test", null);
tslib_1.__decorate([
    index_1.validate(),
    tslib_1.__param(2, appolo_1.query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, ValidationsDto]),
    tslib_1.__metadata("design:returntype", void 0)
], ValidationController.prototype, "test2", null);
tslib_1.__decorate([
    appolo_1.get("/test/validations/auth"),
    index_1.validate(),
    tslib_1.__param(2, appolo_1.query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AuthDto]),
    tslib_1.__metadata("design:returntype", void 0)
], ValidationController.prototype, "validation", null);
tslib_1.__decorate([
    appolo_1.get('/test/validations/param_object'),
    index_1.validate(),
    tslib_1.__param(2, appolo_1.query()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, ObjectDto]),
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