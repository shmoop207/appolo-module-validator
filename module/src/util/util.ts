import {getFromContainer, MetadataStorage} from "class-validator";
import {Classes} from "appolo-utils";

export class Util {

    private static _classCache = new Map<any, boolean>();

    public static isValidType(type: any): boolean {

        let result = Util._classCache.get(type);

        if (result !== undefined) {
            return result;
        }


        let metaDataValidator = getFromContainer<MetadataStorage>(MetadataStorage);

        result = (Classes.isClass(type) && metaDataValidator.getTargetValidationMetadatas(type, "").length >= 0)

        Util._classCache.set(type, result);

        return result;
    }
}
