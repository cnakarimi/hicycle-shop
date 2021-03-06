import { Fragment, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import PriceItems from "../UI/FilterItems/PriceItems";

const PriceFilter = () => {
  const [priceOpen, setPriceOpen] = useState(false);

  const openPriceHandler = () => {
    setPriceOpen(true);
  };
  const closeBrandsHandler = () => {
    setPriceOpen(false);
  };

  return (
    <Fragment>
      <div className="flex  justify-between items-center  ">
        <div className="mt-5 text-lg">price</div>
        {!priceOpen && (
          <AiOutlinePlusCircle
            className="mt-5 cursor-pointer"
            onClick={openPriceHandler}
          />
        )}
        {priceOpen && (
          <AiOutlineMinusCircle
            className="mt-5 cursor-pointer"
            onClick={closeBrandsHandler}
          />
        )}
      </div>
      {priceOpen && <PriceItems />}
    </Fragment>
  );
};

export default PriceFilter;
