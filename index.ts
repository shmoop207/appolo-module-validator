"use strict";
import {ValidationModule} from "./module/validationModule";
import {validate} from "./module/src/decorators/validateDecorator"
import {IOptions} from "./module/src/IOptions"

import {
    string,
    object,
    number,
    registerConverter,
    array,
    boolean,
    schema,
    registerSchema,
    and,
    buffer,
    date,
    when,
    any,
    or,
    ref,
    func,
} from "appolo-validator"

export {ValidationModule, validate, IOptions,string,
    object,
    number,
    registerConverter,
    array,
    boolean,
    schema,
    registerSchema,
    and,
    buffer,
    date,
    when,
    any,
    or,
    ref,
    func}

