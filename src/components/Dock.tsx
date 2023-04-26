import Image from 'next/image';

import { useContext, useState, useEffect } from 'react';
import { WindowContext, systemTypeProps } from '@/context/WindowedContext';

import TerminalApple from '../../public/icons/terminal-apple.png';
import Vscode from '../../public/icons/vscode.png';
import Brave from '../../public/icons/brave.png';
import Discord from '../../public/icons/discord.png';
import FileExplorer from '../../public/icons/fileExplorer.png';

export default function Dock() {
   const { apps, startedSystem, startedApplication } =
      useContext(WindowContext);
   const [showMenu, setShowMenu] = useState(false);

   let translate = '';

   Object.keys(apps).map((key: any) => {
      translate = apps[key as systemTypeProps].isMinimize
         ? '-translate-y-4'
         : !apps[key as systemTypeProps].isMinimize && showMenu
         ? '-translate-y-4'
         : 'translate-y-80';
   });

   useEffect(() => {
      startedApplication('vsCode', true, true, true);
   }, []);

   const handlerMouseOver = () => {
      setShowMenu(true);
   };
   const handlerMouseLeave = () => {
      setShowMenu(false);
   };

   console.log(showMenu);

   return (
      <div
         onMouseOver={handlerMouseOver}
         onMouseLeave={handlerMouseLeave}
         className="order-1 z-10 w-full h-24 bottom-0 fixed"
      >
         <footer
            className={`
            ${translate}
            order-2 flex-1 transition duration-500 w-full h-24 flex items-center justify-center
         `}
         >
            <nav className=" p-4 border border-neutral-300 backdrop-blur-lg shadow-2xl bg-neutral-200/50 h-26 w-fit rounded-3xl inset-x-0 bottom-1 -translate-y-3">
               <ul className="flex gap-4 items-center">
                  <li>
                     <button
                        className="flex flex-col items-center gap-0.5"
                        onClick={() =>
                           startedSystem('vsCode', true, true, false)
                        }
                     >
                        <Image src={Vscode} alt="" width={80} height={80} />
                        {apps?.vsCode?.isStarted && (
                           <div className="backdrop-blur-lg absolute bottom-0 mb-1 rounded-full h-2 w-2 bg-neutral-50/70"></div>
                        )}
                     </button>
                  </li>
                  <li>
                     <button
                        id="start"
                        className=" flex flex-col items-center gap-0.5"
                        onClick={() =>
                           startedSystem('brave', true, true, false)
                        }
                     >
                        <Image src={Brave} alt="" width={80} height={80} />
                        {apps?.brave?.isStarted && (
                           <div className="backdrop-blur-lg absolute bottom-0 mb-1 rounded-full h-2 w-2 bg-neutral-50/70"></div>
                        )}
                     </button>
                  </li>

                  <li>
                     <button
                        className=" flex flex-col items-center gap-0.5"
                        onClick={() =>
                           startedSystem('terminal', true, true, false)
                        }
                     >
                        <Image
                           src={TerminalApple}
                           alt=""
                           width={75}
                           height={75}
                        />
                        {apps?.terminal?.isStarted && (
                           <div className="backdrop-blur-lg absolute bottom-0 mb-1 rounded-full h-2 w-2 bg-neutral-50/70"></div>
                        )}
                     </button>
                  </li>

                  <li>
                     <button
                        className=" flex flex-col items-center gap-0.5"
                        onClick={() =>
                           startedSystem('discord', true, true, false)
                        }
                     >
                        <Image src={Discord} alt="" width={80} height={80} />
                        {apps?.discord?.isStarted && (
                           <div className="backdrop-blur-lg absolute bottom-0 mb-1 rounded-full h-2 w-2 bg-neutral-50/70"></div>
                        )}
                     </button>
                  </li>

                  <li>
                     <button
                        className=" flex flex-col items-center gap-0.5"
                        onClick={() =>
                           startedSystem('fileExplorer', true, true, false)
                        }
                     >
                        <Image
                           className="rounded-lg"
                           src={FileExplorer}
                           alt=""
                           width={80}
                           height={80}
                        />
                        {apps?.fileExplorer?.isStarted && (
                           <div className="backdrop-blur-lg absolute bottom-0 mb-1 rounded-full h-2 w-2 bg-neutral-50/70"></div>
                        )}
                     </button>
                  </li>
               </ul>
            </nav>
         </footer>
      </div>
   );
}
