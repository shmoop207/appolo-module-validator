import {Module, module, Util, Hooks, BadRequestError} from "appolo/index";
import {IOptions} from "../index";
import * as _ from "lodash";
import {plainToClass} from "class-transformer";
import {validate, ValidationError} from "class-validator";
import {Defaults} from "./src/defaults";
import {ValidatePipeLine} from "./src/pipelines/validatePipeline";
import {TransformPipeline} from "./src/pipelines/transformPipeline";
import {TransformAfterPipeline} from "./src/pipelines/transformAfterPipeline";

@module()
export class ValidationModule extends Module<IOptions> {


    protected readonly Defaults: Partial<IOptions> = Defaults;

    constructor(opts?: IOptions) {
        super(opts);
    }

    get exports() {
        return [ValidatePipeLine,TransformPipeline,TransformAfterPipeline]

    }


}
