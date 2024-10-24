import styles from "./ImageCard.module.css";

export default function ImageCard({
  alt_description,
  small,
  regular,
  openModal,
}) {
  return (
    <div>
      <img
        className={styles.img}
        src={small}
        alt={alt_description}
        onClick={() => {
          openModal(regular, alt_description);
        }}
      />
    </div>
  );
}
