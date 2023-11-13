import github from '../assets/github.svg'
import ig from '../assets/ig.svg'
import linkedin from '../assets/linkedin.svg'
import codepen from '../assets/codepen.svg'
import fb from '../assets/fb.svg'

export default function Info() {
   return (
      <>
         <div className="md:fixed md:block hidden mt-[35vh] left-0 bottom-0 ms-[4vw]">
            <ul>
               <li className='mb-3 list-none'><a href=""><img src={github} alt="" /></a></li>
               <li className='mb-3 list-none'><a href=""><img src={ig} alt="" /></a></li>
               <li className='mb-3 list-none'><a href=""><img src={linkedin} alt="" /></a></li>
               <li className='mb-3 list-none'><a href=""><img src={fb} alt="" /></a></li>
               <li className='mb-7 list-none'><a href=""><img src={codepen} alt="" /></a></li>
               <li className='ms-[14px] list-none'><span className='block w-[1px] h-24 bg-[#d0e1f9]'></span></li>
            </ul>
         </div>
         <div className="md:fixed md:block hidden mt-[35vh] right-0 bottom-0 me-[4vw]">
            <ul className=''>
               <li className='list-none writing-vertical mb-7'><a href="" className='text-[#d0e1f9]'>shofiyulfuad797@gmail.com</a></li>
               <li className='list-none ms-[10px]'><span className='block w-[1px] h-24 bg-[#d0e1f9]'></span></li>
            </ul>
         </div>
      </>
   );
}