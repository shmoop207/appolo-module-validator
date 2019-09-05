"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const appolo_utils_1 = require("appolo-utils");
class Util {
    static isValidType(type) {
        let result = Util._classCache.get(type);
        if (result !== undefined) {
            return result;
        }
        let metaDataValidator = class_validator_1.getFromContainer(class_validator_1.MetadataStorage);
        result = (appolo_utils_1.Classes.isClass(type) && metaDataValidator.getTargetValidationMetadatas(type, "").length >= 0);
        Util._classCache.set(type, result);
        return result;
    }
}
exports.Util = Util;
Util._classCache = new Map();
//# sourceMappingURL=util.js.map