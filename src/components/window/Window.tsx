import { WindowContext, systemTypeProps } from '@/context/WindowedContext';
import { useContext } from 'react';
import Draggable from 'react-draggable';

import MaximazeBrave from '../brave/MaximazeBrave';
import MinimizeBrave from '../brave/MinimizeBrave';
import MaximazeVscode from '../vscode/MaximazeVsCode';
import MinimizeVscode from '../vscode/MinimizeVsCode';
import MaximazeDiscord from '../discord/MaximazeDiscord';
import MinimizeDiscord from '../discord/MinimizeDiscord';
import MaximazeExplorer from '../explorer/MaximazeExplorer';
import MinimizeExplorer from '../explorer/MinimizeExplorer';
import MaximazeTerminal from '../terminal/MaximazeTerminal';
import MinimizeTerminal from '../terminal/MinimizeTerminal';




export default function Window() {
   const {apps, maximizedSystem, startedSystem, minimizeSystem} = useContext(WindowContext)

   function renderSystem(system: systemTypeProps) {
      switch (system) {
         case 'brave':
            return({ 
                     Maximazecontent: (<MaximazeBrave />), 
                     Minimizecontent: (<MinimizeBrave />), 
                     title: 'Brave', 
                     backgroundColor: 'bg-[#8F8CA8]', 
                     navBackgroundColor: 'bg-[#232135]' 
                  })
         case 'vsCode':
            return({ 
                     Maximazecontent: (<MaximazeVscode />), 
                     Minimizecontent: (<MinimizeVscode />), 
                     title: 'VSCode', 
                     backgroundColor: 'bg-[#8F8CA8]', 
                     navBackgroundColor: 'bg-[#232135]'
                  })
         case 'discord':
            return({ 
                     Maximazecontent: (<MaximazeDiscord />), 
                     Minimizecontent: (<MinimizeDiscord />), 
                     title: 'Discord', 
                     backgroundColor: 'bg-[#8F8CA8]', 
                     navBackgroundColor: 'bg-[#232135]'
                  })
         case 'fileExplorer':
            return({ 
                     Maximazecontent: (<MaximazeExplorer />), 
                     Minimizecontent: (<MinimizeExplorer />), 
                     title: 'File Explorer', 
                     backgroundColor: 'bg-[#8F8CA8]', 
                     navBackgroundColor: 'bg-[#232135]'
                  })
         case 'terminal':
            return({ 
                     Maximazecontent: (<MaximazeTerminal />), 
                     Minimizecontent: (<MinimizeTerminal />), 
                     title: 'Terminal', 
                     backgroundColor: 'bg-[#8F8CA8]', 
                     navBackgroundColor: 'bg-[#232135]'
                  })
   }}

   
   return (
      <>
         {
            Object.keys(apps).map((key: any, index) => {
               
               return (

                     <Draggable
                        key={index} 
                        defaultPosition={{x: 0, y: 0}}
                        disabled={apps[key as systemTypeProps].isMaximized ? false : true}
                        position={apps[key as systemTypeProps].isMaximized ? undefined : {x: 0, y:36}}
                     >  
                     
                        <div className={`
                           ${apps[key as systemTypeProps].isOpen ? 'opacity-100' : 'opacity-0'}
                           ${apps[key as systemTypeProps].isMinimize ? 'hidden   ' : 'block'} 
                           ${apps[key as systemTypeProps].isMaximized ? 'w-3/4 h-3/4': 'w-full h-full'} 
                           z-1 absolute 
                           transition-opacity duration-300 ease-in-out 
                        `}>
                           
                           <nav className={` 
                              ${apps[key as systemTypeProps ].isMaximized ? 'rounded-t-lg' : 'rounded-none'}
                              flex flex-row items-center justify-between h-12 
                              ${apps[key as systemTypeProps].isOpen &&
                                 renderSystem(key).navBackgroundColor
                              }
                           `}>
                              
                              
                              <div className="flex items-center gap-2 pb-6 ml-5 mt-5">
                                 <button  onClick={() => minimizeSystem(key, true)} className="w-4 h-4 bg-[#F4BF4F] rounded-full" />
                                 <button  onClick={() => maximizedSystem(key, !apps[key as systemTypeProps].isMaximized)} className="w-4 h-4 bg-[#61C554] rounded-full" />
                                 <button  onClick={() => startedSystem(key, false, false, true)} className="w-4 h-4 bg-[#ED6A5E] rounded-full" />
                              </div>
                              
                              <h1>
                              {apps[key as systemTypeProps].isOpen &&
                                 renderSystem(key).title
                              }
                              </h1>

                              <div> 
                                 &nbsp;
                              </div>

                           </nav>

                           <div className='w-full h-px bg-slate-400'/>
                           
                           <div className={`
                              ${apps[key as systemTypeProps ].isMaximized ? 'rounded-b-lg' : 'rounded-none'} 
                              w-full h-full 
                              ${apps[key as systemTypeProps].isOpen &&
                                 renderSystem(key).backgroundColor
                              }
                           `}>
                              {apps[key as systemTypeProps].isOpen && apps[key as systemTypeProps].isMaximized ? 
                              renderSystem(key).Minimizecontent : 
                              renderSystem(key).Maximazecontent}
                           </div>
                           
                        </div>
                     
                     </Draggable>
                           
               )
            })
         }
      </>
   )
}