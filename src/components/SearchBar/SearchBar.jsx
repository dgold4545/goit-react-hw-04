import { useState } from "react";
import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

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
      notifySuccess();
      onSubmit(inputValue);
      setInputValue("");
    }
  };

  return (
    <header>
      <form onSubmit={handeSubmit}>
        <input
          value={inputValue}
          onChange={(event) => handleChange(event.target.value)}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
}
