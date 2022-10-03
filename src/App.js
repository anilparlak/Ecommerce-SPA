import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Authentication from "./pages/authentication/Authentication";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Checkout from "./pages/checkout/checkout";

import "./style.scss";

const App = () =>  {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication/>} />
          <Route path="checkout" element={<Checkout/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
