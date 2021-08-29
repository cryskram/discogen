const fs = require("fs");
const fetch = require("node-fetch");

function createFile(filename, content) {
	fs.writeFile(filename, content, (err) => {
		if (err) return console.log(err.message);
	});
}

async function createFileWithUrl(filename, url) {
	const res = await fetch(url);
	const data = await res.text();

	createFile(filename, data);
}

module.exports = { createFile, createFileWithUrl };
