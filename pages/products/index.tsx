import ListItem from "../../components/ListItems/ListItem";
import Pagination from "../../components/Layout/Pagination";
import { Fragment } from "react";
import { getAllProducts } from "../../helpers/api-util";
import Products from "../../models/products";
import { GetStaticProps } from "next";
import Layout from "../../components/Layout/Layout";

function ProductsItems(props: { items: [] }) {
  const bicycles = props.items;

  return (
    <Layout>
      <div className="bg-white h-full grid grid-cols-3">
        {bicycles.map((item: Products) => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            color={item.color}
            stars={item.stars}
            price={item.price}
            wheelSize={item.wheelSize}
            brand={item.brand}
            category={item.category}
          />
        ))}
        ;
      </div>
      <div className="flex justify-end mt-12">
        <Pagination />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts();

  return { props: { items: products } };
};

export default ProductsItems;
