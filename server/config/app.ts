import * as path from "path";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import APIRouter from './routes';

const config = require ('./helpers');

class App {

	public express: express.Application;

	constructor() {
		this.express = express();
		this.middleware();
		this.routes();
	}

	private middleware(): void {
		this.express.set("views", config.root('public'))
		this.express.use(bodyParser.urlencoded({ extended: true }));
		this.express.use(bodyParser.json());
		this.express.use(express.static(config.root('public')));
	}

	private routes(): void {
		let router = express.Router();

		router.get('/', (req, res, next) => {
			res.send('index.html')
		})
		this.express.use('/', router);
		this.express.use('/api', APIRouter)
	}

}

export default new App().express;
