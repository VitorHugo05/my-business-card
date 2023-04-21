import { WindowProvider } from '@/context/WindowedContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
   return (
      <WindowProvider>
         
            <Component {...pageProps} />
         
      </WindowProvider>
   )
}
