
// prendo le 2 col
const colBig = document.querySelector(".col-big");
const colSmall = document.querySelector(".col-small");

// array delle immagini da 0 a 4 
const imagesList = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"]

// prendo icone up + down
const iconaUpEl = document.querySelector(".icona-up");
const iconaDownEl = document.querySelector(".icona-down");


for (let i = 0; i < imagesList.length; i++) {
    const currentImage = imagesList[i];
    let imgVisibile = "";
    let bordoImg = "";

    if (i === 0) {
        imgVisibile = "visible";
        bordoImg = "bordo-selezione";
    }

    colBig.innerHTML += `<div class="img-container ${imgVisibile}">
    <img src="./img/${currentImage}" alt="spiderman" class="big-images">
</div>`;

    colSmall.innerHTML += `<img src="./img/${currentImage}" alt="ratchet-piccolo" class="small-images ${bordoImg}">`;
   

}

// indice per gestire le immagini 
let indexImage = 0;

// CLICK DOWN
iconaDownEl.addEventListener("click", function() {

    const imagesListAll = document.querySelectorAll(".img-container");
    const imagesSmallListAll = document.querySelectorAll(".small-images");

    imagesListAll[indexImage].classList.remove("visible");
    imagesSmallListAll[indexImage].classList.remove("bordo-selezione");

    indexImage++;

    if (indexImage > imagesListAll.length -1) {
        indexImage = 0;
    }

    imagesListAll[indexImage].classList.add("visible");
    imagesSmallListAll[indexImage].classList.add("bordo-selezione");
    

})

// CLICK UP
iconaUpEl.addEventListener("click", function() {

    const imagesListAll = document.querySelectorAll(".img-container");
    const imagesSmallListAll = document.querySelectorAll(".small-images");


    imagesListAll[indexImage].classList.remove("visible");
    imagesSmallListAll[indexImage].classList.remove("bordo-selezione");


    indexImage--;

    if (indexImage < 0) {
        indexImage = imagesListAll.length -1;
    }

    imagesListAll[indexImage].classList.add("visible");
    imagesSmallListAll[indexImage].classList.add("bordo-selezione");

})