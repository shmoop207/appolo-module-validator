"use strict";
import {Controller, controller, IRequest, IResponse, get, query, model} from 'appolo';
import {validate, string, number, object, boolean, array} from "../../../../index";

export class ValidationsDto {

    @string().min(10)
    test: string
}

class AuthDto {
    @string().min(3)
    userName: string;

    @string().min(3)
    password: string;


}

class NestedObject {
    @string()
    test: string;

    @string()
    test2: number;
}

class ObjectDto {

    @number()
    b: number;

    @object(NestedObject)
    a: NestedObject
}

export type CrudItemParams<T> = { [J in keyof Partial<T>]: any };

export class GetAllModel<T> {

    @number().optional()
    public page: number;

    @number().optional()
    public pageSize: number;

    @object().optional()
    public sort?: CrudItemParams<T>;

    @object().optional()
    public filter?: CrudItemParams<T>;

    @object().optional()
    public fields?: CrudItemParams<T>;

    @array(object()).optional()
    public populate?: any[];

    @boolean().optional()
    lean: boolean
}


@controller()
export class ValidationController extends Controller {

    @get("/test/validations/")
    @validate()
    test(req: IRequest, res: IResponse, @query() model: ValidationsDto) {
        res.json({working: true, controllerName: this.route.controller, model: model})
    }

    @validate()
    test2(req: IRequest, res: IResponse, @query() model: ValidationsDto) {
        res.json({working: true, controllerName: this.route.controller, model: model})
    }


    @get("/test/validations/auth")
    @validate()
    validation(req: IRequest, res: IResponse, @query() model: AuthDto) {
        res.json(model)
    }

    @get('/test/validations/param_object')
    @validate()
    public validationObject(req: IRequest, res: IResponse, @query() model: ObjectDto) {


        res.json({model: model, name: this.constructor.name})
    }

    @get('/test/validations/get_all')
    public async getAll(@validate() @validate() @model() model: GetAllModel<any>, ...rest: any[]) {

        return model;
    }

}



