"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const _ = require("lodash");
const util_1 = require("../util/util");
let ValidatePipeLine = class ValidatePipeLine {
    async run(context, next) {
        let opts = _.defaults({}, context.metaData.options || {}, this.moduleOptions);
        let promises = [];
        _.forEach(context.values, item => {
            let type = context.metaData.validatorType || item.type;
            if (util_1.Util.isValidType(type)) {
                let value = opts.valueField ? item.value[opts.valueField] : item.value;
                promises.push(this._validateArg(type, value, opts, item.index, context));
            }
        });
        await Promise.all(promises);
        return next();
    }
    async _validateArg(type, value, options, index, context) {
        const entity = class_transformer_1.plainToClass(type, value, options.transformOptions);
        let errors = await class_validator_1.validate(entity, options.validatorOptions);
        if (errors.length) {
            let msg = options.validationErrorFormat(errors);
            throw new appolo_1.BadRequestError(msg, errors);
        }
        if (options.valueField) {
            value[options.valueField] = entity;
        }
        else {
            context.setArgumentAt(index, entity);
        }
    }
};
tslib_1.__decorate([
    appolo_1.inject(),
    tslib_1.__metadata("design:type", Object)
], ValidatePipeLine.prototype, "moduleOptions", void 0);
ValidatePipeLine = tslib_1.__decorate([
    appolo_1.define(),
    appolo_1.singleton()
], ValidatePipeLine);
exports.ValidatePipeLine = ValidatePipeLine;
//# sourceMappingURL=validatePipeline.js.map