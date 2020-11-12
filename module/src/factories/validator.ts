import {define, factory, IFactory, singleton, inject, init, Injector, Util} from '@appolo/inject';
import {validation, Validator as AValidator} from 'appolo-validator';
import {IOptions} from "../IOptions";
// import {
//     Validator as ClassValidator,
//     useContainer,
//    MetadataStorage
// } from "class-validator";

@define()
@singleton()
@factory()
export class Validator implements IFactory<AValidator> {

    @inject() injector: Injector;
    @inject() moduleOptions: IOptions;

    public async get() {

        //let $injector = this.injector;

        let validator = await validation({
            ...this.moduleOptions,
            container: (klass) => {
                return this.injector.resolve(klass)
            }
        });

        return validator;


    }
}

