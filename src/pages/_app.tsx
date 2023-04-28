import { ToggleProvider } from '@/context/ToggleDarkContext';
import { WindowProvider } from '@/context/WindowedContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <ToggleProvider>
         <WindowProvider>
            <Component {...pageProps} />
         </WindowProvider>
      </ToggleProvider>
   );
}
