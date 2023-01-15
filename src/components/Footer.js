import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full bg-bodyColor">
      <p className="text-sm text-gray-400 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia
        delectus necessitatibus facilis similique, alias ratione aspernatur qui
        optio? Est.
      </p>
      <div className="flex gap-2 justify-center mt-3">
        <span className="w-6 h-6 rounded-full bg-gray-800 hover:bg-gray-900 cursor-pointer duration-500 text-gray-400 hover:text-white border border-transparent hover:border-gray-500 flex justify-center items-center">
          <FaGithub />
        </span>
        <span className="footerIcon">
          <FaLinkedin />
        </span>
        <span className="footerIcon">
          <FaYoutube />
        </span>
        <span className="footerIcon">
          <FaFacebookF />
        </span>
        <span className="footerIcon">
          <FiInstagram />
        </span>
        <span className="footerIcon">
          <FaTwitter />
        </span>
        <span className="footerIcon">
          <FiSend />
        </span>
        <span className="footerIcon">
          <FiMail />
        </span>
      </div>
    </div>
  );
};

export default Footer;
