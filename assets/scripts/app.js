const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling; 
const userInputs = addMovieModal.querySelectorAll("input");



const movies = []


const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
}

const toggleMovieModal = () =>{
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
}

const clearMovieInput = () =>{
    for(const usrInput of userInputs){
        usrInput.value = "";

    }
}

const addMovieHandler = () =>{
const titleValue = userInputs[0].value;
const imageUrlValue = userInputs[1].value;
const ratingValue = userInputs[2].value;

if(
titleValue.trim()    === "" || 
imageUrlValue.trim() === "" || 
ratingValue.trim()   === "" 
){
alert("Please fill out all required field!");
}else if(
titleValue.trim()    === "" || 
imageUrlValue.trim() === "" || 
ratingValue.trim()   === "" 
)
{
    alert("Please fill out all required fields!");
    return;
}
else if(
+ratingValue < 1            ||
+ratingValue > 10
    )
    {
        alert("Please enter a valid number between 1 and 10");
        return;
    }
    const newMovie = {
        title : titleValue,
        image : imageUrlValue,
        rating : ratingValue,
    }
    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput ();
}


const backdropClickHandler = () => {
    toggleMovieModal();
}

const cancelAddMovieHandler = () =>{
    toggleMovieModal();
    clearMovieInput ();
}

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click",cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);