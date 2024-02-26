import articlelist from "../assets/article-list.png";
import topicCrud from "../assets/topicCrud.png";
import onlineshop from "../assets/onlineShop.png";
import landingpage from "../assets/real-estate-lp.png";
import SubProject from "./SubProject";

const value3 = {
  no: "3",
  nama: "Article Lists App",
  paragraf: `This application is a project that utilizes an API to display articles. It includes a feature to search for articles from several countries, specific categories, and other general topics.`,
  link: "https://article-list-one.vercel.app/",
  lists: ["Next js", "Tailwindcss"],
  asset: articlelist,
};

const value4 = {
  no: "4",
  nama: "Topic CRUD",
  paragraf: `This application is a simple project that features CRUD (Create, Read, Update, Delete) operations using Next.js, Tailwind CSS, and MongoDB as its database.`,
  link: "https://cobafullstack.vercel.app/",
  lists: ["Next js", "Tailwindcss", "MongoBD"],
  asset: topicCrud,
};

const value2 = {
  no: "2",
  nama: "Toko Onlineku",
  paragraf: `An interactive and responsive frontend web project for an online store, built with modern technologies Next.js and Framer Motion.`,
  link: "https://warung-mangan.vercel.app/",
  lists: ["Next js", "Tailwindcss", "Framer Motion"],
  asset: onlineshop,
};
const value1 = {
  no: "1",
  nama: "Web Interaktif Responsif",
  paragraf: `An interactive and responsive web project with several supported animation views, built with modern Next.js technology.`,
  link: "https://asc-sf.vercel.app/",
  lists: ["Next js", "Tailwindcss", "Redux Toolkit"],
  asset: landingpage,
};

export default function Project() {
  return (
    <>
      <div
        id="project"
        className="flex flex-col md:px-[14%] px-[8%] py-[12%] w-full gap-10">
        <div className="flex items-center">
          <h1 className="text-white me-[1vw] text-2xl font-bold">
            03. Project
          </h1>
          <span className="w-64 h-[1px] bg-white"></span>
        </div>

        <SubProject posisiGambar={true} value={value1} />
        <SubProject posisiGambar={false} value={value2} />
        <SubProject posisiGambar={true} value={value3} />
        <SubProject posisiGambar={false} value={value4} />
      </div>
    </>
  );
}
