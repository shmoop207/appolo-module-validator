import {IRequest, IResponse, Util, IClass, pipeline} from 'appolo';
import {Objects} from 'appolo-utils';

import {ValidateOptions} from "../IOptions";
import {ValidatePipeLine} from "../pipelines/validatePipeline";
import { When, AnySchema} from "appolo-validator";
import {object} from "../../../index";

export function validate(validatorType?: ValidateOptions | IClass | { [index: string]: AnySchema | Pick<When, any> } | AnySchema, options: ValidateOptions = {}): (target: any, propertyKey: string, descriptor?: PropertyDescriptor | number) => void {

    if (arguments.length == 1 && Objects.isPlain(validatorType as any)) {
        if (isSchemaObject(validatorType)) {
            validatorType = object().keys(validatorType as { [index: string]: AnySchema | Pick<When, any> })
        } else {
            options = validatorType as ValidateOptions;
            validatorType = null;

        }
    } else if (arguments.length == 2 && isSchemaObject(validatorType)) {
        validatorType = object().keys(validatorType as { [index: string]: AnySchema | Pick<When, any> })
    }


    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor | number) {

        pipeline(ValidatePipeLine, {validatorType, options})(target, propertyKey, descriptor);
    }
}


function isSchemaObject(obj) {
    let keys = Object.keys(obj || {});

    if (!keys.length) {
        return false
    }

    let value = obj[keys[0]];
    return  typeof value=="function"

}
