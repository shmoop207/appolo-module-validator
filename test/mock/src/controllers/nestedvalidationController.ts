"use strict";
import {Controller, controller, IRequest, IResponse, get, query} from '@appolo/route';
import {ValidationController, ValidationsDto} from "./validationController";


@controller()
export class NestedvalidationController extends ValidationController {

    @get("/test/nested/")
    test2(model: ValidationsDto, req: IRequest, res: IResponse,) {

        return super.test2(model, req, res)
    }


}



