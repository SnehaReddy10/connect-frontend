import { useEffect, useState } from 'react';
import { registerUser } from '../redux/user/userService';
import { useDispatch, useSelector } from 'react-redux';
import { TOKEN } from '../constants/Constants';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

function Register() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { loading, token, error } = useSelector((s: any) => s.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      localStorage.setItem(TOKEN, token);
      navigate('/');
    }
  }, [token]);

  const handleRegisterUser = () => {
    registerUser({ username, name, email, password }, dispatch);
    setUsername('');
    setName('');
    setEmail('');
    setPassword('');
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-6">
      <h5 className="text-base text-slate-100">
        Welcome to SolutionSpace. Please register to continue
      </h5>
      <div className="grid grid-cols-2 w-1/2 gap-3 ">
        <input
          onBlur={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          className="input"
        />
        <input
          onBlur={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          className="input"
        />
        <input
          onBlur={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          className="input"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="input"
        />
      </div>
      <button onClick={handleRegisterUser} className="button">
        Register
      </button>
      {error && (
        <div className="relative">
          <div className="absolute end-4 animate-fade-in-out transition ease rounded-sm p-1 w-1/7 bg-red-400 text-white">
            {error}
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
