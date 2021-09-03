module.exports = {
	name: "ping",
	description: "A simple Ping command",
	run(message) {
		message.channel.send("Pong!🏓");
	},
};
