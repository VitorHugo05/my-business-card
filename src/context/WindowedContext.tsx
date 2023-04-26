import { createContext, useState } from 'react';

interface WindowProviderProps {
   children: React.ReactNode;
}

interface testProps {
   isStarted: boolean;
   isOpen: boolean;
   isMinimize: boolean;
   isMaximized: boolean;
}

interface appsProps {
   brave: testProps;
   vsCode: testProps;
   terminal: testProps;
   discord: testProps;
   fileExplorer: testProps;
}

export type systemTypeProps =
   | 'brave'
   | 'vsCode'
   | 'terminal'
   | 'discord'
   | 'fileExplorer';

interface WindowContextProps {
   startedSystem: (
      system: systemTypeProps,
      isStarted: boolean,
      isOpen: boolean,
      isMinimize: boolean
   ) => void;
   startedApplication: (
      system: systemTypeProps,
      isStarted: boolean,
      isOpen: boolean,
      isMaximized: boolean
   ) => void;
   maximizedSystem: (system: systemTypeProps, isMaximized: boolean) => void;
   minimizeSystem: (system: systemTypeProps, isMinimize: boolean) => void;

   apps: appsProps;
   setApps: React.Dispatch<React.SetStateAction<appsProps>>;
}

export const WindowContext = createContext({} as WindowContextProps);

export const WindowProvider = ({ children }: WindowProviderProps) => {
   const [apps, setApps] = useState({} as appsProps);

   function startedSystem(
      system: systemTypeProps,
      isStarted: boolean,
      isOpen: boolean,
      isMinimize: boolean
   ) {
      setApps({
         ...apps,
         [system]: {
            ...apps[system],
            isStarted,
            isOpen,
            isMinimize
         }
      });
   }

   function startedApplication(
      system: systemTypeProps,
      isStarted: boolean,
      isOpen: boolean,
      isMaximized: boolean
   ) {
      setApps({
         ...apps,
         [system]: { ...apps[system], isStarted, isOpen, isMaximized }
      });
   }

   function maximizedSystem(system: systemTypeProps, isMaximized: boolean) {
      setApps({ ...apps, [system]: { ...apps[system], isMaximized } });
   }

   function minimizeSystem(system: systemTypeProps, isMinimize: boolean) {
      setApps({ ...apps, [system]: { ...apps[system], isMinimize } });
   }

   return (
      <WindowContext.Provider
         value={{
            startedSystem,
            maximizedSystem,
            minimizeSystem,
            apps,
            startedApplication,
            setApps
         }}
      >
         {children}
      </WindowContext.Provider>
   );
};
