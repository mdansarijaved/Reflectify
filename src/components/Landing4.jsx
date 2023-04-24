import Image from 'next/image'

export default function Landing4() {
    return (
        <>

            <div className='flex bg-black justify-center flex-wrap items-center gap-7 py-24'>
                <Cards />
                <Cards />
                <Cards />
            </div>

        </>
    )
}

function Cards() {
    return (
        <>
            <div className="">
                <div className="w-[300px] h-[400px] border-2 border-white rounded-lg overflow-clip relative isolate ">
                    <Image src={'/images/mainGirl.webp'} alt='maingirl' width={300} height={400} className='absolute  top-0 left-0 -z-10 ' />
                    <div className='bg-black/50 hover:bg-black/0 transition duration-300 w-full h-full text-white text-lg font-semibold'>
                        <p className='p-3'>Your Friends.</p>
                    </div>
                </div>
            </div>

        </>
    )
}