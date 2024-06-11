import { useState } from 'react';
import { registerUser } from '../redux/user/userService';
import { useDispatch } from 'react-redux';

function Register() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleRegisterUser = () => {
    registerUser({ username, name, email, password }, dispatch);
    setUsername('');
    setName('');
    setEmail('');
    setPassword('');
  };
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
    </div>
  );
}

export default Register;
