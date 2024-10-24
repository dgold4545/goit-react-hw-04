import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={styles.list}>
      {images.map(({ id, alt_description, urls: { small, regular } }) => (
        <li className={styles.item} key={id}>
          <ImageCard
            alt_description={alt_description}
            small={small}
            regular={regular}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
}
