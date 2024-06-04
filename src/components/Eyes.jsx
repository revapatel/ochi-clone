import React, { useEffect, useState } from "react";

import Btn from "./btn";
import "../index.css";
import img1 from "../assets/img/img3.jpg";



function Eyes() {

  const [rotate , setRotate]=useState(0);
  const [movee , setMove]=useState(0);
  const [up , setUP]=useState(0);
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
  const mouseX = e.clientX ;
  const mouseY = e.clientY;

  const dellX = mouseX -window.innerWidth/2;
  const dellY = mouseY -window.innerHeight/2;

  const angle = Math.atan2(dellY ,dellX) * (180/Math.PI)

  setRotate(angle-180);
    })
  })

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      const mouseX = e.clientX ;
      const mouseY = e.clientY;
      const dellX = (window.innerWidth-mouseX )/360;
      const dellY = (window.innerHeight-mouseY )/360;
            setMove(dellX*dellY)
        })
   })


   useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      const mouseX = e.clientX ;
      const mouseY = e.clientY;
    
      const dellX = mouseX -window.innerWidth/10;
      const dellY = mouseY -window.innerHeight/10;
    
      const angle = Math.atan2(dellY ,dellX)* (40/Math.PI)
    
    setUP(angle);
        })
  
   })





  return (
    <>
      <div  className="w-full  h-screen bg-[#CDEA68] overflow-hidden">
        <div  data-scroll data-scroll-section data-scroll-speed="-.7" className="w-full h-[100vh] relative  bg-[#dadada] top-eyes-bgimg  ">
          <div  className=" gap-10 absolute top-1/2 left-1/2 flex -translate-x-[50%] -translate-y-[50%] ">
            <div   className="w-[15vw] flex justify-center relative items-center h-[15vw] rounded-full bg-zinc-50">
              <div style={{left:`${movee}px ` , top:`${up}px ` , transform:` translate${movee}px `} }  className=" move  w-[9.5vw] h-[9.5vw] rounded-full flex relative justify-center items-center  bg-zinc-900">
                <h4 className="absolute font-[Poppins] text-[1.2vw]">PLAY</h4>
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line  w-full top-1/2 left-1/2 flex -translate-x-[50%] -translate-y-[50%]  absolute h-10">
                  <div className="cir h-[1.5vw] w-[1.5vw] rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
            <div className="w-[15vw] flex justify-center relative items-center h-[15vw] rounded-full bg-zinc-50">
              <div style={{left:`${movee}px ` , top:`${up}px ` , transform:` translate${movee}px `} }  className=" move  w-[9.5vw] h-[9.5vw] rounded-full flex relative justify-center items-center  bg-zinc-900">
              <h4 className="absolute font-[Poppins] text-[1.2vw]">PLAY</h4>
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="line  w-full top-1/2 left-1/2 flex -translate-x-[50%] -translate-y-[50%]  absolute h-10">
                  <div className="cir h-[1.5vw] w-[1.5vw] rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Btn value="hello" /> */}
      </div>
    </>
  );
}

export default Eyes;
