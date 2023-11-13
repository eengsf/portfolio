import github from '../assets/github.svg'
import ig from '../assets/ig.svg'
import linkedin from '../assets/linkedin.svg'
import codepen from '../assets/codepen.svg'
import fb from '../assets/fb.svg'

export default function Contact() {
   return (
      <>
         <div id='contact' className="flex flex-col relative lg:justify-between justify-center items-center text-center h-screen md:px-[12%] px-[6%] lg:pt-[10%]">
            <div className="text-[#d0e1f9] max-w-xl flex flex-col gap-5">
               <h1 className="">04. What{`'`}s Next?</h1>
               <h1 className="font-bold md:text-[4vw] text-2xl">Get In Touch</h1>
               <p>At the moment, I am exploring new opportunities, and my inbox is always open. Whether you have any questions or just want to say hello, I will do my best to get back to you</p>
               <div className="py-5">
                  <button className="border-2 text-[#d0e1f9] px-8 py-3 rounded-md hover:[box-shadow:_4px_4px_0_rgb(204,168,135)]">Say Hello</button>
               </div>
            </div>
            <div className="text-[#d0e1f9] absolute bottom-5">
               <div className="md:hidden block">
                  <ul className='flex gap-3'>
                     <li className='mb-3 list-none'><a href=""><img src={github} alt="" /></a></li>
                     <li className='mb-3 list-none'><a href=""><img src={ig} alt="" /></a></li>
                     <li className='mb-3 list-none'><a href=""><img src={linkedin} alt="" /></a></li>
                     <li className='mb-3 list-none'><a href=""><img src={fb} alt="" /></a></li>
                     <li className='mb-7 list-none'><a href=""><img src={codepen} alt="" /></a></li>
                  </ul>
               </div>
               <p>Built by Shofiyul Fuad</p>
               <p>eengsf</p>
            </div>
         </div>
      </>
   );
}