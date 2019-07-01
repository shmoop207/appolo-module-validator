import {ClassTransformOptions} from "class-transformer";
import * as _ from "lodash";
import {TransformPipeline} from "../pipelines/transformPipeline";
import {IRequest, IResponse, Util, IClass, pipeline} from 'appolo';
import {TransformAfterPipeline} from "../pipelines/transformAfterPipeline";

export function transformAfter(transformType: IClass, options: ClassTransformOptions = {}) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        pipeline(TransformAfterPipeline, {transformType, options})(target, propertyKey, descriptor);

    }
}
