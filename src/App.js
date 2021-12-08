import "./component/styles/app.css";
import { Routes, Route } from "react-router-dom";
import Topbar from "./component/Topbar";
import Sidebar from "./component/Sidebar";
import Home from "./component/pages/home/Home";
import UserList from "./component/pages/UserList";
import User from "./component/pages/User";
import NewUser from "./component/pages/NewUser";
import ProductList from "./component/pages/ProductList";
import Product from "./component/pages/Product";
import NewProduct from "./component/pages/NewProduct";

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
