import Modal from "react-modal";

import styles from "./ImageModal.module.css";

export default function ImageModal({
  openModal,
  closeModal,
  customStyles,
  modalIsOpen,
}) {
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}
