const video = document.getElementById('my-video');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const overlay = document.getElementById('overlay');

playBtn.addEventListener('click', () => {
  video.play();
  overlay.classList.add('fade-out');
});

video.addEventListener('ended', () => {
  overlay.classList.remove('fade-out');
});



///////////////////slider progress///////////////////////
const radioButtons = document.querySelectorAll('input[type=radio]');


const slideShow = () => {
 for(let i =0; i<radioButtons.length; i++){
   setInterval(() => {
     console.log()
   }, 3000)
 }
}


slideShow();



// function onEntry(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//       change.target.classList.add('element-show');
//     } else {
//       change.target.classList.remove('element-show');
//       // change.target.classList.add('element-show');
//     }
//   });
// }

// let options = {
//   threshold: [0.5] };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.main-festival__logo');
// let elements1 = document.querySelectorAll('.anime');
// let elements2 = document.querySelectorAll('.animation-botton');
// let elements3 = document.querySelectorAll('.anime2');

// for (let elm of elements) {
//   observer.observe(elm);
// }
// for (let elm of elements1) {
//   observer.observe(elm);
// }
// for (let elm of elements2) {
//   observer.observe(elm);
// }
// for (let elm of elements3) {
//   observer.observe(elm);
// }

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.main-festival__logo');
let elements1 = document.querySelectorAll('.anime');
let elements2 = document.querySelectorAll('.animation-botton');

for (let elm of elements) {
  observer.observe(elm);
}
for (let elm of elements1) {
  observer.observe(elm);
}
for (let elm of elements2) {
  observer.observe(elm);
}

// window.addEventListener('DOMContentLoaded', function() {
//   const container = document.querySelector('.container');
//   const cards = document.querySelector('.cards');
//   const cardWidth = document.querySelector('.card').offsetWidth;
//   const numCards = document.querySelectorAll('.card').length;
//   let currentCardIndex = 0;
//   let startX = 0;

//   function scrollToCard(index) {
//     cards.style.transform = `translateX(-${index * cardWidth}px)`;
//     currentCardIndex = index;
//   }

//   function handleScroll(scrollAmount) {
//     let newIndex = currentCardIndex + scrollAmount;

//     if (newIndex < 0) {
//       newIndex = numCards - 1;
//     } else if (newIndex >= numCards) {
//       newIndex = 0;
//     }

//     scrollToCard(newIndex);
//   }

//   function handleWheel(event) {
//     event.preventDefault();
//     const scrollAmount = event.deltaY > 0 ? 1 : -1;
//     handleScroll(scrollAmount);
//   }

//   // Удаление отдельных обработчиков событий для touchpad и колесика мыши
//   function handleMove(event) {
//     const moveAmount = event.clientX - startX;
//     const scrollAmount = moveAmount > 0 ? 1 : -1;
//     handleScroll(scrollAmount);
//   }

//   container.addEventListener('pointerdown', function(event) {
//     startX = event.clientX;
//     container.addEventListener('pointermove', handleMove);
//     container.addEventListener('pointerup', function() {
//       container.removeEventListener('pointermove', handleMove);
//     });
//   });
// });
// const track = document.querySelector('.slider--track');
// const slides = Array.from(document.querySelectorAll('.slide'));
// const slideWidth = slides[0].getBoundingClientRect().width;

// // Clone slides to create infinite scroll effect
// slides.forEach((slide, index) => {
//   const slideClone = slide.cloneNode(true);
//   slideClone.classList.add('clone');
//   track.appendChild(slideClone);
// });

// // Position the slides side by side
// track.style.transform = `translateX(${-slideWidth}px)`;

// // Function to handle infinite scrolling
// const scrollInfinite = (e) => {
//   if (e.deltaY > 0) {
//     track.style.transition = `transform 0.5s ease-in-out`;
//     track.style.transform = `translateX(${-slideWidth * 2}px)`;
//     track.addEventListener('transitionend', () => {
//       track.style.transition = 'none';
//       track.style.transform = `translateX(${-slideWidth}px)`;
//       track.appendChild(track.firstElementChild);
//     }, { once: true });
//   } else if (e.deltaY < 0) {
//     track.style.transition = `transform 0.5s ease-in-out`;
//     track.style.transform = `translateX(0)`;
//     track.addEventListener('transitionend', () => {
//       track.style.transition = 'none';
//       track.style.transform = `translateX(${-slideWidth}px)`;
//       track.insertBefore(track.lastElementChild, track.firstElementChild);
//     }, { once: true });
//   }
// };

// // Add event listener for scrolling
// track.addEventListener('wheel', scrollInfinite);



