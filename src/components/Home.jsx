export default function Home() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col h-screen md:px-[12%] px-[6%] justify-center">
        <div className="pb-5">
          <p className="text-lg text-white">Hi, my name is</p>
        </div>
        <div className="pb-7">
          <h1 className="md:text-[6vw] text-[9vw] font-bold text-white sm:leading-none ">
            Shofiyul Fuad
          </h1>
          <h1 className="md:text-[6vw] text-[9vw] font-bold text-[#4d648d] sm:leading-none leading-10">
            I build things for the web
          </h1>
        </div>
        <div className="mb-10 max-w-lg">
          <p className="text-white">
            I am a final-year student at Trunojoyo University. I have a keen
            interest in web programming, and currently, I am concentrating on
            enhancing my skills in front-end web development.
          </p>
        </div>
        <div className="">
          <a href="https://drive.google.com/file/d/1fCcf-6tXc03emazKexw06GOj4KV8jzH7/view?usp=sharing">
            <button className="border-2 text-white px-10 py-4 rounded-md hover:[box-shadow:_4px_4px_0_rgb(204,168,135)]">
              Check out my resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
