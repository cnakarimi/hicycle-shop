import { Fragment, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import CategoryItems from "../UI/FilterItems/CategoryItems";

const CategoryFilter = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);

  const openCategoryHandler = () => {
    setCategoryOpen(true);
  };
  const closeCategoryHandler = () => {
    setCategoryOpen(false);
  };

  return (
    <Fragment>
      <div className="flex  justify-between items-center  ">
        <div className="mt-5 text-lg">category</div>
        {!categoryOpen && (
          <AiOutlinePlusCircle
            className="mt-5 cursor-pointer"
            onClick={openCategoryHandler}
          />
        )}
        {categoryOpen && (
          <AiOutlineMinusCircle
            className="mt-5 cursor-pointer"
            onClick={closeCategoryHandler}
          />
        )}
      </div>
      {categoryOpen && <CategoryItems />}
    </Fragment>
  );
};

export default CategoryFilter;
