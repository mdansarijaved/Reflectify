
import { AiOutlineMenu } from "react-icons/ai";
import Image from 'next/image'


export default function Header() {
    return (
        <main className='bg-black/20 p-4 sticky top-0'>
            <header className='flex  items-center '>
                <button>
                    <AiOutlineMenu className='text-4xl text-white    ' />
                </button>
                <div className='flex-1'>
                    <Image src="/images/logo.svg" alt="logo" width={180} height={100} className=' invert m-auto ' />
                </div>

                <a href="#_" className="relative inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#FFE500] rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#FFE500] group-hover:-rotate-180 ease"></span>
                        <span className="relative">Sign Up</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#FFE500] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
            </header>
        </main>
    )
}
