import {ValidationModule} from "../../../../";
import {App} from "@appolo/core";
import  qs = require( "qs");

export = async function (app: App) {

     app.module.use(ValidationModule)
     app.set("qsParser",qs.parse)
}


