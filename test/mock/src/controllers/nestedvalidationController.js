"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedvalidationController = void 0;
const tslib_1 = require("tslib");
const route_1 = require("@appolo/route");
const validationController_1 = require("./validationController");
let NestedvalidationController = class NestedvalidationController extends validationController_1.ValidationController {
    test2(model, req, res) {
        return super.test2(model, req, res);
    }
};
tslib_1.__decorate([
    route_1.get("/test/nested/"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [validationController_1.ValidationsDto, Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], NestedvalidationController.prototype, "test2", null);
NestedvalidationController = tslib_1.__decorate([
    route_1.controller()
], NestedvalidationController);
exports.NestedvalidationController = NestedvalidationController;
//# sourceMappingURL=nestedvalidationController.js.map