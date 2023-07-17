
// prendo le 2 col
const colBig = document.querySelector(".col-big");
const colSmall = document.querySelector(".col-small");

// array delle immagini da 0 a 4 
const imagesList = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"]

// prendo icone up + down
const iconaUpEl = document.querySelector(".icona-up");
const iconaDownEl = document.querySelector(".icona-down");

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

for (let i = 0; i < images.length; i++) {
    const currentImage = images[i].image;
    const currentTitle = images[i].title;
    const currentText = images[i].text;
    let imgVisibile = "";
    let bordoImg = "";

    if (i === 0) {
        imgVisibile = "visible";
        bordoImg = "bordo-selezione";
    }

    colBig.innerHTML += `<div class="img-container ${imgVisibile}">
    <img src="./${currentImage}" alt="spiderman" class="big-images">
    <div class="content-custom">
    <div class="title-custom"> ${currentTitle}</div>
    <div class="text-custom"> ${currentText}</div>
    </div>
    </div>`;

    colSmall.innerHTML += `<img src="./${currentImage}" alt="ratchet-piccolo" class="small-images ${bordoImg}">`;


}

// indice per gestire le immagini 
let indexImage = 0;

// CLICK DOWN
iconaDownEl.addEventListener("click", function () {

    const imagesListAll = document.querySelectorAll(".img-container");
    const imagesSmallListAll = document.querySelectorAll(".small-images");

    imagesListAll[indexImage].classList.remove("visible");
    imagesSmallListAll[indexImage].classList.remove("bordo-selezione");

    indexImage++;

    if (indexImage > imagesListAll.length - 1) {
        indexImage = 0;
    }

    imagesListAll[indexImage].classList.add("visible");
    imagesSmallListAll[indexImage].classList.add("bordo-selezione");


})

// CLICK UP
iconaUpEl.addEventListener("click", function () {

    const imagesListAll = document.querySelectorAll(".img-container");
    const imagesSmallListAll = document.querySelectorAll(".small-images");


    imagesListAll[indexImage].classList.remove("visible");
    imagesSmallListAll[indexImage].classList.remove("bordo-selezione");


    indexImage--;

    if (indexImage < 0) {
        indexImage = imagesListAll.length - 1;
    }

    imagesListAll[indexImage].classList.add("visible");
    imagesSmallListAll[indexImage].classList.add("bordo-selezione");

})