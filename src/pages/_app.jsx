import '@/styles/globals.css'
import {Alkalami}  from "next/font/google"
const alkami=Alkalami(
  {
    weight:["400"],
    subsets:["latin"],
    variable:"--font-alkami"
  }
)
export default function App({ Component, pageProps }) {
  return <main className={`${alkami.variable}  `}>
    <Component {...pageProps} />
  </main>
}
