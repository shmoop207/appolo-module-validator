"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const class_transformer_1 = require("class-transformer");
const _ = require("lodash");
let TransformAfterPipeline = class TransformAfterPipeline {
    async run(context, next) {
        let opts = _.defaults({}, context.metaData.options || {}, this.moduleOptions.transformOptions);
        let result = await next();
        const entity = class_transformer_1.plainToClass(context.metaData.transformType, result, opts);
        return entity;
    }
};
tslib_1.__decorate([
    appolo_1.inject(),
    tslib_1.__metadata("design:type", Object)
], TransformAfterPipeline.prototype, "moduleOptions", void 0);
TransformAfterPipeline = tslib_1.__decorate([
    appolo_1.define(),
    appolo_1.singleton()
], TransformAfterPipeline);
exports.TransformAfterPipeline = TransformAfterPipeline;
//# sourceMappingURL=transformAfterPipeline.js.map