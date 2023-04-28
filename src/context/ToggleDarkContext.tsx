import { createContext, useState } from 'react';

interface ToggleProviderProps {
   children: React.ReactNode;
}

interface ToggleDarkModeProps {
   darkMode: boolean;
   ToggleDarkLightMode: (checked: boolean) => void;
}

export const ToggleDarkModeContext = createContext({} as ToggleDarkModeProps);

export const ToggleProvider = ({ children }: ToggleProviderProps) => {
   const [darkMode, setDarkMode] = useState(true);
   console.log(darkMode);

   function ToggleDarkLightMode(checked: boolean) {
      setDarkMode(checked);
   }

   return (
      <ToggleDarkModeContext.Provider value={{ darkMode, ToggleDarkLightMode }}>
         {children}
      </ToggleDarkModeContext.Provider>
   );
};
