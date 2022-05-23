import { Fragment, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import ColorItems from "../UI/FilterItems/ColorsItems";

const ColorFilter = () => {
  const [colorsOpen, setColorsOpen] = useState(false);

  const openColorsHandler = () => {
    setColorsOpen(true);
  };
  const closeColorsHandler = () => {
    setColorsOpen(false);
  };

  return (
    <Fragment>
      <div className="flex  justify-between items-center  ">
        <div className="mt-5 text-lg">colors</div>
        {!colorsOpen && (
          <AiOutlinePlusCircle
            className="mt-5 cursor-pointer"
            onClick={openColorsHandler}
          />
        )}
        {colorsOpen && (
          <AiOutlineMinusCircle
            className="mt-5 cursor-pointer"
            onClick={closeColorsHandler}
          />
        )}
      </div>

      {colorsOpen && <ColorItems />}
    </Fragment>
  );
};

export default ColorFilter;
