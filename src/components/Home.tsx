import Issues from './Issues';

const Home = () => {
  console.log(this);
  return (
    <div className="flex flex-col justify-center items-center mt-10 animate-fadeIn">
      <div className="text-2xl font-sans font-bold text-center">
        <p className="p-4 tracking-widest">
          To have a great idea, have a lot of them.
        </p>
        <p className="text-base text-slate-100">
          Report, Brainstorm, Innovate, Resolve
        </p>
      </div>
      <div className="flex mt-10 pb-20">
        <div className="translate-y-20 translate-x-28">
          <img
            src="/assets/imgs/hero-2.jpg"
            alt="brain"
            className="w-[40vw] h-[60vh]"
          />
        </div>
        <div className="z-10">
          <img
            src="/assets/imgs/brain-2.png"
            alt="brain"
            className="w-[40vw] h-[60vh]"
          />
        </div>
      </div>

      <div className="pb-10">
        <Issues />
      </div>
    </div>
  );
};

export default Home;
