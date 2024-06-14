const Card = ({ children }: any) => {
  return (
    <div className="animate-zoomIn border hover:scale-[1.02] border-slate-500 shadow-sm shadow-slate-400 p-4 rounded-md transition ease-in hover">
      {children}
    </div>
  );
};

export default Card;
