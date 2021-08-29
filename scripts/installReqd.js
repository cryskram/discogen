const shell = require("shelljs");
const variables = require("../utils/var");

module.exports = {
	installRequired(name = "") {
		name = name.toLowerCase();
		if (name === "yarn") {
			shell.exec("yarn init -y");
			shell.exec("yarn add discord.js");
			TODO: "Support for audio module";
		} else if (name === "npm") {
			shell.exec("npm init -y");
			shell.exec("npm install discord.js");
		} else {
			console.log(variables.wrong_input);
			process.exit(1);
		}
	},
};
