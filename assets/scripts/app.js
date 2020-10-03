const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");



const movies = []

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = "none";
    } else {
        entryTextSection.style.display = "none";
    }
}


const newRendermovieElement = (title,imageUrl, rating) => {
const newMovieElement = document.createElement("li");
   newMovieElement.className = "movie-element"
   newMovieElement.innerHTML = `
   <div class="movie-element_image">
   <img src="${imageUrl}">
   </div>
   <div class="movie-element_info">
   <h2>${title}</h2>
   <p>${rating}/10 Stars</p>
   </div>
   `;
   const listRoot = document.getElementById("movie-list");
   listRoot.append(newMovieElement);
}


const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
}

const toggleMovieModal = () => {
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
}

const clearMovieInput = () => {
    for (const usrInput of userInputs) {
        usrInput.value = "";

    }
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === "" ||
        imageUrlValue.trim() === "" ||
        ratingValue.trim() === ""
    ) {
        alert("Please fill out all required field!");
    } else if (
        titleValue.trim() === "" ||
        imageUrlValue.trim() === "" ||
        ratingValue.trim() === ""
    ) {
        alert("Please fill out all required fields!");
        return;
    } else if (
        +ratingValue < 1 ||
        +ratingValue > 10
    ) {
        alert("Please enter a valid number between 1 and 10");
        return;
    }
    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue,
    }
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
    updateUI();
    newRendermovieElement(newMovie.title, newMovie.image, newMovie.rating);
}


const backdropClickHandler = () => {
    toggleMovieModal();
}

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInput();
}

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);