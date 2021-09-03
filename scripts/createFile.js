const fs = require("fs");
const fetch = require("node-fetch");

function createFile(filename, content) {
	fs.writeFile(filename, content, (err) => {
		if (err) return console.log(err.message);
	});
}

async function createFileWithUrl(filename, url) {
	const data = fs.readFileSync(url, "utf8");

	createFile(filename, data);
}

module.exports = { createFile, createFileWithUrl };
