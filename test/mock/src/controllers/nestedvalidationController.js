"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const validationController_1 = require("./validationController");
let NestedvalidationController = class NestedvalidationController extends validationController_1.ValidationController {
    test2(req, res, model) {
        return super.test2(req, res, model);
    }
};
tslib_1.__decorate([
    appolo_1.get("/test/nested/"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, validationController_1.ValidationsDto]),
    tslib_1.__metadata("design:returntype", void 0)
], NestedvalidationController.prototype, "test2", null);
NestedvalidationController = tslib_1.__decorate([
    appolo_1.controller()
], NestedvalidationController);
exports.NestedvalidationController = NestedvalidationController;
//# sourceMappingURL=nestedvalidationController.js.map