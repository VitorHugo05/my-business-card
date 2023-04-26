import { BrowserView, MobileView } from 'react-device-detect';

import Dock from '@/components/Dock';
import MenuBar from '@/components/MenuBar';
import Window from '@/components/window/Window';

export default function Home() {
   return (
      <>
         <BrowserView>
            <section className="flex flex-col justify-center items-center w-screen h-screen">
               <MenuBar />
               <Dock />
               <Window />
            </section>
         </BrowserView>
         <MobileView>
            <div className="w-screen h-screen bg-white flex items-center">
               <h1 className="text-xl text-center">
                  Esta aplicação ainda não pode ser acessada por um celular
               </h1>
            </div>
         </MobileView>
      </>
   );
}
