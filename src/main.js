import Navigo from "navigo";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import PostPage from "./pages/PostPage";
import ContactPage from "./pages/ContactPage";

const router = new Navigo("/", { linksSelector: "a" });
const app = document.querySelector("#app");

const render = (content, container) => {
  app.innerHTML = content();
};

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/product", () => render(ProductPage, app));
router.on("/product/:id", ({ data }) => render(() => ProductDetail(data), app));
router.on("/post", () => render(PostPage, app));
router.on("/post/:id", ({ data }) => render(() => PostPage(data), app));

router.resolve();
