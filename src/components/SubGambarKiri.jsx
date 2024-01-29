export default function SubGambarKiri({ value }) {
  return (
    <>
      <div className="md:relative md:block hidden md:col-span-3 col-span-5 items-center">
        <a href={value.link}>
          <img src={value.asset} alt="" className="w-full rounded-xl" />
          <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-[#283655] md:opacity-40 opacity-90 hover:opacity-0"></div>
        </a>
      </div>
      <div className="md:absolute md:col-span-2 col-span-5 flex flex-col md:justify-center lg:w-[50%] md:w-[65%] w-full h-full md:text-end md:top-1/2 md:right-0 md:transform md:-translate-y-1/2 rounded-lg md:p-0 p-10 gap-3 z-40">
        <div>
          <h1>Project {value.no}</h1>
          <a href={value.link}>
            <h1 className="text-2xl font-bold">{value.nama}</h1>
          </a>
        </div>
        <div className="md:bg-[#283655] md:py-7 md:px-7 rounded-md">
          <p>{value.paragraf}</p>
        </div>
        <div className="flex md:justify-end items-center list-none gap-3">
          {value.lists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </div>
      </div>
    </>
  );
}
