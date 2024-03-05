// Search.js
import { getMovies } from "../utils/api.js";

const searchInput = document.getElementById("searchInput");
const icon = document.getElementById("icon");

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const input = searchInput.value.trim();
    if (input !== "") {
      getMovies(input);
    }
  }
});

icon.addEventListener("click", () => {
  const input = searchInput.value.trim();
  if (input !== "") {
    getMovies(input);
  }
});