import type { AppProps } from 'next/app'
// import { Web3Provider } from '@/providers/Web3'
import { ChakraProvider } from '@/providers/Chakra'
// import { useIsMounted } from '@/hooks/useIsMounted'
import { Seo } from '@/components/layout/Seo'
import { Provider } from 'react-redux'
import store from '@/store/store'

export default function App({ Component, pageProps }: AppProps) {
  // const isMounted = useIsMounted()

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Seo />
        {/* <Web3Provider>{isMounted && <Component {...pageProps} />}</Web3Provider> */}
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}
