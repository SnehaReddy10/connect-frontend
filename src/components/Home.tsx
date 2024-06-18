import { useSelector } from 'react-redux';
import Issues from './Issues';

const Home = () => {
  const { loading, error, issue } = useSelector((s: any) => s.issue);

  return (
    <div className="flex flex-col justify-center items-center mt-10 animate-fadeIn">
      <div className="text-2xl uppercase font-serif tracking-wider text-center">
        <p className="p-4">Report, Brainstorm, Innovate, Resolve</p>
      </div>

      {issue && (
        <div className="mt-5 border h-80 border-slate-300 w-[48%] px-4 py-3 rounded-sm shadow-lg shadow-slate-900 hover:bg-slate-700 transition ease">
          <h4>{issue.title}</h4>
          <p>{issue.description}</p>
          <p>{issue.comments}</p>
        </div>
      )}

      <div className="mt-10 pb-10 mb-10">
        <Issues />
      </div>
    </div>
  );
};

export default Home;
