import {define, BadRequestError, IPipeline, singleton, inject, initMethod, PipelineContext, Reflector} from 'appolo';
import {IOptions, ValidateOptions} from "../IOptions";
import {Validator, AnySchema, ValidationErrorsError} from "appolo-validator";


@define()
@singleton()
export class ValidatePipeLine implements IPipeline {

    @inject() moduleOptions: IOptions;
    @inject() validator: Validator;

    public async run(context: PipelineContext, next) {

        let opts: ValidateOptions = context.metaData.options;

        let promises = [];

        for (let i = 0; i < (context.values || []).length; i++) {
            let item = context.values[i];
            let type = context.metaData.validatorType || item.type;

            if (typeof type === "function" || typeof type === "object") {
                let schema = this.validator.getSchema(type);

                if (schema) {

                    promises.push(this._validateArg(schema, type, item.value, opts, item.index, context));
                }
            }
        }

        await Promise.all(promises);

        return next();
    }

    private async _validateArg(schema: AnySchema, type: any, value: any, options: ValidateOptions, index: number, context: PipelineContext): Promise<any> {

        let result = await this.validator.validate(schema, value, options);

        if (result.errors.length) {

            throw new BadRequestError("failed to validate", {errors: result.errors.map(msg => msg.toString())})
        }

        context.setArgumentAt(index, result.value);
    }

}
