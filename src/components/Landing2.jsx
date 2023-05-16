import Image from 'next/image'
import Link from 'next/link'

export default function Landing2() {
    return (
        <>
            <div className="bg-black  flex flex-wrap justify-evenly py-36 items-center  ">
                <div className='text-2xl font-medium w-80 text-white px-6'>
                    <div className='flex flex-wrap  mb-7'>
                        <p>Reflectify is your live online journaling destination.</p>
                        <p className=''>Start adding memories of you and your friends on Reflectify.</p>
                    </div>
                    <Link  href="/Diary" >
                    <div className='flex w-fit rounded-lg bg-[#ffe30a] hover:bg-white'>
                        <button className='rounded-lg hover:bg-[#ffe30a] bg-white transition duration-300 text-black py-3 hover:text-white px-16 translate-x-2 translate-y-2 hover:-translate-x-2 hover:-translate-y-2'>Planner</button>
                    </div>
                    </Link>
                    <Link href={'https://notes.javedans.co/'}>
                    <div className='flex w-fit rounded-lg bg-[#ffe30a] hover:bg-white my-6'>
                        <button className='rounded-lg hover:bg-[#ffe30a] bg-white transition duration-300 text-black py-3 hover:text-white px-16 translate-x-2 translate-y-2 hover:-translate-x-2 hover:-translate-y-2'>Notes</button>
                    </div>
                    </Link>
                    
                </div>
                <Image src="/images/study.svg" alt="animated logo" width={300} height={300} className='m-10 invert xl:w-96 lg:w-80' />
            </div>
        </>
    )
} 