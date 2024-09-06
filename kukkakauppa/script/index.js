// Ladataan koko aineisto
let allPosts = [];
let displayCounter = 0;
const quantity = 6; // Ladataan 6 postausta

// Kun DOM latautuu, lataa ja lajittele koko aineisto
document.addEventListener('DOMContentLoaded', loadAndSort);

// Lataa koko aineisto ja lajittele se
function loadAndSort() {
    fetch('http://localhost:3001/news')
    .then(response => response.json())
    .then(data => {
        // Lajittele data id:n mukaan käänteiseen järjestykseen
        allPosts = data.sort((a, b) => b.id - a.id);
        // Lataa ensimmäiset postaukset
        loadNextPosts();
    });
}

// Lataa seuraavat postaukset DOM:iin
function loadNextPosts() {
    // Määritä aloitus- ja lopetusnumerot postauksille
    const start = displayCounter;
    const end = start + quantity;

    // Määritä, mitkä postaukset ladataan
    const postsToDisplay = allPosts.slice(start, end);

    // Lisää lajitelut postaukset DOM:iin
    postsToDisplay.forEach(add_post);
}

// Lisää uusi postaus DOM:iin
function add_post(contents) {
    // Luo uusia divejä sisältöineen
    const post = document.createElement('div');
    post.className = 'news-block';

    const image = document.createElement('img');
    image.src = contents.imgUrl;
    image.alt = "Posted image";

    const date = document.createElement('p');
    date.className = 'news-date';
    date.innerHTML = contents.date;

    const text = document.createElement('p');
    text.innerHTML = contents.excerpt;

    // Koosta luoduista diveistä oikea rakenne
    post.appendChild(image);
    post.appendChild(date);
    post.appendChild(text);

    // Lisää postaus DOM:iin
    document.querySelector('.flex-wrapper').append(post);
}