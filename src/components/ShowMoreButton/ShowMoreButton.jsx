import styles from './ShowMoreButton.module.css';

const ShowMoreButton = ({ onClickFnc }) => {
  return (
    <button className={styles.showMoreButton} onClick={() => onClickFnc()}>
      Load more...
    </button>
  );
};

export default ShowMoreButton;
