const { createFile } = require("../scripts/createFile");

module.exports = {
	configjs(prefix, token) {
		var data = `
        {
            "token": "${token}",
            "prefix": "${prefix}"
        }
        `;

		createFile("config.json", data);
	},
};
