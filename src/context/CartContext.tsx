import React, { createContext, useContext, useState } from "react";

type CartContextType = {
  counter: number;
  setCounter: (value: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CartContext.Provider value={{ counter, setCounter }}>
      {children}
    </CartContext.Provider>
  );
};
