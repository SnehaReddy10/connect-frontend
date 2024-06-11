function Spinner() {
  return (
    <div className="flex gap-2 justify-center items-center min-h-screen">
      {[1, 2, 3].map((x: any) => {
        return (
          <div key={x} className={`h-2 w-2 bg-slate-300 rounded-full`}></div>
        );
      })}
    </div>
  );
}

export default Spinner;
