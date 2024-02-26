import TextSd from "./TextSd";

const Text = ({ posisiGambar, value }) => {
  return (
    <>
      <div className="md:w-5/12 w-full  md:flex hidden flex-col justify-between text-white">
        <div
          className={`${
            !posisiGambar ? "text-start" : "text-end"
          } h-2/5 flex flex-col lg:justify-center justify-start`}>
          <h2>Project {value.no}</h2>
          <a href={value.link}>
            <h1 className="text-2xl font-bold">{value.nama}</h1>
          </a>
        </div>
        <div
          className={`md:bg-[#283655] md:py-2 md:px-5 rounded-md flex items-center  lg:max-w-[40vw] max-w-[45vw] lg:h-1/3 absolute ${
            !posisiGambar ? "left-0" : "right-0"
          } top-[33%] lg:text-base text-sm z-10`}>
          <p
            className={`${
              posisiGambar === "kanan" ? "text-start" : "text-end"
            }`}>
            {value.paragraf}
          </p>
        </div>
        <div
          className={`flex ${
            !posisiGambar ? "md:justify-start" : "md:justify-end"
          }  lg:items-start items-center list-none gap-3 h-[25%]`}>
          {value.lists.map((list, index) => (
            <li key={index} className="text-sm">
              {list}
            </li>
          ))}
        </div>
      </div>
      <div className="md:hidden block absolute w-full h-full z-10">
        <TextSd value={value} />
      </div>
    </>
  );
};

export default Text;
