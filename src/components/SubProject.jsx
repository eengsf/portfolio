import Gambar from "./Gambar";
import Text from "./Text";

const SubProject = ({ posisiGambar, value }) => {
  return (
    <>
      <div className="w-full relative flex md:flex-row flex-col">
        {!posisiGambar ? (
          <>
            <Text posisiGambar={posisiGambar} value={value} />
            <Gambar value={value} />
          </>
        ) : (
          <>
            <Gambar value={value} />
            <Text posisiGambar={posisiGambar} value={value} />
          </>
        )}
      </div>
    </>
  );
};
export default SubProject;
