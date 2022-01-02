const {SlashCommandBuilder} = require(`@discordjs/builders`);

module.exports={
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with API ping of the Bot'),
        async execute(client, interaction){
            await interaction.reply(`**Pong!**\nAPI Ping of the Bot: \`${client.ws.ping}MS\``)
        }
}