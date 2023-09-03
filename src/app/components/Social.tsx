import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
type Props = {};

const Social = (props: Props) => {
  return (
    <div className="flex">
      <FontAwesomeIcon
        icon={faGithub}
        className="text-[#c6e926]    h-[28px] w-[28px] p-2 border border-[#3a474e]   hover:border-[#c6e926] m-2   rounded-full"
      />
      <FontAwesomeIcon
        icon={faLinkedin}
        className="text-[#c6e926]  h-[28px] w-[28px] p-2 border  border-[#3a474e]  hover:border-[#c6e926] m-2  rounded-full"
      />
      <FontAwesomeIcon
        icon={faXTwitter}
        className="text-[#c6e926]   h-[28px] w-[28px] p-2 border  border-[#3a474e] hover:border-[#c6e926] m-2 rounded-full"
      />
      <FontAwesomeIcon
        icon={faEnvelope}
        className="text-[#c6e926]   h-[28px] w-[28px] p-2 border  border-[#3a474e] hover:border-[#c6e926] m-2 rounded-full"
      />
      <div className="text-[#c6e926] px-4  py-2 m-2 hidden lg-[flex] items-center border border-[#3a474e] hover:border-[#c6e926] rounded-3xl">
        <Link className="hidden lg-[flex] items-center justify-center" href={"/"}>Resume</Link>
      </div>
    </div>
  );
};

export default Social;
