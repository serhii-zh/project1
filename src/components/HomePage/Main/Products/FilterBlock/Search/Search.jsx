import { useDispatch } from 'react-redux';
import styles from './Search.module.css';
import { clearData, changeKeywords } from '../../../../../../store/slices/productsSlice';
import { useCallback, useEffect, useMemo, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';

const Search = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [focused, setFocused] = useState(false);

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  });

  const handleSearch = useCallback(
    (value) => {
      dispatch(clearData());
      // navigate(`/?keywords=${value}`);
      // debugger
      dispatch(changeKeywords(value))
    },
    [dispatch, 
      // navigate
    ]
  );

  const handleChange = useCallback(
    (evt) => {
      const { value } = evt.target;
      if (value.length >= 3) {
        handleSearch(value);
      } else if (value.length === 0) {
        // navigate('/');
        dispatch(clearData());
        dispatch(changeKeywords(''))
      }
    },
    [dispatch, handleSearch, 
      // navigate
    ]
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
