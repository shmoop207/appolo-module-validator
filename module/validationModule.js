"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = require("appolo/index");
const defaults_1 = require("./src/defaults");
const validatePipeline_1 = require("./src/pipelines/validatePipeline");
const transformPipeline_1 = require("./src/pipelines/transformPipeline");
const transformAfterPipeline_1 = require("./src/pipelines/transformAfterPipeline");
let ValidationModule = class ValidationModule extends index_1.Module {
    constructor(opts) {
        super(opts);
        this.Defaults = defaults_1.Defaults;
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