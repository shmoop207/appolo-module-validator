import * as chai from 'chai';
import * as request from 'supertest';
import {App, createApp} from '@appolo/core';
import sinon = require("sinon");
import sinonChai = require("sinon-chai");
import chaiHttp = require("chai-http");
import {SomeManager} from "../mock/src/controllers/someManager";
import {DataDto, DataDto3} from "../mock/src/common/common";

let should = chai.should();
chai.use(chaiHttp);
chai.use(sinonChai);

describe('validations e2e', () => {
    let app: App;

    before(async () => {
        app = createApp({
            port: 8184,
            environment: "testing",
            root: process.cwd() + '/test/mock/',
        });
        try {
            await app.launch();
        } catch (e) {
            throw  e
        }

    });


    it('should should call with validation error', async () => {

        let res = await request(app.route.handle)
            .get('/test/validations/?user2_name=11');

        res.should.to.have.status(400);

        res.should.to.be.json;

        should.exist(res.body);

        res.body.error.should.contain("failed to validate");
        res.body.message.should.contain("Bad Request");
        res.body.errors.length.should.eq(1)
    });


    it('should should call nested with validation error', async () => {

        let res = await request(app.route.handle)
            .get('/test/nested/?user2_name=11');

        res.should.to.have.status(400);

        res.should.to.be.json;

        should.exist(res.body);

        res.body.error.should.contain("failed to validate");
        res.body.errors.length.should.be.eq(1);
        res.body.message.should.contain("Bad Request")
    });

    it('should call validations error', async () => {

        let res = await request(app.route.handle)
            .get('/test/validations/');


        res.should.to.have.status(400);
        res.should.to.be.json;

        should.exist(res.body);

        res.body.error.should.be.ok;
    });

    it('should call validation be ok', async () => {

        let res = await request(app.route.handle)
            .get('/test/validations/?test=test1111111');


        res.should.to.have.status(200);
        res.should.to.be.json;

        should.exist(res.body);

        res.body.model.test.should.be.ok;
    });


    it('should call validations auth ', async () => {

        let res = await request(app.route.handle)
            .get('/test/validations/auth/?userName=aaa&password=1111');


        res.should.to.have.status(200);
        res.should.to.be.json;

        should.exist(res.body);

        res.body.userName.should.be.ok;
    });

    it('should call invalid validations auth ', async () => {

        let res = await request(app.route.handle)
            .get('/test/validations/auth/?userName=aa&password=1111');


        res.should.to.have.status(400);
        res.should.to.be.json;

        should.exist(res.body);

    });


    it('should call validations param object', async () => {

        let res = await request(app.route.handle)
            .get('/test/validations/param_object?b=1&a[test]=aaa&a[test2]=2');


        res.should.to.have.status(200);
        res.should.to.be.json;

        should.exist(res.body);

        res.body.model.a.test.should.be.eq("aaa");
        res.body.name.should.be.eq("ValidationController");
    });

    it('should call validations get all object', async () => {

        let res = await request(app.route.handle)
            .get('/test/validations/get_all?filter=%7B%7D&fields=%7B%7D&sort=%7B%7D&populate[]=%7B%22path%22:%22game%22,%22select%22:%22name%22%7D');


        res.should.to.have.status(200);
        res.should.to.be.json;

        should.exist(res.body);

        res.body.should.be.deep.eql({
            "filter": {},
            "fields": {},
            "sort": {},
            "populate": [
                {
                    "path": "game",
                    "select": "name"
                }
            ]
        })
    });

    it('should call invalid validations param object', async () => {

        let res = await request(app.route.handle)
            .get('/test/validations/param_object?c=1&a[test]=aaa&a[test2]=2');


        res.should.to.have.status(400);

    });

    it('should call  validations on method', async () => {
        let manager = app.injector.get<SomeManager>(SomeManager)
        let data = new DataDto();
        data.name = "aa";
        let result;

        try {
            result = await manager.getData(data);


        } catch (e) {

        }

        data.name.should.be.eq("aa");

    });

    it('should call invalid validations on method', async () => {
        let manager = app.injector.get<SomeManager>(SomeManager);
        let data = new DataDto();

        try {
            data = await manager.getData(data);
        } catch (e) {
            e.data.errors[0].should.be.eq("name is not valid string");

        }

    });

    it('should call invalid validate arg', async () => {
        let manager = app.injector.get<SomeManager>(SomeManager);
        let data = new DataDto();

        try {
            data = await manager.getData2(data);
        } catch (e) {
            e.data.errors[0].should.be.eq("name is not valid string")
        }

    });

    it('should call valid validate arg with custom dto', async () => {
        let manager = app.injector.get<SomeManager>(SomeManager);
        let data = new DataDto3();
        data.name = 3;
        data.obj = {}
        let result;

        try {
            result = await manager.getData3(data);
            let a = result

        } catch (e) {

            console.log(e);
        }

        result.name.should.be.eq(3);

    });

    it('should call invalid validate arg with custom dto', async () => {
        let manager = app.injector.get<SomeManager>(SomeManager);
        let data = new DataDto();

        try {
            data = await manager.getData3(data);
        } catch (e) {
            e.data.errors[0].should.be.eq("name must be a number");
        }
    });


    it('should call valid validate arg with custom dto', async () => {
        let manager = app.injector.get<SomeManager>(SomeManager);
        let data = new DataDto3();
        data.obj = '{"a":1}';
        data.name = 1;
        (data as any).name2 = 1;

        let result;

        try {
            result = await manager.getData3(data);

        } catch (e) {
            console.log("111")
        }

        result.name.should.be.eq(1);
        result.obj.a.should.be.eq(1);

    });

    it('should call validate with groups', async () => {
        let manager = app.injector.get<SomeManager>(SomeManager);

        let result = await manager.getData6({name: "1"});

        result.name.should.be.eq(1);
        should.not.exist(result.name2);


    });

    it('should call validate with validate object', async () => {
        let manager = app.injector.get<SomeManager>(SomeManager);

        let result = await manager.getData7({name: "1", name2: 2, name3: 3});

        result.name.should.be.eq(1);
        result.name2.should.be.eq(2)
        should.not.exist(result.name3);


    });

    // it.only('should call array', async () => {
    //
    //     class Dto {
    //         @IsNumber({}, {each: true})
    //         test: number[]
    //     }
    //
    //
    //     let cls = plainToClass(Dto, {test: ["aaaaa"]});
    //
    //     let result = await validate(cls)
    //
    //     result.name.should.be.eq(1);
    //     should.not.exist(result.name2);
    //
    //
    // });


});
