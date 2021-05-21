
// const images = document.querySelectorAll("img");

// const imgObserver = {
//     root: document.querySelector('#scrollArea'),
//     rootMargin: '0px',
//     threshold: 1.0
//   }

// IntersectionObserver((entries, imgObserver) => {
//     entries.forEach(entry => {
//         const image = entry.target;
//         console.log(image);
//     });
// });

const images = document.getElementsByClassName("gd-gallery-img");

const imgOptions = {};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const img = entry.target;
    imgObserver.unobserve(entry.target);
  });
}, imgOptions);
