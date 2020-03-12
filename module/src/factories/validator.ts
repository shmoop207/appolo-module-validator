import {define, factory, IFactory, singleton, inject, initMethod, Injector, Util} from 'appolo';
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

        let validator = await validation(this.moduleOptions);

        return validator;

        // useContainer({
        //     get(someClass: any): any {
        //
        //         if(someClass === ClassValidator || someClass === MetadataStorage){
        //             return null
        //         }
        //
        //         let id = Util.getClassNameOrId(someClass);
        //
        //         if ($injector.hasDefinition(id)) {
        //             return $injector.get(someClass)
        //         }
        //
        //         return null
        //
        //
        //     }
        // }, {fallback: true, fallbackOnErrors: true});
        //
        //
        // return new ClassValidator()

    }
}

