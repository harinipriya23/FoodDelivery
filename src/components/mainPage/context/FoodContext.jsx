import { createContext, useState } from "react";

export const FoodContext = createContext(null);
export default function FoodContextProvider({ children }) {
  const [cartItem, setCartItem] = useState({});
  const addToCart = (id) => {
    console.log("hijk");
    //const existingItem = cartItem.find((item) => item.id === id);
    if (!cartItem[id]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
      // setCartItem(
      //   cartItem.map((item) =>
      //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      //   )
      // );
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      //setCartItem([...cartItem, { ...id, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    //setCartItem(cartItem.filter((item) => item.id !== id));
  };
  // useEffect(()=>{console.log(cartItem),[cartItem]})
  const foodContextValues = () => {
    addToCart, removeFromCart, cartItem, setCartItem;
  };
  return (
    <FoodContext.Provider value={foodContextValues}>
      {children}
    </FoodContext.Provider>
  );
}
