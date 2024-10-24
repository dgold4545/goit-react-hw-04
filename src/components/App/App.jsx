import { DNA } from "react-loader-spinner";
import Modal from "react-modal";

import { useEffect, useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import styles from "./App.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#000",
  },

  overlay: { background: "#060606" },
};

Modal.setAppElement("#root");

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSearchQuery = (newQuery) => {
    console.log(newQuery);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSearchQuery} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <DNA />}
      {images.length > 0 && !loading && <LoadMoreBtn />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
        customStyles={customStyles}
      />
    </div>
  );
}
