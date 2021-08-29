const readline = require("readline");
const { installRequired } = require("../scripts/installReqd");
const { folderStructure } = require("../scripts/structure");
const variables = require("./var");

const line = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

module.exports = {
	askQuestions() {
		line.question(variables.bot_name, (name) => {
			line.question(variables.bot_prefix, (prefix) => {
				line.question(variables.token_text, (token) => {
					folderStructure(name, prefix, token);
					line.question(variables.pkg_text, (manager) => {
						installRequired(manager);
						line.close();
					});
				});
			});
		});
	},
};
