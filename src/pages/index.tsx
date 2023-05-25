import { BrowserView, MobileView } from 'react-device-detect';

import Dock from '@/components/Dock';
import MenuBar from '@/components/MenuBar';
import Window from '@/components/window/Window';
import WorkSpace from '@/components/WorkSpace';
import { ToggleDarkModeContext } from '@/context/ToggleDarkContext';
import { useContext } from 'react';

export default function Home() {
   const { darkMode } = useContext(ToggleDarkModeContext);
   return (
      <>
         <BrowserView
            className={` bg-cover trasition duration-300 ease-in-out ${darkMode ? '' : 'dark'
               } ${darkMode
                  ? 'bg-[url("/image/macos-monterey.jpg")]'
                  : 'bg-[url("/image/macos-monterey-dark.jpg")]'
               }`}
         >
            <section className="flex flex-col justify-center items-center w-screen h-screen">
               <MenuBar />
               <WorkSpace />
               <Dock />
               <Window />
            </section>
         </BrowserView>
         <MobileView>
            <div className="w-screen h-screen bg-white flex items-center">
               <h1 className="text-xl text-center">
                  Esta aplicação ainda não pode ser acessada por um celular
               </h1>
            </div>
         </MobileView>
      </>
   );
}
