"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const validationModule_1 = require("./module/validationModule");
exports.ValidationModule = validationModule_1.ValidationModule;
const validateDecorator_1 = require("./module/src/decorators/validateDecorator");
exports.validate = validateDecorator_1.validate;
const transformAfterDecorator_1 = require("./module/src/decorators/transformAfterDecorator");
exports.transformAfter = transformAfterDecorator_1.transformAfter;
const transformDecorator_1 = require("./module/src/decorators/transformDecorator");
exports.transform = transformDecorator_1.transform;
tslib_1.__exportStar(require("class-validator"), exports);
tslib_1.__exportStar(require("class-transformer"), exports);
//# sourceMappingURL=index.js.map