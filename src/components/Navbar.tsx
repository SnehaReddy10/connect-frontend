import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex gap-32 justify-center text-xxs font-semibold tracking-widest">
      <Link to="/">
        <div className="flex justify-center items-center">
          <img
            src="/assets/icons/puzzle.png"
            alt="puzzle"
            className="h-8 w-8 rotate-90"
          />
          <p className="px-2 py-1 text-xs font-sans font-bold">SOLUTIONSPACE</p>
        </div>
      </Link>
      <div className="flex gap-16 justify-between items-center text-xxs font-semibold tracking-widest">
        <div className="flex">
          <div className="nav-item">
            <Link to="/">HOME</Link>
          </div>
          <div className="nav-item">
            <Link to="/issues">ISSUES</Link>
          </div>
          <div className="nav-item">
            <Link to="/issues">MY CONCERNS</Link>
          </div>
        </div>
        <div className="flex">
          <div className="nav-item">
            <Link to="login">LOGIN</Link>
          </div>
          <div className="nav-item">
            <Link to="register">REGISTER</Link>
          </div>
          <div className="nav-item hidden">LOGOUT</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
