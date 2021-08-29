const chalk = require("chalk");
const boxen = require("boxen");

function introduction() {
	const name1 = chalk.blueBright.bold.italic("Disco");
	const name2 = chalk.greenBright.bold("GEN");
	const name = name1.concat(name2);

	const opt = {
		padding: 1,
		margin: 1,
		borderStyle: "singleDouble",
	};
	const print = boxen(name, opt);
	console.log(print);
}

module.exports = introduction;
