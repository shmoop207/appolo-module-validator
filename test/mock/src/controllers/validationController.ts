"use strict";
import {Controller, controller, IRequest, IResponse, get,query} from 'appolo';
import {validate} from "../../../../index";
import {IsString, Length,MinLength,IsNumber,ValidateNested} from "class-validator";

class ValidationsDto {
    @IsString()
    @Length(10)
    test: string
}

class AuthDto {
    @IsString()
    @MinLength(3)
    userName: string;

    @IsString()
    @MinLength(3)
    password: string;


}

class NestedObject {
    @IsString()
    test: string;

    @IsNumber()
    test2: number;
}

class ObjectDto {

    @IsNumber()
    b:number;

    @ValidateNested()
    a:NestedObject
}



@controller()
export class ValidationController extends Controller {

    @get("/test/validations/")
    @validate()
    test(req: IRequest, res: IResponse, @query() model: ValidationsDto) {
        res.json({working: true, controllerName: this.route.controller, model: model})
    }


    @get("/test/validations/auth")
    @validate()
    validation(req: IRequest, res: IResponse,@query() model: AuthDto) {
        res.json(model)
    }

    @get('/test/validations/param_object')
    @validate()
    public validationObject(req: IRequest, res: IResponse,@query() model: ObjectDto) {


        res.json({model: model, name: this.constructor.name})
    }

}



