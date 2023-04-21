import {  createContext, useState } from 'react';


interface WindowProviderProps {
   children: React.ReactNode
}

interface testProps {
   isOpen: boolean,
   isStarted: boolean,
   isMaximazed: boolean
}

interface appsProps {
   brave: testProps,
   vsCode: testProps,
   terminal: testProps,
   discord: testProps,
   fileExplorer: testProps
}

export type systemTypeProps = 'brave' | 'vsCode' | 'terminal' | 'discord' | 'fileExplorer'

interface WindowContextProps {
   windowed: (system: systemTypeProps, isOpen: boolean, isStarted: boolean) => void;
   apps: appsProps
   setApps: React.Dispatch<React.SetStateAction<appsProps>>;
}



export const WindowContext = createContext({} as WindowContextProps)

export const WindowProvider = ({children}: WindowProviderProps) => {
   const [apps, setApps] = useState<appsProps>({} as appsProps)

   function windowed(system: systemTypeProps, isOpen: boolean, isStarted: boolean){
      setApps({...apps, [system]: {...apps[system], isOpen, isStarted}})
   }

   return (
      <WindowContext.Provider value={{
         windowed,
         apps,
         setApps
      }} >
         {children}
      </WindowContext.Provider>
   )
}