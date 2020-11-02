"use strict";
const __1 = require("../../../../");
const qs = require("qs");
module.exports = async function (app) {
    app.module.use(__1.ValidationModule);
    app.set("qsParser", qs.parse);
};
//# sourceMappingURL=all.js.map