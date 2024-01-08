import React from "react";
import Image from "next/image";
function Logo() {
  return (
    <div className="outline outline-[#31596e] flex justify-center items-center   hover:outline-[#3f6fc7] outline-[0.5px] outline-offset-2  hover:outline-2 hover:outline-offset-2 hover:scale-105 w-[2.5rem] h-[2.5] transition duration-300 ease-in-out rounded-full ">
      <Image
        src="/peace.png"
        width={1080}
        height={1080}
        alt="Logo"
        className=" w-[2.5rem] h-[2.5rem] shadow-inner-xl shadow-cyan-900 hover:scale-105 transition duration-250 ease-in-out rounded-full"
      />
    </div>
  );
}

export default Logo;
