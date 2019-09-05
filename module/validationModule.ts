import {Module, module, Util, Hooks, BadRequestError} from "appolo/index";
import {IOptions} from "../index";
import * as _ from "lodash";
import {plainToClass} from "class-transformer";
import {getFromContainer, MetadataStorage, validate, ValidationError} from "class-validator";
import {Defaults} from "./src/defaults";
import {ValidatePipeLine} from "./src/pipelines/validatePipeline";
import {TransformPipeline} from "./src/pipelines/transformPipeline";
import {TransformAfterPipeline} from "./src/pipelines/transformAfterPipeline";
import {Validator} from "./src/factories/validator";

@module()
export class ValidationModule extends Module<IOptions> {


    protected readonly Defaults: Partial<IOptions> = Defaults;

    constructor(opts?: IOptions) {
        super(opts);
    }

    public beforeInitialize() {
        let metaDataValidator = getFromContainer<MetadataStorage>(MetadataStorage);

        _.forEach((metaDataValidator as any).validationMetadatas, item => {
            if (item && (!item.groups || item.groups.length == 0)) {
                item.always = true;
            }
        })
    }

    get exports() {
        return [ValidatePipeLine, TransformPipeline, TransformAfterPipeline, Validator]

    }


}
