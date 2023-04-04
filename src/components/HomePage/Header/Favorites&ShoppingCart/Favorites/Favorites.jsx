import styles from './Favorites.module.css'
import heartWhite from '../../../../../images/heart_white.png'

const Favorites = () => {
  return (
    <img src={heartWhite} alt="Favorites icon" className={styles.heartWhite}/>
  )
}

export default Favorites