import Image from 'next/image'
import AppleIcon from '../../public/icons/apple.svg'
import { Wifi, Search, BatteryCharging } from 'lucide-react'

import { useEffect, useState } from 'react'

const monthArray = [
   'Jan',
   'Feb',
   'Mar',
   'Abr',
   'Mai',
   'Jun',
   'Jul',
   'Ago',
   'Set',
   'Out',
   'Nov',
   'Dez'
]
const weekDayArray = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']

type ContextHeader = {
   hours: number
   min: number
   date: number
   month: string
   week: string
   AmPm: string
}

export default function MenuBar() {
   const dateToday = new Date()

   const [context, setContext] = useState<ContextHeader>({
      hours: dateToday.getHours(),
      min: dateToday.getMinutes(),
      date: dateToday.getDate(),
      month: monthArray[dateToday.getMonth()],
      week: weekDayArray[dateToday.getDay()],
      AmPm: 0 < dateToday.getHours() && dateToday.getHours() < 12 ? 'AM' : 'PM'
   })

   useEffect(() => {
      const actualDate = setInterval(() => {
         setContext({
            hours: dateToday.getHours(),
            min: dateToday.getMinutes(),
            date: dateToday.getDate(),
            month: monthArray[dateToday.getMonth()],
            week: weekDayArray[dateToday.getDay()],
            AmPm:
               0 < dateToday.getHours() && dateToday.getHours() < 12
                  ? 'AM'
                  : 'PM'
         })
      }, 1000)
      return () => clearInterval(actualDate)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <nav className="z-50 backdrop-blur-lg bg-neutral-300/30 absolute top-0 h-[36px] w-full flex items-center justify-between">
         <div className="ml-5 flex flex-row gap-5 text-sm text-white">
            <Image
               className="hover:cursor-pointer"
               src={AppleIcon}
               alt=""
               width={20}
               height={20}
            />
            <strong className="hover:cursor-pointer">Finder</strong>
            <p className="hover:cursor-pointer">File</p>
            <p className="hover:cursor-pointer">Edit</p>
            <p className="hover:cursor-pointer">View</p>
            <p className="hover:cursor-pointer">Go</p>
            <p className="hover:cursor-pointer">Window</p>
            <p className="hover:cursor-pointer">Help</p>
         </div>
         <div className="mr-5 flex flex-row items-center">
            <div className="flex flex-row gap-5 mr-8">
               <BatteryCharging className="hover:cursor-pointer" />
               <Wifi className="hover:cursor-pointer" />
               <Search className="hover:cursor-pointer" />
            </div>

            <div className="flex flex-row gap-5">
               <p>
                  {context.week} {context.month} {context.date}{' '}
               </p>
               <p>
                  {context.hours}:{context.min.toFixed()} {context.AmPm}{' '}
               </p>
            </div>
         </div>
      </nav>
   )
}
