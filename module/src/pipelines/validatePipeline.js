"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatePipeLine = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const route_1 = require("@appolo/route");
const appolo_validator_1 = require("appolo-validator");
let ValidatePipeLine = class ValidatePipeLine {
    async run(context, next) {
        let opts = context.metaData.options || {};
        let promises = [];
        let values = context.values || [];
        values = context.metaData.validatorType ? [values[0]] : values;
        for (let i = 0; i < values.length; i++) {
            let item = context.values[0];
            let type = context.metaData.validatorType || item.type;
            if (typeof type === "function" || typeof type === "object") {
                let schema = this.validator.getSchema(type);
                if (schema) {
                    promises.push(this._validateArg(schema, type, item.value, opts, item.index, context));
                }
            }
        }
        await Promise.all(promises);
        return next();
    }
    async _validateArg(schema, type, value, options, index, context) {
        let result = await this.validator.validate(schema, value, options);
        if (result.errors.length) {
            throw new route_1.BadRequestError("failed to validate", { errors: result.errors.map(msg => msg.toString()) });
        }
        context.setArgumentAt(index, result.value);
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", Object)
], ValidatePipeLine.prototype, "moduleOptions", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", appolo_validator_1.Validator)
], ValidatePipeLine.prototype, "validator", void 0);
ValidatePipeLine = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], ValidatePipeLine);
exports.ValidatePipeLine = ValidatePipeLine;
//# sourceMappingURL=validatePipeline.js.map