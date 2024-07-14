import React from "react";
import { Navbar } from "./mainPage/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./mainPage/Home/Home";
import { Footer } from "./mainPage/Footer/Footer";
import { Cart } from "./mainPage/Cart/Cart";
import { useState } from "react";
import { PlaceOrder } from "./mainPage/Cart/PlaceOrder";
import { SignIn } from "./mainPage/SignIn/signIn";
const Main = () => {
  const [menu, setMenu] = useState("menu");
  const [signIn, setSignIn] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const addToCart = (id) => {
    console.log("hijk");
    //const existingItem = cartItem.find((item) => item.id === id);
    if (!cartItem[id]) {
      setCartItem((prev) => ({ ...prev, [id]: 1 }));
      // setCartItem(
      //   cartItem?.map((item) =>
      //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      //   )
      // );
    } else {
      setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
      // setCartItem([...cartItem, { ...id, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    //setCartItem(cartItem.filter((item) => item.id !== id));
  };

  return (
    <>
      <div>
        <Navbar setSignIn={setSignIn} setMenu={setMenu} />
        {signIn ? <SignIn setSignIn={setSignIn} /> : <></>}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                menu={menu}
                setMenu={setMenu}
                cartItem={cartItem}
                setCartItem={setCartItem}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cartItem={cartItem}
                setCartItem={setCartItem}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          ></Route>
          <Route
            path="/place-order"
            element={<PlaceOrder cartItem={cartItem} />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default Main;
