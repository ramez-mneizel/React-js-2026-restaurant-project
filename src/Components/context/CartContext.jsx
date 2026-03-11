import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

    
    

  const addToCart = (item) => {
    const exist = cart.find((existedItem) => existedItem.id === item.id);
    console.log(item); 

    if (exist) {
    
      setCart((prev) =>
        prev.map((existed) =>
          existed.id === item.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : existed,
        ),
      );
    } else {
      
      setCart((prev) => [...prev, item]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
