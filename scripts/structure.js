const shell = require("shelljs");
const { configjs } = require("../code/config");
const { createFileWithUrl } = require("./createFile");

module.exports = {
	folderStructure(dirname, prefix, token) {
		shell.mkdir(dirname);
		shell.cd(dirname);
		shell.mkdir("commands");
		configjs(prefix, token);
		createFileWithUrl("index.js", "../../data/index/index1.js");
		createFileWithUrl("commands/ping.js", "../../data/commands/ping.js");
	},
};
