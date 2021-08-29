const chalk = require("chalk");

module.exports = {
	bot_name: chalk.blueBright.bold("What is the BOT name: "),
	bot_prefix: chalk.yellowBright.bold("What will be the bot prefix: "),
	token_text: chalk.green.bold("Enter the bot token: "),
	pkg_text: chalk.magentaBright.bold(
		"Which package manager do you want to use[npm/yarn]: "
	),

	wrong_input: chalk.red.bold("Wrong Input! Please try again..."),
};
