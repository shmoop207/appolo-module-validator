import {ClassTransformOptions} from "class-transformer";
import * as _ from "lodash";
import {TransformPipeline} from "../pipelines/transformPipeline";
import {IRequest, IResponse, Util, IClass, pipeline} from 'appolo';

export function transform(transformType?: ClassTransformOptions | IClass, options: ClassTransformOptions = {}) {

    if (arguments.length == 1 && _.isPlainObject(transformType)) {
        options = transformType as ClassTransformOptions;
        transformType = null
    }

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor | number) {

        pipeline(TransformPipeline, {transformType, options})(target, propertyKey, descriptor);

    }
}
