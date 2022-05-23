import { Fragment } from "react";

const CategoryItems = () => {
  return (
    <Fragment>
      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          name="vehicle1"
          value="Bike"
          className="accent-zinc-900"
        />
        <label htmlFor="vehicle1" className="ml-2">
          I have a bike
        </label>
      </div>
      <div className="flex items-center mt-2">
        <input type="checkbox" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1" className="ml-2">
          I have a bike
        </label>
      </div>
      <div className="flex items-center mt-2">
        <input type="checkbox" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1" className="ml-2">
          I have a bike
        </label>
      </div>
      <div className="flex items-center mt-2">
        <input type="checkbox" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1" className="ml-2">
          I have a bike
        </label>
      </div>
      <div className="flex items-center mt-2">
        <input type="checkbox" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1" className="ml-2">
          I have a bike
        </label>
      </div>
    </Fragment>
  );
};

export default CategoryItems;
