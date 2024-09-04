// Ladataan koko aineisto
let allPosts = [];
let displayCounter = 0;
const quantity = 3; // Ladataan 3 postausta kerrallaan

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

// Kun vieritetään sivun loppuun, ladataan seuraavat 3 postausta
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadNextPosts();
    }
};

// Lataa seuraavat postaukset DOM:iin
function loadNextPosts() {
    // Määritä aloitus- ja lopetusnumerot postauksille
    const start = displayCounter;
    const end = start + quantity;

    // Määritä, mitkä postaukset ladataan
    const postsToDisplay = allPosts.slice(start, end);

    // Lisää lajitelut postaukset DOM:iin
    postsToDisplay.forEach(add_post);

    // Päivitä laskuri seuraavaa hakua varten
    displayCounter = end;
}

// Lisää uusi postaus DOM:iin
function add_post(contents) {
    // Luo uusia divejä sisältöineen
    const post = document.createElement('div');
    post.className = 'outer-wrapper';

    const flex = document.createElement('div');
    flex.className = 'flex-wrapper';

    const leftBlock = document.createElement('div');
    leftBlock.className = 'inner-block';

    const image = document.createElement('img');
    image.src = contents.imgUrl;
    image.alt = "Posted image";

    const rightBlock = document.createElement('div');
    rightBlock.className = 'inner-block inner-text';
    rightBlock.innerHTML = '<b>' + contents.date + '</b>' + '<br/>' + contents.content;

    // Koosta luoduista diveistä oikea rakenne
    post.appendChild(flex);
    flex.appendChild(leftBlock);
    flex.appendChild(rightBlock);
    leftBlock.appendChild(image);

    // Lisää postaus DOM:iin
    document.querySelector('.news').append(post);
}
