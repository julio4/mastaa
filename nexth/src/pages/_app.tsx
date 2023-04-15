import type { AppProps } from 'next/app'
import { Web3Provider } from '@/providers/Web3'
import { ChakraProvider } from '@/providers/Chakra'
import { useIsMounted } from '@/hooks/useIsMounted'
import { Seo } from '@/components/layout/Seo'

export default function App({ Component, pageProps }: AppProps) {
  const isMounted = useIsMounted()

  return (
    <ChakraProvider>
      <Seo />
      <Web3Provider>{isMounted && <Component {...pageProps} />}</Web3Provider>
    </ChakraProvider>
  )
}
