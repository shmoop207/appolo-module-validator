import {define, BadRequestError, IPipeline, singleton, inject, initMethod, PipelineContext} from 'appolo';
import {IOptions, ValidateOptions} from "../IOptions";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";
import * as _ from "lodash";
import {Util} from "../util/util";

@define()
@singleton()
export class ValidatePipeLine implements IPipeline {

    @inject() moduleOptions: IOptions;

    public async run(context: PipelineContext, next) {

        let opts: ValidateOptions = context.metaData.options;

        let promises = [];

        _.forEach(context.values, item => {
            let type = context.metaData.validatorType || item.type;

            if (Util.isValidType(type)) {

                let value = opts.valueField ? item.value[opts.valueField] : item.value;

                promises.push(this._validateArg(type, value, opts, item.index, context));
            }
        });

        await Promise.all(promises);

        return next();
    }

    private async _validateArg(type: any, value: any, options: ValidateOptions, index: number, context: PipelineContext): Promise<any> {


        const entity = plainToClass(
            type,
            value,
            Object.assign({}, this.moduleOptions.transformOptions, options.transformOptions),
        );

        let errors = await validate(entity, Object.assign({}, this.moduleOptions.validatorOptions, options.validatorOptions));

        if (errors.length) {
            let msg = (options.validationErrorFormat || this.moduleOptions.validationErrorFormat)(errors);

            throw new BadRequestError(msg, errors)
        }
        if (options.valueField) {
            value[options.valueField] = entity
        } else {
            context.setArgumentAt(index, entity);

        }
    }

}
