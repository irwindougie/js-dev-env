import { Router, Request, Response, NextFunction } from "express";

export class APIRouter {
	router: Router;

	constructor() {
		this.router = Router();
		this.init();
	}

	public err(req: Request, res: Response, next: NextFunction){
		res.send(404);
	}

	init(){
		this.router.get('/', this.err);
	}
}

const apiRouter = new APIRouter();
apiRouter.init();

export default apiRouter.router;
