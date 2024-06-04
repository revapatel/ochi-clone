import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link    } from "react-router-dom";
import img1 from "../assets/img/image01.jpg";
import { motion } from "framer-motion";
function LandingPage() {
  
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-.8" className="w-full h-screen bg-zinc-900 pt-2">
        <div className="textstructure px-20 mt-36">
          {["We create", "EYE-OPENING", "PRESENTATIONS"].map((data, index) => {
            return (
              <div key={index} className="masker flex ">
                {index === 1 && 
                (
                  <motion.div initial={{width:0}} animate={{width:"18vh"}} transition={{ ease:[0.76,0,0.24,1] ,duration:2}} className="masker-two w-[9vw] rounded-[10px] h-[5.5vw] overflow-hidden bg-red-400 ms-0 mt-4 me-3 ">
                    <img src={img1} alt="" />{" "}
                  </motion.div>
                  // ease value easein.com se li he
                  // locomotive / framer / gsap
                )}
                <h1 className=" land-fsmain uppercase leading-[4vw] tracking-tighter font-semibold font-[FoundersGrotesk-Semibold]">
                  {data}
                </h1>
              </div>
            );
          })}
        </div>
        <div className=" w-full flex justify-between justify-center items-center ps-20 pe-20 text-slate-300 border-t-[1px] mt-24 border-zinc-500">
          <Link to="/">For public and private companies</Link>
          <Link to="/">From the first pitch to IPO</Link>
          <div className="btn-all-land flex justify-center items-center mt-5 gap-2">
            <button className="button-land  border-[1px] border-zinc-600">
              START THE PROJECT{" "}
            </button>
            <span className="w-10 h-10 flex justify-center items-center rotate-45  border-[1px] border-zinc-600 rounded-full ">
              {" "}
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
