import { getMovies } from "./utils/api.js";
import { closeModal } from "./components/Modal.js";
import "./components/Search.js";

document.addEventListener('DOMContentLoaded', () => {
  getMovies()

  const icon = document.getElementById("icon");
  const searchInput = document.getElementById("searchInput");
  const modal = document.querySelector(".modal-container");
  const close = document.getElementById("close");

  icon.addEventListener("click", () => {
    const input = searchInput.value.trim();
    if (input !== "") {
      getMovies(input);
    }
  });

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const input = searchInput.value.trim();
      if (input !== "") {
        getMovies(input);
      }
    }
  });

  close.addEventListener("click", () => {
    closeModal();
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
})