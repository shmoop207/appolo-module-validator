import {ValidationError} from "class-validator";
import * as _ from "lodash";
import {IOptions} from "./IOptions";

export const Defaults: Partial<IOptions> = {
    validatorOptions: {
        validationError: {target: false, value: false}
    }, transformOptions: {
        enableImplicitConversion: true
    },
    validationErrorFormat: (results: ValidationError[]) => results.toString()
}
