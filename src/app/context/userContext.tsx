"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  id: string;
  quantity: number;
};

type UserContextType = {
  cart: CartItem[] | null;
  setCart: (value: CartItem[] | []) => void;
};
const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[] | []>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("products");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cart !== null) {
      localStorage.setItem("products", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <UserContext.Provider value={{ cart, setCart }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
};