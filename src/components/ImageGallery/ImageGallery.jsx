import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <ImageCard />
      </li>
    </ul>
  );
}
