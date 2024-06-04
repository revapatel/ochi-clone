import React from "react";
import img2 from '../assets/img/img2.jpg'

function About() {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-0.1"  className="w-full  py-20 min-h-[100vh] bg-[#CDEA68] mt-[13vw] rounded-t-[20px] relative text-zinc-800">
        <h1 className="font-['Neue_Montreal']  text-[55.4667px] ml-20 leading-none w-[80vw]">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to{" "}
          <a href="" className="underline decoration-2">
            raise funds
          </a>
          ,{" "}
          <a href="" className="underline decoration-2">
            {" "}
            sell prod­ucts
          </a>{" "}
          ,
          <a className="underline decoration-2" href="">
            {" "}
            ex­plain com­plex ideas
          </a>
          , and{" "}
          <a className="underline decoration-2" href="">
            hire great peo­ple
          </a>
          .
        </h1>
        <div className="line  top-[21vw] h-[0.1px] w-full absolute bg-zinc-500"></div>
        <div className="all-para flex  pt-20 pl-20 pr-20 text-[18px]">
          <p>What you can expect:</p>
          <p className="w-[19vw] ml-[36vw]">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people. <br /> <br /> We believe the
            mix of strategy and design (with a bit of coffee) is what makes your
            message clear, convincing, and captivating.
          </p>
          <p className="flex-col flex mt-[7vw] ml-[10vw]">
            <a href="">S:</a> <br />
            <br />
            <a href="">Instagram</a>
            <a href="">Behance</a>
            <a href="">Facebook</a>
            <a href="">Linkedin</a>
          </p>
        </div>
        {/* <div className="line  bottom-[2vw] h-[0.5px] w-full absolute bg-zinc-500"></div> */}

        <div className="last-one-with-img flex w-full pt-8 mt-[2vw] h-[80vh] border-t-[1px] border-zinc-500">
          <div className="w-1/2 pl-20">
            <h1 className="text-[55px] font-['Neue_Montreal']  ">
              Our appoach :)
            </h1>
            <button className="px-14 py-4       bg-zinc-900 rounded-full text-white">
              Read more
            </button>
          </div>

          <div className="bg-img w-[50vw] rounded-[10px]  h-[35vw] overflow-hidden bg-red-400 ms-0 mt-4 mr-10 ">
            <img className="w-[50vw] rounded-[10px] h-[35vw] "
            src={img2}
             alt=""
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
