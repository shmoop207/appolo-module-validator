import {IsString, MinLength, IsNumber, ValidateNested} from "class-validator";

export class DataDto {
    @IsString()
    name: string;
}

export class DataDto3 {
    @IsNumber()
    name: number;
}


export class DataDtoInherit extends DataDto3{
    @IsNumber()
    name2: number;
}
