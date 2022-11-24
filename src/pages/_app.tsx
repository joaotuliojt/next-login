import type { AppProps } from 'next/app'
import { globalStyles } from '../../stitches.config'
import {SessionProvider} from 'next-auth/react'

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  globalStyles();
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
