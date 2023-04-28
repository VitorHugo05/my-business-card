import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useContext } from 'react';
import { ToggleDarkModeContext } from '@/context/ToggleDarkContext';

export default function WorkSpace() {
   const { ToggleDarkLightMode, darkMode } = useContext(ToggleDarkModeContext);
   // console.log(darkMode);
   let light = 'LightMode';
   let dark = 'DarkMode';

   return (
      <div className="items-center flex flex-col absolute top-0 left-0 translate-x-14 translate-y-24">
         <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={darkMode}
            onChange={() =>
               ToggleDarkLightMode(darkMode == true ? false : true)
            }
            size={60}
         />
         <div
            className={`${
               darkMode ? 'text-white' : 'text-black'
            } text-sm -translate-y-6 flex flex-col items-center justify-center`}
         >
            <p>Toggle</p>
            <p>{darkMode ? dark : light}</p>
         </div>
      </div>
   );
}
