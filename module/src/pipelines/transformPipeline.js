"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const class_transformer_1 = require("class-transformer");
const _ = require("lodash");
const util_1 = require("../util/util");
let TransformPipeline = class TransformPipeline {
    async run(context, next) {
        let opts = _.defaults({}, context.metaData.options || {}, this.moduleOptions.transformOptions);
        _.forEach(context.values, item => {
            let type = context.metaData.transformType || item.type;
            if (!util_1.Util.isValidType(type)) {
                return;
            }
            const entity = class_transformer_1.plainToClass(type, item.value, opts);
            context.setArgumentAt(item.index, entity);
        });
        return next();
    }
};
tslib_1.__decorate([
    appolo_1.inject(),
    tslib_1.__metadata("design:type", Object)
], TransformPipeline.prototype, "moduleOptions", void 0);
TransformPipeline = tslib_1.__decorate([
    appolo_1.define(),
    appolo_1.singleton()
], TransformPipeline);
exports.TransformPipeline = TransformPipeline;
//# sourceMappingURL=transformPipeline.js.map