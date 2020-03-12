import {Module, module, Util, Hooks, BadRequestError} from "appolo/index";
import {IOptions} from "../index";
import {Defaults} from "./src/defaults";
import {ValidatePipeLine} from "./src/pipelines/validatePipeline";
import {Validator} from "./src/factories/validator";

@module()
export class ValidationModule extends Module<IOptions> {


    protected readonly Defaults: Partial<IOptions> = Defaults;

    constructor(opts?: IOptions) {
        super(opts);
    }

    public beforeInitialize() {
    }

    get exports() {
        return [ValidatePipeLine, Validator]

    }


}
