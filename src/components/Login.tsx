import { useEffect, useState } from 'react';
import { loginUser } from '../redux/user/userService';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { TOKEN } from '../constants/Constants';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, token, error } = useSelector((s: any) => s.user);

  useEffect(() => {
    if (token) {
      localStorage.setItem(TOKEN, token);
      navigate('/');
    }
  }, [token]);

  const handleLoginUser = async () => {
    await loginUser({ email, password }, dispatch);
    setEmail('');
    setPassword('');
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="relative">
        <div className="absolute end-4 animate-fade-in-out transition ease rounded-sm p-1 w-1/7 bg-red-400 text-white">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-6">
      <h5 className="text-base text-slate-100">
        Welcome back. Please login to continue
      </h5>
      <div className="grid grid-cols-1 w-1/4 gap-3 ">
        <input
          onBlur={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          className="input"
        />
        <input
          onBlur={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="input"
        />
      </div>
      <button onClick={handleLoginUser} className="button">
        Login
      </button>
    </div>
  );
}

export default Login;
