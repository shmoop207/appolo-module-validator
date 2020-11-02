"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const appolo_validator_1 = require("appolo-validator");
// import {
//     Validator as ClassValidator,
//     useContainer,
//    MetadataStorage
// } from "class-validator";
let Validator = class Validator {
    async get() {
        //let $injector = this.injector;
        let validator = await appolo_validator_1.validation(this.moduleOptions);
        return validator;
        // useContainer({
        //     get(someClass: any): any {
        //
        //         if(someClass === ClassValidator || someClass === MetadataStorage){
        //             return null
        //         }
        //
        //         let id = Util.getClassNameOrId(someClass);
        //
        //         if ($injector.hasDefinition(id)) {
        //             return $injector.get(someClass)
        //         }
        //
        //         return null
        //
        //
        //     }
        // }, {fallback: true, fallbackOnErrors: true});
        //
        //
        // return new ClassValidator()
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", inject_1.Injector)
], Validator.prototype, "injector", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", Object)
], Validator.prototype, "moduleOptions", void 0);
Validator = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton(),
    inject_1.factory()
], Validator);
exports.Validator = Validator;
//# sourceMappingURL=validator.js.map