// Movie.js
const createMovieElement = (movie) => {
  const { Poster, Type, Title } = movie;

  const movieContainer = document.createElement("div");
  movieContainer.classList.add("movie-container");

  const imgElement = document.createElement("img");
  if (Poster !== "N/A") {
    imgElement.src = Poster;
  }
  imgElement.classList.add("movie-poster");
  movieContainer.appendChild(imgElement);

  const overlay = document.createElement("div");
  overlay.classList.add("movie-overlay");

  const typeElement = document.createElement("div");
  typeElement.classList.add("movie-type");
  typeElement.textContent = Type.charAt(0).toUpperCase() + Type.slice(1);
  overlay.appendChild(typeElement);

  const titleElement = document.createElement("div");
  titleElement.classList.add("movie-title");
  titleElement.textContent = Title;
  overlay.appendChild(titleElement);

  movieContainer.appendChild(overlay);

  return movieContainer;
};

export {createMovieElement}