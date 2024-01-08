import React from "react";
import { Nunito_Sans, Barlow } from "next/font/google";
import AboutButton from "./AboutButton";
import Headshot from "./Headshot";
import Socials from "./Socials";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--nunito-sans",
});

const barlow = Barlow({
  weight: ["400", "700", "900", "800"],
  subsets: ["latin"],
  variable: "--barlow",
});

function AboutPage() {
  return (
    <div className="flex px-[6rem] py-[12rem]  bg-[#16252d] border-x-[0.5px] border-[#29373f] mx-[2rem] md:mx-[10rem] lg:mx-[10rem] justify-around">
      <div className="w-[70%]">
      <h1 style={barlow.style} className=" pb-4 text-5xl font-bold">
        I'm{" "}
        <span className="font-bold font-calsans pb-4 text-5xl bg-gradient-to-r from-[#3e70c8] to-[#d74d67] bg-clip-text text-transparent">
          Devyanshu Jadon.
        </span>
      </h1>
      <h1 style={barlow.style} className="pb-4 text-5xl font-bold">
        I live in India, where I <br />break things & learn fast.
      </h1>
      <p className="mt-4 mb-6 pl-1 text-base text-justify text-zinc-600 dark:text-zinc-400 md:my-6 animate-fade-in">
        Hello, wonderful folks! 🎉 As a self-taught
        developer, I take pride in the fact that I've never purchased any
        courses to enhance my programming skills. I firmly believe in the art of
        exploration and learning through the vast sea of online resources –
        there's something uniquely rewarding about the journey of self-discovery
        in coding. Right now, I'm doing this cool thing called the
        100DayOfCodeChallenge. I'm focusing on getting really good at C++. Every
        day, I make a commitment to code, and honestly, it's super fun! 🚀 On my
        coding journey, here are a few key points: Self-taught enthusiast: No
        courses, just a hunger for knowledge. Engaged in the
        100DayOfCodeChallenge to level up my C++ skills. You can connect with me
        on Twitter, where I'm actively involved with some of the best developers
        in India. It's a fantastic platform that allows me to stay inspired,
        share my progress, and learn from the seasoned pros in the field.
        Excited for the coding adventures that lie ahead! 🌟 Follow along as I
        share my journey and insights.
      </p>
      </div>
      <div className="px-[3rem]">

        <Headshot />
        <Socials />
      </div>
      
    </div>
  );
}

export default AboutPage;
