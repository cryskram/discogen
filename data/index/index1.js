const { Client, Intents, Collection } = require("discord.js");
const fs = require("fs");
const { prefix, token } = require("./config.json");

const client = new Client({
	intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
});
client.all = new Collection();
const files = fs
	.readdirSync("./commands/")
	.filter((file) => file.endsWith(".js"));
for (const i of files) {
	const command = require(`./commands/${i}`);
	client.all.set(command.name, command);
}

client.on("ready", () => {
	console.log(`${client.user.username} joined the server`);
});

client.on("messageCreate", (message) => {
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!message.content.startsWith(prefix) || message.author.bot) return;
	else if (command === "ping") {
		client.all.get("ping").run(message);
	}
});

client.login(token);
