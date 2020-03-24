import {IModuleOptions} from "appolo";
import {IValidateOptions as ValidatorOptions,IValidateOptions} from "appolo-validator";


export interface IOptions extends ValidatorOptions, IModuleOptions {
}

export interface ValidateOptions extends IValidateOptions{

}
