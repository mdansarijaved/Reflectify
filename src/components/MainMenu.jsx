import Image from "next/image";
import { AiOutlineClose } from 'react-icons/ai'
export default function MainMenu({state, toggle }) {
    return (
        <div className={`fixed z-[99999] bg-[#FFE500] px-12 h-screen w-screen sm:w-fit top-0  left-0 transition-transform duration-1000 ease-in-out ${!state?"-translate-x-full ":"  "} `}>
            
                
                    <button onClick={()=>{toggle(false)}} className="flex items-center text-3xl font-semibold py-9 gap-3">
                        <AiOutlineClose className="text-5xl" />
                        <h1>Close</h1>
                    </button>
                    <div className="flex-col justify-center items-center text-3xl font-bold px-12 py-12 space-y-16 ">
                        <button>
                            <h1>About</h1>
                        </button>
                        <div>
                            <h1>Community</h1>
                        </div>
                        <div>
                            <h1>Safety Hub</h1>
                        </div>
                        <div>
                            <h1>Support</h1>
                        </div>
                        <div>
                            <h1>Legal</h1>
                        </div>
                    </div>
                
            
        </div>

    );
}