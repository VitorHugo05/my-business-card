import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useState } from 'react';

export default function WorkSpace() {
   const [isDarkMode, setDarkMode] = useState(false);

   const toggleDarkMode = (checked: boolean) => {
      setDarkMode(checked);
   };

   return (
      <div className="items-center flex flex-col absolute top-0 left-0 translate-x-14 translate-y-24">
         <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={60}
         />
         <div
            className={`${
               isDarkMode ? 'text-white' : 'text-black'
            } text-sm -translate-y-6 flex flex-col items-center justify-center`}
         >
            <p>Toggle</p>
            <p>DarkMode</p>
         </div>
      </div>
   );
}
