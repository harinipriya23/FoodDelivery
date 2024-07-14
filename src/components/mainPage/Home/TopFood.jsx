import React, { useContext, useState } from "react";
import { MdStar } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { TiMinus, TiPlus } from "react-icons/ti";

export const TopFood = ({
  id,
  name,
  price,
  rating,
  img,category,quantity,cartItem,setCartItem,addToCart,removeFromCart
}) => {
  // const [cartItem, setCartItem] = useState({});
  // const addToCart = (id) => {
  //   console.log("hijk");
  //   //const existingItem = cartItem.find((item) => item.id === id);
  //   if (!cartItem[id]) {
  //     setCartItem((prev) => ({ ...prev, [id]: 1 }));
  //     // setCartItem(
  //     //   cartItem?.map((item) =>
  //     //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //     //   )
  //     // );
  //   } else {
  //     setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  //     // setCartItem([...cartItem, { ...id, quantity: 1 }]);
  //   }
  // };

  // const removeFromCart = (id) => {
  //   setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  //   //setCartItem(cartItem.filter((item) => item.id !== id));
  // };
  // useEffect(() => {
  //   console.log(cartItem), [cartItem];
  // });

  return (
    <div className=" flex flex-col ani bg-slate-800 rounded-xl text-white">
      <div className=" flex h-44 rounded-3xl ">
        <img src={img} className="h-full w-full rounded-t-xl object-cover" />
      </div>
      <div className="flex h-8 justify-between mx-4 mt-3">
        <p className="text-md font-medium">{name}</p>
        <p className="flex gap-1">
          <MdStar className="size-5 text-yellow-400 mt-0.5" />
          {rating}
        </p>
      </div>
      <div className="flex justify-between mt-5">
        <p className="text-white ml-5 font-semibold text-[18px] items-center flex gap-1">
          <FaIndianRupeeSign /> {price}
        </p>
        {!cartItem[id] ? (
          <p
            onClick={() => addToCart(id)}
            className=" font-extrabold cursor-pointer bg-green-700 text-white 
          w-28 rounded-lg h-8  items-center flex justify-center  m-3"
          >
            ADD
          </p>
        ) : (
          <div
            className=" font-extrabold cursor-pointer bg-green-700 text-white 
          w-28 rounded-lg h-8  items-center flex justify-around  m-3"
          >
            <TiMinus
              onClick={() => {
                removeFromCart(id);
              }}
            />
            <p>{cartItem[id]}</p>
            <TiPlus
              onClick={() => {
                addToCart(id);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
