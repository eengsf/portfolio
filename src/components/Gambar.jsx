const Gambar = ({ value }) => {
  return (
    <div className="md:w-7/12 w-full relative cursor-pointer">
      <a href={value.link}>
        <img src={value.asset} alt="" className="object-cover rounded-xl" />
      </a>
      <div className="absolute top-0 left-0 w-full h-full hover:bg-transparent bg-cyan-950/40"></div>
    </div>
  );
};

export default Gambar;
