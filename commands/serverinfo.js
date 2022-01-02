const {SlashCommandBuilder} = require(`@discordjs/builders`);

module.exports={
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Replies with basic server info'),
        async execute(client, interaction){
            await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`)
        }
}