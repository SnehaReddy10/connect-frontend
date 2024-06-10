function Register() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-6">
      <h5 className="text-base text-slate-100">
        Welcome to SolutionSpace. Please register to continue
      </h5>
      <div className="grid grid-cols-2 w-1/2 gap-3 ">
        <input type="text" placeholder="Username" className="input" />
        <input type="text" placeholder="Name" className="input" />
        <input type="text" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />
      </div>
      <button className="button">Register</button>
    </div>
  );
}

export default Register;
