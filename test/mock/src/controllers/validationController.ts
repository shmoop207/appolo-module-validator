"use strict";
import {Controller, controller, IRequest, IResponse, get,query,model} from 'appolo';
import {IsObject, validate,Type} from "../../../../index";
import {IsString, Length,MinLength,IsNumber,ValidateNested,IsOptional,Allow,IsBoolean,IsArray} from "class-validator";

export class ValidationsDto {
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

export type CrudItemParams<T> = { [J in keyof Partial<T>]: any };

export class GetAllModel<T> {

    @IsNumber()
    @IsOptional()
    public page: number;

    @IsNumber()
    @IsOptional()
    public pageSize: number;

    @IsObject()
    @IsOptional()
    public sort?: CrudItemParams<T>;

    @IsObject()
    @IsOptional()
    public filter?: CrudItemParams<T>;

    @IsObject()
    @IsOptional()
    public fields?: CrudItemParams<T>;

    @IsOptional()
    @IsArray()
    @IsObject({each:true})
    @Type(()=>Object)
    public populate?: any[];

    @IsOptional()
    @IsBoolean()
    lean:boolean
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
    validation(req: IRequest, res: IResponse,@query() model: AuthDto) {
        res.json(model)
    }

    @get('/test/validations/param_object')
    @validate()
    public validationObject(req: IRequest, res: IResponse,@query() model: ObjectDto) {


        res.json({model: model, name: this.constructor.name})
    }

    @get('/test/validations/get_all')
    public async getAll(@validate() @validate() @model() model: GetAllModel<any>,...rest:any[]) {

        return model;
    }

}



