import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/components/SearchField.module.css';
import { clearData, changeKeywords } from '../store/slices/productsSlice';
import { useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { searchKeywords } from '../store/slices/productsSlice';

export const SearchField = () => {
  const dispatch = useDispatch();
  const keywords = useSelector(searchKeywords);

  const [focused, setFocused] = useState(false);

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  });

  const handleSearch = useCallback(
    (value) => {
      dispatch(clearData());
      dispatch(changeKeywords(value));
    },
    [dispatch]
  );

  const handleChange = useCallback(
    (evt) => {
      const { value } = evt.target;
      if (value.length >= 3) {
        handleSearch(value);
      } else if (value.length === 0) {
        dispatch(clearData());
        dispatch(changeKeywords(''));
      }
    },
    [dispatch, handleSearch]
  );

  const debouncedChangeHandler = useMemo(
    () => debounce(handleChange, 300),
    [handleChange]
  );

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <input
      className={`${styles.search} ${
        focused || keywords ? styles.focused : ''
      }`}
      type='text'
      name='search-field'
      id='search-field'
      placeholder='Search products by name'
      onFocus={() => handleFocus()}
      onBlur={() => handleBlur()}
      onChange={debouncedChangeHandler}
    />
  );
};
