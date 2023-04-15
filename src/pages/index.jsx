import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landing from '@/components/Landing';
import Footer from '@/components/Footer';
import Landing2 from '@/components/Landing2';
import Landing3 from '@/components/Landing3';
import Landing4 from '@/components/Landing4';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <section className=''>
       <Landing/>
       
      
       <Landing2/>
       <Landing3/>
       <Landing4 /> 
       <Footer/>
      </section>

    </>
  )
}

