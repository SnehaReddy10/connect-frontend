function Login() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-6">
      <h5 className="text-base text-slate-100">
        Welcome back. Please login to continue
      </h5>
      <div className="grid grid-cols-1 w-1/4 gap-3 ">
        <input type="text" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />
      </div>
      <button className="button">Login</button>
    </div>
  );
}

export default Login;
