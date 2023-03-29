import Image from 'next/image'


export default function Landing3(){
    return (
        <>
        <div className='bg-black'>
         <div className='flex bg-purple-800 py-36 rounded-t-[13%]'>
            <div className=''>
            <Image src="/images/peep.svg" alt="mainsvg" width={500} height={500} className='invert' />
            </div>
           
         </div>
         </div>
        </>
    )
}