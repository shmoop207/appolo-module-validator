"use strict";
import {ValidationModule} from "./module/validationModule";
import {validate} from "./module/src/decorators/validateDecorator"
import {transformAfter} from "./module/src/decorators/transformAfterDecorator"
import {transform} from "./module/src/decorators/transformDecorator"
import {IOptions} from "./module/src/IOptions"
import {ValidatorOptions} from "class-validator";
import {ClassTransformOptions} from "class-transformer";

export {ValidationModule, validate, IOptions, ValidatorOptions, ClassTransformOptions,transform,transformAfter}

