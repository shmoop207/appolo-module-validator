import {define, singleton} from "appolo";
import {validate} from "../../../../index";
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

}
