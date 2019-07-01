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
let ValidationController = class ValidationController extends appolo_1.Controller {
    test(req, res, model) {
        res.json({ working: true, controllerName: this.route.controller, model: model });
    }
    validation(req, res, model) {
        res.json(model);
    }
    validationObject(req, res, model) {
        res.json({ model: model, name: this.constructor.name });
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
ValidationController = tslib_1.__decorate([
    appolo_1.controller()
], ValidationController);
exports.ValidationController = ValidationController;
//# sourceMappingURL=validationController.js.map