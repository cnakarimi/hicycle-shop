import { dummy_data } from "../dummy_data";
export async function getAllProducts() {
  return dummy_data;
}

export async function getProductById(id) {
  const allProducts = await getAllProducts();
  return allProducts.find((product) => product.id === id);
}
