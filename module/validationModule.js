"use strict";
var ValidationModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationModule = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const defaults_1 = require("./src/defaults");
const validatePipeline_1 = require("./src/pipelines/validatePipeline");
const validator_1 = require("./src/factories/validator");
let ValidationModule = ValidationModule_1 = class ValidationModule extends engine_1.Module {
    constructor() {
        super(...arguments);
        this.Defaults = defaults_1.Defaults;
    }
    static for(options) {
        return { type: ValidationModule_1, options };
    }
    beforeInitialize() {
    }
    get exports() {
        return [validatePipeline_1.ValidatePipeLine, validator_1.Validator];
    }
};
ValidationModule = ValidationModule_1 = tslib_1.__decorate([
    engine_1.module()
], ValidationModule);
exports.ValidationModule = ValidationModule;
//# sourceMappingURL=validationModule.js.map