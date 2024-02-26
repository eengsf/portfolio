import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col relative lg:justify-between justify-center items-center text-center h-screen md:px-[12%] px-[6%] lg:pt-[10%]">
        <div className="text-white max-w-xl flex flex-col gap-5">
          <h1 className="">04. What{`'`}s Next?</h1>
          <h1 className="font-bold md:text-[4vw] text-2xl">Get In Touch</h1>
          <p>
            At the moment, I am exploring new opportunities, and my inbox is
            always open. Whether you have any questions or just want to say
            hello, I will do my best to get back to you
          </p>
          <div className="py-5">
            <button className="border-2 text-white px-8 py-3 rounded-md hover:[box-shadow:_4px_4px_0_rgb(204,168,135)]">
              Say Hello
            </button>
          </div>
        </div>
        <div className="text-white absolute bottom-5">
          <div className="md:hidden block">
            <ul className="flex gap-3">
              <li className="mb-5 list-none">
                <a href="https://github.com/eengsf">
                  <FiGithub size={20} color="white" />
                </a>
              </li>
              <li className="mb-5 list-none">
                <a href="">
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
            </ul>
          </div>
          <p>Built by Shofiyul Fuad</p>
          <p>eengsf</p>
        </div>
      </div>
    </>
  );
}
