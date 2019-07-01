"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appolo_1 = require("appolo");
const transformAfterPipeline_1 = require("../pipelines/transformAfterPipeline");
function transformAfter(transformType, options = {}) {
    return function (target, propertyKey, descriptor) {
        appolo_1.pipeline(transformAfterPipeline_1.TransformAfterPipeline, { transformType, options })(target, propertyKey, descriptor);
    };
}
exports.transformAfter = transformAfter;
//# sourceMappingURL=transformAfterDecorator.js.map