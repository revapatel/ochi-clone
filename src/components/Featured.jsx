import React, { useState } from "react";
import Btn from "./btn";
import img5 from "../assets/img/img-5.jpg";
import img4 from "../assets/img/img-4.png";
import img6 from "../assets/img/img-6.jpg";
import img7 from "../assets/img/img-7.png";
import { motion } from "framer-motion";
import { Fa0 } from "react-icons/fa6";
function Featured() {
  const [hov, setHov] = useState(false);
  const [hov2, setHov2] = useState(false);
  const [hov3, setHov3] = useState(false);
  const [hov4, setHov4] = useState(false);

  return (
    <>
      <div className="w-full relative min-h-[100vh] overflow-hidden  py-10 px-20">
        <div className="w-full  ">
          <h1 className='font-["Neue_Montreal"]  text-[55px] '>
            Featured projects
          </h1>
          <div className="line  top-[8vw] h-[0.1px] w-[100vw] left-0 absolute bg-zinc-500"></div>
        </div>

        <div className="py-16">
          <div className="card-main flex gap-10 w-full">
            {/* //////////////////////////////////// */}

            <div
              onMouseEnter={() => setHov(true)}
              onMouseLeave={()=>setHov(false)}
              className="main-card-with-btn relative w-1/2 h-[80vh] w-full h-full"
            >
              <div className="text-sm uppercase -mt-10 mb-5  flex items-center">
                <span className="w-3 h-3 mr-4  rounded-full bg-current "></span>
                <h3 className='font-["Neue_Montreal"] text-[14px]'>FYDE</h3>
              </div>
              <h1 className="font-main uppercase absolute z-[9] flex overflow-hidden  text-9xl right-[-7.5vw] top-[12vw] text-[#CDEA68]">
                {"FYDE".split("").map((item, index) => (
                  <motion.span

                    initial={{ y: "100%" }}
                      animate={hov ? {y:"0"}: {y:"100%"}}

                    transition={{ease:[0.22,1,0.36,1] ,delay:index*0.06}}

                    className="inline-block "
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>

              <div className="card  overflow-hidden rounded-[10px] w-full h-[75vh] bg-red-300">
                <img src={img4} className="w-full h-full bg-cover" alt="" />
              </div>

              <div className="all-btn mt-5 font-['Neue_Montreal'] flex gap-5 uppercase text-zinc-100">
                <Btn value="audit" />
                <Btn value="Copywriting" />
                <Btn value="Sales Deck" />
                <Btn value="Slides Design" />
              </div>
            </div>

            {/* ///////////////////////////// */}

            <div   
             onMouseEnter={() => setHov2(true)}
             onMouseLeave={()=>setHov2(false)}
            
            className="main-card-with-btn relative w-1/2 min-h-[80vh] w-full h-full">
              <div className="text-sm uppercase -mt-10 mb-5  flex items-center">
                <span className="w-3 h-3 mr-4  rounded-full bg-current "></span>
                <h3 className='font-["Neue_Montreal"] text-[14px]'>vise</h3>
              </div>

              <h1 className="font-main uppercase absolute z-[9] overflow-hidden  text-9xl left-[-7.5vw] top-[12vw] text-[#CDEA68]">
                {"vise".split("").map((item, index) => (
                    <motion.span

                    initial={{ y: "100%" }}
                      animate={hov2 ? {y:"0"}: {y:"100%"}}

                    transition={{ease:[0.22,1,0.36,1] ,delay:index*0.06}}

                    className="inline-block "
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>

              <div className="card border-solid border-2 border-zinc-300 overflow-hidden rounded-[10px] w-full h-[75vh] bg-red-300">
                <img src={img5} className="w-full h-full bg-cover" alt="" />
              </div>
              <div className="all-btn mt-5 font-['Neue_Montreal'] flex gap-5 uppercase text-zinc-100">
                <Btn value="Agency" />
                <Btn value="Company Presentation" />
              </div>
            </div>

            {/* ////////////////////////////// */}
          </div>

          {/* ////////////////////////////////////// */}

          <div className="card-main mt-28 flex gap-10 w-full">
            {/* //////////////////////////////////// */}

            <div onMouseEnter={() => setHov3(true)}
             onMouseLeave={()=>setHov3(false)} 
             className="main-card-with-btn relative w-1/2 h-[80vh] w-full h-full">
              <div className="text-sm uppercase -mt-10 mb-5  flex items-center">
                <span className="w-3 h-3 mr-4  rounded-full bg-current "></span>
                <h3 className='font-["Neue_Montreal"] text-[14px] uppercase'>
                  Trawa
                </h3>
              </div>
              <h1 className="font-main uppercase absolute z-[9] overflow-hidden  text-9xl right-[-10.5vw] top-[12vw] text-[#CDEA68]">
                {"Trawa".split("").map((item, index) => (
                  <motion.span

                  initial={{ y: "100%" }}
                    animate={hov3 ? {y:"0"}: {y:"100%"}}

                  transition={{ease:[0.22,1,0.36,1] ,delay:index*0.06}}

                  className="inline-block "
                  key={index}
                >
                  {item}
                </motion.span>
                ))}
              </h1>

              <div className="card  overflow-hidden rounded-[10px] w-full h-[75vh] bg-red-300">
                <img src={img6} className="w-full h-full bg-cover" alt="" />
              </div>

              <div className="all-btn mt-5 font-['Neue_Montreal'] flex gap-5 uppercase text-zinc-100">
                <Btn value="Brand Identity" />
                <Btn value="Design Research" />
                <Btn value="Investor Deck" />
              </div>
            </div>

            {/* ///////////////////////////// */}

            <div
            
            onMouseEnter={() => setHov4(true)}
            onMouseLeave={()=>setHov4(false)} 
            
            className="main-card-with-btn relative w-1/2 min-h-[80vh] w-full h-full">
              <div className="text-sm uppercase -mt-10 mb-5  flex items-center">
                <span className="w-3 h-3 mr-4  rounded-full bg-current "></span>
                <h3 className='font-["Neue_Montreal"] text-[14px]'>
                  PREMIUM BLEND
                </h3>
              </div>

              <h1 className="font-main uppercase absolute z-[9]  overflow-hidden text-9xl left-[-20vw] top-[12vw] text-[#CDEA68]">
                {"PREMIUM BLEND".split("").map((item, index) => (
                 <motion.span

                 initial={{ y: "100%" }}
                   animate={hov4 ? {y:"0"}: {y:"100%"}}

                 transition={{ease:[0.22,1,0.36,1] ,delay:index*0.06}}

                 className="inline-block "
                 key={index}
               >
                 {item}
               </motion.span>
                ))}
              </h1>

              <div className="card border-solid border-2 border-zinc-300 overflow-hidden rounded-[10px] w-full h-[75vh] bg-red-300">
                <img src={img7} className="w-full h-full bg-cover" alt="" />
              </div>
              <div className="all-btn mt-5 font-['Neue_Montreal'] flex gap-5 uppercase text-zinc-100">
                <Btn value="Branded Template" />
              </div>
            </div>

            {/* ////////////////////////////// */}
          </div>
        </div>
        <div className=" mb-20  flex">
          <button className=" px-8 ml-[31vw] py-3 bg-zinc-200 text-zinc-950 rounded-[5vw] relative flex justify-center items-center gap-5">
            {" "}
            <h3 className=' uppercase font-["Neue_Montreal"]  text-[1.2vw]'>
              View all case studies{" "}
            </h3>{" "}
            <span className="  text-zinc-100-bg-zinc-100  rounded-full "></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Featured;
