import {define, singleton,inject} from "@appolo/inject";
import {
    IConstraint,
    ValidationParams,
    IConstraintValidateResult,
    registerConstraint,
    NumberSchema
} from "./../../../../index";
import {TempManager} from "../controllers/tempManager";

@define()
@singleton()
export class CustomValidator implements IConstraint {

    @inject() tempManager:TempManager

    public async validate(params: ValidationParams): Promise<IConstraintValidateResult> {

        if(!this.tempManager){
            throw new Error("failed to find manager")
        }

        let isValid = params.value >= params.args[0] && params.value < params.args[1];

        return {isValid};

    }

    public get type(): string {
        return "range"
    }

    public get defaultMessage(): string {
        return "${property} has invalid range "
    }
}

registerConstraint.extend({
    base: NumberSchema,
    name: "range",
    constraint: CustomValidator,
    inject: true
});


declare module "./../../../../index" {
    export interface NumberSchema {
        range(min: number, max: number): this;
    }
}
