"use strict";
import {Controller, controller, IRequest, IResponse, get, query} from 'appolo';
import {ValidationController, ValidationsDto} from "./validationController";


@controller()
export class NestedvalidationController extends ValidationController {

    @get("/test/nested/")
    test2(req: IRequest, res: IResponse, model: ValidationsDto) {

        return super.test2(req, res, model)
    }


}



