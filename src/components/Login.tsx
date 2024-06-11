import { useState } from 'react';
import { loginUser } from '../redux/user/userService';
import { useDispatch } from 'react-redux';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLoginUser = () => {
    loginUser({ email, password }, dispatch);
    setEmail('');
    setPassword('');
  };

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
