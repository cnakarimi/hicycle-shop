const PriceFilter = () => {
  return (
    <div className="flex flex-col  justify-center items-center mt-2 ">
      <input type="range" min="100" max="4000" />
      <div className="flex justify-between w-full mt-2">
        <p>100$</p>
        <p>4000$</p>
      </div>
    </div>
  );
};

export default PriceFilter;
