"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./config/app");
var server = app_1.default.listen(app_1.default.get("port"), function () {
    console.log("Running at http://%s:%d in %s mode", app_1.default.get("host"), app_1.default.get("port"), app_1.default.get("env"));
});
exports.default = server;
//# sourceMappingURL=server.js.map