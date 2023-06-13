import React, { use, useState } from 'react'
import Landing from './Landing'
import Image from 'next/image'
import Dailyplanner from './Dailyplanner'
import Footer from './Footer'
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube, AiFillLinkedin } from "react-icons/ai";



function Diary1() {

    const [btnValue, setbtnValue] = useState(1)

    const handleclick = (index) => {
        setbtnValue(index);
        console.log(index)
    }



    return (
        <>
            <div className='bg-[#0b0e14] '>
                <header className='flex justify-between items-center px-8'>
                  

                    <Image src={'/images/logo.svg'} height={120} width={230} alt='logo' className=' invert' />
                    
                    

                    <SignedIn>
                            <UserButton
                                appearance={{
                                    userProfile: { elements: { modalBackdrop: "bg-slate-500" } },
                                }} />
                        </SignedIn>
                                
                </header>
                <hr />

                <div className='flex justify-center gap-12 mt-12   '>
                    <button onClick={() => handleclick(1)} className={btnValue === 1 ? 'bg-black hover:bg-primary hover:text-black transition duration-200 border-2 border-white text-white text-xl font-semibold rounded py-3 px-7' : 'bg-white text-black rounded-xl font-semibold py-3 px-7'}>Monthly Planner</button>
                    {/* <button onClick={() => handleclick(2)} className={btnValue === 2 ? 'bg-black text-white font-semibold rounded-xl py-3 px-7' : 'bg-white text-black rounded-xl font-semibold py-3 px-7'}></button>
                    <button onClick={() => handleclick(3)} className={btnValue === 3 ? 'bg-black text-white font-semibold rounded-xl py-3 px-7' : 'bg-white text-black font-semibold rounded-xl py-3 px-7'}></button> */}

                </div>
                <div className='grid place-items-center mt-12'>
                    <div className={btnValue === 1 ? 'flex justify-center' : 'hidden'}>
                        <Dailyplanner />
                    </div>
                    {/* <div className={btnValue === 2 ? 'flex justify-center' : 'hidden'}>
                        <Editablefield />
                    </div> */}
                </div>
                {/* <Footer /> */}
                <footer className=" bg-[#0b0e14] text-primary ">
                    <div className="flex justify-between items-start flex-wrap">
                        <div className="flex flex-col m-20 justify-center items-start">
                            <h1 className="text-2xl font-bold ">About</h1>
                            <ul className="py-3">
                                <a href="#"><li>About us</li></a>
                                <a href="#"><li>Newsroom</li></a>
                                <a href="#"><li>Contact us</li></a>

                            </ul>
                        </div>
                        <div className="flex flex-col m-20 justify-center items-start">
                            <h1 className="text-2xl font-bold ">Community</h1>
                            <ul className="py-3">
                                <a href="#"><li>Community guidelines</li></a>
                                <a href="#"><li>Blogs</li></a>


                            </ul>
                        </div><div className="flex flex-col m-20 justify-center items-start">
                            <h1 className="text-2xl font-bold ">Safety Hub</h1>
                            <ul className="py-3">
                                <a href="#"><li>Resources</li></a>
                                <a href="#"><li>Advice</li></a>
                                <a href="#"><li>Our approach</li></a>
                                <a href="#"><li>Guide</li></a>



                            </ul>
                        </div><div className="flex flex-col m-20 justify-center items-start">
                            <h1 className="text-2xl font-bold ">Privacy Hub</h1>
                            <ul className="py-3">
                                <a href="#"><li>Privacy policy</li></a>
                                <a href="#"><li>Cookies policy</li></a>


                            </ul>
                        </div>
                        <div className="flex flex-col m-20 justify-center items-start">
                            <h1 className="text-2xl font-bold ">Support</h1>
                            <ul className="py-3">
                                <a href="#"><li>Help Center</li></a>
                                <a href="#"><li>FAQ</li></a>


                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center items-center text-4xl gap-7 sm:gap-11 lg:gap-12 xl:gap-14">
                        <button className="bg-white p-2 transition rounded-full hover:bg-primary group"><AiOutlineInstagram className="group-hover:invert transition" /></button>
                        <button className="bg-white p-2 transition rounded-full hover:bg-primary group"><AiOutlineTwitter className="group-hover:invert transition" /></button>
                        <button className="bg-white p-2 transition rounded-full hover:bg-primary group"><AiOutlineYoutube className="group-hover:invert transition" /></button>
                        <button className="bg-white p-2 rounded-full hover:bg-primary group"><AiFillLinkedin className="group-hover:invert transition"    /></button>
                    </div>
                    <div className="flex justify-evenly items-center py-8">
                        <h1 className="text-xl ">Made with love in India.</h1>
                    </div>

                </footer>
            </div>
        </>
    )
}

export default Diary1


const Editablefield = () => {
    return (
        <>

        </>
    )
}