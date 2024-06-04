import React from "react";
import { motion } from "framer-motion";
function Marquee() {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-.5" className=" w-full h-[60vh] rounded-t-[20px] overflow-hidden pt-40 pb-40 bg-[#004D43]">
        <div className="text-marquee flex relative w-[1900vw] ">
          <div className="line  -top-[5vw] h-[1px]   w-full absolute bg-zinc-200"></div>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 110, repeat: Infinity }}
            className=" text-[30vw] uppercase leading-none tracking-tighter  font-[FoundersGrotesk-Semibold] "
          >
            We are ochi We are ochi We are ochi We are ochi We are ochi We are
            ochi We are ochi We are ochi We are ochi We are ochi We are ochi We
            are ochi We are ochi We are ochi We are ochi We are ochi{" "}
          </motion.h1>

          <div className="line -bottom-[8.5vw] h-[1px] w-full  absolute bg-zinc-200"></div>
          {/* <marquee behavior="" direction="">we are ochi</marquee> */}

          {/* <h1>We are ochi</h1> */}
        </div>
      </div>
    </>
  );
}

export default Marquee;
