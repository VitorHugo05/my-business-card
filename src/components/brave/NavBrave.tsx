import Image from 'next/image';
import BackArrow from '../../../public/icons/arrow-direction-left-svgrepo-com.svg';
import ForwardArrow from '../../../public/icons/arrow-direction-pointer-8-svgrepo-com.svg';
import Rotate from '../../../public/icons/rotate-cw.svg';
import Bookmark from '../../../public/icons/bookmark-svgrepo-com.svg';
import List from '../../../public/icons/list-svgrepo-com.svg';
import Perfil from '../../../public/icons/person-account-circle-svgrepo-com.svg';
import Lock from '../../../public/icons/lock-svgrepo-com.svg';
import Brave from '../../../public/icons/brave-svgrepo-com.svg';
import Triangle from '../../../public/icons/triangle-svgrepo-com.svg';

export default function NavBrave() {
   return (
      <nav className="w-full absolute top-11">
         <div className="bg-white w-full h-12 flex justify-between items-center">
            <div className="ml-4 flex flex-row gap-2">
               <div className="w-8 h-8 flex justify-center rounded-sm duration-300 hover:bg-slate-400/30">
                  <Image
                     src={BackArrow}
                     alt=""
                     width={22}
                     height={22}
                     className="hover:cursor-pointer"
                  />
               </div>
               <div className="w-8 h-8 flex justify-center rounded-sm duration-300 hover:bg-slate-400/30">
                  <Image
                     src={ForwardArrow}
                     alt=""
                     width={22}
                     height={22}
                     className="hover:cursor-pointer "
                  />
               </div>
               <div className="w-8 h-8 flex justify-center rounded-sm duration-300 hover:bg-slate-400/30">
                  <Image
                     src={Rotate}
                     alt=""
                     width={22}
                     height={22}
                     className="hover:cursor-pointer "
                  />
               </div>
            </div>
            <div className="w-9/12 flex flex-row gap-3">
               <div className="w-8 h-8 flex justify-center rounded-sm duration-300 hover:bg-slate-400/30">
                  <Image
                     src={Bookmark}
                     alt=""
                     width={34}
                     height={34}
                     className="hover:cursor-pointer "
                  />
               </div>
               <div className="w-full flex items-center">
                  <Image
                     className="absolute hover:cursor-pointer"
                     src={Lock}
                     alt=""
                     width={32}
                     height={32}
                  />
                  <input
                     type="text"
                     className=" px-8 h-8 w-full bg-slate-400/50 duration-300 rounded-sm hover:bg-slate-500/50"
                     value="localhost:3000"
                  />
                  <Image
                     src={Brave}
                     alt=""
                     width={22}
                     height={22}
                     className="mr-4 -translate-x-20 hover:cursor-pointer"
                  />
                  <Image
                     src={Triangle}
                     alt=""
                     width={24}
                     height={24}
                     className="-translate-x-20 hover:cursor-pointer"
                  />
               </div>
            </div>
            <div className="flex flex-row">
               <div className="mr-4 w-8 h-8 flex justify-center rounded-sm duration-300 hover:bg-slate-400/30">
                  <Image
                     src={Perfil}
                     alt=""
                     width={26}
                     height={26}
                     className="hover:cursor-pointer "
                  />
               </div>
               <div className="mr-4 flex justify-center rounded-sm duration-300 hover:bg-slate-400/30">
                  <Image
                     src={List}
                     alt=""
                     width={32}
                     height={32}
                     className="hover:cursor-pointer "
                  />
               </div>
            </div>
         </div>
      </nav>
   );
}
