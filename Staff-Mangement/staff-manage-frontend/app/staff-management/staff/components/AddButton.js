import styles from '../styles/AddButton.module.css';

const AddButton = ({ onAdd }) => {
  return (
    <button className={styles.addButton} onClick={onAdd}>
      <img src="images/Add.png" alt="Filter" className={styles.addIcon}/>Add
    </button>
  );
};

export default AddButton;
