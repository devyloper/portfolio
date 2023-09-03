import React from "react";
import { Press_Start_2P } from "next/font/google";
import Gradient from "./Gradient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Social from "./Social";
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
});

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-[100%] w-[100%] bg-[#091922] lg:flex md:flex sm:flex lg:flex-row flex flex-col md:flex-col sm:flex-col border-b-[0.5px] border-[#3a474e]">
      <div className=" lg:h-[100vh] lg:w-[70vw] md:h-[70vh] md:w-[100vw] sm:h-[70vh] sm:w-[100vw] h-[70vh] w-[100%] bg-[#091922] flex flex-col items-center justify-center">
        <h1
          style={pressStart2P.style}
          className="text-[#c6e926] text-[30px] lg:text-[52px] flex flex-col text-right"
        >
          <span className="pb-5">Devyanshu</span>
          <span className="pt-5">Jadon</span>
        </h1>
        <div className="lg:left-0 text-[#fff] text-left">
          <h1>Developer</h1>
          <h1>GDSC Member</h1>
          <h1>Opensource</h1>
        </div>
        <div><Social /></div>
      </div>
      <div className="lg:h-[100vh] lg:w-[30vw] md:h-[40vh] md:w-[100vw] sm:h-[40vh] sm:w-[100vw] h-[40vh] w-[100%] bg-red-600">
        <Gradient />
      </div>
    </div>
  );
};

export default Hero;
