"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = require("appolo/index");
const _ = require("lodash");
const class_validator_1 = require("class-validator");
const defaults_1 = require("./src/defaults");
const validatePipeline_1 = require("./src/pipelines/validatePipeline");
const transformPipeline_1 = require("./src/pipelines/transformPipeline");
const transformAfterPipeline_1 = require("./src/pipelines/transformAfterPipeline");
let ValidationModule = class ValidationModule extends index_1.Module {
    constructor(opts) {
        super(opts);
        this.Defaults = defaults_1.Defaults;
    }
    beforeInitialize() {
        let metaDataValidator = class_validator_1.getFromContainer(class_validator_1.MetadataStorage);
        _.forEach(metaDataValidator.validationMetadatas, item => {
            if (item && item.groups && item.groups.length == 0) {
                item.always = true;
            }
        });
    }
    get exports() {
        return [validatePipeline_1.ValidatePipeLine, transformPipeline_1.TransformPipeline, transformAfterPipeline_1.TransformAfterPipeline];
    }
};
ValidationModule = tslib_1.__decorate([
    index_1.module(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ValidationModule);
exports.ValidationModule = ValidationModule;
//# sourceMappingURL=validationModule.js.map