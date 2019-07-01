import {define, IPipeline, PipelineContext, singleton, inject} from 'appolo';
import {IOptions} from "../IOptions";
import {plainToClass} from "class-transformer";
import * as _ from "lodash";

@define()
@singleton()
export class TransformAfterPipeline implements IPipeline {

    @inject() moduleOptions: IOptions;

    public async run(context: PipelineContext, next) {

        let opts = _.defaults({}, context.metaData.options || {}, this.moduleOptions.transformOptions);

        let result = await next();

        const entity = plainToClass(
            context.metaData.transformType,
            result,
            opts,
        );
        
        return entity
    }


}
