const ColorFilter = () => {
  return (
    <div className="flex flex-col    ">
      <div className="mt-3 flex items-center">
        <span className="w-5 h-5 bg-blue-500 rounded-full"></span>
        <div className="ml-2">blue</div>
      </div>
      <div className="mt-3 flex items-center">
        <span className="w-5 h-5 bg-red-500 rounded-full"></span>
        <div className="ml-2">red</div>
      </div>
      <div className="mt-3 flex items-center">
        <span className="w-5 h-5 bg-orange-400 rounded-full"></span>
        <div className="ml-2">orange</div>
      </div>
      <div className="mt-3 flex items-center">
        <span className="w-5 h-5 bg-slate-800 rounded-full"></span>
        <div className="ml-2">dark blue</div>
      </div>
      <div className="mt-3 flex items-center">
        <span className="w-5 h-5 bg-green-700 rounded-full"></span>
        <div className="ml-2">green</div>
      </div>
      <div className="mt-3 flex items-center">
        <span className="w-5 h-5 bg-stone-700 rounded-full"></span>
        <div className="ml-2">gray</div>
      </div>
    </div>
  );
};

export default ColorFilter;
