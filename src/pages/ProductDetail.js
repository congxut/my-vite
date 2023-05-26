import Banner from "../components/Banner";
import Header from "../components/Header";
import { products } from "../dataFake";

const ProductDetail = ({ id }) => {
  const product = products.find((product) => product.id === +id);
  if (!product) return "Product not found";
  return /*html*/ `
    ${Header()}
    ${Banner()}
    ${product.name}
  `;
};

export default ProductDetail;
