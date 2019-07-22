import {define, singleton} from "appolo";
import {validate, transform, transformAfter} from "../../../../index";
import {DataDto, DataDto3, DtoGroups} from "../common/common";


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


    public async getData6(@validate(DtoGroups,{validatorOptions:{groups:["test2"]}}) data: any): Promise<DtoGroups> {
        return data
    }

}
