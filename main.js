// information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParam = 'rel_rhy=';


// page elements
const div = document.getElementById('container');
const userInput = document.getElementById('userInput');
const button = document.getElementById('btn');
const againBtn = document.getElementById('again');



// AJAX FUNCTION
const getSuggestions = () => {
const wordQuery = userInput.value;
const endpoint = `${url}${queryParam}${wordQuery}`;
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE) {
        console.log(xhr.response);

        renderResponse(xhr.response)
    }; // if end
}; 
xhr.open('GET', endpoint);
xhr.send();
}; // AJAX function end


// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
    event.preventDefault();
    document.getElementById('container').style.display = 'none';
    //
    document.getElementById('wordsContainer').style.display = 'flex';
    // generates random number for images's array
    const randomNum = Math.floor(Math.random() * 5);
    // images path
    let cartoon1 = '/images/cartoon1.png';
    let cartoon2 = '/images/cartoon2.png';
    let cartoon3 = '/images/cartoon3.png';
    let cartoon5 = '/images/cartoon5.png';
    let cartoon6 = '/images/cartoon6.png';
    let cartoon7 = '/images/cartoon7.png';
    // array of images
    let cartoonArray = [cartoon1, cartoon2, cartoon3, cartoon6, cartoon5, cartoon7];
    // generate random image
    document.getElementById('image').src = cartoonArray[randomNum];
    //
    document.getElementById('again').style.display = 'block';
    document.getElementById('image').style.display = 'block';
    getSuggestions();   
    button.removeEventListener('click', displaySuggestions)
    againBtn.addEventListener('click', again)
};


// play again
const again = () => {
    document.getElementById('container').style.display = 'block';    
    document.getElementById('image').style.display = 'none';
    document.getElementById('wordsContainer').style.display = 'none';
    document.getElementById('wordsContainer').innerHTML = '';
    document.getElementById('again').style.display = 'none';
    button.addEventListener('click', displaySuggestions);
};



button.addEventListener('click', displaySuggestions);
