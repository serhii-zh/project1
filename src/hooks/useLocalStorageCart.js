import { useState } from 'react';

export const useLocalStorageCart = (initialValue = []) => {
  const key = 'cart';
  const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;

  const [itemsInCart, setItemsInCart] = useState(storedValue);

  const setStoredArray = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setItemsInCart(newValue);
  };

  const addToCart = (item, itemQty) => {
    const newArray = [...itemsInCart, { item, itemQty }];
    setStoredArray(newArray);
  };

  const removeFromCart = (itemId) => {
    setStoredArray(itemsInCart.filter(({ item }) => item.id !== itemId));
  };

  const updateQty = (itemId, itemQty) => {
    const updatedItems = itemsInCart.map((obj) =>
      obj.item.id === itemId ? { item: obj.item, itemQty } : obj
    );

    setStoredArray(updatedItems);
  };

  return { itemsInCart, addToCart, removeFromCart, updateQty };
};
