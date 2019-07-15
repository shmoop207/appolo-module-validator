import {define, factory, IFactory, singleton, inject, initMethod, Injector, Util} from 'appolo';
import {
    Validator as ClassValidator,
    useContainer,
   MetadataStorage
} from "class-validator";

@define()
@singleton()
@factory()
export class Validator implements IFactory<ClassValidator> {

    @inject() injector: Injector;

    public get() {

        let $injector = this.injector;

        useContainer({
            get(someClass: any): any {

                if(someClass === ClassValidator || someClass === MetadataStorage){
                    return null
                }

                let id = Util.getClassNameOrId(someClass);

                if ($injector.hasDefinition(id)) {
                    return $injector.get(someClass)
                }

                return null


            }
        }, {fallback: true, fallbackOnErrors: true});


        return new ClassValidator()

    }
}

