import {IModuleOptions} from "appolo";
import {IOptions as ValidatorOptions} from "appolo-validator";


export interface IOptions extends ValidatorOptions, IModuleOptions {
}

export interface ValidateOptions {

    // validatorOptions?: ValidatorOptions
    // transformOptions?: ClassTransformOptions,
    // validationErrorFormat?: (results: ValidationError[]) => string
    // valueField?: string
}
