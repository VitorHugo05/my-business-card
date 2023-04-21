import Image from 'next/image';

import TerminalApple from '../../public/icons/terminal-apple.png'
import Vscode from '../../public/icons/vscode.png'
import Brave from '../../public/icons/brave.png'
import Discord from '../../public/icons/discord.png'
import FileExplorer from '../../public/icons/fileExplorer.png'
import { useContext } from 'react';
import { WindowContext } from '@/context/WindowedContext';




export default function Dock() {
   const {apps, windowed} = useContext(WindowContext)
   
  
   return (
   <footer className='z-50 fixed bottom-0 w-full flex items-center justify-center'>
      <nav className='p-4 border border-neutral-300 backdrop-blur-lg shadow-2xl bg-neutral-200/50 h-26 w-fit rounded-3xl inset-x-0 bottom-1 -translate-y-3'>
        <ul className='flex gap-4 items-center'>
          <li className='flex flex-col gap-1 items-center'>
            
            <button className='flex flex-col items-center gap-0.5' onClick={() => windowed('brave', true, true)}>
              <Image src={Brave} alt='' width={80} height={80}/>
               {apps?.brave?.isStarted && 
                  <div className='backdrop-blur-lg absolute bottom-0 mb-1 rounded-full h-2 w-2 bg-neutral-50/70'></div>
               }
            </button>
          </li>
          
          <li className='flex flex-col gap-1 items-center'>
            <button className='flex flex-col items-center gap-0.5' onClick={() => windowed('vsCode', true, true)}>
              <Image src={Vscode} alt='' width={80} height={80}/>
              {apps?.vsCode?.isStarted && 
                  <div className='backdrop-blur-lg absolute bottom-0 mb-1 rounded-full h-2 w-2 bg-neutral-50/70'></div>
               }
            </button>
          </li>

          <li className='flex flex-col gap-1 items-center'>
            <button className='flex flex-col items-center gap-0.5' onClick={() => windowed('terminal', true, true)}>
              <Image src={TerminalApple} alt='' width={75} height={75}/>
              {apps?.terminal?.isStarted && 
                  <div className='backdrop-blur-lg absolute bottom-0 mb-1 rounded-full h-2 w-2 bg-neutral-50/70'></div>
               }
            </button>
          </li>

          <li className='flex flex-col gap-1 items-center'>
            <button className='flex flex-col items-center gap-0.5' onClick={() => windowed('discord', true, true)}>
              <Image src={Discord} alt='' width={80} height={80}/>
              {apps?.discord?.isStarted && 
                  <div className='backdrop-blur-lg absolute bottom-0 mb-1 rounded-full h-2 w-2 bg-neutral-50/70'></div>
               }
            </button>
          </li>

          <li className='flex flex-col gap-1 items-center'>
            <button className='flex flex-col items-center gap-0.5' onClick={() => windowed('fileExplorer', true, true)}>
              <Image className='rounded-lg' src={FileExplorer} alt='' width={80} height={80}/>
              {apps?.fileExplorer?.isStarted && 
                  <div className='backdrop-blur-lg absolute bottom-0 mb-1 rounded-full h-2 w-2 bg-neutral-50/70'></div>
               }
            </button>
          </li>
        </ul>
      </nav>
   </footer>
  )   
}