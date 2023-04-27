import * as dotenv from 'dotenv';
dotenv.config();
import Image from 'next/image';
import { useDateDiscord } from '@/hooks/useDateDiscord';

export default function DiscordInviteWindow() {
   const { onlineMembers, totalMembers } = useDateDiscord({
      botToken: process.env.TOKEN,
      guildId: process.env.GUILD_URL
   });

   return (
      <div className="rounded-lg bg-[#313338] w-[480px] h-[330px] flex flex-col items-center justify-center">
         <div className="rounded-lg mb-6">
            <Image
               src={
                  'https://cdn.discordapp.com/icons/792127924501086218/794c1a93750d1399556019db5a179185.webp?w=240?h=240'
               }
               alt="yep"
               width={64}
               height={64}
               className="rounded-lg"
            />
         </div>

         <div className="text-white text-center items-center">
            <span className=" text-[#b4b4b4] text-sm">
               Dev Vitor convidou você para se juntar à
            </span>
            <h1 className="mt-2 text-xl">é us guri</h1>

            <div className="mt-2 flex flex-row gap-5 items-center justify-center">
               <div className="flex flex-row items-center gap-2">
                  <span>
                     <div className="bg-[#23a55a] w-3 h-3 rounded-full"></div>
                  </span>
                  <p className="text-[#b4b4b4]">{onlineMembers} online</p>
               </div>
               <div className="flex flex-row items-center gap-2">
                  <span>
                     <div className="bg-[#b4b4b4] w-3 h-3 rounded-full"></div>
                  </span>
                  <p className="text-[#b4b4b4]">
                     {totalMembers} membros totais
                  </p>
               </div>
            </div>
         </div>

         <div className="mt-14">
            <a
               href="https://discord.com/channels/792127924501086218/792127926644637737"
               target="_blanck"
            >
               <button className="bg-[#5865F2] hover:bg-[#4e50de] text-white transition duration-300 w-[420px] h-[45px] rounded-md">
                  Aceitar convite
               </button>
            </a>
         </div>
      </div>
   );
}
