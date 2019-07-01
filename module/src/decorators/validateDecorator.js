"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appolo_1 = require("appolo");
const _ = require("lodash");
const validatePipeline_1 = require("../pipelines/validatePipeline");
function validate(validatorType, options = {}) {
    if (arguments.length == 1 && _.isPlainObject(validatorType)) {
        options = validatorType;
        validatorType = null;
    }
    return function (target, propertyKey, descriptor) {
        appolo_1.pipeline(validatePipeline_1.ValidatePipeLine, { validatorType, options })(target, propertyKey, descriptor);
    };
}
exports.validate = validate;
//# sourceMappingURL=validateDecorator.js.map