import { useDispatch } from 'react-redux';
import styles from './Search.module.css';
import { clearData } from '../../../../../../store/slices/productsSlice';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let value;
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  });

  const handleSearch = () => {
    dispatch(clearData());
    navigate(`/?keywords=${value}
    `);
  };

  const handleChange = useCallback((evt) => {
    value = evt.target.value;
    if (value.length >= 3) {
      handleSearch();
    } else if (value.length === 0) {
      dispatch(clearData());
      navigate('/');
    }
  }, []);

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
      className={`${styles.search} ${focused ? styles.focused : ''}`}
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

export default Search;
