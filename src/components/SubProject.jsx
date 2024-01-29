import SubGambarKanan from "./SubGambarKanan";
import SubGambarKiri from "./SubGambarKiri";

export default function SubProject({ gambar, value }) {
  return (
    <>
      <div className="text-[#d0e1f9] grid grid-cols-5 relative md:bg-none bg-image">
        <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-[#283655] md:opacity-0 opacity-90 hover:opacity-0"></div>

        {gambar ? (
          <SubGambarKiri value={value} />
        ) : (
          <SubGambarKanan value={value} />
        )}
      </div>
    </>
  );
}
