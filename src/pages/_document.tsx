import Dock from '@/components/Dock'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
   return (
      <Html lang="en">
         <Head>
            <title>
               Vitor Dev
            </title>
         </Head>
         <body>
            <Main />
            <NextScript />
            <footer className="fixed bottom-0 w-full flex items-center justify-center">
               <Dock/>  
            </footer>
         </body>
      </Html>
   )
}
