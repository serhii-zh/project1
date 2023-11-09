import styles from '../../styles/components/ui/FavoritesIcon.module.css';
import heartWhite from '../../images/heart_white.png';
import { Link } from 'react-router-dom';

export const FavoritesIcon = () => {
  return (
    <Link to='/settings/favorites'>
      <img
        src={heartWhite}
        alt='Favorites icon'
        className={styles.heartWhite}
      />
    </Link>
  );
};
