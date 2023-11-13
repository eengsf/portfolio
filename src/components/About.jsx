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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perferendis autem, dolorem et officia soluta maiores fugit ipsum explicabo rerum, eum optio dolor, aliquam quis itaque vel veniam cupiditate quasi.</p>
                  <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam in, <span className='text-[#4d648d]'>Lorem, ipsum dolor repudiandae ipsum.</span> magnam dolor illum vero assumenda debitis architecto nobis.</p>
                  <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit <span className='text-[#4d648d]'>Lorem, ipsum dolor </span>. Eligendi, eveniet minus quas vero iusto et!</p>

                  <h1 className='mt-3'>Here are a few technologies I have been working with recently:</h1>
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