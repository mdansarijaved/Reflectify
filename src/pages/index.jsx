import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Landing from '@/components/Landing';
import Footer from '@/components/Footer';
import Landing2 from '@/components/Landing2';
import Landing3 from '@/components/Landing3';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <section className='relative'>
        <Image src={"/images/hereo.jpg"} className='absolute w-screen h-screen  top-0 left-0 object-cover -z-10' width={1920} height={1080} />
       <Header/>
       <Landing/>
       <Landing2/>
       <Landing3/>
       <Footer/>
      </section>

    </>
  )
}

