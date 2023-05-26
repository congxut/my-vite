import Banner from "../components/Banner";
import Header from "../components/Header";
import { products } from "../dataFake";

const ProductPage = () => {
  return /*html*/ `
    ${Header()}
    <h1>Product Page</h1>
    ${products
      .map(
        (product) => /*html */ `
        <div><a href="/product/${product.id}">${product.name}</a></div>
      `
      )
      .join("")}
  `;
};

export default ProductPage;
