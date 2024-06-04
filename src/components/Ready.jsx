import React from 'react'
import Eyesmain from './Eyes-main'

function Ready() {
  return (
    <>

<div data-scroll data-scroll-section data-scroll-speed="-0.2"   className="w-full  py-16 flex justify-center relative flex-col top-0  min-h-[30vh] bg-[#CDEA68]">


<h1 className='  mt-[-5vw] font-main-two text-[17vw] leading-none text-center'>READY <br />
TO START <br />
THE PROJECT?</h1>
<div className="absolute right-[50vw] top-[22vw]"><Eyesmain className='absolute'/></div>

<div className=" mt-16 ml-[7.5vw]  flex"><button className=" px-8 ml-[31vw] py-3 text-zinc-200 bg-zinc-950 rounded-[5vw] relative flex justify-center items-center gap-5">    <h3 className=' uppercase font-["Neue_Montreal"]  text-[1.2vw]'>start the project </h3>    <span className="  text-zinc-100-bg-zinc bg-slate-50 h-3 w-3  rounded-full "></span></button></div>
<h3 className='text-zinc-500 mt-5 font-["Neue_Montreal"] text-2xl ml-[46vw]'>OR</h3>
<div className=" mt-5 ml-[7.5vw]  flex"><button className=" px-8 ml-[32.5vw] py-3 bg-transparent text-zinc-950 rounded-[5vw] border-solid border-4 border-zinc-200 relative flex justify-center items-center gap-5">    <h3 className='  font-["Neue_Montreal"]  text-[1.2vw]'>hello@reva.com </h3>        <span className="  text-zinc-100 bg-zinc-100 h-3 w-3 rounded-full "></span></button></div>

</div>




    </>
  )
}

export default Ready