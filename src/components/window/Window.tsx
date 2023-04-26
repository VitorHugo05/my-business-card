import { WindowContext, systemTypeProps } from '@/context/WindowedContext';
import { useContext, useEffect, useState } from 'react';
import Draggable from 'react-draggable';

import { MaximazeBrave, MinimizeBrave } from '../brave/brave';
import { MaximazeVscode, MinimizeVscode } from '../vscode/vscode';
import Discord from '../discord/Discord';
import { MaximazeExplorer, MinimizeExplorer } from '../explorer/explorer';
import { MaximazeTerminal, MinimizeTerminal } from '../terminal/terminal';

export default function Window() {
   const { apps, maximizedSystem, startedSystem, minimizeSystem } =
      useContext(WindowContext);

   function renderSystem(system: systemTypeProps) {
      switch (system) {
         case 'brave':
            return {
               Maximazecontent: <MaximazeBrave />,
               Minimizecontent: <MinimizeBrave />,
               title: 'Brave',
               titleColor: 'text-[#fff]',
               navBackgroundColor: 'bg-[#232323]',
               backgroundColor: 'bg-[#8F8CA8]'
            };
         case 'vsCode':
            return {
               Maximazecontent: <MaximazeVscode />,
               Minimizecontent: <MinimizeVscode />,
               title: 'VSCode',
               titleColor: 'text-[#fff]',
               navBackgroundColor: 'bg-[#232135]',
               backgroundColor: 'bg-[#8F8CA8]'
            };
         case 'discord':
            return {
               Maximazecontent: <Discord />,
               Minimizecontent: <Discord />,
               title: 'Discord',
               titleColor: 'text-[#fff]',
               navBackgroundColor: 'bg-[#232135]',
               backgroundColor: 'bg-[#5865f2]'
            };
         case 'fileExplorer':
            return {
               Maximazecontent: <MaximazeExplorer />,
               Minimizecontent: <MinimizeExplorer />,
               title: 'File Explorer',
               titleColor: 'text-[#fff]',
               navBackgroundColor: 'bg-[#232135]',
               backgroundColor: 'bg-[#8F8CA8]'
            };
         case 'terminal':
            return {
               Maximazecontent: <MaximazeTerminal />,
               Minimizecontent: <MinimizeTerminal />,
               title: 'Terminal',
               titleColor: 'text-[#fff]',
               navBackgroundColor: 'bg-[#232135]',
               backgroundColor: 'bg-[#8F8CA8]'
            };
      }
   }

   return (
      <>
         {Object.keys(apps).map((key: any, index) => {
            return (
               <Draggable
                  key={index}
                  defaultPosition={{ x: 0, y: 0 }}
                  disabled={
                     apps[key as systemTypeProps].isMaximized ? false : true
                  }
                  position={
                     apps[key as systemTypeProps].isMaximized
                        ? undefined
                        : { x: 0, y: 36 }
                  }
               >
                  <div
                     className={`
                      ${
                         apps[key as systemTypeProps].isMinimize
                            ? 'hidden'
                            : 'visible'
                      }
                     
                     ${
                        apps[key as systemTypeProps].isMaximized
                           ? 'w-3/4 h-3/4'
                           : 'w-full h-full'
                     }
                     z-1 absolute 
                     transition-opacity duration-300 ease-in-out 
                     
                        `}
                  >
                     <nav
                        className={` 
                              ${
                                 apps[key as systemTypeProps].isMaximized
                                    ? 'rounded-t-lg'
                                    : 'rounded-none'
                              }
                              flex flex-row items-center justify-between h-12 
                              ${
                                 apps[key as systemTypeProps].isOpen &&
                                 renderSystem(key).navBackgroundColor
                              }
                           `}
                     >
                        <div className="flex items-center gap-2 pb-6 ml-5 mt-5">
                           <button
                              onClick={() => minimizeSystem(key, true)}
                              className="w-4 h-4 bg-[#F4BF4F] rounded-full"
                           />
                           <button
                              onClick={() =>
                                 maximizedSystem(
                                    key,
                                    !apps[key as systemTypeProps].isMaximized
                                 )
                              }
                              className="w-4 h-4 bg-[#61C554] rounded-full"
                           />
                           <button
                              onClick={() =>
                                 startedSystem(key, false, false, true)
                              }
                              className="w-4 h-4 bg-[#ED6A5E] rounded-full"
                           />
                        </div>

                        <h1
                           className={`${
                              apps[key as systemTypeProps].isOpen &&
                              renderSystem(key).titleColor
                           }`}
                        >
                           {apps[key as systemTypeProps].isOpen &&
                              renderSystem(key).title}
                        </h1>

                        <div className="w-20 h-full">&nbsp;</div>
                     </nav>

                     <div
                        className={`
                              ${
                                 apps[key as systemTypeProps].isMaximized
                                    ? 'rounded-b-lg'
                                    : 'rounded-none'
                              } 
                              w-full    h-full 
                              ${
                                 apps[key as systemTypeProps].isOpen &&
                                 renderSystem(key).backgroundColor
                              }
                              flex items-center justify-center
                           `}
                     >
                        {apps[key as systemTypeProps].isOpen &&
                        apps[key as systemTypeProps].isMaximized
                           ? renderSystem(key).Minimizecontent
                           : renderSystem(key).Maximazecontent}
                     </div>
                  </div>
               </Draggable>
            );
         })}
      </>
   );
}
