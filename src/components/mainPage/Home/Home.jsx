import React, { useState } from "react";
import { HomeContent } from "./HomeContent";
import { ExploreMenu } from "./ExploreMenu";
import { TopPicks } from "./TopPicks";
import { DownloadApp } from "./DownloadApp";

export const Home = ({menu,setMenu,cartItem,setCartItem,addToCart,removeFromCart}) => {
  const [category, setCategory] = useState ('All')
  
  
  return (
    <>
      <HomeContent menu={menu} setMenu={setMenu} />
      <ExploreMenu category={category} setCategory={setCategory} />
      <TopPicks category={category}  cartItem={cartItem}
                setCartItem={setCartItem}
                addToCart={addToCart}
                removeFromCart={removeFromCart} />
      <DownloadApp />
    </>
  );
};
