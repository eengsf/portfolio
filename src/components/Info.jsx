import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Info() {
  return (
    <>
      <div className="md:fixed md:block hidden mt-[35vh] left-0 bottom-0 ms-[4vw] z-50">
        <ul>
          <li className="mb-5 list-none">
            <a href="https://github.com/eengsf">
              <FiGithub size={20} color="white" />
            </a>
          </li>
          <li className="mb-5 list-none">
            <a href="https://www.instagram.com/eengsf_/">
              <FaInstagram size={20} color="white" />
            </a>
          </li>
          <li className="mb-5 list-none">
            <a href="https://www.linkedin.com/in/shofiyul-fuad-b8836628b/">
              <FaLinkedinIn size={20} color="white" />
            </a>
          </li>
          <li className="mb-5 list-none">
            <a href="">
              <FaFacebookF size={20} color="white" />
            </a>
          </li>
          <li className="mb-7 list-none">
            <a href="https://www.tiktok.com/@eengsf_?_t=8ia5kTpOlQf&_r=1">
              <SiTiktok size={20} color="white" />
            </a>
          </li>
          <li className="ms-[12px] list-none">
            <span className="block w-[1px] h-24 bg-[#d0e1f9]"></span>
          </li>
        </ul>
      </div>
      <div className="md:fixed md:block hidden mt-[35vh] right-0 bottom-0 me-[4vw]">
        <ul className="">
          <li className="list-none writing-vertical mb-7">
            <a href="" className="text-[#d0e1f9]">
              shofiyulfuad797@gmail.com
            </a>
          </li>
          <li className="list-none ms-[10px]">
            <span className="block w-[1px] h-24 bg-[#d0e1f9]"></span>
          </li>
        </ul>
      </div>
    </>
  );
}
