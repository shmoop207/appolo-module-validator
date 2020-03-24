"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const validationModule_1 = require("./module/validationModule");
exports.ValidationModule = validationModule_1.ValidationModule;
const validateDecorator_1 = require("./module/src/decorators/validateDecorator");
exports.validate = validateDecorator_1.validate;
tslib_1.__exportStar(require("appolo-validator"), exports);
//# sourceMappingURL=index.js.map