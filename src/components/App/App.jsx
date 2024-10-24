import { DNA } from "react-loader-spinner";
import Modal from "react-modal";

import { useEffect, useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import customStyles from "../../customStyles/customStyle_modal";

import styles from "./App.module.css";
import { fetchUnsplashData } from "../../api/api-unsplash-get";

Modal.setAppElement("#root");

export default function App() {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(2);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [numOfPage, setNumOfPage] = useState(1);

  useEffect(() => {
    if (searchQuery.trim() === "") return;

    const fetchImage = async () => {
      try {
        setLoading(true);
        setError(false);
        const responseData = await fetchUnsplashData(searchQuery, numOfPage);

        setTotalPages(responseData.total_pages);

        setImages((prevImages) => [...prevImages, ...responseData.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [searchQuery, numOfPage]);

  const handleSearchQuery = (newQuery) => {
    setImages([]);
    setSearchQuery(newQuery);
    setNumOfPage(1);
  };

  const handleLoadMore = () => {
    setNumOfPage(numOfPage + 1);
  };

  const [regularUrl, setRegularUrl] = useState("");
  const [altDescription, setAltDescription] = useState("");

  function openModal(regular, alt_description) {
    setIsOpen(true);
    setRegularUrl(regular);
    setAltDescription(alt_description);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.container}>
      <SearchBar onSubmit={handleSearchQuery} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {loading && <DNA />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onHandleLoadMore={handleLoadMore} />
      )}

      <ImageModal
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
        customStyles={customStyles}
        regularUrl={regularUrl}
        altDescription={altDescription}
      />
    </div>
  );
}
