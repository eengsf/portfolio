
export default function Home() {
   return (
      <>
         <div id="home" className="flex flex-col h-screen md:px-[12%] px-[6%] justify-center">
            <div className="pb-5">
               <p className="text-lg text-[#d0e1f9]">Hi, my name is</p>
            </div>
            <div className="pb-7">
               <h1 className="md:text-[6vw] text-[9vw] font-bold text-[#d0e1f9] sm:leading-none ">Shofiyul Fuad</h1>
               <h1 className="md:text-[6vw] text-[9vw] font-bold text-[#4d648d] sm:leading-none leading-10">I build things for the web</h1>
            </div>
            <div className="mb-10 max-w-lg">
               <p className="text-[#d0e1f9]">Lorem ipsum dolor sit amet, consectetur elit adipisicing. Numquam earum labore cumque commodi maiores error obcaecati sequi amet mollitia. Lorem ipsum dolor assumenda sit adipisicing ipsum</p>
            </div>
            <div className="">
               <button className="border-2 text-[#d0e1f9] px-10 py-4 rounded-md hover:[box-shadow:_4px_4px_0_rgb(204,168,135)]">Check out my course</button>
            </div>
         </div>
      </>
   );
}