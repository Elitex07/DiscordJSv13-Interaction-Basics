// Require the necessary discord.js classes
const { Client, Intents, Collection } = require('discord.js');
const { token } = require('./config.json');

// Syncing all files
const fs = require('fs');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
module.exports = client;
// Creating Collections
client.commands = new Collection();

//Command Handler
const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith(`.js`));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    // Set a new item in a variable
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
};
//Events
client.once('ready', c =>{
	console.log(`Ready! Looged in with ${c.user.tag}`)
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(client, interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	} console.log(`${interaction} is executing in #${interaction.channel.id} of ${interaction.guild.name} by ${interaction.user.tag}`)
});


// Login to Discord with your client's token
client.login(token);