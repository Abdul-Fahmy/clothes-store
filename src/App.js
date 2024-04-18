import Home from "./route/home/home.component";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "./utils/firebase/firebase.utils";
import Navigation from "./route/navigation/navigation.component";
import Authantication from "./route/authantication/authantication.component";
import Shop from "./route/shop/shop.component";
import CheckOut from "./component/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribed = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribed;
  }, [dispatch]);

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
