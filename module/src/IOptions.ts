import {IModuleOptions} from "appolo";
import    joi = require('joi');
import {ValidationError, ValidatorOptions} from "class-validator";
import {ClassTransformOptions,} from "class-transformer";


export interface IOptions extends ValidateOptions, IModuleOptions {
}

export interface ValidateOptions {

    validatorOptions?: ValidatorOptions
    transformOptions?: ClassTransformOptions,
    validationErrorFormat?: (results: ValidationError[]) => string
}
