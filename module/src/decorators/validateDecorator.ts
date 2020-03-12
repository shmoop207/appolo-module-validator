import {IRequest, IResponse, Util, IClass, pipeline} from 'appolo';
import {Objects} from 'appolo-utils';

import {ValidateOptions} from "../IOptions";
import {ValidatePipeLine} from "../pipelines/validatePipeline";

export function validate(validatorType?: ValidateOptions | IClass, options: ValidateOptions = {}): (target: any, propertyKey: string, descriptor?: PropertyDescriptor | number) => void {

    if (arguments.length == 1 && Objects.isPlain(validatorType as any)) {
        options = validatorType as ValidateOptions;
        validatorType = null
    }

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor | number) {

        pipeline(ValidatePipeLine, {validatorType, options})(target, propertyKey, descriptor);
    }
}
