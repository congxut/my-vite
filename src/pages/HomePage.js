import Header from "../components/Header";
import Banner from "../components/Banner";
import { posts } from "../dataFake";
import Footer from "../components/Footer";
import CardUser from "../components/CardUser";

const HomePage = () => {
  return /*html */`
    <div class="">
        ${Header()}
        ${CardUser()}
        ${Banner()}
        
        ${Footer()}
    </div>
  `;
};

export default HomePage;
