const modal = document.querySelector(".modal-container");
const poster = document.getElementById("modal-poster");
const title = document.getElementById("s-title");
const type = document.getElementById("s-type");
const year = document.getElementById("s-year");
const id = document.getElementById("s-imbID");

const showModal = (movie) => {
  const { Title, Year, Type, imdbID, Poster } = movie;
  modal.style.display = "block";
  poster.src = Poster;

  title.innerText = Title;
  year.innerText = Year;
  type.innerText = Type.charAt(0).toUpperCase() + Type.slice(1);
  id.innerHTML = `<a href="https://www.imdb.com/title/${imdbID}/" target="blank_">Visit imdb</a>`;
};

const closeModal = () => {
  modal.style.display = "none";
};

export { showModal, closeModal };