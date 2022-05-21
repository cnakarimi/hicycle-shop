import React from "react";
import {
  AiTwotoneAppstore,
  AiOutlineUnorderedList,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import ColorFilter from "./ColorFilter";
import FilterOptions from "./FilterOptions";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="text-2xl mt-2 bg-white w-full h-12">
        <nav className="h-full">
          <ul className="flex justify-between h-full items-center">
            <li className=" w-3/4 flex pl-5">
              <a>address &gt; second &gt; third</a>
            </li>
            <li className="border-x-2  flex items-center h-full ">
              <a className="text-slate-400 px-4 ">sort by</a>
              <select className=" uppercase">
                <option>messi</option>
                <option>messi</option>
                <option>messi</option>
                <option>messi</option>
                <option>messi</option>
              </select>
            </li>
            <li className="px-5">
              <AiTwotoneAppstore />
            </li>
            <li className="px-5 ">
              <AiOutlineUnorderedList />
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex ">
        <div className="bg-white h-max w-2/12 mt-4  flex flex-col container px-12 ">
          <div className="flex  justify-between items-center  ">
            <div className="mt-5 text-lg">category</div>
            <AiOutlinePlusCircle className="mt-5" />
          </div>
          <FilterOptions />
          <div className="flex  justify-between items-center  ">
            <div className="mt-5 text-lg">brands</div>
            <AiOutlinePlusCircle className="mt-5" />
          </div>
          <FilterOptions />
          <div className="flex  justify-between items-center  ">
            <div className="mt-5 text-lg">wheel size</div>
            <AiOutlinePlusCircle className="mt-5" />
          </div>
          <SizeFilter />
          <div className="flex  justify-between items-center  ">
            <div className="mt-5 text-lg">price</div>
            <AiOutlinePlusCircle className="mt-5" />
          </div>
          <PriceFilter />
          <div className="flex  justify-between items-center  ">
            <div className="mt-5 text-lg">color</div>
            <AiOutlinePlusCircle className="mt-5" />
          </div>
          <ColorFilter />
        </div>
        <main className="mt-4 ml-5">{props.children}</main>
      </div>
    </div>
  );
};

export default Layout;
