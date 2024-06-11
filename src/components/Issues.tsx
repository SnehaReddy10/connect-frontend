import { Link, useNavigate } from 'react-router-dom';
import Card from './Card';
import { useEffect } from 'react';
import { getAllIssues } from '../redux/issue/issueService';
import { useDispatch, useSelector } from 'react-redux';
import { Issue } from '../models/issue.model';
import Spinner from './Spinner';

const Issues = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { issues, loading, error } = useSelector((s: any) => s.issue);
  useEffect(() => {
    getAllIssues(dispatch);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    navigate('/login');
    return <div>{error}</div>;
  }

  return (
    <div className="mt-7 flex flex-col gap-3">
      <div className="">
        <h4 className="text-slate-300 flex justify-center text-xs">
          Got an Issue?&nbsp;
          <p className="text-white font-sans font-bold">Report It Here</p>
          &nbsp;and Engage with a Community of Solvers!
        </h4>
      </div>
      <div className="relative flex justify-end">
        <div className="flex gap-1 items-center hover border border-slate-600 px-3 py-1 rounded-md">
          <img
            src="/assets/icons/funnel.png"
            alt="filter"
            className="h-4 w-4"
          />
          <p className="text-xxs font-semibold tracking-wider">Filter</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {issues &&
          issues.map((issue: Issue) => (
            <Link to={`/room/${issue._id}`}>
              <Card>
                <div className="flex flex-col gap-2 px-6">
                  <h3 className="text-xs font-semibold uppercase">
                    {issue.title}
                  </h3>
                  <p className="text-xxs line-clamp-2 text-slate-300">
                    {issue.description}
                  </p>
                  <div className="flex gap-2 justify-end">
                    <div className="flex gap-1">
                      <img
                        src="/assets/icons/like-outline.png"
                        alt="like"
                        className="h-3 w-3"
                      />
                      {/* <p className="text-xxs">{issue.likes}</p> */}
                    </div>
                    <div className="flex gap-1">
                      <img
                        src="/assets/icons/bubble-chat.png"
                        alt="like"
                        className="h-3 w-3"
                      />
                      {/* <p className="text-xxs">{issue.comments.length}</p> */}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Issues;
