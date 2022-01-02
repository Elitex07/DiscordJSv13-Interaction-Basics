const {SlashCommandBuilder} = require('@discordjs/builders');

module.exports={
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Securly returns User info'),
        async execute(client, interaction){
            await interaction.reply({content: `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`, ephemeral: true})
        }
}