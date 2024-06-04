import React from "react";
import Btn from "./btn";
import img8 from "../assets/img/img-8.png";


import Data from './revvv'

function Reviews() {
  return (
    <><div  className="">



      
<div className="w-full py-10  overflow-hidden text-[1.1vw]    min-h-[100vh]  bg-[#rgb(24,24,27)] -mt-[1vw] rounded-t-[20px] relative text-zinc-800">
        <div className="w-full  ">
          <h1 className=' ml-20 text-white font-["Neue_Montreal"]   text-[55px] '>
            Clients’ reviews
          </h1>

          <div className="line  top-[10vw] h-[0.1px] w-[100vw] left-0 absolute bg-zinc-500"></div>
        </div>

        <div className="all-para ml-20 mt-10 font-['Neue_Montreal']  text-zinc-200 flex  pt-10  text-[18px]">
          <a href="" className='font-["Neue_Montreal"] underline'>
            Karman Ventures
          </a>
          <div className=" ml-[15vw]">
            <a href="">Services:</a>
            <div className="mt-32 flex flex-col gap-3 ml-10">
              {" "}
              <Btn value="INVESTOR DECK" />
              <Btn value="SALES DECk" />
            </div>
          </div>
          <p className="w-[30vw] ml-[18vw]  text-[1.1vw] ">
            <li>William Barnes</li>

            <img
              src={img8}
              className="w-[9vw] h-[9vw] mt-10  rounded-[10px] overflow-hidden bg-slate-500"
              alt=""
            />
            <li className="mt-8 w-[26vw]">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </li>
          </p>
          <p className="flex-col text-zinc-400 flex mt-10 ">
            <a href="">Read</a>
          </p>
        </div>
        {/* <div className="line  bottom-[2vw] h-[0.5px] w-full absolute bg-zinc-500"></div> */}
      </div>

      {/* ......................... */}


      {Data.map((value, index) => (
      <div key={index} className="revviewsline flex  relative items-center text-1xl px-20 border-t-[1px] border-zinc-500 h-[8vh]  w-full">
      <a href="" className="underline text-zinc-300 ">
       {value.name1}
      </a>
      <a href="" className=" left-[47vw] absolute text-zinc-300">
      {value.name2}
      </a>
      <a href="" className=" right-20 absolute text-zinc-300">
   {value.name3}
      </a>
    </div>  ))}

     




    </div>





   
    </>
  );
}

export default Reviews;
