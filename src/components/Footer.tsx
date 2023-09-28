import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { SlSocialLinkedin } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { FaMapLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-transparent p-4 flex items-center justify-center">
      <div className="max-w-[1440px] w-full flex items-center justify-center">
        <div className="w-full flex items-center justify-start">
          <div className="flex gap-4 items-center border-t-[1px] border-white lg:pr-52 lg:justify-start lg:w-auto w-full justify-center py-2 text-white">
            <a href="https://www.instagram.com/portospaceteam/" target="_blank" rel="noreferrer" className="rounded-full border-[1px] hover:cursor-pointer border-white p-2">
              <BsInstagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/portospaceteam" target="_blank" rel="noreferrer" className="rounded-full border-[1px] hover:cursor-pointer border-white p-2">
              <BiLogoFacebook className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/porto-space-team" target="_blank" rel="noreferrer" className="rounded-full border-[1px] hover:cursor-pointer border-white p-2">
              <SlSocialLinkedin className="w-6 h-6" />
            </a>
            <a href="mailto:geral@portospaceteam.pt" target="_blank" rel="noreferrer" className="rounded-full border-[1px] hover:cursor-pointer border-white p-2">
              <GoMail className="w-6 h-6" />
            </a>
            <a href="https://www.google.com/maps/place/Porto+Space+Team/@41.1781163,-8.5945483,15z/data=!4m6!3m5!1s0xd24657d6bcac819:0x58ab6feb15e61d9b!8m2!3d41.1781163!4d-8.5945483!16s%2Fg%2F11tfjwlz4z?entry=ttu" target="_blank" rel="noreferrer" className="rounded-full border-[1px] hover:cursor-pointer border-white p-2">
              <FaMapLocationDot className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
