window.addEventListener('resize', function() {
    location.reload(); // Recharge la page lorsque la fenêtre est redimensionnée
});
  
  
  //bouton lire plus/lire moins
const boutonPlus = document.querySelector('.Boutonplus');
const presentation = document.querySelector('.presentation');
const billet1 = document.querySelector('.billet1');
const billet2 = document.querySelector('.billet2');

let contenuCache = true;

boutonPlus.addEventListener('click', function() {
    if (contenuCache) {
        presentation.style.display = 'block';
        boutonPlus.textContent = 'Lire moins';
    } else {
        presentation.style.display = 'none';
        boutonPlus.textContent = 'Lire plus';
    }
    contenuCache = !contenuCache;
});

    //menu burgeur
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var burgerIcon = document.querySelector(".burger-icon");

openBtn.onclick = function() {
    sidenav.classList.add("active");
    burgerIcon.style.display = "none";
    closeBtn.style.display = "block";
};

closeBtn.onclick = function(event) {
    event.preventDefault();
    sidenav.classList.remove("active");
    burgerIcon.style.display = "block";
    closeBtn.style.display = "none";
};

    // billet
window.addEventListener('resize', function() {
    if (window.innerWidth <= 920) {
        document.querySelector('.billet').style.display = 'none';
        document.querySelector('.billetS').style.display = 'block';
    } else {
        document.querySelector('.billet').style.display = 'block';
        document.querySelector('.billetS').style.display = 'none';
    }
});

// Appeler la fonction une fois au chargement de la page pour vérifier la taille initiale de la fenêtre
if (window.innerWidth <= 920) {
    document.querySelector('.billet').style.display = 'none';
    document.querySelector('.billetS').style.display = 'block';
} else {
    document.querySelector('.billet').style.display = 'block';
    document.querySelector('.billetS').style.display = 'none';
}



    //Carousel
// Fonction pour ajuster la taille des images lorsque la fenêtre est redimensionnée
function ajusterTailleImages() {
    const largeurFenetre = window.innerWidth;
    // Réduire la taille des images si la largeur de la fenêtre est inférieure à un certain seuil
    const tailleImage = largeurFenetre < 600 ? '50%' : '100%';
    billet1.style.width = tailleImage;
    billet2.style.width = tailleImage;
}

// Appeler la fonction d'ajustement de taille des images lorsque la fenêtre est redimensionnée
window.addEventListener('resize', ajusterTailleImages);

// Appeler la fonction une première fois pour ajuster la taille des images au chargement de la page
ajusterTailleImages();

const imgContainer = document.querySelector('.img-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;
const imgCount = document.querySelectorAll('.img-container img').length;
const imgWidth = document.querySelector('.img-container img').clientWidth;


nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= imgCount) {
        counter = 0;
    }
    imgContainer.style.transform = `translateX(${-imgWidth * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = imgCount - 1;
    }
    imgContainer.style.transform = `translateX(${-imgWidth * counter}px)`;
});

