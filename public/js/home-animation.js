// home pg
gsap.fromTo(
    ".yeatman-logo",
    { opacity: 0, y: 100, scale: 0 },
    { opacity: 1, y: 0, scale: 1, duration: 2.0 }
);

gsap.fromTo(
    ".header-text",
    { opacity: 0, y: -100, scale: 0 },
    { opacity: 1, y: 0, scale: 1, delay: 1, duration: 2.0 }
);

// gsap.fromTo(
//     "nav",
//     { opacity: 0, x:50 },
//     { opacity: 1, x:0, delay: 2.0, duration: 1.0 }
// );