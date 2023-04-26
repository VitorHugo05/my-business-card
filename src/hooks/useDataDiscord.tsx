import { useState, useEffect } from 'react';
import { Client, GatewayIntentBits } from 'discord.js';

const useDataDiscord = (botToken: string, guildId: string) => {
   const [totalMembers, setTotalMembers] = useState(0);
   const [onlineMembers, setOnlineMembers] = useState(0);

   useEffect(() => {
      if (!botToken || !guildId) {
         console.error(
            'Token do bot do Discord ou ID do servidor não fornecido.'
         );
         return;
      }

      const fetchDiscordMembers = async () => {
         try {
            const client = new Client({ intents: [GatewayIntentBits.Guilds] });

            await client.login(botToken);

            const guild = await client.guilds.fetch(guildId);

            const total = guild.memberCount;

            const Online = guild.presences.cache.filter(
               presence => presence.status === 'online'
            ).size;

            setTotalMembers(total);
            setOnlineMembers(Online);

            await client.destroy();
         } catch (error) {
            console.error(
               'Erro ao obter informações dos membros do Discord:',
               error
            );
         }
      };

      fetchDiscordMembers();

      return () => {
         const client = new Client({ intents: [GatewayIntentBits.Guilds] });
         client.login(botToken);
         client.on('ready', () => {
            client.destroy();
         });
      };
   }, []);

   return { totalMembers, onlineMembers };
};

export default useDataDiscord;
