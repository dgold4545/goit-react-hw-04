import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onHandleLoadMore }) {
  return (
    <button type="button" onClick={onHandleLoadMore}>
      Load more
    </button>
  );
}
