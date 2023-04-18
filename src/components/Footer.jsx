import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube, AiFillLinkedin } from "react-icons/ai";
import Image from 'next/image'


export default function Footer() {
    return (
        <>
           
                <footer className=" bg-[#FFE500]  ">
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
                        <button className="bg-white p-2 transition rounded-full hover:bg-black group"><AiOutlineInstagram className="group-hover:invert transition" /></button>
                        <button className="bg-white p-2 transition rounded-full hover:bg-black group"><AiOutlineTwitter className="group-hover:invert transition" /></button>
                        <button className="bg-white p-2 transition rounded-full hover:bg-black group"><AiOutlineYoutube className="group-hover:invert transition" /></button>
                        <button className="bg-white p-2 rounded-full hover:bg-black group"><AiFillLinkedin className="group-hover:invert transition"    /></button>
                    </div>
                    <div className="flex justify-evenly items-center py-8">
                        <h1 className="text-xl ">Made with love in India.</h1>
                    </div>

                </footer>
           
        </>
    )
}