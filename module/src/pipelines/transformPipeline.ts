import {define, BadRequestError, IPipeline, PipelineContext, singleton, inject, initMethod} from 'appolo';
import {IOptions} from "../IOptions";
import {plainToClass} from "class-transformer";
import * as _ from "lodash";
import {Util} from "../util/util";

@define()
@singleton()
export class TransformPipeline implements IPipeline {

    @inject() moduleOptions: IOptions;

    public async run(context: PipelineContext, next) {

        let opts = _.defaults({}, context.metaData.options || {}, this.moduleOptions.transformOptions);

        _.forEach(context.values, item => {
            let type = context.metaData.transformType || item.type;

            if (!Util.isValidType(type)) {
                return;
            }

            const entity = plainToClass(
                type,
                item.value,
                opts,
            );

            context.setArgumentAt(item.index, entity)

        });

        return next();
    }

}
