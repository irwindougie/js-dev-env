"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var APIRouter = /** @class */ (function () {
    function APIRouter() {
        this.router = express_1.Router();
        this.init();
    }
    APIRouter.prototype.err = function (req, res, next) {
        res.send(404);
    };
    APIRouter.prototype.init = function () {
        this.router.get('/', this.err);
    };
    return APIRouter;
}());
exports.APIRouter = APIRouter;
var apiRouter = new APIRouter();
apiRouter.init();
exports.default = apiRouter.router;
//# sourceMappingURL=routes.js.map