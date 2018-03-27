import app from './config/app';

const server = app.listen(app.get("port"), () => {
	console.log(
		"Running at http://%s:%d in %s mode",
		app.get("host"),
		app.get("port"),
		app.get("env")
	);
})
export default server;
