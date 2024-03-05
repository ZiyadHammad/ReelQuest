import { showModal } from "../components/Modal.js";
import { createMovieElement } from "../components/Movie.js";
import { errorMessage, container } from "./dom.js";

const API_KEY = "a162d149";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;
const defaultQuery = "Harry Potter";

const getMovies = (searchQuery = defaultQuery) => {
  if (searchQuery.trim() === "") {
    alert("Please enter a movie title.");
    return;
  }
  fetch(`${API_URL}${searchQuery}`)
    .then((response) => response.json())
    .then((apiData) => {
      container.innerHTML = "";
      if (apiData.Response !== "True") {
        if (apiData.Error == "Too many results.") {
          errorMessage.textContent = `Too many results with "${searchQuery}". Try narrowing down your search.`;
        } else if (apiData.Error == "Movie not found!") {
          errorMessage.textContent = `No movies found under the title "${searchQuery}". Try something else.`;
        } else {
          errorMessage.textContent = apiData.Error;
        }
        errorMessage.id = "error-message";
        container.appendChild(errorMessage);
      } else {
        apiData.Search.forEach((movie) => {
          const movieContainer = createMovieElement(movie);
          container.appendChild(movieContainer);

          movieContainer.addEventListener("click", () => {
            showModal(movie);
          });
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export { getMovies };
