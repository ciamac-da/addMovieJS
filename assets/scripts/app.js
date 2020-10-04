const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");



const movies = []

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
}


const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = "none";
    } else {
        entryTextSection.style.display = "none";
    }
}


const closeMovieDeletionModal = () =>{
    toggleBackdrop();
    deleteMovieModal.classList.remove("visible");
}

const deleteMovieHandler = movieId =>{
    let movieIndex = 0;
for (const movie of movies){
    if(movie.id === movieId){
        break;
    }
    movieIndex++;
}
// index and the item you wanna remove
movies.splice(movieIndex,1)
const listRoot = document.getElementById("movie-list");
listRoot.children[movieIndex].remove();
// alternative of bottom line
//listRoot.removeChild(listRoot.children[movieIndex]);
closeMovieDeletionModal();
updateUI();
}




const startDeleteMovieHandler = (movieId) =>{
 deleteMovieModal.classList.add("visible");
 toggleBackdrop();
 const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
 let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");
 
 confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
 
 confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

 cancelDeletionButton.removeEventListener("click", closeMovieDeletionModal);   
 cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);   
 confirmDeletionButton.addEventListener("click", deleteMovieHandler.bind(null,movieId))
 //deleteMovie(movieId);

}


const newRendermovieElement = (id, title,imageUrl, rating) => {
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

   newMovieElement.addEventListener("click", startDeleteMovieHandler.bind(null, id));
   const listRoot = document.getElementById("movie-list");
   listRoot.append(newMovieElement);
}




const closeMovieModal = () => {
addMovieModal.classList.remove("visible");
};


const showMovieModal = () => {
    addMovieModal.classList.add("visible");
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
        titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 10
      ) {
        alert("Please fill out all fields and enter a valid number between 1 and 10!");
        return;
      }
    
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue,
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    clearMovieInput();
    toggleBackdrop();
    newRendermovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};


const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInput();
}

const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
}

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);