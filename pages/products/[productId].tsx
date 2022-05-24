import { GetStaticPaths, GetStaticProps } from "next";
import PriceItems from "../../components/UI/FilterItems/PriceItems";
import { getAllProducts, getProductById } from "../../helpers/api-util";
import Products from "../../models/products";
import Image from "next/image";
import Stars from "../../components/UI/Stars";
import MainButton from "../../components/UI/Buttons/MainButton";

const ProductDetail = (props: { selectedProduct: Products }) => {
  const item = props.selectedProduct;

  return (
    <div className="bg-white flex justify-between">
      <div className="w-3/5 flex items-center justify-center">
        <Image src={item.image} height={500} width={500} />
      </div>
      <div className="w-2/5 mt-12">
        <Stars />
        <div className="mt-5 text-sm">{item.brand}</div>
        <div className="mt-2 text-4xl">{item.name}</div>
        <div className="mt-2 text-slate-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aut
          rerum harum qui, veniam beatae? Laboriosam explicabo perspiciatis esse
          nostrum dolore, cumque omnis officiis? Quaerat reprehenderit autem qui
          repellat enim.
        </div>
        <div className="mx-6 my-6 flex justify-between">
          <div className="text-2xl">{item.price}$</div>
          <MainButton>buy now</MainButton>
        </div>
        <div className="flex items-center">
          <div className=" text-xl">{item.color}</div>
          <span
            className={`w-5 h-5 rounded-full flex items-center justify-center bg-${item.color}-500 ml-2`}
          ></span>
        </div>
        <div className="mt-2 flex">
          <div>wheel size : </div>
          <div className="ml-2">{item.wheelSize}</div>
        </div>
        <div className="mt-2 flex">
          <div>category :</div>
          <div className="ml-2">{item.category}</div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const productId = context.params.productId;
  const product = await getProductById(productId);

  return { props: { selectedProduct: product }, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts();
  const paths = products.map((products) => ({
    params: { productId: products.id },
  }));

  return {
    paths: paths,
    fallback: true,
  };
};

export default ProductDetail;
