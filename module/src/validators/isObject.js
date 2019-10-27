"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const _ = require("lodash");
let IsObjectConstraint = class IsObjectConstraint {
    validate(value, args) {
        try {
            let originValue = value;
            if (_.isString(value)) {
                value = JSON.parse(value);
            }
            if (!_.isPlainObject(value)) {
                return false;
            }
            if (Array.isArray(args.value)) {
                let index = args.value.indexOf(originValue);
                args.value[index] = value;
            }
            else {
                args.object[args.property] = value;
            }
            return true;
        }
        catch (e) {
        }
        return false;
    }
};
IsObjectConstraint = tslib_1.__decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsObjectConstraint);
exports.IsObjectConstraint = IsObjectConstraint;
function IsObject(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsObjectConstraint
        });
    };
}
exports.IsObject = IsObject;
//# sourceMappingURL=isObject.js.map