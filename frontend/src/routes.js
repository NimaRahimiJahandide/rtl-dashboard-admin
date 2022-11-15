import Product from "./Components/Product/Product";
import Comments from "./Components/Comments/Comments";
import Users from "./Components/Users/Users";
import Orders from "./Components/Orders/Orders";
import Offs from "./Components/Offs/Offs";

const routes = [
  { path: "/products", element: <Product /> },
  { path: "/comments", element: <Comments /> },
  { path: "/users", element: <Users /> },
  { path: "/orders", element: <Orders /> },
  { path: "/prodoffsucts", element: <Offs /> },
];

export default routes;
