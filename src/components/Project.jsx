import SubProject from "./SubProject";
import apkcatatan from "../assets/apkcatatan.png";
import bookShelf from "../assets/bookShelf.png";
import animeList from "../assets/anime.png";
import topiclist from "../assets/topicList.png";

const value1 = {
  no: "1",
  nama: "Book Shelf",
  paragraf: `A book shelf application with features to add, delete, move tagged
   books, and also return books to their previous shelf. It can perform
   searches based on the book titles.`,
  link: "https://bookshelf-flame.vercel.app/",
  lists: ["HTML", "CSS", "JavaScript"],
  asset: bookShelf,
};

const value2 = {
  no: "2",
  nama: "Apk Notes",
  paragraf: `A note-taking application with features to add, delete, archive
              notes, and also restore archived notes. It can perform searches
              based on the note titles.`,
  link: "https://apk-catatan.vercel.app/",
  lists: ["React", "Tailwindcss", "Vite"],
  asset: apkcatatan,
};

const value3 = {
  no: "3",
  nama: "Anime Lists App",
  paragraf: `This application is a simple project that utilizes an API to
  display Anime data. The application is built using Next.js and
  Tailwind CSS.`,
  link: "https://anime-list-eengsf.vercel.app/",
  lists: ["Next js", "Tailwindcss"],
  asset: animeList,
};

const value4 = {
  no: "4",
  nama: "Topic Lists App",
  paragraf: `This application is a simple project that features CRUD (Create, Read, Update, Delete) operations using Next.js, Tailwind CSS, and MongoDB as its database.`,
  link: "https://cobafullstack.vercel.app/",
  lists: ["Next js", "Tailwindcss", "MongoBD"],
  asset: topiclist,
};

export default function Project() {
  return (
    <>
      <div
        id="project"
        className="flex flex-col md:px-[12%] px-[6%] py-[10%] gap-10">
        <div className="flex items-center">
          <h1 className="text-[#d0e1f9] me-[1vw] text-2xl font-bold">
            03. Project
          </h1>
          <span className="w-64 h-[1px] bg-[#d0e1f9]"></span>
        </div>

        <SubProject gambar={true} value={value1} />
        <SubProject gambar={false} value={value2} />
        <SubProject gambar={true} value={value3} />
        <SubProject gambar={false} value={value4} />
      </div>
    </>
  );
}
