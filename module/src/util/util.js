"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const appolo_utils_1 = require("appolo-utils");
class Util {
    static isValidType(type) {
        let metaDataValidator = class_validator_1.getFromContainer(class_validator_1.MetadataStorage);
        return (appolo_utils_1.Classes.isClass(type) && metaDataValidator.getTargetValidationMetadatas(type, "").length >= 0);
    }
}
exports.Util = Util;
//# sourceMappingURL=util.js.map