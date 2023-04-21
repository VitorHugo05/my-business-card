import { useState } from 'react';
import Draggable from 'react-draggable';

export default function Window() {
   const [isActive, setActive] = useState(true);

   return (
      <>
      { isActive &&
         <Draggable defaultPosition={{x: 0, y: 0}}>
            
               <div className='z-1 relative w-3/5 h-2/3 rounded-lg bg-[#232135]'>
                  <nav className='flex flex-row items-center justify-between'>
                     
                     <div> 
                        &nbsp;
                     </div>
                     
                        <div className="flex items-center gap-2 pb-6 mr-5 mt-5">
                     
                        <button onClick={() => setActive(!isActive)} className="w-4 h-4 bg-[#F4BF4F] rounded-full" />
                        <button className="w-4 h-4 bg-[#61C554] rounded-full" />
                        <button className="w-4 h-4 bg-[#ED6A5E] rounded-full" />
                     </div>

                  </nav>
                  <div className='w-full h-px bg-slate-400'/>
                  <div>

                  </div>
               </div>
            
         </Draggable>
}
      </>
   )
}