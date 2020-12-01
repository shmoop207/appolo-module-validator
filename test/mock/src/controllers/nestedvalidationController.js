"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedvalidationController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const _validationController_1 = require("./_validationController");
let NestedvalidationController = class NestedvalidationController extends _validationController_1._validationController {
    test2(model, req, res) {
        return super.test2(model, req, res);
    }
};
tslib_1.__decorate([
    route_1.get("/test/nested/"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_validationController_1.ValidationsDto, Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], NestedvalidationController.prototype, "test2", null);
NestedvalidationController = tslib_1.__decorate([
    route_1.controller()
], NestedvalidationController);
exports.NestedvalidationController = NestedvalidationController;
//# sourceMappingURL=nestedvalidationController.js.map