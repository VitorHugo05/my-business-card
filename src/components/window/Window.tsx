import { WindowContext, systemTypeProps } from '@/context/WindowedContext';
import { useContext } from 'react';
import Draggable from 'react-draggable';
import Vscode from '../vscode/Vscode';
import Brave from '../brave/Brave';
import Discord from '../discord/Discord';
import FileExplorer from '../explorer/FileExplore';
import Terminal from '../terminal/Terminal';


export default function Window() {
   const {apps, windowed} = useContext(WindowContext)

   function renderSystem(system: systemTypeProps) {
      switch (system) {
         case 'brave':
            return({ content: (<Brave />), title: 'Brave', BackgroundColor: '#8F8CA8'})
         case 'vsCode':
            return({ content: (<Vscode />), title: 'VSCode', BackgroundColor: '#8F8CA8'})
         case 'discord':
            return({ content: (<Discord />), title: 'Discord', BackgroundColor: '#8F8CA8'})
         case 'fileExplorer':
            return({ content: (<FileExplorer />), title: 'File Explorer', BackgroundColor: '#8F8CA8'})
         case 'terminal':
            return({ content: (<Terminal />), title: 'Terminal', BackgroundColor: '#8F8CA8'})
   }}

   return (
      <>
         {
            Object.keys(apps).map((key: any, index) => {
               console.log(key)
               if (apps[key as systemTypeProps ].isOpen)
               return (
                  <Draggable 
                     key={index} 
                     defaultPosition={{x: 0, y: 0}}
                  >

                     <div className=' z-1 absolute w-4/5 h-3/4 rounded-lg'>
                        
                        <nav className='h-12 rounded-t-md flex flex-row items-center justify-between bg-[#8F8CA8]'>
                           
                           
                           <div className="flex items-center gap-2 pb-6 ml-5 mt-5">
                           
                              <button onClick={() => windowed(key as systemTypeProps, false, true)} className="w-4 h-4 bg-[#F4BF4F] rounded-full" />
                              <button className="w-4 h-4 bg-[#61C554] rounded-full" />
                              <button onClick={() => windowed(key as systemTypeProps, false, false)} className="w-4 h-4 bg-[#ED6A5E] rounded-full" />
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
                        
                        <div className={`rounded-b-md w-full h-full bg-[${apps[key as systemTypeProps].isOpen && renderSystem(key).BackgroundColor}]`}>
                           {apps[key as systemTypeProps].isOpen && renderSystem(key).content}
                        </div>
                        
                     </div>
                  </Draggable>
               )
            })
         }
      </>
   )
}