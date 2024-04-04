
"use client";

import { Footer } from "flowbite-react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const FooterComp=() =>{
  return (
    <Footer container  className="flex flex-col lg:flex-row justify-center items-center gap-2">
      <Footer.Copyright className="text-xs lg:text-[15px] text-gray-400" href="#" by="PHOENIXMART All Rights Reserved" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#" className="text-xs lg:text-lg"><FaFacebookF/></Footer.Link>
        <Footer.Link href="#" className="text-xs lg:text-lg"><FaXTwitter/></Footer.Link>
        <Footer.Link href="#" className="text-xs lg:text-lg"><FaYoutube/></Footer.Link>
        <Footer.Link href="#" className="text-xs lg:text-lg"><FaLinkedin/></Footer.Link>
        
      </Footer.LinkGroup>
    </Footer>
  );
}
export default FooterComp