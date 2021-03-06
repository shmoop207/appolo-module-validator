"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = exports.validateQuery = exports.validateBody = exports.validateModel = exports.validate = void 0;
const engine_1 = require("@appolo/engine");
const route_1 = require("@appolo/route");
const utils_1 = require("@appolo/utils");
const validatePipeline_1 = require("../pipelines/validatePipeline");
const index_1 = require("../../../index");
function validate(validatorType, options = {}) {
    if (arguments.length == 1 && utils_1.Objects.isPlain(validatorType)) {
        if (isSchemaObject(validatorType)) {
            validatorType = index_1.object().keys(validatorType);
        }
        else {
            options = validatorType;
            validatorType = null;
        }
    }
    else if (arguments.length == 2 && isSchemaObject(validatorType)) {
        validatorType = index_1.object().keys(validatorType);
    }
    return function (target, propertyKey, descriptor) {
        engine_1.pipeline(validatePipeline_1.ValidatePipeLine, { validatorType, options })(target, propertyKey, descriptor);
    };
}
exports.validate = validate;
function validateModel(validatorType, options = {}) {
    return function (target, propertyKey, descriptor) {
        route_1.model()(target, propertyKey, descriptor);
        validate(validatorType, options)(target, propertyKey, descriptor);
    };
}
exports.validateModel = validateModel;
function validateBody(validatorType, options = {}) {
    return function (target, propertyKey, descriptor) {
        route_1.body()(target, propertyKey, descriptor);
        validate(validatorType, options)(target, propertyKey, descriptor);
    };
}
exports.validateBody = validateBody;
function validateQuery(validatorType, options = {}) {
    return function (target, propertyKey, descriptor) {
        route_1.query()(target, propertyKey, descriptor);
        validate(validatorType, options)(target, propertyKey, descriptor);
    };
}
exports.validateQuery = validateQuery;
function validateParams(validatorType, options = {}) {
    return function (target, propertyKey, descriptor) {
        route_1.params()(target, propertyKey, descriptor);
        validate(validatorType, options)(target, propertyKey, descriptor);
    };
}
exports.validateParams = validateParams;
function isSchemaObject(obj) {
    let keys = Object.keys(obj || {});
    if (!keys.length) {
        return false;
    }
    let value = obj[keys[0]];
    return typeof value == "function";
}
//# sourceMappingURL=validateDecorator.js.map