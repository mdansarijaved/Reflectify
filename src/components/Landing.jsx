import { useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from 'next/image'
import MainMenu from "./MainMenu";
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";


export default function Header() {
    const [isVisible, setVisibility] = useState(false)
    const shownavbar = () => {
        setVisibility(!isVisible)
        console.log("clicked")
    }


    return (
        <>

            <div
                onClick={() => {
                    if (isVisible)
                        setVisibility(false)
                }}
                className={`z-[999] transition-opacity duration-200 bg-black/30  fixed ${isVisible ? "  opacity-100 pointer-events-auto " : "pointer-events-none opacity-0 "} w-screen h-screen top-0 left-0 `} />

            <MainMenu state={isVisible} toggle={setVisibility} />


            <div className="relative isolate">
                <Image src="/images/hero.jpg" priority width={1920} height={1080} className="absolute top-0 left-0 w-full h-full -z-10 object-cover " />
                <main className=' p-4 sticky top-0 '>
                    <header className='flex  items-center  '>
                        <button >
                            <AiOutlineMenu className='text-4xl text-[#FFe34a]' onClick={shownavbar} />
                        </button>

                        <div className='flex-1'>
                            <Image src="/images/logo.svg" alt="logo" width={180} height={100} className=' invert m-auto ' />
                        </div>
                        <SignedIn>
                            <UserButton
                                appearance={{
                                    userProfile: { elements: { modalBackdrop: "bg-slate-500" } },
                                }} />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton className="relative inline-block text-lg group">
                                <button>
                                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#FFE500] rounded-lg group-hover:text-white">
                                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#FFE500] group-hover:-rotate-180 ease"></span>
                                        <span className="relative">Sign Up</span>
                                    </span>
                                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#FFE500] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                </button>
                            </SignInButton>
                        </SignedOut>
                    </header>

                </main>
                <div className=" flex justify-center  ">
                    <div className="p-2  text-[#FFE30A] flex py-[200px] flex-wrap flex-col  items-center justify-center w-auto text-[25px]    sm:text-5xl  md:text-[58px] lg:text-7xl xl:text-[80px] font-black">
                        <p> "Capture your thoughts,</p>
                        <p>one keystroke at a time -</p>
                        <p>with our daily online</p>
                        <p>journaling."</p>
                    </div>
                </div>
            </div>
        </>
    )
}
