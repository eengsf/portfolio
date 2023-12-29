import apkcatatan from '../assets/apkcatatan.png'
import bookShelf from '../assets/bookShelf.png'
import gallery from '../assets/gallery.png'
import animeList from '../assets/anime.png'

export default function Project() {
   return (
      <>
         <div id="project" className="flex flex-col md:px-[12%] px-[6%] py-[10%] gap-10">
            <div className="flex items-center">
               <h1 className="text-[#d0e1f9] me-[1vw] text-2xl font-bold">03. Project</h1>
               <span className="w-64 h-[1px] bg-[#d0e1f9]"></span>
            </div>

            <div className="text-[#d0e1f9] grid grid-cols-5 relative md:bg-none bg-image">
               <div className='absolute top-0 left-0 w-full h-full rounded-xl bg-[#283655] md:opacity-0 opacity-90 hover:opacity-0'></div>
               <div className="md:relative md:block hidden md:col-span-3 col-span-5 items-center">
                  <a href="https://apk-catatan.vercel.app/">
                     <img src={apkcatatan} alt="" className='w-full rounded-xl' />
                     <div className='absolute top-0 left-0 w-full h-full rounded-xl bg-[#283655] md:opacity-40 opacity-90 hover:opacity-0'></div>
                  </a>
               </div>
               <div className="md:absolute md:col-span-2 col-span-5 flex flex-col md:justify-center lg:w-[50%] md:w-[65%] w-full h-full md:text-end md:top-1/2 md:right-0 md:transform md:-translate-y-1/2 rounded-lg md:p-0 p-10 gap-3 z-40">
                  <div>
                     <h1>Project 1</h1>
                     <a href="https://apk-catatan.vercel.app/">
                        <h1 className='text-2xl font-bold'>Apk Notes</h1>
                     </a>
                  </div>
                  <div className='md:bg-[#283655] md:py-7 md:px-7 rounded-md'>
                     <p>
                        A note-taking application with features to add, delete, archive notes, and also restore archived notes. It can perform searches based on the note titles.</p>
                  </div>
                  <div className='flex md:justify-end items-center list-none gap-3'>
                     <li>React</li>
                     <li>Tailwind</li>
                     <li>Vite</li>
                  </div>
               </div>
            </div>
            <div className="text-[#d0e1f9] grid grid-cols-5 relative md:bg-none bg-image">
               <div className='absolute top-0 left-0 w-full h-full rounded-xl bg-[#283655] md:opacity-0 opacity-90 hover:opacity-0'></div>
               <div className="md:absolute md:col-span-2 col-span-5 flex flex-col md:justify-center lg:w-[50%] md:w-[65%] w-full h-full text-start md:top-1/2 md:left-0 md:transform md:-translate-y-1/2 rounded-lg md:p-0 p-10 gap-3 z-40">
                  <div>
                     <h1>Project 2</h1>
                     <a href="https://bookshelf-flame.vercel.app/">
                        <h1 className='text-2xl font-bold'>BookShelf</h1>
                     </a>
                  </div>
                  <div className='md:bg-[#283655] md:py-7 md:px-7 rounded-md'>
                     <p>A bookshelf application with features to add, delete, move tagged books, and also return books to their previous shelf. It can perform searches based on the book titles.</p>
                  </div>
                  <div className='flex justify-start items-center list-none gap-3'>
                     <li>HTML</li>
                     <li>CSS</li>
                     <li>JavaScript</li>
                  </div>
               </div>
               <div className="md:relative md:block hidden md:col-span-3 col-span-5 items-center md:col-end-6">
                  <a href="https://bookshelf-flame.vercel.app/">
                     <img src={bookShelf} alt="" className='w-full rounded-xl' />
                     <div className='absolute top-0 left-0 w-full h-full rounded-xl bg-[#283655] md:opacity-40 opacity-90 hover:opacity-0'></div>
                  </a>
               </div>
            </div>
            <div className="text-[#d0e1f9] grid grid-cols-5 relative md:bg-none bg-image">
               <div className='absolute top-0 left-0 w-full h-full rounded-xl bg-[#283655] md:opacity-0 opacity-90 hover:opacity-0'></div>
               <div className="md:relative md:block hidden md:col-span-3 col-span-5 items-center">
                  <a href="https://gallery-eengsf.vercel.app/">
                     <img src={gallery} alt="" className='w-full rounded-xl' />
                     <div className='absolute top-0 left-0 w-full h-full rounded-xl bg-[#283655] md:opacity-40 opacity-90 hover:opacity-0'></div>
                  </a>
               </div>
               <div className="md:absolute md:col-span-2 col-span-5 flex flex-col md:justify-center lg:w-[50%] md:w-[65%] w-full h-full md:text-end md:top-1/2 md:right-0 md:transform md:-translate-y-1/2 rounded-lg md:p-0 p-10 gap-3 z-40">
                  <div>
                     <h1>Project 3</h1>
                     <a href="https://gallery-eengsf.vercel.app/">
                        <h1 className='text-2xl font-bold'>Simple Gallery</h1>
                     </a>
                  </div>
                  <div className='md:bg-[#283655] md:py-7 md:px-7 rounded-md'>
                     <p>A simple web application with the idea of creating a web gallery, which is part of a basic web programming assignment submission.</p>
                  </div>
                  <div className='flex md:justify-end items-center list-none gap-3'>
                     <li>HTML</li>
                     <li>CSS</li>
                  </div>
               </div>
            </div>
            <div className="text-[#d0e1f9] grid grid-cols-5 relative md:bg-none bg-image">
               <div className='absolute top-0 left-0 w-full h-full rounded-xl bg-[#283655] md:opacity-0 opacity-90 hover:opacity-0'></div>
               <div className="md:absolute md:col-span-2 col-span-5 flex flex-col md:justify-center lg:w-[50%] md:w-[65%] w-full h-full text-start md:top-1/2 md:left-0 md:transform md:-translate-y-1/2 rounded-lg md:p-0 p-10 gap-3 z-40">
                  <div>
                     <h1>Project 4</h1>
                     <a href="https://anime-list-eengsf.vercel.app/">
                        <h1 className='text-2xl font-bold'>Anime List App</h1>
                     </a>
                  </div>
                  <div className='md:bg-[#283655] md:py-7 md:px-7 rounded-md'>
                     <p>This application is a simple project that utilizes an API to display Anime data. The application is built using Next.js and Tailwind CSS.</p>
                  </div>
                  <div className='flex justify-start items-center list-none gap-3'>
                     <li>Next js</li>
                     <li>Tailwind</li>
                  </div>
               </div>
               <div className="md:relative md:block hidden md:col-span-3 col-span-5 items-center md:col-end-6">
                  <a href="https://anime-list-eengsf.vercel.app/">
                     <img src={animeList} alt="" className='w-full rounded-xl' />
                     <div className='absolute top-0 left-0 w-full h-full rounded-xl bg-[#283655] md:opacity-40 opacity-90 hover:opacity-0'></div>
                  </a>
               </div>
            </div>
         </div>
      </>
   );
}