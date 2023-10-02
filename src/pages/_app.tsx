import { AnimatePresence } from "framer-motion"
import "../../styles/sass/globals.scss"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
