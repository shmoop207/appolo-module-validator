import {define, singleton} from "@appolo/inject";
import {validate, number} from "../../../../index";
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


    public async getData6(@validate(DtoGroups, {groups: ["test2"]}) data: any): Promise<DtoGroups> {
        return data
    }

    @validate({
        name: number(),
        name2: number()
    })
    public async getData7(data: any): Promise<any> {
        return data
    }

    @validate(number().range(1, 3))
    public async getData8(num: number): Promise<any> {
        return num
    }

}
