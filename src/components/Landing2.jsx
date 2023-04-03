import Image from 'next/image'

export default function Landing2() {
    return (
        <>
            <div className="bg-black  flex flex-wrap justify-evenly py-36 items-center  ">
                <div className='text-2xl font-medium w-80 text-white px-6'>
                    <div className='flex flex-wrap  mb-7'>
                        <p>Reflectify is your live online journaling destination.</p>
                        <p className=''>Start adding memories of you and your friends on Reflectify.</p>
                    </div>
                    <div className='flex gap-7'>
                        <a href="#_" className="relative inline-block text-lg group">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#FFE500] rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#FFE500] group-hover:-rotate-180 ease"></span>
                                <span className="relative">Sign Up</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#FFE500] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                        <a href="#_" className="relative inline-block text-lg group">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#FFE500] rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#FFE500] group-hover:-rotate-180 ease"></span>
                                <span className="relative">Login</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#FFE500] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                    </div>
                </div>
                <Image src="/images/footer-bo.webp" alt="animated logo" width={300} height={300} className='m-10 invert xl:w-96 lg:w-80' />
            </div>
        </>
    )
}