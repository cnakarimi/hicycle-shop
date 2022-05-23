import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const ColorItems = () => {
  const [choosedColor, setChoosedColor] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="mt-3 flex items-center">
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center bg-blue-500`}
        >
          <AiOutlineCheck className="text-white" />
        </span>
        <div className="ml-2">blue</div>
      </div>
      <div className="mt-3 flex items-center">
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center bg-red-500`}
        >
          <AiOutlineCheck className="text-white" />
        </span>
        <div className="ml-2">red</div>
      </div>
      <div className="mt-3 flex items-center">
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center bg-orange-400`}
        >
          <AiOutlineCheck className="text-white" />
        </span>
        <div className="ml-2">orange</div>
      </div>
      <div className="mt-3 flex items-center">
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center bg-slate-800`}
        >
          <AiOutlineCheck className="text-white" />
        </span>
        <div className="ml-2">dark blue</div>
      </div>
      <div className="mt-3 flex items-center">
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center bg-green-700`}
        >
          <AiOutlineCheck className="text-white" />
        </span>
        <div className="ml-2">green</div>
      </div>
      <div className="mt-3 flex items-center">
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center bg-slate-600`}
        >
          <AiOutlineCheck className="text-white" />
        </span>
        <div className="ml-2">gray</div>
      </div>
    </div>
  );
};

export default ColorItems;
