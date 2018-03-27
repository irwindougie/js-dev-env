"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var routes_1 = require("./routes");
var config = require('./helpers');
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    App.prototype.middleware = function () {
        this.express.set("views", config.root('public'));
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());
        this.express.use(express.static(config.root('public')));
    };
    App.prototype.routes = function () {
        var router = express.Router();
        router.get('/', function (req, res, next) {
            res.send('index.html');
        });
        this.express.use('/', router);
        this.express.use('/api', routes_1.default);
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=app.js.map