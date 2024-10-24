import { useState } from "react";
import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";

const notifyError = () =>
  toast.error("Query can not be empty sting, please enrer the search term");
const notifySuccess = () => toast.success("Please wait for a sec...");

export default function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (newInputValue) => {
    setInputValue(newInputValue);
  };

  const handeSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      notifyError();
    } else {
      // notifySuccess();
      onSubmit(inputValue);
      setInputValue("");
    }
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handeSubmit}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(event) => handleChange(event.target.value)}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={styles.btn} type="submit">
          <IoIosSearch />
        </button>
        <Toaster position="top-right" />
      </form>
    </header>
  );
}
