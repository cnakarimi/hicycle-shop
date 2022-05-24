class Products {
  id: string;
  name: string;
  image: string;
  color: string;
  stars: number;
  price: number;
  wheelSize: number;
  brand: string;
  category: string;

  constructor(
    id: string,
    name: string,
    image: string,
    color: "string",
    stars: number,
    price: number,
    wheelSize: number,
    brand: string,
    category: string
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.color = color;
    this.stars = stars;
    this.price = price;
    this.wheelSize = wheelSize;
    this.brand = brand;
    this.category = category;
  }
}

export default Products;
