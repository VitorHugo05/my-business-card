import DiscordInviteWindow from './DiscordInivteWindow';

export function MaximazeDiscord() {
   return (
      <div
         id="discord-open"
         className="w-full h-full flex items-center justify-center"
      >
         <DiscordInviteWindow translate="-translate-x-96 -translate-y-8" />
      </div>
   );
}

export function MinimizeDiscord() {
   return (
      <div
         id="discord-open"
         className="rounded-b-lg w-full h-full flex items-center justify-center"
      >
         <DiscordInviteWindow />
      </div>
   );
}
