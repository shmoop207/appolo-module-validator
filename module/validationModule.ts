import {Module, module,IModuleParams} from "@appolo/engine";
import {IOptions} from "../index";
import {Defaults} from "./src/defaults";
import {ValidatePipeLine} from "./src/pipelines/validatePipeline";
import {Validator} from "./src/factories/validator";

@module()
export class ValidationModule extends Module<IOptions> {


    protected readonly Defaults: Partial<IOptions> = Defaults;

    public static for(options: IOptions): IModuleParams {
        return {type: ValidationModule, options}
    }

    public beforeInitialize() {
    }

    get exports() {
        return [ValidatePipeLine, Validator]

    }


}
