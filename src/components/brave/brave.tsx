import NavBrave from './NavBrave';
import { useContext } from 'react';
import { ToggleDarkModeContext } from '@/context/ToggleDarkContext';
import Wave from 'react-wavify';

export function MaximazeBrave() {
   const { darkMode } = useContext(ToggleDarkModeContext);

   return (
      <>
         <NavBrave />
         <main
            className={`flex flex-row w-full h-full bg-cover bg-[url('/image/macos-big-sur.jpg')]`}
            style={{ opacity: 1 }}
         >
            <div
               className={`${
                  darkMode ? 'bg-neutral-300' : 'bg-slate-800'
               } w-3/5 h-full `}
            ></div>
         </main>
      </>
   );
}

export function MinimizeBrave() {
   const { darkMode } = useContext(ToggleDarkModeContext);
   return (
      <>
         <NavBrave />
         <main
            className={`flex w-full h-full bg-cover bg-[url('/image/macos-big-sur.jpg')] rounded-b-md`}
         >
            <div
               className={`${
                  darkMode ? 'bg-neutral-300' : 'bg-slate-800'
               } w-3/5 h-full `}
            ></div>
         </main>
      </>
   );
}
