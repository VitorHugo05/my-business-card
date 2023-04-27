import { useEffect, useState } from 'react';
import Eris, { Client } from 'eris';

export type DateDiscordProps = {
   botToken: string;
   guildId: string;
};

// export type DateDiscordState = {
//    onlineMembers: number;
//    totalMembers: number;
// };

export function useDateDiscord({ botToken, guildId }: DateDiscordProps) {
   const [onlineMembers, setOnlineMembers] = useState(0);
   const [totalMembers, setTotalMembers] = useState(0);
   const bot = new Client(`Bot ${botToken}`);

   useEffect(() => {
      const guild = bot.guilds.get(guildId);
      if (!guild) {
         console.error('Não foi possível encontrar o servidor.');
         return;
      }

      const totMembers = guild.memberCount;
      const onMembers = guild.members.filter(m => m.status === 'online').length;
      setTotalMembers(totMembers);
      setOnlineMembers(onMembers);

      const intervalId = setInterval(() => {
         const totMembers = guild.memberCount;
         const onMembers = guild.members.filter(
            m => m.status === 'online'
         ).length;
         console.log(totMembers);
         setTotalMembers(totMembers);
         setOnlineMembers(onMembers);
      }, 5000);

      return () => clearInterval(intervalId);
   }, [guildId]);

   return { totalMembers, onlineMembers };
}
