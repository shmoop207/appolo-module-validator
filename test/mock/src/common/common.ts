import {string,number,object} from "appolo-validator";

export class DataDto {
    @string()
    name: string;
}

export class DataDto3 {
    @number().toFloat()
    name: number;

    @object()
    obj: any
}


export class DataDtoInherit extends DataDto3 {
    @number()
    name2: number;

}


export class DtoGroups {
    @number()
    name: number;

    @string({groups: ["test"]})
    name2: string
}
