import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube, AiFillLinkedin } from "react-icons/ai";
import Image from 'next/image'


export default function Footer() {
    return (
        <>
            <div className="bg-purple-800">
                <footer className=" bg-[#FFE500] rounded-t-[10%]  ">
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
                    <div className="flex justify-center items-center text-4xl gap-12">
                        <button className="bg-white p-2 rounded-full"><AiOutlineInstagram /></button>
                        <button className="bg-white p-2 rounded-full"><AiOutlineTwitter /></button>
                        <button className="bg-white p-2 rounded-full"><AiOutlineYoutube /></button>
                        <button className="bg-white p-2 rounded-full"><AiFillLinkedin /></button>


                    </div>
                    <div className="flex justify-evenly items-center py-8">
                        <h1 className="text-xl ">Made with love in India.</h1>
                    </div>

                </footer>
            </div>
        </>
    )
}