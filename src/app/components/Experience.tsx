import { IBM_Plex_Sans } from "next/font/google";
import React from "react";
import Image from "next/image";
import GDSClogo from "/public/gdsc-logo.svg";
import ibmZLogo from "/public/IBM Z_OS.svg";
const ibmPlex = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
});
type Props = {};

function Experience({}: Props) {
  return (
    <div className="h-[100%] w-[100%] pb-8 border-b-[0.5px] border-[#3a474e]">
      <div>
        <h1
          style={ibmPlex.style}
          className="text-center text-[#f6f6f6] text-[24px] decoration-[0.5px] decoration-[#c6e926] underline underline-offset-8 lg:underline-offset-[14px] lg:text-[48px] m-[2rem]"
        >
          Experiences<span className="text-[#c6e926]">.</span>
        </h1>

      </div>
     
      <div
        style={ibmPlex.style}
        className="border-[0.5px] border-[#3a474e] m-8 p-8"
      >
        <div className="flex items-center">
          <h1 className="p-8 text-white text-[18px] lg:text-[24px] hover:underline decoration-[0.5px] decoration-[#c6e926] underline-offset-8 cursor-pointer">
            GDSC Cloud Lead<span className="text-[#c6e926]">.</span>
          </h1>
          <Image alt="" src={GDSClogo} height={20} width={20} className="h-[20px] w-[auto] items-center" />
        </div>
        <div className="p-8 h-[100%] text-white ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In expedita
            nostrum eaque ducimus, molestiae consequatur quod commodi esse porro
            delectus voluptatibus, minus, neque dolores maxime dolore quia
            temporibus non totam?
          </p>
        </div>
      </div>
      <div
        style={ibmPlex.style}
        className="border-[0.5px] border-[#3a474e] m-8 p-8"
      >
        <div className="flex items-center">
          <h1 className="p-8 text-white text-[18px] lg:text-[24px] hover:underline decoration-[0.5px] decoration-[#c6e926] underline-offset-8 cursor-pointer">
            GDSC Cloud Lead<span className="text-[#c6e926]">.</span>
          </h1>
          <Image alt="" src="/gdsc-logo.png" height={20} width={20} className="h-[20px] w-[auto] items-center" />
        </div>
        <div className="p-8 h-[100%] text-white ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In expedita
            nostrum eaque ducimus, molestiae consequatur quod commodi esse porro
            delectus voluptatibus, minus, neque dolores maxime dolore quia
            temporibus non totam?
          </p>
        </div>
      </div>
      <div
        style={ibmPlex.style}
        className="border-[0.5px] border-[#3a474e] m-8 p-8"
      >
        <div className="flex items-center">
          <h1 className="p-8 text-white text-[18px] lg:text-[24px] hover:underline decoration-[0.5px] decoration-[#c6e926] underline-offset-8 cursor-pointer">
            GDSC Cloud Lead<span className="text-[#c6e926]">.</span>
          </h1>
          <Image alt="" src={ibmZLogo} height={20} width={20} className="h-[50px] w-[auto] items-center" />
        </div>
        <div className="p-8 h-[100%] text-white ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In expedita
            nostrum eaque ducimus, molestiae consequatur quod commodi esse porro
            delectus voluptatibus, minus, neque dolores maxime dolore quia
            temporibus non totam?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
