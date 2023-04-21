import Dock from '@/components/Dock';
import MenuBar from '@/components/MenuBar';
import Window from '@/components/window/Window';

export default function Home() {
   return (
      <section className='flex flex-col justify-center items-center w-screen h-screen'> 
         
         <MenuBar />
         <Dock />
         <Window />
   
      </section>
   )
}