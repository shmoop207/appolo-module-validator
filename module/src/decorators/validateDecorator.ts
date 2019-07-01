import {IRequest, IResponse, Util, IClass, pipeline} from 'appolo';

import {ValidateOptions} from "../IOptions";
import * as _ from "lodash";
import {ValidatePipeLine} from "../pipelines/validatePipeline";

export function validate(validatorType?: ValidateOptions | IClass, options: ValidateOptions = {}) {

    if (arguments.length == 1 && _.isPlainObject(validatorType)) {
        options = validatorType as ValidateOptions;
        validatorType = null
    }

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor | number) {

        pipeline(ValidatePipeLine, {validatorType, options})(target, propertyKey, descriptor);
    }
}
