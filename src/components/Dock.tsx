import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import TerminalApple from '../../public/icons/terminal-apple.png'
import Vscode from '../../public/icons/vscode.png'
import Brave from '../../public/icons/brave.png'
import Home from '../../public/icons/home.png'


export default function Dock() {
  return (
   <>
      <nav className=' bg-black/40 h-28 w-1/4 rounded-[21px] inset-x-0 bottom-1 -translate-y-3'>
        <ul className='flex justify-around m-2 mt-4'>
          <li>
            <Link href='/terminal'>
              <Image src={TerminalApple} alt='' width={80} height={80}/>
            </Link>
          </li>
          <li>
            <Link href='/vscode'>
              <Image src={Vscode} alt='' width={80} height={80}/>
            </Link>
          </li>
          <li>
            <Link href='/brave'>
              <Image src={Brave} alt='' width={70} height={70}/>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <Image src={Home} alt='' width={60} height={60}/>
            </Link>
          </li>
        </ul>
      </nav>
   </>
  )   
}