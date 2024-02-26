const TextSd = ({ value }) => {
  return (
    <div className="flex flex-col bg-cyan-950/50 gap-3 w-full h-full justify-center items-center z-10 p-2 rounded-lg hover:bg-white/50 text-white hover:text-black">
      <div className={`text-center`}>
        <h2>Project {value.no}</h2>
        <a href={value.link}>
          <h1 className="text-2xl font-bold">{value.nama}</h1>
        </a>
      </div>
      <div className={`text-center`}>
        <p className={``}>{value.paragraf}</p>
      </div>
      <div className={`list-none text-center`}>
        {value.lists.map((list, index) => (
          <li key={index} className="text-sm">
            {list}
          </li>
        ))}
      </div>
    </div>
  );
};

export default TextSd;
