import {IsString, MinLength, IsNumber, ValidateNested} from "class-validator";
import {define, singleton} from "appolo";
import {validate, transform, transformAfter} from "../../../../index";

export class DataDto {
    @IsString()
    name: string;
}

export class DataDto3 {
    @IsNumber()
    name: number;
}

@define()
@singleton()
export class SomeManager {

    @validate()
    public async getData(data: DataDto) {
        return data
    }


    public async getData2(@validate() data: DataDto) {
        return data
    }

    public async getData3(@validate(DataDto3) data: any) {
        return data
    }

    public async getData4(@transform(DataDto3) data: any): Promise<boolean> {
        return data instanceof DataDto3
    }

    @transformAfter(DataDto3)
    public async getData5(data: any): Promise<any> {
        return {name: "11"}
    }

}
