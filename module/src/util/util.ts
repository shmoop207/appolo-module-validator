import {getFromContainer, MetadataStorage} from "class-validator";
import {Classes} from "appolo-utils";

export class Util {
    public static isValidType(type: any): boolean {
        let metaDataValidator = getFromContainer<MetadataStorage>(MetadataStorage);

        return (Classes.isClass(type) && metaDataValidator.getTargetValidationMetadatas(type, "").length >= 0)
    }
}
