import Image from 'next/image';

import TerminalApple from '../../public/icons/terminal-apple.png'
import Vscode from '../../public/icons/vscode.png'
import Brave from '../../public/icons/brave.png'
import Discord from '../../public/icons/discord.png'
import FileExplorer from '../../public/icons/file.jpg'



export default function Dock() {
  return (
   <footer className='z-50 fixed bottom-0 w-full flex items-center justify-center'>
      <nav className='shadow-2xl bg-gradient-to-b from-white/40 to-white/60 h-24 w-1/3 rounded-[21px] inset-x-0 bottom-1 -translate-y-3'>
        <ul className='flex justify-around m-1.5 mt-2.5'>
          <li>
            <button>
              <Image src={Brave} alt='' width={65} height={65}/>
            </button>
          </li>
          
          <li>
            <button>
              <Image src={Vscode} alt='' width={75} height={75}/>
            </button>
          </li>

          <li>
            <button>
              <Image src={TerminalApple} alt='' width={75} height={75}/>
            </button>
          </li>


          
          <li>
            <button>
              <Image src={Discord} alt='' width={75} height={75}/>
            </button>
          </li>

          <li>
            <button>
              <Image className='rounded-lg' src={FileExplorer} alt='' width={70} height={70}/>
            </button>
          </li>
        </ul>
      </nav>
   </footer>
  )   
}