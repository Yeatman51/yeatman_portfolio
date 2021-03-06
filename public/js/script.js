
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

// const images = document.getElementsByClassName("gd-gallery-img");

// const imgOptions = {};
// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) return;

//     const img = entry.target;
//     imgObserver.unobserve(entry.target);
//   });
// }, imgOptions);

const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }

  img.src = src;
}

const imgOptions = {
  threshold: 1,
  rootMargin: "0% 0% -5% 0%"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions);

images.forEach(image =>  {
  imgObserver.observe(image);
});