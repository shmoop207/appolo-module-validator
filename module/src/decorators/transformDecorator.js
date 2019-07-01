"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const transformPipeline_1 = require("../pipelines/transformPipeline");
const appolo_1 = require("appolo");
function transform(transformType, options = {}) {
    if (arguments.length == 1 && _.isPlainObject(transformType)) {
        options = transformType;
        transformType = null;
    }
    return function (target, propertyKey, descriptor) {
        appolo_1.pipeline(transformPipeline_1.TransformPipeline, { transformType, options })(target, propertyKey, descriptor);
    };
}
exports.transform = transform;
//# sourceMappingURL=transformDecorator.js.map