import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemsToCart,
  addToCart,
  getItemsInCart,
  removeFromCart,
  updateItemQty,
} from '../store/slices/productsSlice';
import { useDidUpdate } from './useDidUpdate';

export const useLocalStorageCart = (initialValue = []) => {
  const key = 'cart';

  const dispatch = useDispatch();
  const itemsInCart = useSelector(getItemsInCart);

  useEffect(() => {
    const parsedLocalStorageArray = JSON.parse(localStorage.getItem(key)) || [];
    dispatch(addItemsToCart(parsedLocalStorageArray));
  }, [dispatch]);

  useDidUpdate(() => {
    localStorage.setItem(key, JSON.stringify(itemsInCart));
  }, itemsInCart);

  const add = (item, itemQty) => {
    dispatch(addToCart({ item, itemQty }));
  };

  const remove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const updateQty = (itemId, itemQty) => {
    dispatch(updateItemQty({ itemId, itemQty }));
  };

  return {
    itemsInCart: itemsInCart,
    addToCart: add,
    removeFromCart: remove,
    updateQty,
  };
};
