import Issues from './Issues';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 animate-fadeIn">
      <div className="text-2xl uppercase font-serif tracking-wider text-center">
        <p className="p-4">Report, Brainstorm, Innovate, Resolve</p>
      </div>

      <div className="mt-5 flex flex-col gap-4 items-center border h-80 border-slate-300 w-[48%] px-4 py-3 rounded-sm shadow-lg shadow-slate-900 hover:bg-slate-700 transition ease">
        <h3 className="font-sans tracking-wide font-semibold">Got an Issue</h3>
        <div>
          <div className="h-32 w-24 border-r-8 border-slate-300 rounded-r-[8000px]"></div>
          <div className="w-1 h-16 border-4 border-slate-300 translate-x-8"></div>
          <div className="w-2 h-2 bg-slate-300 rounded-full translate-x-[1.875rem] mt-2"></div>
        </div>
        <h3 className="font-sans tracking-wide font-semibold">
          Report It Here and Engage with a Community of Solvers!
        </h3>
      </div>

      <div className="mt-10 pb-10 mb-10">
        <Issues />
      </div>
    </div>
  );
};

export default Home;
