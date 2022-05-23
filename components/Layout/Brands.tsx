import { Fragment, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import BrandsItems from "../UI/FilterItems/BrandsItems";

const BrandsFilter = () => {
  const [brandsOpen, setBrandsOpen] = useState(false);

  const openBrandsHandler = () => {
    setBrandsOpen(true);
  };
  const closeBrandsHandler = () => {
    setBrandsOpen(false);
  };

  return (
    <Fragment>
      <div className="flex  justify-between items-center  ">
        <div className="mt-5 text-lg">brands</div>
        {!brandsOpen && (
          <AiOutlinePlusCircle
            className="mt-5 cursor-pointer"
            onClick={openBrandsHandler}
          />
        )}
        {brandsOpen && (
          <AiOutlineMinusCircle
            className="mt-5 cursor-pointer"
            onClick={closeBrandsHandler}
          />
        )}
      </div>
      {brandsOpen && <BrandsItems />}
    </Fragment>
  );
};

export default BrandsFilter;
