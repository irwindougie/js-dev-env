import app from './config/app';
import * as chalk from 'chalk';

const server = app.listen(app.get("port"), () => {
	console.log(
		chalk.yellow("Running at %s%d in %s mode"),
		chalk.cyan("http://" + app.get("host") + ":"),
		chalk.green(app.get("port")),
		chalk.underline.bold.red(app.get("env"))
	);
})
export default server;
