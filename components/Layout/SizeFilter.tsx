import { Fragment, useState } from "react";
import WheelSizeItems from "../UI/FilterItems/WheelSizeItems";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const SizeFilter = () => {
  const [wheelSizeOpen, setWheelSizeOpen] = useState(false);

  const openWheelSizeHandler = () => {
    setWheelSizeOpen(true);
  };
  const closeWheelSizeHandler = () => {
    setWheelSizeOpen(false);
  };

  return (
    <Fragment>
      <div className="flex  justify-between items-center  ">
        <div className="mt-5 text-lg">wheel size</div>
        {!wheelSizeOpen && (
          <AiOutlinePlusCircle
            className="mt-5 cursor-pointer"
            onClick={openWheelSizeHandler}
          />
        )}
        {wheelSizeOpen && (
          <AiOutlineMinusCircle
            className="mt-5 cursor-pointer"
            onClick={closeWheelSizeHandler}
          />
        )}
      </div>
      {wheelSizeOpen && <WheelSizeItems />}
    </Fragment>
  );
};

export default SizeFilter;
