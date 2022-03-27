import '../styles/globals.css'
import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'

const components = {
  // h2: ({ children }: any) => <h2 style={{ color: 'red' }}>{children}</h2>,
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
