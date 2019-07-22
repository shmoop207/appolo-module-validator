import {IsString, MinLength, IsNumber, IsOptional} from "class-validator";
import {IsObject} from "../../../../module/src/validators/isObject";

export class DataDto {
    @IsString()
    name: string;
}

export class DataDto3 {
    @IsNumber()
    name: number;

    @IsObject()
    @IsOptional()
    obj: any
}


export class DataDtoInherit extends DataDto3 {
    @IsNumber()
    name2: number;

}


export class DtoGroups {
    @IsNumber()
    name: number;

    @IsString({groups: ["test"]})
    name2: string
}
