import { Fragment } from "react";
import Stars from "../UI/Stars";
import Image from "next/image";
import { AiFillEye } from "react-icons/ai";
import Products from "../../models/products";
import Link from "next/link";

const ListItem = (props: Products) => {
  return (
    <Fragment>
      <div className="px-12 mt-6 flex flex-col items-center">
        <div>{props.name}</div>
        <Stars />
        <Image src={props.image} width={250} height={200} />
        <div className="text-lg">{props.price}$</div>
        <div className="flex justify-around mt-4 w-full">
          <div className="hover:text-orange-600 cursor-pointer transition duration-200">
            compare
          </div>
          <div className="flex items-center hover:text-orange-600 cursor-pointer transition duration-200">
            <AiFillEye className="" />
            <Link href={`/products/${props.id}`}>
              <div className="ml-2 ">quick view</div>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ListItem;
