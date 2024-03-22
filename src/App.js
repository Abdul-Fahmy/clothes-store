import Home from "./route/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./route/navigation/navigation.component";
import Authantication from "./route/authantication/authantication.component";
import Shop from "./route/shop/shop.component";
import CheckOut from "./component/checkout/checkout.component";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authantication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
