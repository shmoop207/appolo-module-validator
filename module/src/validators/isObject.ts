import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from "class-validator";
import * as _ from "lodash";


@ValidatorConstraint({async: true})
export class IsObjectConstraint implements ValidatorConstraintInterface {

    validate(value: any, args: ValidationArguments) {

        try{
            if (_.isString(value)) {
                value = JSON.parse(value)
            }

            if(!_.isPlainObject(value)){
                return false;
            }

            args.object[args.property] = value;

            return true;

        }catch (e) {

        }

        return false;
    }
}

export function IsObject(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsObjectConstraint
        });
    };
}
