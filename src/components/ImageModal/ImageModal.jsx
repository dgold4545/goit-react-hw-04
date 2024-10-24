import Modal from "react-modal";

import styles from "./ImageModal.module.css";

export default function ImageModal({
  openModal,
  closeModal,
  customStyles,
  modalIsOpen,
  regularUrl,
  altDescription,
}) {
  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={regularUrl} alt={altDescription} title={altDescription} />
      </Modal>
    </div>
  );
}
