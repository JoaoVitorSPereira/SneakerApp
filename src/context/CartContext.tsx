import React, { createContext, FC, useContext, useState } from 'react';
import { ICartContext, ICartItem } from '../types/ICartContext';
import { IProduct } from '../types/IProduct';

const NOT_FOUND = -1;

const Products = createContext<ICartContext>({
  products: [],
  setProducts: () => {},
});

const Provider: FC = ({ children }) => {
  const [products, setProducts] = useState<ICartItem[]>([]);
  return (
    <Products.Provider value={{ products, setProducts }}>
      {children}
    </Products.Provider>
  );
};

export function useProducts(): [
  ICartItem[],
  (product: IProduct, quantity: number) => void,
  (product: IProduct) => void
] {
  const { products, setProducts } = useContext(Products);
  function addProductToCart(product: IProduct, quantity: number) {
    const productIndex = products.findIndex(
      (cartItem) => cartItem.id === product.id
    );
    if (productIndex === NOT_FOUND) {
      setProducts([...products, { ...product, quantity }]);
      return;
    }
    const newProducts = products.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + quantity }
        : cartItem
    );
    setProducts(newProducts);
  }

  function removeProductFromCart(product: IProduct) {
    const newProducts = products.filter(
      (cartItem) => cartItem.id !== product.id
    );
    setProducts(newProducts);
  }
  return [products, addProductToCart, removeProductFromCart];
}

export default Provider;
