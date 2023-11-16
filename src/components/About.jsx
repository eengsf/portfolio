import shofiyul from '../assets/shofiyul.jpg'

export default function About() {
   return (
      <>
         <div id='about' className="flex flex-col md:px-[12%] px-[6%] gap-10">
            <div className="flex items-center">
               <h1 className="text-[#d0e1f9] me-[1vw] text-2xl font-bold">01. About Me</h1>
               <span className="md:w-[20vw] w-[40vw] h-[1px] bg-[#d0e1f9]"></span>
            </div>
            <div className='md:grid md:grid-cols-7 flex flex-col gap-10 text-justify'>
               <div className="col-span-4 text-[#d0e1f9]">
                  <p>
                     Hello! My name is Shofiyul Fuad. I am a student at Trunojoyo University actively involved in the organization UKMFT SOKET, which focuses on robotics. In UKMFT SOKET, I am part of the robot team and have learned a lot, <span className='text-[#4d648d]'>especially in robotics programming,</span> leading me to participate in Indonesian robot contests.
                  </p>
                  <p className='mt-3'>
                     Fast-forward to my final semester in 2022, I began to develop an interest in web programming, particularly in <span className='text-[#4d648d]'>front-end web development</span>. I started learning a lot about <span className='text-[#4d648d]'>front-end web development </span>from various social media platforms and took part in several online training sessions
                  </p>
                  <h1 className='mt-3'>Here are some technologies that I have learned:</h1>
                  <ul className='list-disc list-inside grid grid-cols-2'>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>JavaScript</li>
                     <li>React</li>
                     <li>Tailwind</li>
                     <li>Bootstrap</li>
                  </ul>
               </div>
               <div className='flex justify-center col-span-3'>
                  <img src={shofiyul} alt="" className='lg:w-[23vw] lg:h-[23vw] md:w-[30vw] md:h-[30vw] w-[290px] rounded-md css-box-shadow [box-shadow:_6px_6px_0_rgb(15,23,42),_10px_10px_0_rgb(77,100,128)]' />
               </div>
            </div>
         </div>
      </>
   );
}