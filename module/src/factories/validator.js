"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const class_validator_1 = require("class-validator");
let Validator = class Validator {
    get() {
        let $injector = this.injector;
        class_validator_1.useContainer({
            get(someClass) {
                if (someClass === class_validator_1.Validator || someClass === class_validator_1.MetadataStorage) {
                    return null;
                }
                let id = appolo_1.Util.getClassNameOrId(someClass);
                if ($injector.hasDefinition(id)) {
                    return $injector.get(someClass);
                }
                return null;
            }
        }, { fallback: true, fallbackOnErrors: true });
        return new class_validator_1.Validator();
    }
};
tslib_1.__decorate([
    appolo_1.inject(),
    tslib_1.__metadata("design:type", appolo_1.Injector)
], Validator.prototype, "injector", void 0);
Validator = tslib_1.__decorate([
    appolo_1.define(),
    appolo_1.singleton(),
    appolo_1.factory()
], Validator);
exports.Validator = Validator;
//# sourceMappingURL=validator.js.map