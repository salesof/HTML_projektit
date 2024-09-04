// Aloita ensimmäisestä postista
let counter = 1;

// Ladataan 20 postausta kerrallaan
const quantity = 20;

// Kun DOM latautuu, lataa ensimmäiset 20 postausta
document.addEventListener('DOMContentLoaded', load);

// Kun vieritetään sivun loppuun, ladataan seuraavat 20 postausta
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        load();
    }
};

// Lataa seuraava postisarja
function load() {

    // Määritä aloitus- ja lopetusnumerot posteille ja päivitä laskuri
    const start = counter - 1; // JSON Server käyttää nolla-indeksointia
    const end = start + quantity;

    // Päivitä laskuri seuraavaa hakua varten
    counter = end + 1;

    // Hae uudet postit ja lisää ne DOM:iin
    fetch(`http://localhost:3001/notes?_start=${start}&_end=${end}`)
    .then(response => response.json())
    .then(data => {
        data.forEach(add_post);
    });
}

// Lisää uusi posti DOM:iin
function add_post(contents) {

    // Luo uusi postaus
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = contents.content;

    // Lisää postaus DOM:iin
    document.querySelector('#posts').append(post);
}