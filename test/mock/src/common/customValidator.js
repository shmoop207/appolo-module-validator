"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomValidator = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const index_1 = require("./../../../../index");
const tempManager_1 = require("../controllers/tempManager");
let CustomValidator = class CustomValidator {
    async validate(params) {
        if (!this.tempManager) {
            throw new Error("failed to find manager");
        }
        let isValid = params.value >= params.args[0] && params.value < params.args[1];
        return { isValid };
    }
    get type() {
        return "range";
    }
    get defaultMessage() {
        return "${property} has invalid range ";
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", tempManager_1.TempManager)
], CustomValidator.prototype, "tempManager", void 0);
CustomValidator = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], CustomValidator);
exports.CustomValidator = CustomValidator;
index_1.registerConstraint.extend({
    base: index_1.NumberSchema,
    name: "range",
    constraint: CustomValidator,
    inject: true
});
//# sourceMappingURL=customValidator.js.map