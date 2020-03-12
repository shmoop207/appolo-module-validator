"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appolo_1 = require("appolo");
const appolo_utils_1 = require("appolo-utils");
const validatePipeline_1 = require("../pipelines/validatePipeline");
function validate(validatorType, options = {}) {
    if (arguments.length == 1 && appolo_utils_1.Objects.isPlain(validatorType)) {
        options = validatorType;
        validatorType = null;
    }
    return function (target, propertyKey, descriptor) {
        appolo_1.pipeline(validatePipeline_1.ValidatePipeLine, { validatorType, options })(target, propertyKey, descriptor);
    };
}
exports.validate = validate;
//# sourceMappingURL=validateDecorator.js.map