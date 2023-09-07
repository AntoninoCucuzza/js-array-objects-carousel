console.log('we');

/* 

Consegna:
Riprendiamo il live coding visto in classe un pó di tempo fá sul carosello di immagini e rifacciamolo, questa volta usando gli oggetti.
Potete prendere come riferimento il codice scritto insieme nel live, che troverete direttamente nella mia repository di github a questo link: [https://github.com/fabiopacifici/104_js/tree/main/live_slider]
Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto di un array di stringhe.

Bonus 0:
Non eramamo ancora a conoscenda di molti strumenti utili, come ad esempio le funzioni. É possibile fare refactoring del codice, pulendolo e creando quanche funzione che possa rendere tutto piú leggibile e pulito?

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

*/



const slides = [
    {
        title:'Spider-Man Miles Morales',
        img:'./assets/img/01.webp',
    },
    {
        title:'Ratchet & Clank: Rift Apart',
        img:'./assets/img/02.webp', 
    },
    {
        title:'Fortnite',
        img:'./assets/img/03.webp',
    },
    {
        title:'Stray',
        img:'./assets/img/04.webp',
    },
    {
        title:'Marvel Avengers',
        img:'./assets/img/05.webp',
    }
]

  
let activeSlide = 0;

const thumbsElement = document.querySelector('.thumbnails')
const sliderImagesEl = document.querySelector('.slider .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')


slides.forEach((slide, i) => {
    const slideMarkup = document.createElement('img')
    slideMarkup.src = `${slide.img}`
    slide.i = i
    //console.log(slide.i);
    if (slide.i == activeSlide) {
        slideMarkup.classList.add('active')
    }
    
    sliderImagesEl.append(slideMarkup)
});

slides.forEach((thumb, i) => {
    const thumbMarkup = document.createElement('img')
    thumbMarkup.classList.add('thumb')
    thumbMarkup.src = `${thumb.img}`
    thumb.i = i
    
    if (thumb.i == activeSlide) {
        thumbMarkup.classList.add('active')
    }
    
    thumbsElement.append(thumbMarkup)
});


const slidesImages = document.querySelectorAll('.slider .images > img')

// intercept click on the next icon 
nextEl.addEventListener('click', function(){
    console.log('cliccato su next');
  
    removeActive()
  
    if (activeSlide === slidesImages.length - 1) {
      activeSlide = 0
      // activeSlide = 5
    } else {
      // increment the activeSlide of 1
      activeSlide++
    }

    addActive() 
  
})


prevEl.addEventListener('click', function () {
    console.log('cliccato su prev');
    
    removeActive()
  
    if (activeSlide === 0) {
      activeSlide = slidesImages.length - 1
      // activeSlide = 5
    } else {
        // decrement the activeSlide of 1
        activeSlide--
    }

    addActive() 
    


})



function removeActive() {

    const currentThumb = document.querySelector('.thumbnails > img.active')
    currentThumb.classList.remove('active')

    const currentSlide = slidesImages[activeSlide]
    currentSlide.classList.remove('active')
}

function addActive() {

    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    nextThumb.classList.add('active')

    const nextSlide = slidesImages[activeSlide]
    nextSlide.classList.add('active')
}


