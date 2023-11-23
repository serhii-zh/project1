import { useState } from 'react';

export const useLocalStorageCart = (initialValue = []) => {
  const key = 'cart';
  const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;

  const [itemsInCart, setItemsInCart] = useState(storedValue);

  const setStoredArray = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setItemsInCart(newValue);
  };

  function addToCart(item) {
    const newArray = [...itemsInCart, item];
    setStoredArray(newArray);
  }

  const removeFromCart = (itemId) => {
    const newArray = [...itemsInCart];

    const index = newArray.findIndex((e) => e.id === itemId);
    newArray.splice(index, 1);
    setStoredArray(newArray);
  };

  return [itemsInCart, addToCart, removeFromCart];
};
