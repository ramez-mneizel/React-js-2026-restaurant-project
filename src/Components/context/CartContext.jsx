import { useState, createContext } from "react";
// 1 === 2 ? "true" : flase
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existed = prev.find((cartItem) => cartItem.id === item.id);
      if (existed) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };


const removeFromItem = (itemId) => {
  setCart((prev) => prev.filter((item) => item.id !== itemId));
};


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};