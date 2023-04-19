import React from 'react'
import Landing from './Landing'
import Image from 'next/image'
import Dailyplanner from './Dailyplanner'
import Footer from './Footer'





function Diary1() {

    return (
        <>
            <div className='bg-primary '>
                <header className='flex justify-center items-center'>
                    <Image src={'/images/logo.svg'} height={120} width={230} alt='logo' />
                </header>

                

                <div className='flex gap-9 '>
                <div className=' overflow-clip rounded-lg w-64 h-fit  bg-white ml-5 mt-4 text-2xl  child:px-4 child:py-3 child-hover:bg-primary  child:transition child:duration-300 '>
                    <div className=''>
                        <button>Diary</button>
                    </div>
                    {/* <hr className='border-1 border-gray-300' /> */}
                    
                    <div className=''>
                        <button className='' >Monthly Planner</button>
                    </div>
                    {/* <hr className='border-1 border-gray-300' /> */}
                    <div className=''>
                        <button>Habit Tracker</button>
                    </div>
                </div>
                <div>
                <Dailyplanner />
                </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Diary1


function Editablefield() {
    return (
        <>


            <section className='bg-red-500 h-[590px] m-5'>
                <span className='' contentEditable='true'>Start adding your day </span>
            </section>

        </>
    )
}