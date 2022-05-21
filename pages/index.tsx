import Stars from "../components/UI/Stars";
import Image from "next/image";
import { AiFillEye } from "react-icons/ai";
import Pagination from "../components/Layout/Pagination";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="bg-white h-full grid grid-cols-3">
        <div className="px-12 mt-6 flex flex-col items-center">
          <div>name</div>
          <Stars />
          <Image src="/images/image-1.jpg" width={250} height={200} />
          <div className="text-lg">1000$</div>
          <div className="flex justify-around mt-4 w-full">
            <div className="hover:text-orange-600 cursor-pointer transition duration-200">
              compare
            </div>
            <div className="flex items-center hover:text-orange-600 cursor-pointer transition duration-200">
              <AiFillEye className="" />
              <div className="ml-2 ">quick view</div>
            </div>
          </div>
        </div>
        <div className="px-12 mt-6 flex flex-col items-center">
          <div>name</div>
          <Stars />
          <Image src="/images/image-1.jpg" width={250} height={200} />
          <div className="text-lg">1000$</div>
          <div className="flex justify-around mt-4 w-full">
            <div>compare</div>
            <div className="flex items-center">
              <AiFillEye />
              <div className="ml-2">quick view</div>
            </div>
          </div>
        </div>
        <div className="px-12 mt-6 flex flex-col items-center">
          <div>name</div>
          <Stars />
          <Image src="/images/image-1.jpg" width={250} height={200} />
          <div className="text-lg">1000$</div>
          <div className="flex justify-around mt-4 w-full">
            <div>compare</div>
            <div className="flex items-center">
              <AiFillEye />
              <div className="ml-2">quick view</div>
            </div>
          </div>
        </div>
        <div className="px-12 mt-6 flex flex-col items-center">
          <div>name</div>
          <Stars />
          <Image src="/images/image-1.jpg" width={250} height={200} />
          <div className="text-lg">1000$</div>
          <div className="flex justify-around mt-4 w-full">
            <div>compare</div>
            <div className="flex items-center">
              <AiFillEye />
              <div className="ml-2">quick view</div>
            </div>
          </div>
        </div>
        <div className="px-12 mt-6 flex flex-col items-center">
          <div>name</div>
          <Stars />
          <Image src="/images/image-1.jpg" width={250} height={200} />
          <div className="text-lg">1000$</div>
          <div className="flex justify-around mt-4 w-full">
            <div>compare</div>
            <div className="flex items-center">
              <AiFillEye />
              <div className="ml-2">quick view</div>
            </div>
          </div>
        </div>
        <div className="px-12 mt-6 flex flex-col items-center">
          <div>name</div>
          <Stars />
          <Image src="/images/image-1.jpg" width={250} height={200} />
          <div className="text-lg">1000$</div>
          <div className="flex justify-around mt-4 w-full">
            <div>compare</div>
            <div className="flex items-center">
              <AiFillEye />
              <div className="ml-2">quick view</div>
            </div>
          </div>
        </div>
        <div className="px-12 mt-6 flex flex-col items-center">
          <div>name</div>
          <Stars />
          <Image src="/images/image-1.jpg" width={250} height={200} />
          <div className="text-lg">1000$</div>
          <div className="flex justify-around mt-4 w-full">
            <div>compare</div>
            <div className="flex items-center">
              <AiFillEye />
              <div className="ml-2">quick view</div>
            </div>
          </div>
        </div>
        <div className="px-12 mt-6 flex flex-col items-center">
          <div>name</div>
          <Stars />
          <Image src="/images/image-1.jpg" width={250} height={200} />
          <div className="text-lg">1000$</div>
          <div className="flex justify-around mt-4 w-full">
            <div>compare</div>
            <div className="flex items-center">
              <AiFillEye />
              <div className="ml-2">quick view</div>
            </div>
          </div>
        </div>
        <div className="px-12 mt-6 flex flex-col items-center">
          <div>name</div>
          <Stars />
          <Image src="/images/image-1.jpg" width={250} height={200} />
          <div className="text-lg">1000$</div>
          <div className="flex justify-around mt-4 w-full">
            <div>compare</div>
            <div className="flex items-center">
              <AiFillEye />
              <div className="ml-2">quick view</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-12">
        <Pagination />
      </div>
    </Fragment>
  );
}
