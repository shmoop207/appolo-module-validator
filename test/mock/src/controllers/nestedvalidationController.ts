"use strict";
import {Controller, controller, IRequest, IResponse, get, query} from '@appolo/route';
import {_validationController, ValidationsDto} from "./_validationController";


@controller()
export class NestedvalidationController extends _validationController {

    @get("/test/nested/")
    test2(model: ValidationsDto, req: IRequest, res: IResponse,) {

        return super.test2(model, req, res)
    }


}



