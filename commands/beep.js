const {SlashCommandBuilder} = require(`@discordjs/builders`);

module.exports={
    data: new SlashCommandBuilder()
        .setName('beep')
        .setDescription('Replies with Boop!'),
        async execute(client, interaction){
            await interaction.reply({content: 'Boop!'})
        }
}