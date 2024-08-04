import styles from '../styles/Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.pagination}>
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>{"<"}</button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={index + 1 === currentPage ? styles.active : ''}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>{">"}</button>
    </div>
  );
};

export default Pagination;
